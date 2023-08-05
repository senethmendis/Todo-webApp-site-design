/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#7161ef",
        secondery:"#2b2d42"
      },
      fontFamily:{
        poppins:['Poppins',"sans-serif"]
      }
    },
  },
  plugins: [],
}

