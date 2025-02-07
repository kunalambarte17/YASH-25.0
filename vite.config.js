import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.PNG"],
  server: {
    historyApiFallback: true, // Redirects unknown routes to index.html
  },
})
