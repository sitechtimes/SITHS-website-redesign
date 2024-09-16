/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    './studio/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors:{
        "gold":"#C4B466",
        "gray":"#323232",
      },
      fontFamily: {
        "kumbh": ["Kumbh Sans", "sans-serif"],
        "playfair": ["Playfair", "serif"]
      },
      backgroundImage: {
        "city-skyline" : "url('./imgs/cityskyline.png')",
        "left-gear": "url('./imgs/left-gear.svg')",
        "right-gear": "url('./imgs/right-gear.svg')",
      }
    },
    
  },
  plugins: [require('daisyui'),],
}

