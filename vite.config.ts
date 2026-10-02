import mdx from '@mdx-js/rollup'
import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import { vercelPreset } from '@vercel/remix/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig(({ command }) => ({
  server: {
    port: 3000,
  },
  ssr: {
    // These are CommonJS. Forcing them through Vite's dev SSR transform leaves
    // `module.exports` dangling ("module is not defined"), so only bundle them
    // for the production build, where Rollup's CJS interop handles them.
    noExternal: command === 'build' ? ['lodash', 'fs-extra', 'nanoid'] : [],
  },
  build: {
    target: 'es2022',
  },
  optimizeDeps: {
    // Vite 5 hardcodes ESBUILD_MODULES_TARGET (es2020/chrome87/...) for the dev
    // dep optimizer and does NOT inherit `build.target`. esbuild >=0.25 can no
    // longer lower destructuring for that target, so pin it here too.
    esbuildOptions: {
      target: 'es2022',
    },
  },
  plugins: [
    mdx(),
    remix({
      serverModuleFormat: 'esm',
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
}))
