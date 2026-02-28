import react from '@vitejs/plugin-react'
import { url } from 'inspector'
import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // добавляем алиас для '@'
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      components: fileURLToPath(
        new URL('./src/common/components', import.meta.url),
      ),
      ui: fileURLToPath(new URL('./src/common/ui', import.meta.url)),
      constant: fileURLToPath(new URL('./src/constant', import.meta.url)),
      routes: fileURLToPath(new URL('./src/routes', import.meta.url)),
      store: fileURLToPath(new URL('./src/store', import.meta.url)),
      api: fileURLToPath(new URL('./src/api', import.meta.url)),
      slices: fileURLToPath(new URL('/src/slices', import.meta.url))
    },
  },
})
