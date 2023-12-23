import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { name } from "./package.json";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  build: {
    minify: false,
    sourcemap: "inline",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: name.replace(/-/, ""),
      fileName: name,
      formats: ["es", "cjs", "umd"],
    },
    terserOptions: {
      format: {
        comments: "all",
      },
    },
  },
  plugins: [
    // Text2Frame-MV を非ツクール状態かつブラウザ向けの条件で実行できるようにする
    {
      name: "bugfix-text2frame-mv",
      transform(code, id) {
        if (id.match("Text2Frame-MV/Text2Frame")) {
          code = code.replace(`typeof PluginManager === 'undefined'`, "true");
          code = code.replace(
            "globalThis.Game_Interpreter = {};",
            "globalThis.Game_Interpreter = globalThis.Game_Interpreter || {};"
          );
          code = code.replace(
            "Game_Interpreter.prototype = {};",
            "Game_Interpreter.prototype = Game_Interpreter.prototype || {};"
          );
          code = code.replace(
            "globalThis.$gameMessage = {};",
            "globalThis.$gameMessage = globalThis.$gameMessage || {};"
          );
          code = code.replace(
            "$gameMessage.add = function () {};",
            "$gameMessage.add = $gameMessage.add || function () {};"
          );
          return { code, map: null };
        }
      },
    },
    dts({ rollupTypes: true }),
    nodePolyfills(),
  ],
});
