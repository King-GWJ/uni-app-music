import {defineConfig} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import {baseUrl} from './base/api';
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
    // base: 'uni-app-music',
    plugins: [uni()],
    server: {
        proxy: {
            '/music_api': {
                target: baseUrl,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/music_api/, ''),
            },
        }
    },
    build: {
        rollupOptions: {
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(name) {
                    const match = DRIVE_LETTER_REGEX.exec(name);
                    const driveLetter = match ? match[0] : "";
                    // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
                    // Otherwise, avoid them because they can refer to NTFS alternate data streams.
                    return (
                        driveLetter +
                        name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                    );
                },
            },
        },
    },
});