import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default;

  return {
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
      EnvironmentPlugin([
        'VITE_SPOTIFY_API_CLIENT_ID',
        'VITE_SPOTIFY_API_CLIENT_SECRET',
      ]),
    ],
  };
});
