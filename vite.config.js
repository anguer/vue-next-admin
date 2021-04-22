import Vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import path from 'path';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const root = process.cwd();
  const isBuild = command === 'build';
  console.log('#vite', 'isBuild=', isBuild, 'mode=', mode);

  return {
    /**
     * You will need to set base if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://<USERNAME>.github.io/<REPO>/,
     * then publicPath should be set to "/<REPO>/".
     * In most cases please use '/' !!!
     * Detail: https://vue3js.cn/vite/config/#base
     */
    base: isBuild ? '/vue-next-admin/' : '/',
    root,
    plugins: [
      Vue(),

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
            resolveStyle: (name) => `element-plus/lib/theme-chalk/${name}.css`,
            resolveComponent: (name) => `element-plus/lib/${name}`,
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
      strictPort: true,
      open: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:3000',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '')
      //   }
      // }
    },

    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'static',
      brotliSize: false,
      chunkSizeWarningLimit: 1500,
    }
  };
};
