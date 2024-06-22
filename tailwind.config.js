/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','san-serif']
      },
      colors: {
        'bg-color':'#091470',
        'bg-dark-color': '#0c1a28',
        'primary-color': '#04fe98c'
      },
      width: {
        'custom-image-width': '200px'
      }
    },
  },
  plugins: [],
}

