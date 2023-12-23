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
      name,
      fileName: name,
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
