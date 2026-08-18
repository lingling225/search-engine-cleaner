import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')

const commonStyle = read('newcss/bingCommonStyle.less')
const onePageStyle = read('newcss/bingOnePageStyle.less')
const twoPageStyle = read('newcss/bingTwoPageStyle.less')
const layoutStyles = `${commonStyle}\n${onePageStyle}\n${twoPageStyle}`

test('Bing keeps the native account row out of the centered result shell', () => {
  for (const style of [onePageStyle, twoPageStyle]) {
    assert.match(style, /body #b_header\s*\{[^}]*width:\s*100%[^}]*max-width:\s*none[^}]*margin:\s*0[^}]*box-sizing:\s*border-box/s)
    assert.match(style, /#b_header > #id_h\s*\{[^}]*position:\s*absolute[^}]*right:\s*clamp\([^}]*display:\s*flex[^}]*white-space:\s*nowrap/s)
    assert.match(style, /#b_header > #id_h #myuser\s*\{[^}]*flex:\s*0 0 auto[^}]*margin:\s*0/s)
  }

  assert.match(commonStyle, /--ac-bing-header-width:\s*min\(1000px,\s*max\(680px,\s*calc\(100vw - 640px\)\),\s*calc\(100vw - 2 \* var\(--ac-bing-page-gutter\)\)\)/)
  assert.match(commonStyle, /#b_header \.b_scopebar\s*\{[^}]*width:\s*100%\s*!important[^}]*margin:\s*0\s*!important[^}]*padding-left:\s*0\s*!important/s)
  assert.match(commonStyle, /#b_header #sb_form\s*\{[^}]*display:\s*block[^}]*width:\s*var\(--ac-bing-header-width\)[^}]*margin-right:\s*auto[^}]*margin-left:\s*auto/s)
  assert.match(commonStyle, /#b_header \.b_scopebar > ul\s*\{[^}]*width:\s*var\(--ac-bing-header-width\)[^}]*margin-right:\s*auto[^}]*margin-left:\s*auto/s)
  assert.match(onePageStyle, /#b_header #sb_form\s*\{[^}]*margin-left:\s*auto[^}]*margin-right:\s*auto/s)
  assert.doesNotMatch(layoutStyles, /body #b_header\s*\{[^}]*width:\s*72vw/s)
  assert.doesNotMatch(onePageStyle, /#b_header #sb_form\s*\{[^}]*margin-left:\s*10vw/s)
})
