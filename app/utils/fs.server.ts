import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const { readdir, readFile } = fse

const contentPath = '../content'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const readContentDir = async (contentDir: string) => {
  const content = join(__dirname, contentPath, contentDir)
  const data = await readdir(content)

  return data
}

export const readContentFile = async (contentDir: string, file: string) => {
  const content = join(__dirname, contentPath, contentDir, file)
  const data = await readFile(content, 'utf8')

  return data.toString()
}
