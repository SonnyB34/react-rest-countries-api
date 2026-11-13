import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load ALL variables from .env (the '' means "don't require the VITE_ prefix")
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Any request your React app sends to /api/countries...
        '/api/countries': {
          target: 'https://api.restcountries.com', // ...gets forwarded here
          changeOrigin: true,
          // Turn /api/countries?limit=100 into /countries/v5?limit=100
          rewrite: (path) => path.replace(/^\/api\/countries/, '/countries/v5'),
          // The key is added here, on the server side, so the browser never sees it
          headers: { Authorization: `Bearer ${env.API_KEY}` },
        },
      },
    },
  };
});
