import { readFileSync } from 'fs'
import { extname } from 'path'
import { createHash } from 'crypto'

const base64 = (filename, data) => {
  const type = filename.endsWith('.svg') ? 'svg+xml' : extname(filename).slice(1) || 'png'
  return `data:image/${type};base64,${data.toString('base64')}`
}

export function getCacheKey(_fileData, filename) {
  return createHash('md5').update(filename).digest('hex')
}
export function process(sourceText, filename) {
  return `module.exports = ${JSON.stringify(base64(filename, readFileSync(filename)))};`
}
