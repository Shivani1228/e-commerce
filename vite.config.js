// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // 🌟 Flowbite React ke content files ko track karne ke liye plugin ko import kiya
// import flowbite from "flowbite-react/tailwind"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     flowbite.plugin() // 🌟 Flowbite ka plugin yahan jod diya hai
//   ],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // This tells Vite not to look for the missing ./tailwind specifier inside flowbite-react
    exclude: ["flowbite-react"],
  },
});
