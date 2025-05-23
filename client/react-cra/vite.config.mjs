import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
        '/api': {
          target: 'https://stripe-server.08612345.xyz',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
    },
    allowedHosts: [
      'localhost',
      'stripe-client.08612345.xyz'
    ]
  },
  build: {
    outDir: "build",
  },
})