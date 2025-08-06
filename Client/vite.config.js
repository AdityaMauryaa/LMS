export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
