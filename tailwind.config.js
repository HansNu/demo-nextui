import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins:[
    nextui({
      themes: {
        light: {
          layout: {
            // Add layout-specific colors here if needed
            'navbar-bg': '#31266e',
            'navbar-icon-bg': '#524887',
          },
          colors: {
            // Using the names as placeholders, replace with meaningful names as necessary
            'light-gray': '#fbfbfb',
            'bright-green': '#78fe35',
            'deep-purple': '#31266e',
            'vivid-red': '#fe352a',
            'strong-blue': '#2e75fc',
          }
        },
        dark: {
          layout: {},
          colors: {}
        },
      }
    })
  ]
}
