import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  //his plugin enables React support, including JSX transformation and Fast Refresh

// https://vite.dev/config/
export default defineConfig({
  // server:{
  //   https: false,  // force HTTP
  //   host:'localhost', //Ensure it binds to localhost
  //   port: 5173  // Optional, default vite port
  // },
  plugins: [react()],
})
