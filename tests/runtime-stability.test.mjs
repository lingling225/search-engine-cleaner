import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')
const require = createRequire(import.meta.url)
const less = require(join(repositoryRoot, 'ac-baidu', 'doc', 'node_modules', 'less'))

const userscript = read('Search-Engine-Cleaner.user.js')
const bridge = read('ac-baidu/doc/docs/pages/custom/bridge.ts')
const configConsole = read('ac-baidu/doc/docs/pages/custom/ConfigConsole.vue')
const lessEditor = read('ac-baidu/doc/docs/pages/custom/components/LessCSSComp/index.vue')
const saveAlert = read('ac-baidu/doc/docs/pages/custom/components/SaveAlert.vue')
const eyeCareStyle = read('newcss/HuYanStyle.less')
const baiduStyle = read('newcss/baiduCommonStyle.less')
const googleTwoPageStyle = read('newcss/googleTwoPageStyle.less')
const engines = ['baidu', 'google', 'bing', 'duck', 'haosou']
const settingStylePaths = [
  'newcss/HuYanStyle.less',
  'newcss/BgAutoFit.less',
  'newcss/HuaHua-ACDrakMode.less',
]
const geometryProperty = /^(?:display|position|(?:min-|max-)?(?:width|height)|margin(?:-.+)?|padding(?:-.+)?|gap|row-gap|column-gap|grid(?:-.+)?|flex(?:-.+)?|float|clear|top|right|bottom|left|inset(?:-.+)?|transform|overflow(?:-.+)?|box-sizing|line-height|font(?:-size)?|white-space|word-break|overflow-wrap|border|border-(?:width|radius|top|right|bottom|left)(?:-.+)?)$/
const compiledStyleCache = new Map()

const splitSelectorList = (selectorList) => {
  const selectors = []
  let start = 0
  let depth = 0
  let quote = ''

  for (let index = 0; index < selectorList.length; index++) {
    const char = selectorList[index]
    if (quote) {
      if (char === quote && selectorList[index - 1] !== '\\') quote = ''
      continue
    }
    if (char === '"' || char === "'") quote = char
    else if (char === '(' || char === '[') depth++
    else if (char === ')' || char === ']') depth--
    else if (char === ',' && depth === 0) {
      selectors.push(selectorList.slice(start, index).trim())
      start = index + 1
    }
  }
  selectors.push(selectorList.slice(start).trim())
  return selectors.filter(Boolean)
}

const compileStyleRules = async (path) => {
  if (!compiledStyleCache.has(path)) {
    compiledStyleCache.set(path, less.render(read(path), { filename: join(repositoryRoot, path) }).then(({ css }) =>
      [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
        .map((match) => ({ selector: match[1].trim(), declarations: match[2].trim() }))
        .filter(({ declarations }) => declarations.includes(':'))))
  }
  return compiledStyleCache.get(path)
}

test('configuration previews are debounced and invalid Less stays out of the runtime', () => {
  assert.match(bridge, /previewTimers\s*=\s*new Map/)
  assert.match(bridge, /previewRevisions\s*=\s*new Map/)
  assert.match(bridge, /PREVIEW_DELAY_MS\s*=\s*\d+/)
  assert.match(bridge, /await less\.render\(/)
  assert.match(lessEditor, /validationRevision/)
  assert.match(saveAlert, /await less\.render\(/)
})

test('runtime style compilation keeps the last known good CSS', () => {
  assert.match(userscript, /renderLessSafely/)
  assert.match(userscript, /styleLoadRevision/)
  assert.match(userscript, /styleCacheRefreshTimers/)
  assert.match(userscript, /clearTimeout\(this\.loadAllStyleTimer\)/)
})

test('stored configuration and listeners isolate malformed JSON', () => {
  assert.match(userscript, /parseStoredConfig/)
  assert.match(userscript, /parseBlockRules/)
  assert.match(userscript, /忽略损坏的 SyncConfig/)
  assert.match(userscript, /忽略损坏的 ACBlockRules/)
})

test('plain host block rules do not become broad regular expressions', () => {
  assert.match(userscript, /createBlockRuleMatcher/)
  assert.match(userscript, /escapeRegExp/)
  assert.match(userscript, /replaceAll\("\*", "\.\*"\)/)
})

test('configuration search restores temporary visibility overrides', () => {
  assert.match(configConsole, /previousDisplay/)
  assert.match(configConsole, /delete hiddenContainer\.dataset\.searchReveal/)
})

test('favicon and counters reserve only their own inline space', () => {
  assert.doesNotMatch(userscript, /h3::before, h2::before/)
  assert.doesNotMatch(userscript, /ele\.style\s*=/)
  assert.match(userscript, /\.AC-CounterT\{[^}]*inline-flex[^}]*min-width:/s)
  assert.match(userscript, /\*\[data-favicon-t\]::before\{[^}]*flex:\s*0 0 auto/s)
})

test('baidu title rows stay stable when favicon and counters toggle', () => {
  assert.doesNotMatch(userscript, /CounterType:\s*"[^"]*a:first-child/)
  assert.match(userscript, /CounterType:\s*"[^"]*h3\[class~=t\]/)
  assert.ok((userscript.match(/CounterType:\s*"[^"]*h3\[class~=t\][^"]*"/g) || []).length >= 2)
  assert.match(userscript, /remove\("faviconStyle"\)/)
  assert.match(userscript, /remove\("counterStyle"\)/)
  assert.match(userscript, /removeAttribute\('data-favicon-t'\)/)
  assert.match(baiduStyle, /h3\.t,[\s\S]*h3\[class\*='title'\][^{]*\{[^}]*display:\s*flex\s*!important/s)
  assert.match(baiduStyle, /h3\.t,[\s\S]*h3\[class\*='title'\][^{]*\{[^}]*gap:\s*6px/s)
  assert.match(baiduStyle, /h3\[class\*='title'\][^{]*\{[^}]*width:\s*100%\s*!important/s)
  assert.match(baiduStyle, /h3\[class\*='title'\][^{]*\{[^}]*margin:\s*0\s*0\s*10px/s)
  assert.match(baiduStyle, /\[data-favicon-t\]::before\s*\{[^}]*margin-top:\s*3px/s)
  assert.match(baiduStyle, /> \.AC-CounterT\s*\{[^}]*margin-top:\s*1px\s*!important/s)
  assert.match(baiduStyle, /\[class\*='title-box_'\]\s*>\s*i\.c-icon\[class\*='front-icon_'\]\s*\{[^}]*display:\s*none\s*!important/s)
})

test('background image CSS is scoped without changing the page flow', () => {
  assert.match(userscript, /const bgCSS = `\$\{siteScope\}\{background-image:/)
  assert.match(userscript, /background-repeat:\s*no-repeat/)
  assert.doesNotMatch(userscript, /const bgCSS = `[^`]*(?:position:relative|min-height:100vh|z-index:-1)/)
  assert.doesNotMatch(eyeCareStyle, /^\s*(?:border(?:-radius|-width)?|line-height|min-width|overflow-wrap)\s*:/m)
})

test('original mode restores visual opacity without changing layout geometry', () => {
  const originalModeStyle = userscript.match(/const originalModeStyle = `([\s\S]*?)`\s*\n\s*CONST\.cssAutoInsert\.add\("originalModeStyle"/)?.[1] || ''
  assert.ok(originalModeStyle, 'original mode should have an explicit visual restore layer')
  for (const engine of engines) {
    assert.match(originalModeStyle, new RegExp(`\\$\\{originalModeScope\\}`))
    assert.match(originalModeStyle, new RegExp(`\\/\\* ${engine === 'haosou' ? '360' : engine === 'duck' ? 'DuckDuckGo' : engine[0].toUpperCase() + engine.slice(1)} \\*\\/`))
  }
  assert.match(userscript, /const originalModeScope = `\$\{siteScope\}\[ac-layout-mode='0'\]`/)
  assert.doesNotMatch(originalModeStyle, /display\s*:\s*grid|grid-template|(?:^|[;{\s])(width|height|min-width|max-width|margin|padding|position|transform)\s*:/)
})

test('eye-care, background-fit, and dark-mode styles are engine scoped', async () => {
  for (const path of settingStylePaths) {
    const rules = await compileStyleRules(path)
    const seenEngines = new Set()

    for (const { selector } of rules) {
      for (const oneSelector of splitSelectorList(selector)) {
        const scopes = [...oneSelector.matchAll(/body\[(baidu|google|bing|duck|haosou)\]/g)].map(match => match[1])
        assert.equal(scopes.length, 1, `${path} has an unscoped or cross-engine selector: ${oneSelector}`)
        seenEngines.add(scopes[0])
      }
    }

    assert.deepEqual([...seenEngines].sort(), [...engines].sort(), `${path} should explicitly cover all engines`)
  }
})

test('visual setting styles cannot change result-card geometry', async () => {
  for (const path of settingStylePaths) {
    const rules = await compileStyleRules(path)
    const offenders = []

    for (const { selector, declarations } of rules) {
      for (const declaration of declarations.split(';')) {
        const property = declaration.match(/^\s*([\w-]+)\s*:/)?.[1]?.toLowerCase()
        if (property && geometryProperty.test(property)) offenders.push(`${selector} -> ${property}`)
      }
    }

    assert.deepEqual(offenders, [], `${path} contains layout geometry:\n${offenders.join('\n')}`)
  }
})

test('google two-column cards fill the same grid row without trailing margins', () => {
  assert.match(googleTwoPageStyle, /grid-template-columns:\s*repeat\(var\(--ac-search-layout-columns, 2\),\s*minmax\(0,\s*1fr\)\)/)
  assert.match(googleTwoPageStyle, /body\[google\] #rso > \.MjjYud[\s\S]*?min-width:\s*0[\s\S]*?max-width:\s*100%/)
  assert.match(googleTwoPageStyle, /#rso\s*>\s*\[two-father\]\s*>\s*\.MjjYud,[\s\S]*?height:\s*100%/)
  assert.match(googleTwoPageStyle, /#rso\s*>\s*\[two-father\][^{]*\.A6K0A\s*>\s*\.Ww4FFb[\s\S]*?height:\s*100%[\s\S]*?margin-bottom:\s*0/)
  assert.match(googleTwoPageStyle, /#rso\s*>\s*\[two-father\]\s*>\s*\.MjjYud\s*>\s*\.A6K0A[\s\S]*?flex:\s*1 1 auto/)
  assert.match(googleTwoPageStyle, /\.MjjYud:not\(:has\(> \.A6K0A\)\):not\(:has\(> \.Ww4FFb\)\)[\s\S]*?display:\s*none\s*!important/)
  assert.match(googleTwoPageStyle, /#hdtb #hdtb-msb-vis\s*\{[^}]*width:\s*100%[^}]*margin-left:\s*0/s)
  assert.match(googleTwoPageStyle, /body\[google\] #hdtb \.Gcxb4e,[\s\S]*?width:\s*100%[\s\S]*?left:\s*0[\s\S]*?transform:\s*none/)
  assert.match(googleTwoPageStyle, /body\[google\] #hdtb \.EDblX\.JpOecb,[\s\S]*?width:\s*fit-content[\s\S]*?margin-inline:\s*auto/)
})
