import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to strip "use client"
function stripUseClient() {
  return {
    name: 'strip-use-client',
    transform(code, id) {
      if (id.includes('node_modules') && code.includes('"use client"')) {
        return code.replace(/["']use client["'];?/g, '')
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    stripUseClient()
  ],
})
