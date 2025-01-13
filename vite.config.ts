import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Chess_Academy/",
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@mui/material/Tooltip",
      "@emotion/styled",
      "@mui/material/Unstable_Grid2",
    ],
  },
});
