import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    define: {
      this: "window",
    },
  },
  server:{
    host: 'localhost',
    port: 3000
  }
})
