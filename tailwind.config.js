/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Josefin Sans'],
      },
      colors: {
        'purple-bg': "#a7bcff",
        'purple-dark': "#5D3587",
        'purple-light': "#A367B1",
        'purple-extra-light': "#FFD1E3",
        'purple-extra-dark': "#392467"
      },
      height:{
        'card': '38rem',
        'story': '34rem',
      },
      width:{
        'story': '30rem',
        'card': '34rem',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}