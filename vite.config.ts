import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import tailwindcss from "tailwindcss";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "octa-ui",
      formats: ["es", "cjs"],
      // fileName: "octa-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    // plugin to handle CSS files
    // windiCSS(),
    // cssInjectedByJsPlugin(),
    // cssInjectorPlugin,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
