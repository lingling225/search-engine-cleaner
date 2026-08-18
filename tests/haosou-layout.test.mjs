import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')

const userscript = read('Search-Engine-Cleaner.user.js')
const commonStyle = read('newcss/haosouCommonStyle.less')
const onePageStyle = read('newcss/haosouOnePageStyle.less')
const twoPageStyle = read('newcss/haosouTwoPageStyle.less')
const layoutStyles = `${commonStyle}\n${onePageStyle}\n${twoPageStyle}`

test('360 header and results use responsive shells without fixed visual offsets', () => {
  assert.match(commonStyle, /--ac-haosou-page-gutter:/)
  assert.match(commonStyle, /--ac-haosou-shell-width:/)
  assert.match(commonStyle, /--ac-haosou-single-shell-width:/)
  assert.match(commonStyle, /--ac-haosou-single-results-width:\s*min\(900px/)
  assert.match(commonStyle, /grid-template-columns:\s*132px\s+minmax\(0,\s*var\(--ac-haosou-single-shell-width\)\)/)
  assert.match(commonStyle, /body\[haosou\] #warper\s*\{[^}]*width:\s*100%\s*!important[^}]*min-width:\s*0\s*!important/s)
  assert.match(commonStyle, /body\[haosou\] #container\s*\{[^}]*float:\s*none\s*!important[^}]*left:\s*auto\s*!important[^}]*width:\s*var\(--ac-haosou-shell-width\)\s*!important[^}]*margin:\s*15px auto 0\s*!important/s)
  assert.match(commonStyle, /\.res-center-exp #warper > #container,[\s\S]*\.wide-version-result #warper > #container,[\s\S]*\.so-w1330 #warper > #container\s*\{[^}]*margin-left:\s*auto\s*!important[^}]*margin-right:\s*auto\s*!important/s)
  assert.match(commonStyle, /body\[haosou\] #container #main\s*\{[^}]*float:\s*none[^}]*width:\s*100%\s*!important/s)
  assert.match(commonStyle, /#g-hd-nav\s*\{[^}]*transform:\s*none\s*!important[^}]*margin:\s*0 auto/s)
  assert.match(commonStyle, /\.res-title\s*\{[^}]*display:\s*flex\s*!important[^}]*gap:\s*6px[^}]*flex-wrap:\s*nowrap/s)
  assert.match(commonStyle, /\.res-title\[data-favicon-t\]::before\s*\{[^}]*margin-top:\s*3px/s)
  assert.match(commonStyle, /\.res-title > \.AC-CounterT\s*\{[^}]*margin-top:\s*1px\s*!important/s)
  assert.match(onePageStyle, /--ac-haosou-shell-width:\s*var\(--ac-haosou-results-width\)/)
  assert.match(onePageStyle, /--ac-haosou-results-width:/)
  assert.match(onePageStyle, /#container\s*\{[^}]*display:\s*block[^}]*width:\s*var\(--ac-haosou-shell-width\)\s*!important[^}]*max-width:\s*calc\(100vw - 2 \* var\(--ac-haosou-page-gutter\)\)\s*!important/s)
  assert.match(onePageStyle, /#container\s*\{[^}]*padding-inline:\s*0\s*!important/s)
  assert.match(onePageStyle, /#container #main\s*\{[^}]*width:\s*100%\s*!important/s)

  assert.doesNotMatch(layoutStyles, /margin-left:\s*-(?:150|200)px/)
  assert.doesNotMatch(layoutStyles, /margin-right:\s*420px/)
  assert.doesNotMatch(layoutStyles, /left:\s*200px/)
  assert.doesNotMatch(layoutStyles, /translateX\(-68%\)/)
})

test('360 cards cannot exceed their result track or animate geometry', () => {
  assert.match(commonStyle, /\.result\s*>\s*li\s*\{[^}]*width:\s*100%[^}]*max-width:\s*100%[^}]*min-width:\s*0[^}]*box-sizing:\s*border-box/s)
  assert.match(commonStyle, /transition:\s*(?:border-color|box-shadow)/)
  assert.doesNotMatch(commonStyle, /transition:\s*all\b/)
  assert.doesNotMatch(layoutStyles, /#main\s*\{[^}]*width:\s*650px/s)
  assert.doesNotMatch(layoutStyles, /\.result[\s\S]*?>\s*li\s*\{[^}]*width:\s*770px/s)
})

test('360 right sidebar follows the global showRight state', () => {
  assert.match(commonStyle, /body\[haosou\]:not\(\.showRight\)\s+#side\s*\{[^}]*display:\s*none\s*!important/s)
  assert.match(onePageStyle, /body\[haosou\]\.showRight\s+#container\s*\{[^}]*grid-template-columns:/s)
  assert.match(twoPageStyle, /#side\s*\{[^}]*display:\s*none\s*!important/s)
})

test('360 multi-column layout targets the grid container and includes gaps', () => {
  assert.match(userscript, /MultiPageType:\s*"#container #main \.result"/)
  assert.match(twoPageStyle, /--ac-search-layout-columns:\s*2/)
  assert.match(twoPageStyle, /--ac-haosou-shell-width:\s*var\(--ac-haosou-grid-width\)/)
  assert.match(twoPageStyle, /#container\s*\{[^}]*width:\s*var\(--ac-haosou-grid-width\)\s*!important[^}]*margin:\s*15px auto 0\s*!important[^}]*padding-inline:\s*0\s*!important/s)
  assert.match(twoPageStyle, /\.res-center-exp #warper > #container,[\s\S]*\.wide-version-result #warper > #container,[\s\S]*\.so-w1330 #warper > #container\s*\{[^}]*width:\s*var\(--ac-haosou-grid-width\)\s*!important[^}]*margin-left:\s*auto\s*!important[^}]*margin-right:\s*auto\s*!important/s)
  assert.match(twoPageStyle, /grid-template-columns:\s*repeat\(var\(--ac-search-layout-columns\),\s*minmax\(0,\s*1fr\)\)/)
  assert.match(userscript, /body\[haosou\]\{--ac-search-layout-columns:\$\{columns\};--ac-haosou-grid-width:/)
  assert.match(twoPageStyle, /gap:\s*clamp\(/)
  assert.doesNotMatch(twoPageStyle, /repeat\(2,\s*50%\)/)
})

test('360 cleanup includes current recommendation modules', () => {
  assert.match(userscript, /safeRemoveAd\("#so_top"\)/)
  assert.match(userscript, /safeRemoveAd\("\.res-recommend-tag-cover"\)/)
})
