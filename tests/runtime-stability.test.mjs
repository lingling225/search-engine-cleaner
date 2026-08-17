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

test('background and eye-care layers preserve card geometry', () => {
  assert.match(userscript, /body::before\{[^}]*z-index:\s*-1/s)
  assert.match(userscript, /background-repeat:\s*no-repeat/)
  assert.doesNotMatch(eyeCareStyle, /border-radius:\s*0(?:px)?/)
  assert.match(eyeCareStyle, /overflow-wrap:\s*anywhere/)
  assert.match(eyeCareStyle, /border-radius:\s*8px/)
  assert.match(eyeCareStyle, /border-radius:\s*5px/)
})
