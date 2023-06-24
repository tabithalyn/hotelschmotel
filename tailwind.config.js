/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", 'cursive'],
        limelight: ["Limelight", 'cursive'],
        didact: ["Didact Gothic", 'sans-serif'],
        bodoni: ["Bodoni Moda", 'serif']
      }
    },
  },
  plugins: [],
}

