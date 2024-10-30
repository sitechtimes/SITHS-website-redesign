/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "gold":"#C4B466",
        "gray":"#323232",
        "light-gray": "#d1d1d1"
      },
      fontFamily: {
        "kumbh": ["Kumbh Sans", "sans-serif"],
        "playfair": ["Playfair", "serif"]
      },
      backgroundImage: {
        "city-skyline" : "url('/assets/imgs/cityskyline.png')",
      }
    },
  },
  plugins: [require('daisyui')],
}
