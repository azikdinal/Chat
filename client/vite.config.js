import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  define:{
    'process.env': dotenv.config().parsed
  }
})
