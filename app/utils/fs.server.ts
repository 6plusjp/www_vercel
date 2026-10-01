import fse from 'fs-extra'
import { join } from 'path'

const { readdir, readFile } = fse

const contentPath = join(process.cwd(), 'content')

export const readContentDir = async (contentDir: string) => {
  const content = join(contentPath, contentDir)
  const data = await readdir(content)

  return data
}

export const readContentFile = async (contentDir: string, file: string) => {
  const content = join(contentPath, contentDir, file)
  const data = await readFile(content, 'utf8')

  return data.toString()
}
