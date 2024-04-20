import {defineConfig} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import {baseUrl} from './base/api';

export default defineConfig({
    plugins: [uni()],
    server: {
        proxy: {
            '/music_api': {
                target: baseUrl,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/music_api/, ''),
            },
        }
    }
});