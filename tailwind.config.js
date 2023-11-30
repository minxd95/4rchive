/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: "translate(32px,0)",
          },
          to: {
            opacity: 1,
            transform: "translate(0,0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
