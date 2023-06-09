import {
  defineConfig
} from 'vite'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
// antdv 按需分配
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue({
      // 启用$ref等语法糖
      reactivityTransform: true
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
})
