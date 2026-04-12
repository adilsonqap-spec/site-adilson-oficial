/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#12A9FF",
        secondary: "#2563EB",
        destaque: "#38BDF8",
        dark: "#07111F",
        darker: "#111827",
        light: "#F9FAFB",
        lightAlt: "#EEF6FF",
        borderBlue: "#D6E6FF"
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
