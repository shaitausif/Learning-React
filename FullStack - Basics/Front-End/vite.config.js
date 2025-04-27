import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      // This will append the http://localhost:3000 before api everywhere
      '/api' : 'http://localhost:3000'
      // It will also help up to get rid of that CORS error as now the vite can understand that both server and frontend request's are coming from the same port so it won't give any kind of error
    }
  },
  plugins: [react()],
})
