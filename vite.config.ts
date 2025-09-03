import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mmesoma-david/", // ← THIS IS CRUCIAL FOR GH PAGES
  plugins: [react()],
});
