import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')

const userscript = read('Search-Engine-Cleaner.user.js')
const commonStyle = read('newcss/duckCommonStyle.less')
const onePageStyle = read('newcss/duckOnePageStyle.less')
const twoPageStyle = read('newcss/duckTwoPageStyle.less')
const layoutStyles = `${commonStyle}\n${onePageStyle}\n${twoPageStyle}`

test('DuckDuckGo uses responsive centered shells without fixed offsets', () => {
  assert.match(commonStyle, /--ac-duck-page-gutter:/)
  assert.match(commonStyle, /--ac-duck-results-width:/)
  assert.match(commonStyle, /--ac-duck-wide-results-width:/)
  assert.match(onePageStyle, /#web_content_wrapper #react-layout\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:/s)
  assert.match(twoPageStyle, /#web_content_wrapper #react-layout\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:/s)
  assert.match(onePageStyle, /#web_content_wrapper #react-layout > div:has\(\.react-results--main\)\s*\{[^}]*grid-column:\s*1\s*\/\s*-1[^}]*margin-left:\s*0\s*!important/s)
  assert.match(onePageStyle, /#web_content_wrapper #react-layout :is\(div,\s*section\):has\(\.react-results--main\)\s*\{[^}]*min-width:\s*0[^}]*margin-left:\s*0\s*!important/s)
  assert.match(onePageStyle, /section:has\(>\s*\.react-results--main\)\s*\{[^}]*margin-inline:\s*auto/s)
  assert.match(twoPageStyle, /#web_content_wrapper #react-layout > div:has\(\.react-results--main\)\s*\{[^}]*grid-column:\s*1\s*\/\s*-1[^}]*margin-left:\s*0\s*!important/s)
  assert.match(twoPageStyle, /#web_content_wrapper #react-layout :is\(div,\s*section\):has\(\.react-results--main\)\s*\{[^}]*min-width:\s*0[^}]*margin-left:\s*0\s*!important/s)

  assert.doesNotMatch(layoutStyles, /margin-left:\s*-150px/)
  assert.doesNotMatch(layoutStyles, /width:\s*500px/)
  assert.doesNotMatch(layoutStyles, /width:\s*80vw/)
})

test('DuckDuckGo cards and columns cannot exceed their result tracks', () => {
  assert.match(commonStyle, /#react-layout li\s*\{[^}]*width:\s*100%[^}]*max-width:\s*100%[^}]*min-width:\s*0[^}]*box-sizing:\s*border-box/s)
  assert.match(commonStyle, /--ac-search-layout-columns:\s*2/)
  assert.match(commonStyle, /transition:\s*border-color/)
  assert.doesNotMatch(commonStyle, /transition:\s*all\b/)

  assert.match(twoPageStyle, /grid-template-columns:\s*repeat\(var\(--ac-search-layout-columns\),\s*minmax\(0,\s*1fr\)\)/)
  assert.match(twoPageStyle, /gap:\s*var\(--ac-duck-column-gap\)/)
  assert.doesNotMatch(twoPageStyle, /repeat\(2,\s*50%\)/)
  assert.doesNotMatch(twoPageStyle, /margin-right:\s*15px/)
})

test('DuckDuckGo three and four column modes widen the result shell', () => {
  assert.match(userscript, /body\[duck\]\{--ac-search-layout-columns:\$\{columns\};--ac-duck-wide-results-width:/)
  assert.match(userscript, /columns === 3 \? 1440 : 1760/)
})
