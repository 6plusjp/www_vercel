import mdx from '@mdx-js/rollup'
import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import { vercelPreset } from '@vercel/remix/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ['lodash', 'fs-extra', 'nanoid'],
  },
  plugins: [
    mdx(),
    remix({
      serverModuleFormat: 'esm',
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
})
