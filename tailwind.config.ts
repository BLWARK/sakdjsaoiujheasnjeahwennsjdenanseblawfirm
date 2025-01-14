import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#D1AF89",        // Warna utama
        secondary: "#f4f4f4",   // Warna sekunder
        hover: "#D4365F",       // Warna saat hover
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"], // Font untuk judul
        poppins: ["'Poppins'", "sans-serif"],      // Font untuk isi
      },
    },
  },
  plugins: [],
} satisfies Config;
