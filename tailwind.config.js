/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primarytwo':"#CC2D4A",
      'secondarytwo':"#8FA206",
      'tertiarytwo':"#61AEC9",
      'grayPerson': "#7B7B7B",
      'cinta': "#955251",
      'barrita': "#643736",
      'while': "#ffffff",
      'foot': "#333333"

    },
    textColor: { 
      'primarytwo':"#CC2D4A",
      'secondarytwo':"#8FA206",
      'tertiarytwo':"#61AEC9",
      'grayPerson': "#7B7B7B",
      'blancoTitulo': "#EAEAEA",
      'while': "#ffffff"
    },
    fontFamily: { 
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'fondoinfo': "url('../public/img/fondo_info.png')",
        'infoMobile': "url('../public/img/infoMobile.png')",
        'cacique': "url('../public/img/cacique.png')",
        'vino2': "url('../public/img/vino2.png')",
        'vocka': "url('../public/img/vocka.png')",
        'black': "url('../public/img/black.png')",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
