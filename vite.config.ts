import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/Chess_Academy/",
  optimizeDeps: {
    include: [
      "@mui/material/Tooltip",
      "@emotion/styled",
      "@mui/material/Unstable_Grid2",
    ],
  },
});
