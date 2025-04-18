import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path");
const target = require("./build_target/target.js"); // 管理画面側

/**
 * Buildのセクションを分ける
 */
const section = process.env.BUILD_SECTION ?? "ALL";
var entries = {};
switch (section) {
  case "ALL":
    var entries = {
      ...target,
    };
    break;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@puts": path.resolve(__dirname, "./src"),
      "@puts_img": path.resolve(__dirname, "./img"),
    },
  },
  root: 'src',
  build: {
    minify: false, // minify設定
    assetsInlineLimit: 409600, // 画像のインライン化の閾値（KB）
    outDir: "./distributions", // ビルドされたjsファイルが格納される場所
    rollupOptions: {
      input: entries, // for build
      // input: { 
      //   '': resolve(__dirname, 'src/index.html'), // for dev
      // },
      output: { // ファイル名ハッシュを辞めるオプション
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
