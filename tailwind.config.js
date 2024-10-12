/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#06061a',
        'secundary': '#2eb1a3',
        'pink': '#e8546b',
        'purple': '#ac3cf6',
      },
      rotate: {
        '15': '15deg',
      }
    },
  },
  plugins: [],
}

