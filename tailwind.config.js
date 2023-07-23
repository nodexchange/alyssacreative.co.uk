/** @type {import('tailwindcss').Config} */
module.exports = {
  media: false,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["PPNeueMontreal-Medium", "Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        "mtl-bold": ["PPNeueMontreal-Bold"],
        "mtl-medium": ["PPNeueMontreal-Medium"],
      },
      backgroundImage:{
        'hero': 'url(/images/hero.jpg)',
        'testimonials': 'url(/images/testimonials.jpg)'
      },
      colors: {
        acblue: {
          DEFAULT: "#363854",
          light: "#9c93a9",
          transparent: '#525473',
          dark: "#48444e",
          blue: "#551c0c",
        }
      }
    },
  },
  plugins: [],
}
