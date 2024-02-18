// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // Konfiguracija ESLint-a
      cache: false,
      fix: true,
      extensions: [".js", ".jsx"],
      exclude: ["node_modules", ".git"],
      overrideConfig: {
        rules: {
          "no-unused-vars": "off",
        },
      },
    }),
  ],
});
