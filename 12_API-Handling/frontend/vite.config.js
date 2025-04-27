import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // we're doing this just to get rid of that CORS error
  server : {
    proxy : {
      '/api' : 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
