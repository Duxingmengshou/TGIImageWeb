import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 9012,
  },
  pwa: {
    iconPaths: {
      // Add your icon paths here
      // Example:
      favicon32: './src/assets/CuteGhost.svg',
      favicon16: './src/assets/CuteGhost.svg',
      appleTouchIcon: './src/assets/CuteGhost.svg',
      maskIcon: './src/assets/CuteGhost.svg',
      msTileImage: './src/assets/CuteGhost.svg'
    },
  }
})
