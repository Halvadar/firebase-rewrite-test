import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

const folders = fs.readdirSync("./src", { withFileTypes: true });
const fileNames = folders
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);
const filePaths = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : `src/${cur}`}`,
  }),
  {},
);

// console.log(`filePaths: ${JSON.stringify(filePaths, null, 2)}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  envDir: "./env",
  server: {
    port: 3000,
    // host: true,
    // open: true,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ...filePaths,
      utils: "/src/utils",
    },
  },
});
