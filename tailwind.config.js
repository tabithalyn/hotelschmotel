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
        bodoni: ["Bodoni Moda", 'serif'],
        sorts: ["Sorts Mill Goudy", 'serif'],
        biz: ["BIZ UDPMincho", 'serif']
      }
    },
    screens: {
      "xs": "360px",
      "sm": "630px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [],
}

