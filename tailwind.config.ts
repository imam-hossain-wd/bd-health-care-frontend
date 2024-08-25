import type { Config } from 'tailwindcss'
import { keepTheme } from "keep-react/keepTheme";

const config : Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default keepTheme(config);
  
