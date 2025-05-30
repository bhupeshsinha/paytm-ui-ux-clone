/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'hello':{'min':'640px', 'max':'767px'},
      },
    },
      
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      'purple':"#7e5bef",
      blue:{
        100: "#3B82F6"
      }
    },

    fontWeight:{
      "xl":900
    },

    },

    borderColor:{
      "black":"#ff0000"
    },
  plugins: [],
}

