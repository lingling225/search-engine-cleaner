import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')

const userscript = read('Search-Engine-Cleaner.user.js')
const bridge = read('ac-baidu/doc/docs/pages/custom/bridge.ts')
const configConsole = read('ac-baidu/doc/docs/pages/custom/ConfigConsole.vue')
const lessEditor = read('ac-baidu/doc/docs/pages/custom/components/LessCSSComp/index.vue')
const saveAlert = read('ac-baidu/doc/docs/pages/custom/components/SaveAlert.vue')
const eyeCareStyle = read('newcss/HuYanStyle.less')
const baiduStyle = read('newcss/baiduCommonStyle.less')
const googleTwoPageStyle = read('newcss/googleTwoPageStyle.less')

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

test('background and eye-care layers preserve card geometry', () => {
  assert.match(userscript, /body::before\{[^}]*z-index:\s*-1/s)
  assert.match(userscript, /background-repeat:\s*no-repeat/)
  assert.doesNotMatch(eyeCareStyle, /border-radius:\s*0(?:px)?/)
  assert.match(eyeCareStyle, /overflow-wrap:\s*anywhere/)
  assert.match(eyeCareStyle, /border-radius:\s*8px/)
  assert.match(eyeCareStyle, /border-radius:\s*5px/)
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
