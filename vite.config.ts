import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // Make sure the build output directory is 'build'
  },
  base: '/expense-tracker/', 
})
// vite.config.js

  
