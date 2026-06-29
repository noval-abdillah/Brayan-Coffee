/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // We map CSS variables in global styles
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "18px",
        xl: "28px",
      },
    },
  },
  plugins: [],
}
