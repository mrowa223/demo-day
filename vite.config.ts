import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

/**
 * Конфиг vite https://vitejs.dev/config/
 *
 * @param {Object} params
 * @param {string} params.mode
 */
export default ({ mode }: { mode: string }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        base:    '',
        plugins: [
            react(),
            svgr(),
        ],
        build: {
            minify:            'terser',
            assetsInlineLimit: 1024,
            sourcemap:         'hidden'
        },
        resolve: {
            alias: [
                {
                    find:        '@',
                    replacement: resolve(__dirname, 'src')
                }
            ]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/styles/_variables.scss";
                        @import "@/styles/_mixins.scss";
                    `,
                },
            },
        },
    });
};
