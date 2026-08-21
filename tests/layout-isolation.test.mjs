import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')
const source = read('Search-Engine-Cleaner.user.js')

const engines = ['baidu', 'google', 'bing', 'duck', 'haosou']
const expectedSuffixes = {
  0: [],
  1: ['Common'],
  2: ['Common', 'OnePage'],
  3: ['Common', 'TwoPage'],
  4: ['Common', 'ThreePage'],
  5: ['Common', 'FourPage'],
}

const layoutPlanSource = source.match(/const getLayoutStylePlan = ([\s\S]*?)\r?\n  const MyApi/)?.[1]?.trim()
assert.ok(layoutPlanSource, 'getLayoutStylePlan should remain extractable from the userscript')
const getLayoutStylePlan = Function(`"use strict"; return (${layoutPlanSource})`)()

test('layout selection is explicit and mutually exclusive for every engine/mode', () => {
  assert.doesNotMatch(source, /adsStyleMode\s*>=\s*[1234]/)
  assert.match(source, /cssAutoInsert\.add\("layoutStyle", CONST\.adsCSSList\.layoutStyle\)/)
  assert.doesNotMatch(source, /cssAutoInsert\.add\("(?:leftCommonStyle|onePageStyle|twoPageStyle|multiPageStyle)"/)
  assert.doesNotMatch(source, /if \(!this\.adsCSSList\.(?:leftCommonStyle|onePageStyle|twoPageStyle)\)/)

  for (const engine of engines) {
    for (const [mode, suffixes] of Object.entries(expectedSuffixes)) {
      const expectedNames = suffixes.map(suffix => `${engine}${suffix}Style`)
      const actualNames = getLayoutStylePlan(engine, mode)
      assert.deepEqual(actualNames, expectedNames, `${engine} mode ${mode} should select only its exact resources`)
      assert.equal(new Set(actualNames).size, actualNames.length, `${engine} mode ${mode} should not duplicate resources`)
      assert.equal(actualNames.every(name => name.startsWith(engine)), true, `${engine} mode ${mode} leaked another engine`)
      for (const name of actualNames) {
        assert.equal(existsSync(join(repositoryRoot, 'newcss', `${name}.less`)), true, `${name} should exist`)
      }
      if (mode === '4' || mode === '5') assert.equal(actualNames.some(name => name.includes('TwoPage')), false)
    }
  }

  assert.deepEqual(getLayoutStylePlan('baidu_xueshu', 5), getLayoutStylePlan('baidu', 5))
  assert.deepEqual(getLayoutStylePlan('google_scholar', 5), getLayoutStylePlan('google', 5))
  assert.deepEqual(getLayoutStylePlan('unknown', 3), [])
  assert.match(source, /const canonicalSite = \{ baidu_xueshu: 'baidu', google_scholar: 'google' \}\[activeSite\]/)
})

test('layout mode normalization is bounded, integral, and stateless', () => {
  const normalizedModes = new Map([
    [undefined, 0],
    ['', 0],
    ['invalid', 0],
    [-1, 0],
    [2.9, 2],
    ['4.8', 4],
    [6, 5],
    [Number.POSITIVE_INFINITY, 5],
  ])

  for (const [input, expectedMode] of normalizedModes) {
    const expectedNames = expectedSuffixes[expectedMode].map(suffix => `google${suffix}Style`)
    assert.deepEqual(getLayoutStylePlan('google', input), expectedNames, `mode ${String(input)} should normalize to ${expectedMode}`)
  }

  for (const engine of engines) {
    for (const mode of [5, 2, 0, 4, 1, 3]) {
      const expectedNames = expectedSuffixes[mode].map(suffix => `${engine}${suffix}Style`)
      assert.deepEqual(getLayoutStylePlan(engine, mode), expectedNames, `${engine} retained resources from a previous mode`)
    }
  }
})

test('layout cache is replaced instead of inheriting a previous mode', () => {
  assert.match(source, /const nextCSSList = \{ \.\.\.this\.adsCSSList, layoutStyle: '' \}/)
  assert.match(source, /const layoutPlan = this\.curConfig\.adsStyleEnable/)
  assert.match(source, /if \(mode === 4 \|\| mode === 5\) layoutParts\.push\(this\.getMultiPageStyle\(mode\)\)/)
  assert.match(source, /CONST\.cssAutoInsert\.clear\(\)/)
})

test('feature CSS uses the active engine scope', () => {
  assert.match(source, /const siteScope = `body\[\$\{activeSite\}\]`/)
  assert.doesNotMatch(source, /const bgCSS = `body\{/)
  assert.doesNotMatch(source, /const baseCSS = '\*\[data-favicon-t\]::before/)
  assert.doesNotMatch(source, /add\("counterStyle", "\.AC-CounterT/)
  assert.match(source, /\$\{siteScope\} \*\[data-favicon-t\]::before/)
  assert.match(source, /\$\{siteScope\} \.AC-CounterT/)
  assert.match(source, /const bgCSS = `\$\{siteScope\}\{background-image:/)
  assert.doesNotMatch(source, /const bgCSS = `[^`]*(?:position:relative|min-height:100vh|z-index:-1)/)
})

test('Google pagination keeps one result root and strips duplicate container IDs', () => {
  assert.match(source, /pageElement: \(doc\) => \{/)
  assert.match(source, /const root = doc\?\.querySelector\?\.\('#rso, \[data-micp-id="rso"\]'\)/)
  assert.match(source, /if \(id && \(id === 'rso' \|\| id === 'center_col' \|\| usedIds\.has\(id\)\)\)/)
  assert.match(source, /node\.classList\.add\('ac-google-page-result'\)/)
  assert.match(source, /prepareInsertedPageLayout: function \(pageElems, target\)/)
  assert.match(source, /target\.setAttribute\('two-father', '1'\)/)
  assert.match(source, /HT_insert: \["css;#rso, \[data-micp-id='rso'\]", 2\]/)
  assert.doesNotMatch(source, /pageElement:\s*"[^"\n]*id\(['"]rso['"]\)/)
})

test('new multi-column resources make separators span the active grid', () => {
  for (const engine of engines) {
    for (const suffix of ['Three', 'Four']) {
      const style = read(`newcss/${engine}${suffix}PageStyle.less`)
      const mode = suffix === 'Three' ? 4 : 5
      assert.match(style, new RegExp(`body\\[${engine}\\]\\[ac-layout-mode='${mode}'\\]`))
      assert.match(style, /(?:\.AC\.sp-separator|\.sp-separator\.AC)[\s\S]*grid-column:\s*1\s*\/\s*-1/)
      assert.match(style, /min-width:\s*0/)
    }
  }
})

test('Google column layouts target the actual #rso grid root', () => {
  for (const path of [
    'newcss/googleTwoPageStyle.less',
    'newcss/googleThreePageStyle.less',
    'newcss/googleFourPageStyle.less',
  ]) {
    const style = read(path)
    assert.match(style, /#rso\[two-father\]/, `${path} should target #rso when it owns two-father`)
  }
  for (const path of [
    'newcss/googleThreePageStyle.less',
    'newcss/googleFourPageStyle.less',
  ]) {
    const style = read(path)
    assert.match(style, /#rso\[two-father\],[\s\S]*display:\s*grid/)
    assert.match(style, /#rso\[two-father\]\s*>\s*\.MjjYud/)
  }
})
