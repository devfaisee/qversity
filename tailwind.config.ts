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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },


.menu-item {
  position: relative;
  font-size: 1.1rem; /* Adjusts the font size for a sleek look */
  letter-spacing: 1px; /* Adds a touch of spacing for elegance */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.menu-item:before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.menu-item:hover:before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.menu-item:hover {
  color: #FF63F5; /* Add a sexy hover effect with a soft pink color */
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow for depth */
}



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