import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { version } from './package.json';
import pathsConfig from 'vite-tsconfig-paths';

const outDir = resolve(__dirname, 'dist');

const filename = `brainRing-${version}.js`;

export default defineConfig({
    plugins: [
        react(),
        pathsConfig(),
    ],
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'src', 'index.tsx'),
            output: {
                format: 'systemjs',
                dir: outDir,
                entryFileNames: filename,
                chunkFileNames: `chunks/brainRing-${version}-[hash].js`
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                math: 'always',
                relativeUrls: true,
                javascriptEnabled: true,
            },
        },
    },
    server: {
        open: "/",
        port: 8080,
        proxy: {
            '/api': 'http://localhost:8081',
        }
    },
});
