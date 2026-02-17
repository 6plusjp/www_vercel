import fse from 'fs-extra'
const { readdir, readFile } = fse

const contentPath = '../content'

// https://www.themosaad.com/blog/loading-static-file-remix-vercel
export const readContentDir = async (contentDir: string) => {
  const content = __dirname + `/${contentPath}/${contentDir}`
  const data = await readdir(content)

  return data
}

export const readContentFile = async (contentDir: string, file: string) => {
  const content = __dirname + `/${contentPath}/${contentDir}/${file}`
  const data = await readFile(content, 'utf8')

  return data.toString()
}
