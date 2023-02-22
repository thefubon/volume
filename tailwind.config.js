/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {},
  },
  plugins: [],
}