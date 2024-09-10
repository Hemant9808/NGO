/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#77C04F',
      },
    },
    fontFamily:{
      Mont :['Mont-Bold','sans-serif'],
      MontBook:['Mont-Book','sans-serif']
    }
  },
  plugins: [],
}

