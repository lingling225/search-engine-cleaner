import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const userscriptPath = join(repositoryRoot, 'Search-Engine-Cleaner.user.js')
const source = readFileSync(userscriptPath, 'utf8')
const metadata = source.slice(0, source.indexOf('// ==/UserScript==') + '// ==/UserScript=='.length)
const runtime = source.slice(metadata.length)

const metadataValues = (key) => [...metadata.matchAll(new RegExp(`^// @${key}\\s+(.+)$`, 'gm'))].map((match) => match[1].trim())
const globToRegExp = (pattern) => new RegExp(`^${pattern
  .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
  .replaceAll('*', '.*')}$`)
const includePatterns = metadataValues('include').map((pattern) => {
  if (pattern.startsWith('/') && pattern.endsWith('/')) return new RegExp(pattern.slice(1, -1))
  return globToRegExp(pattern)
})
const isIncluded = (url) => includePatterns.some((pattern) => pattern.test(url))
const engines = ['baidu', 'google', 'bing', 'duck', 'haosou']
const layoutResourceSuffixes = ['CommonStyle', 'OnePageStyle', 'TwoPageStyle', 'ThreePageStyle', 'FourPageStyle']
const expectedResourceNames = [
  ...engines.flatMap(engine => layoutResourceSuffixes.map(suffix => `${engine}${suffix}`)),
  'HuYanStyle',
  'BgAutoFit',
  'HuaHua-ACDrakMode',
  'baiduLiteStyle',
]

test('release metadata points to the maintained repository', () => {
  assert.deepEqual(metadataValues('name'), ['Search Engine Cleaner - 搜索增强'])
  assert.match(metadataValues('version')[0], /^\d+\.\d+\.\d+$/)

  const expectedScriptUrl = 'https://raw.githubusercontent.com/lingling225/search-engine-cleaner/main/Search-Engine-Cleaner.user.js'
  assert.deepEqual(metadataValues('downloadURL'), [expectedScriptUrl])
  assert.deepEqual(metadataValues('updateURL'), [expectedScriptUrl])
  assert.deepEqual(metadataValues('namespace'), ['https://github.com/lingling225/search-engine-cleaner'])
})

test('all five supported search engines remain matched', () => {
  const supportedPages = [
    'https://www.baidu.com/s?wd=test',
    'https://xueshu.baidu.com/s?wd=test',
    'https://www.google.com/search?q=test',
    'https://images.google.co.uk/search?q=test',
    'https://scholar.google.com/scholar?q=test',
    'https://www.bing.com/search?q=test',
    'https://duckduckgo.com/?q=test',
    'https://html.duckduckgo.com/html/?q=test',
    'https://www.so.com/s?q=test',
  ]

  for (const url of supportedPages) assert.equal(isIncluded(url), true, `${url} should be included`)
})

test('Google and DuckDuckGo host boundaries reject lookalike domains', () => {
  const rejectedPages = [
    'https://www.google.evil/search?q=test',
    'https://www.google.com.evil/search?q=test',
    'https://google.example.com/search?q=test',
    'https://notduckduckgo.com/?q=test',
    'https://duckduckgo.com.evil/?q=test',
  ]

  for (const url of rejectedPages) assert.equal(isIncluded(url), false, `${url} should be rejected`)
})

test('configuration bridge is only injected into the published console entry points', () => {
  const allowedPages = [
    'https://lingling225.github.io/search-engine-cleaner/pages/custom/',
    'https://lingling225.github.io/search-engine-cleaner/pages/custom/index.html',
  ]
  const rejectedPages = [
    'https://lingling225.github.io/search-engine-cleaner/',
    'https://lingling225.github.io/search-engine-cleaner/pages/custom/baidu/',
    'https://lingling225.github.io/search-engine-cleaner/pages/custom/index.html/extra',
    'https://lingling225.github.io.evil/search-engine-cleaner/pages/custom/',
  ]

  for (const url of allowedPages) assert.equal(isIncluded(url), true, `${url} should be included`)
  for (const url of rejectedPages) assert.equal(isIncluded(url), false, `${url} should be rejected`)
  assert.match(runtime, /location\.hostname === 'lingling225\.github\.io'/)
  assert.match(runtime, /\^\\\/search-engine-cleaner\\\/pages\\\/custom/)
})

test('every userscript resource is owned by this repository and exists locally', () => {
  const resources = metadataValues('resource')
  const version = metadataValues('version')[0]
  const parsedResources = []

  for (const resource of resources) {
    const match = resource.match(/^(\S+)\s+(https:\/\/raw\.githubusercontent\.com\/lingling225\/search-engine-cleaner\/main\/newcss\/([^/?#]+)\?v=([^&#]+))$/)
    assert.ok(match, `unexpected resource target: ${resource}`)
    const [, name, url, fileName, cacheVersion] = match
    assert.equal(fileName, `${name}.less`, `${name} should map to its same-named Less file`)
    assert.equal(existsSync(join(repositoryRoot, 'newcss', basename(fileName))), true, `${fileName} is missing`)
    assert.equal(cacheVersion, version, `${fileName} cache version should match the userscript version`)
    parsedResources.push({ name, url, fileName })
  }

  const names = parsedResources.map(({ name }) => name)
  const urls = parsedResources.map(({ url }) => url)
  assert.equal(resources.length, 29, 'the complete resource contract should contain 29 Less files')
  assert.equal(new Set(names).size, names.length, 'resource names must be unique')
  assert.equal(new Set(urls).size, urls.length, 'resource URLs must be unique')
  assert.deepEqual([...names].sort(), [...expectedResourceNames].sort(), 'metadata resource names should be complete')

  const localLessFiles = readdirSync(join(repositoryRoot, 'newcss'))
    .filter(fileName => fileName.endsWith('.less'))
    .sort()
  assert.deepEqual(localLessFiles, expectedResourceNames.map(name => `${name}.less`).sort(), 'every shipped Less file should be declared once')
})

test('original project is attribution only and not a runtime dependency', () => {
  assert.match(metadata, /^\/\/ @note\s+Source: https:\/\/github\.com\/langren1353\/GM_script/m)
  assert.doesNotMatch(runtime, /langren1353|ac-baidu\.github\.io|gitee\.io/i)
})

test('configuration and remote Less security boundaries remain present', () => {
  assert.match(runtime, /allowedBridgeKeys = new Set\(\[\.\.\.bridgeSectionKeys\.keys\(\), 'ACBlockRules'\]\)/)
  assert.match(runtime, /allowedKeys = new Set\(Object\.keys\(defaults\)\)/)
  assert.match(runtime, /parsedUrl\.protocol !== 'https:'/)
  assert.match(runtime, /hostname\.startsWith\('::ffff:'\)/)
  assert.match(runtime, /anonymous: true/)
  assert.match(runtime, /finalUrl\.origin !== parsedUrl\.origin/)
  assert.match(runtime, /responseText\.length > 1024 \* 1024/)
})

test('automatic pagination keeps fetched markup inert and same-origin', () => {
  assert.match(runtime, /nextUrl\.origin !== location\.origin/)
  assert.match(runtime, /finalUrl\.origin !== location\.origin/)
  assert.match(runtime, /querySelectorAll\('script, iframe, object, embed, base, meta\[http-equiv="refresh"\], link\[rel="import"\]'\)/)
  assert.match(runtime, /attributeName\.startsWith\('on'\) \|\| attributeName === 'srcdoc'/)
  assert.match(runtime, /\^\\s\*\(\?:javascript\|vbscript\):\/i/)
  assert.doesNotMatch(runtime, /response\.responseXML\.scripts|script\.textContent|eval\(response/)
})
