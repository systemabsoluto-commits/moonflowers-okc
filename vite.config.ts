import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

function spaFallback404() {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const index = resolve(rootDir, 'dist/index.html')
      const fallback = resolve(rootDir, 'dist/404.html')
      if (existsSync(index)) copyFileSync(index, fallback)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallback404(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})