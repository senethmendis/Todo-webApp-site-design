import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base :'/Todo-webApp-site-design/',
  plugins: [react()],
})
