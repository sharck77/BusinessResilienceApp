// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-tabs',
      'framer-motion',
      '@radix-ui/react-presence',
      '@radix-ui/react-roving-focus',
      '@radix-ui/react-collection',
    ],
  },
})
