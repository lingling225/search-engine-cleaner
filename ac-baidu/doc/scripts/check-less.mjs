import { readFile, readdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import less from 'less'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(scriptDir, '..', '..', '..')
const stylesRoot = join(repositoryRoot, 'newcss')
const styleFiles = (await readdir(stylesRoot))
  .filter((fileName) => fileName.endsWith('.less'))
  .sort()

await Promise.all(styleFiles.map(async (fileName) => {
  const filePath = join(stylesRoot, fileName)
  await less.render(await readFile(filePath, 'utf8'), { filename: filePath })
}))

console.log(`Compiled ${styleFiles.length} Less resources.`)
