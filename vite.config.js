import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-next-admin/',
  plugins: [
    vue(),
    styleImport({
      libs: [
        // {
        //   libraryName: 'element-plus',
        //   esModule: true,
        //   ensureStyleFile: true,
        //   resolveStyle: (name) => {
        //     name = name.slice(3)
        //     return `element-plus/packages/theme-chalk/src/${name}.scss`;
        //   },
        //   resolveComponent: (name) => {
        //     return `element-plus/lib/${name}`;
        //   },
        // },
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    // host: '127.0.0.1',
    port: 3000,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
