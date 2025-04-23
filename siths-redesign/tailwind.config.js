/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html", 
    "./**/*.js",
    "./assets/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "gold":"#C4B466",
        "dark-gold": "#4E4A38",
        "gray":"#323232",
        "light-gray": "#d1d1d1",
        "black" : "#1c1b1b" //dark gray
      },
      fontFamily: {
        "kumbh": ["Kumbh Sans", "sans-serif"],
        "ebgaramond": ["EB Garamond", "serif"]
      },
      backgroundImage: {
        "city-skyline" : "url('/assets/imgs/cityskyline.png')",
        "siths-building" : "url('/assets/imgs/siths-building.png')"
      }
    },
  },
  plugins: [require('daisyui')],
}
