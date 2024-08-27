// import type { Config } from 'tailwindcss';
// import { keepTheme } from "keep-react/keepTheme";

// // Define your custom color palette
// const colorsPalette = {
//   primary:
//   {
//     25: '#f2f5ff',
//     50: '#e8edff',
//     100: '#aebfff',
//     200: '#94abff',
//     300: '#6f8eff',
//     400: '#4a72ff',
//     500: '#ab0a00',
//     600: '#0f3cd9',
//     700: '#042bb2',
//     800: '#042185',
//     900: '#00114a',

//   },
//   success: {
//     25: '#eafef5',
//     50: '#d7f8e9',
//     100: '#8fe7b8',
//     200: '#48d28e',
//     300: '#2fd181',
//     400: '#1db469',
//     500: '#11a75c',
//     600: '#0a9952',
//     700: '#048746',
//     800: '#046a37',
//     900: '#02542b',
//   },
//   warning: {
//     25: '#fff9df',
//     50: '#fff2c4',
//     100: '#ffe99d',
//     200: '#f7dc7c',
//     300: '#f8d34f',
//     400: '#f5c61e',
//     500: '#e9b90b',
//     600: '#d8a800',
//     700: '#b18a00',
//     800: '#896b00',
//     900: '#624d00',
//   },
//   error: {
//     25: '#fff5f4',
//     50: '#ffdcda',
//     100: '#ffc5c1',
//     200: '#ffa19b',
//     300: '#ff7a72',
//     400: '#ff574d',
//     500: '#ff3838',
//     600: '#e92215',
//     700: '#d21a0e',
//     800: '#be170c',
//     900: '#ab0a00',
//   },
//   metal: {
//     25: '#f9fafb',
//     50: '#f0f3f9',
//     100: '#e9eff6',
//     200: '#d7dfe9',
//     300: '#afbaca',
//     400: '#8897ae',
//     500: '#5e718d',
//     600: '#455468',
//     700: '#3d4a5c',
//     800: '#2d3643',
//     900: '#1c222b',
//   },
// };

// const config: Config = {
//   content: [
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: colorsPalette,
//     },
//   },
// };

// export default keepTheme(config, colorsPalette);

import type { Config } from "tailwindcss";
import { keepTheme } from "keep-react/keepTheme";

const config: Config = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3CD9",  
        secondary: "#32B9A9",
        info: "#0D2825",     
        smoke: "#EFF6FF",    
        light: "#D8EEFF",    
        danger: "#131B5B",   
      },
    },
  },
  plugins: [],
};
// export default config;
export default keepTheme(config);
