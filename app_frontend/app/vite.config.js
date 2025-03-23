// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    // For Vite specifically
    proxy: {
      // This tells the dev server to redirect any unknown requests to the root
      '/*': {
        target: 'http://localhost:5173',
        rewrite: (path) => '/'
      }
    }
  },
})