import { getSession, sessionStorage } from './session.server'

export async function getThemeSession(request: Request) {
  const session = await getSession(request)

  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : 'dark'
    },
    setTheme: (theme: string) => session.set('theme', theme),
    commit: () => sessionStorage.commitSession(session),
  }
}

function isTheme(value: unknown): value is 'light' | 'dark' {
  return typeof value === 'string' && ['light', 'dark'].includes(value)
}
