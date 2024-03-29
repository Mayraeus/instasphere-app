import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8080
  },
  build:{
    chunkSizeWarningLimit: 1000
  },
  plugins: [
    react(),
    legacy()
  ],
})
