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

/**
 * A slug with no file behind it is a 404, not a server fault. Without this the
 * ENOENT escapes the loader as a thrown Error, which isRouteErrorResponse()
 * rejects, and the request renders the 500 boundary instead of the 404 one.
 */
export const readContentFileIfExists = async (
  contentDir: string,
  file: string
) => {
  try {
    return await readContentFile(contentDir, file)
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return undefined
    throw e
  }
}
