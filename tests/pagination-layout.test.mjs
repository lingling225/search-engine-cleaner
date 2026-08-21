import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')
const source = read('Search-Engine-Cleaner.user.js')
const engines = ['baidu', 'google', 'bing', 'duck', 'haosou']

test('Google pagination resolves both supported result roots and keeps appended entries identifiable', () => {
  assert.match(source, /querySelector\?\.\('#rso, \[data-micp-id="rso"\]'\)/)
  assert.match(source, /HT_insert: \["css;#rso, \[data-micp-id='rso'\]", 2\]/)
  assert.match(source, /node\.dataset\.acPage = String\(pageNum\)/)
  assert.match(source, /node\.classList\.add\('ac-google-page-result'\)/)
  assert.match(source, /target\.setAttribute\('two-father', '1'\)/)
  assert.match(source, /card\.setAttribute\('two-child', '1'\)/)
})

test('Google prepares page layout before it appends fetched entries', () => {
  const prepareIndex = source.indexOf('ShowPager.prepareInsertedPageLayout(pageElems, toElement)')
  const appendIndex = source.indexOf('toElement.appendChild(insertPager)', prepareIndex)

  assert.ok(prepareIndex >= 0, 'inserted Google entries should receive immediate layout markers')
  assert.ok(appendIndex > prepareIndex, 'layout markers must exist before a page becomes visible')
})

test('pagination navigation replacement chooses the relevant navigation instead of requiring equal selector counts', () => {
  assert.match(source, /replacePagerNavigation: function \(pager, newBody\)/)
  assert.match(source, /const currentNav = current\.find\(hasNextLink\) \|\| current\.at\(-1\)/)
  assert.match(source, /const fetchedNav = fetched\.find\(hasNextLink\) \|\| fetched\.at\(-1\)/)
  assert.match(source, /currentNav\.replaceWith\(fetchedNav\)/)
  assert.match(source, /currentNav\.remove\(\)/)
  assert.doesNotMatch(source, /oriE\.length === repE\.length/)
})

test('DuckDuckGo pagination attempts a load in every layout mode and waits for a DOM result', () => {
  assert.match(source, /const node = document\.querySelector\("#links \.result--more a, #more-results, \[data-testid='more-results'\]"\)/)
  assert.match(source, /const beforeCount = document\.querySelectorAll\("#react-layout li, #links \.result"\)\.length/)
  assert.match(source, /const observer = new MutationObserver/)
  assert.match(source, /node\.click\(\)/)
  assert.doesNotMatch(source, /needManualLoad/)
})

test('Baidu and 360 pagination selectors keep only result-list entries across page variants', () => {
  assert.match(source, /pageElement: "css;div#content_left > \.c-container, div#content_left > \.result, div#content_left > article"/)
  assert.doesNotMatch(source, /pageElement:\s*"css;div#content_left > \*"/)
  assert.match(source, /ul\[contains\(concat\(' ', normalize-space\(@class\), ' '\), ' result '\)\]\/li/)
  assert.match(source, /HT_insert: \["\/\/div\[@id='container'\]\/\/ul\[contains\(concat\(' ', normalize-space\(@class\), ' '\), ' result '\)\]", 2\]/)
})

test('five engines keep automatic-page separators spanning every grid layout', () => {
  for (const engine of engines) {
    for (const [mode, suffix] of [[3, 'Two'], [4, 'Three'], [5, 'Four']]) {
      const style = read(`newcss/${engine}${suffix}PageStyle.less`)
      const scope = new RegExp(`body\\[${engine}\\]\\[ac-layout-mode='${mode}'\\][\\s\\S]*?(?:\\.AC\\.sp-separator|\\.sp-separator\\.AC)[\\s\\S]*?grid-column:\\s*1\\s*\\/\\s*-1`)
      assert.match(style, scope, `${engine} mode ${mode} separator should span the result grid`)
    }
  }
})
