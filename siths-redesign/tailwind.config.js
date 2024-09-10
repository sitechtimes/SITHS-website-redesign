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
      }
    },
  },
  plugins: [require('daisyui'),],
}

