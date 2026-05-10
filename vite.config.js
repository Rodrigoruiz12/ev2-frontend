// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/ventas': {
        target: 'http://10.0.132.216:8080', // Puerto de Ventas
        changeOrigin: true,
      },
      '/api/v1/despachos': {
        target: 'http://10.0.132.216:8081', // Puerto de Despachos
        changeOrigin: true,
      }
    }
  }
})