/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: ["./src/**/*.{html,js,jsx}","./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
    'dodger-blue': {
    '50': '#eef7ff',
    '100': '#d9ecff',
    '200': '#bcdfff',
    '300': '#8ecbff',
    '400': '#59adff',
    '500': '#388eff',
    '600': '#1b6af5',
    '700': '#1455e1',
    '800': '#1744b6',
    '900': '#193d8f',
    '950': '#142757',
},
'saffron-mango': {
    '50': '#fff9eb',
    '100': '#ffedc6',
    '200': '#ffd988',
    '300': '#ffbc42',
    '400': '#ffa620',
    '500': '#f98207',
    '600': '#dd5d02',
    '700': '#b73e06',
    '800': '#942f0c',
    '900': '#7a280d',
    '950': '#461202',
},
'cerise-red': {
    '50': '#fef2f3',
    '100': '#fde6e8',
    '200': '#fbd0d6',
    '300': '#f8a9b6',
    '400': '#f3798f',
    '500': '#e94a6a',
    '600': '#d8315b',
    '700': '#b41c46',
    '800': '#971a41',
    '900': '#811a3d',
    '950': '#48091d',
  },
  'black': {
    '50': '#f6f6f6',
    '100': '#e7e7e7',
    '200': '#d1d1d1',
    '300': '#b0b0b0',
    '400': '#888888',
    '500': '#6d6d6d',
    '600': '#5d5d5d',
    '700': '#4f4f4f',
    '800': '#454545',
    '900': '#3d3d3d',
    '950': '#000000',
},
'jaguar': {
    '50': '#ebe4ff',
    '100': '#ddcfff',
    '200': '#c4a8ff',
    '300': '#a674ff',
    '400': '#983eff',
    '500': '#9813ff',
    '600': '#9600ff',
    '700': '#9600ff',
    '800': '#8600e4',
    '900': '#6d00b0',
    '950': '#0d0014',
},
},
fontFamily: { 
  Akira: ['Akira'],
  Poppins: ['Poppins']
},
    

  },
  plugins: [heroui()],
}

