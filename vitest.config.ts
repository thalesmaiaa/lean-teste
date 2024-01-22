import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    env: {
      NEXT_PUBLIC_API_URL:
        'https://38375370-103e-44f9-ba50-67c60bff12f7.mock.pstmn.io/',
    }, // this line,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src/app') }],
  },
})
