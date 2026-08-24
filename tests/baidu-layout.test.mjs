import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(join(repositoryRoot, path), 'utf8')

const userscript = read('Search-Engine-Cleaner.user.js')
const commonStyle = read('newcss/baiduCommonStyle.less')
const onePageStyle = read('newcss/baiduOnePageStyle.less')
const twoPageStyle = read('newcss/baiduTwoPageStyle.less')

test('Baidu header and navigation share a centered responsive shell', () => {
  assert.match(commonStyle, /--ac-baidu-search-width:/)
  assert.match(commonStyle, /--ac-baidu-search-width:\s*max\(220px,\s*min\(900px/)
  assert.match(commonStyle, /--ac-baidu-card-width:/)
  assert.match(commonStyle, /calc\(100vw\s*-\s*600px\)/)
  assert.match(commonStyle, /body\[baidu\]\.pc-fresh-wrapper-con\s*\{[^}]*width:\s*100%\s*!important/s)
  assert.match(commonStyle, /grid-template-columns:/)
  assert.match(commonStyle, /\[tpl=['"]app\/head-tab['"]\]/)
  assert.match(commonStyle, /padding-inline:/)
  assert.match(commonStyle, /#result_logo\s*\{[^}]*position:\s*absolute/s)
  assert.match(commonStyle, /#head #chat-input-main\s*\{[^}]*width:\s*100%/s)
  assert.match(commonStyle, /#wrapper #rs table\s*\{[^}]*width:\s*100%/s)

  assert.doesNotMatch(onePageStyle, /margin-left:\s*-31vw/)
  assert.doesNotMatch(onePageStyle, /translateX\(45px\)/)
  assert.doesNotMatch(onePageStyle, /margin-left:\s*10vw/)
  assert.doesNotMatch(onePageStyle, /min-resolution:|max-resolution:/)
})

test('single and multi-column layouts use explicit grid tracks without horizontal overflow', () => {
  for (const style of [onePageStyle, twoPageStyle]) {
    assert.match(style, /display:\s*grid/)
    assert.match(style, /grid-template-columns:/)
    assert.match(style, /padding-inline:\s*0\s*!important/)
    assert.match(style, /box-sizing:\s*border-box/)
  }

  assert.match(onePageStyle, /#content_left[^{]*\{[^}]*grid-column:\s*2/s)
  assert.match(twoPageStyle, /#content_left[^{]*\{[^}]*grid-column:\s*2/s)
  assert.match(onePageStyle, /--ac-baidu-card-width:\s*100%/)
  assert.match(twoPageStyle, /--ac-baidu-card-width:\s*100%/)
  assert.match(twoPageStyle, /grid-template-columns:\s*repeat\(var\(--ac-search-layout-columns\),\s*minmax\(0,\s*1fr\)\)/)
  assert.match(twoPageStyle, /grid-auto-rows:\s*max-content/)
  assert.match(twoPageStyle, /align-items:\s*start/)
  assert.match(twoPageStyle, /height:\s*auto;[\s\S]*overflow:\s*hidden/)
  assert.match(twoPageStyle, /\.c-span24[\s\S]*min-width:\s*0/)
  assert.match(twoPageStyle, /> \.result h3\.t,[\s\S]*> \.c-container h3\[class\*='title'\][^{]*\{[^}]*width:\s*100%\s*!important[^}]*margin:\s*0 0 10px/s)
  assert.match(commonStyle, /\[class\*=['"]title-box_['"]\][\s\S]*display:\s*flex/s)
  assert.match(commonStyle, /\[class\*=['"]title-box_['"]\][\s\S]*flex-wrap:\s*wrap/s)
  assert.match(commonStyle, /prefix-icon_pJvKe[\s\S]*margin:\s*0 4px 0 0\s*!important/s)
  assert.match(commonStyle, /front-icon_7wpfB[\s\S]*padding:\s*0\s*!important/s)
  assert.doesNotMatch(commonStyle, /h3\[class\*=['"]title['"]\][^{]*\{[^}]*width:\s*calc\(100%\s*\+\s*28px\)/s)
  assert.match(commonStyle, /h3\[class\*=['"]title['"]\][^{]*\{[^}]*width:\s*100%\s*!important/s)
  assert.match(twoPageStyle, /\[class\*='summary'\],[\s\S]*\[class\*='source'\][^{]*\{[^}]*max-width:\s*100%[^}]*overflow-wrap:\s*anywhere/s)
  assert.match(onePageStyle, /tpl=['"]app\/search-tool['"][^{]*\{[^}]*grid-row:\s*1/s)
  assert.match(onePageStyle, /#content_left[^{]*\{[^}]*grid-row:\s*2/s)
  assert.match(onePageStyle, /tpl=['"]app\/rs['"][^{]*\{[^}]*grid-row:\s*3/s)
  assert.match(twoPageStyle, /tpl=['"]app\/search-tool['"][^{]*\{[^}]*grid-row:\s*1/s)
  assert.match(twoPageStyle, /#content_left[^{]*\{[^}]*grid-row:\s*2/s)
  assert.match(onePageStyle, /\.pc-fresh-wrapper-con\.showRight\s*\{[^}]*100vw/s)
  assert.match(onePageStyle, /c-group-wrapper\s*\{[^}]*min-width:\s*0/s)
})

test('Baidu academic keeps a centered compatibility layout', () => {
  assert.match(onePageStyle, /body\[baidu_xueshu\]\s*\{/)
  assert.match(onePageStyle, /body\[baidu_xueshu\][\s\S]*#wrapper #content_left[\s\S]*width:\s*var\(--ac-baidu-results-width\)/)
})

test('three and four column modes account for their column gaps', () => {
  assert.match(userscript, /const columns = mode === 4 \? 3 : 4/)
  assert.match(userscript, /grid-template-columns:\s*repeat\(\$\{columns\},\s*minmax\(0,\s*1fr\)\)/)
  assert.match(userscript, /body\[baidu\]\[ac-layout-mode='\$\{mode\}'\]\.pc-fresh-wrapper-con\{--ac-search-layout-columns:\$\{columns\} !important;--ac-baidu-multi-results-width:/)
  assert.match(read('newcss/baiduThreePageStyle.less'), /body\[baidu\]\[ac-layout-mode='4'\][\s\S]*repeat\(3,\s*minmax\(0,\s*1fr\)\)/)
  assert.match(read('newcss/baiduFourPageStyle.less'), /body\[baidu\]\[ac-layout-mode='5'\][\s\S]*repeat\(4,\s*minmax\(0,\s*1fr\)\)/)
  assert.match(twoPageStyle, /grid-column:\s*1\s*\/\s*-1/)
  assert.match(twoPageStyle, /> \.result-op,[\s\S]*> \.c-group-wrapper,[\s\S]*> \.c-container:not\(\[tpl=['"]www_index['"]\]\):not\(\[tpl=['"]www_normal['"]\]\)[^{]*\{[^}]*grid-column:\s*1\s*\/\s*-1/s)
  assert.doesNotMatch(userscript, /repeat\(3,\s*33\.3%\)/)
  assert.doesNotMatch(userscript, /repeat\(4,\s*25%\)/)
})

test('Baidu settings button stays in the native account row', () => {
  assert.match(userscript, /<button type=['"]button['"] class=['"]myuserconfig['"]/)
  assert.match(userscript, /body\[baidu\] #u #myuser\s*\{[^}]*position:\s*static\s*!important/s)
  assert.match(userscript, /body\[baidu\] #u\s*\{[^}]*align-items:\s*center\s*!important/s)
  assert.doesNotMatch(userscript, /body\[baidu\] #u #myuser\s*\{[^}]*position:\s*fixed/s)
  assert.doesNotMatch(userscript, /body\[baidu\] #u #myuser\s*\{[^}]*top:\s*52px/s)
})

test('Baidu encyclopedia cover cards stay inside the result shell', () => {
  assert.match(commonStyle, /\[tpl=['"]sg_kg_entity_san['"]\]/)
  assert.match(commonStyle, /\.sc-cover-card\s*\{[^}]*width:\s*100%\s*!important[^}]*max-width:\s*100%\s*!important[^}]*box-sizing:\s*border-box\s*!important/s)
  assert.match(commonStyle, /\[tpl=['"]sg_kg_entity_san['"][\s\S]*overflow:\s*hidden/)
  assert.match(commonStyle, /\[tpl=['"]sg_kg_entity_san['"][\s\S]*\.cos-col\s*\{[^}]*min-width:\s*0/s)
})

test('Baidu AI summary cards keep their inner border within the result shell', () => {
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"]\]/)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*overflow:\s*hidden/)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*\[class\*=['"]card-border_['"][\s\S]*\{[^}]*width:\s*100%\s*!important[^}]*max-width:\s*100%\s*!important[^}]*box-sizing:\s*border-box\s*!important/s)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*\[class\*=['"]content-container_['"]/)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*\[class\*=['"]content-folded_['"]/)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*\.cosd-fold-switch-mask_7l3O3/)
  assert.match(commonStyle, /\[tpl=['"]new_baikan_index['"][\s\S]*max-width:\s*100%\s*!important/)
})

test('Less cache is invalidated by userscript version', () => {
  assert.match(userscript, /__AC\.RenderCSS__['"]\s*\+\s*GM_info\.script\.version\s*\+\s*['"]:/)
})

test('result-card transitions cannot animate layout dimensions', () => {
  assert.doesNotMatch(commonStyle, /transition:\s*all\b/)
})
