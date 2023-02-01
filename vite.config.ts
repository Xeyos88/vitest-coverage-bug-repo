/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    reporters: ['default', 'junit'],
    outputFile: 'junit.xml',
    coverage: {
      all: true,
      exclude: [
        'dist/**',
        'public/**',
        'cypress/**',
        'coverage/**',
        '**/{cypress,postcss,vite,vitest,tailwind,ava,babel,nyc}.config.{js,cjs,mjs,ts}',
        '**/.{eslint,mocha}rc.{js,cjs}',
        '**/{App,main,index,FontAwesome}.{ts,vue}',
        '**/*.d.ts',
        '**/Icon*.vue',
        '**/__tests__/**',
      ],
      reporter: ['html', 'cobertura', 'text', 'text-summary', 'lcov'],
    },
  },
})
