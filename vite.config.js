import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/ventas': {
        target: 'http://10.0.132.216:8080',
        changeOrigin: true,
      },
      '/api/v1/despachos': {
        target: 'http://10.0.132.216:8081',
        changeOrigin: true,
      }
    }
  }
})