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
      cache: false, // Onemogućiti kesiranje za sprečavanje problema sa ažuriranjem
      fix: true, // Popraviti automatski ispravljive greške
      extensions: [".js", ".jsx"], // Ekstenzije fajlova koje ESLint treba da analizira
      exclude: ["node_modules", ".git"], // Direktorijumi koje ESLint treba da izuzme iz analize
      overrideConfig: {
        rules: {
          "no-unused-vars": "off", // Isključuje greške za neiskorišćene promenljive
        },
      },
    }),
  ],
});
