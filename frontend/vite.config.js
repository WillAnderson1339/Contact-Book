import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// added by WA
//  publicDir: './src/assets',
//
// the images are the assets folder and the assets is configured as the publicDir in vite.config.js
// Files in the public directory are served at the root path.
// Instead of /src/assets/Cat_2.png, use /Cat_2.png.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: './src/assets',
})
