/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      fontFamily: {
        custom: ['Outfit', 'sans-serif'],
      },

      borderRadius: {
        'md': '50px',
        'large': '100px',

      },

      boxShadow: {
        '3xl': '0 0 4px 0 rgba(0, 0, 0, 0.25)',
      },
      
      // aspectRatio: {
      //   '3/2': '3 / 2',
      // },
     
    },
  },
  plugins: [],
}
