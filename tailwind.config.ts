import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#228B22',
        'lush-purple': '#9370DB',

        primary: '#1D2D44',       // Deep Navy
        secondary: '#FF6F30',     // Vibrant Orange
        bg: '#F7F7F7',    // Light Gray
        accent: '#FFD700',        // Soft Gold
        text: '#333333',          // Dark Charcoal
        hover: '#A1C4D7',         // Soft Blue

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0", transform: "translateY(-10px)" },
          '100%': { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;