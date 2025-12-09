import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkMath],

        rehypePlugins: [rehypeKatex],

        providerImportSource: "@mdx-js/react",
      }),
    },
    react(),
    tailwindcss(),
  ],
  base: "/dfm-feasibility/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
