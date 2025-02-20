import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Gunakan folder 'public' sebagai root proyek
    build: {
        outDir: "../dist", // Output hasil build ke folder 'dist'
        emptyOutDir: true // Hapus isi folder 'dist' sebelum build baru
    },
    server: {
        open: "index.html", // Saat `npm run dev`, langsung buka index.html
        routes: {
            "/calculator": "/calculator/calculator.html",
            "/guess-number": "/guess-number/guess-number.html"
        }
    }
});
