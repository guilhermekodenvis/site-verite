import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f6f8',
          100: '#e8eaef',
          200: '#dadada', // cinza contraste
          300: '#9ea4b3',
          400: '#6b7489',
          500: '#4a5568',
          600: '#2d3748',
          700: '#1a202c',
          800: '#0d1425',
          900: '#010b21', // azul primário
          950: '#000714',
        },
        gold: {
          50: '#faf6ef',
          100: '#f2e8d5',
          200: '#e5d1ab',
          300: '#d4b47a',
          400: '#c9a35c',
          500: '#b18b4b', // dourada secundária
          600: '#9a7841',
          700: '#7d6135',
          800: '#5f4a29',
          900: '#43341d',
        },
        accent: {
          light: '#f5f6f8',
          DEFAULT: '#b18b4b',
          dark: '#722b38', // vermelho destaque
        },
        contrast: {
          DEFAULT: '#dadada',
        },
        highlight: {
          DEFAULT: '#722b38', // vermelho destaque
          light: '#8f3a47',
          dark: '#5a222c',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
