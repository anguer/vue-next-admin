import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { name } from './package.json';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * You will need to set base if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://<USERNAME>.github.io/<REPO>/,
   * then publicPath should be set to "/<REPO>/".
   * In most cases please use '/' !!!
   * Detail: https://vue3js.cn/vite/config/#base
   */
  base: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
  assetsDir: '',
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
