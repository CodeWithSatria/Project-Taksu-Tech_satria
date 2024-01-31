import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screen: {
      mmd: '838px'
    },
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '12xl': '10.2rem',
        '16xl': '14.2rem',
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Outline: ['Londrina Outline', 'sans-serif'],
        RubikDood: ['Rubik Doodle Shadow', 'system-ui'],
        RobotoItalic:['Roboto Mono', 'monospace'],
        SourcePro:['Source Code Pro', 'monospace'],
        dmserif: ['DM Serif', 'serif'],
        com: ['Comfortaa', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'parallax': 'url("/Parallax.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
