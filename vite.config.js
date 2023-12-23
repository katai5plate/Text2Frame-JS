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
        // JSDocコメントを含むすべてのコメントを保持
        comments: "all",
      },
    },
  },
  plugins: [
    {
      name: "bugfix-text2frame-mv",
      transform(code, id) {
        if (id.match("Text2Frame-MV/Text2Frame")) {
          code = code.replace(`typeof PluginManager === 'undefined'`, "true");
          return { code, map: null };
        }
      },
    },
    dts({ rollupTypes: true }),
    nodePolyfills(),
  ],
});
