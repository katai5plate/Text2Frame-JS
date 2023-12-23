import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { name } from "./package.json";

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
  },
  plugins: [dts({ rollupTypes: true })],
});
