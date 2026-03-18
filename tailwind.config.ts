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
          200: '#dadada',
          300: '#9ea4b3',
          400: '#6b7489',
          500: '#4a5568',
          600: '#2d3748',
          700: '#1a202c',
          800: '#1a2744',
          900: '#0f1d3a',
          950: '#0a1628',
        },
        gold: {
          50: '#faf8f3',
          100: '#f5edd9',
          200: '#ebd9b3',
          300: '#dfc285',
          400: '#d4a853',
          500: '#c9943d',
          600: '#b17a32',
          700: '#935f2b',
          800: '#794c29',
          900: '#644025',
        },
        accent: {
          light: '#f5f6f8',
          DEFAULT: '#c9943d',
          dark: '#722b38',
        },
        contrast: {
          DEFAULT: '#dadada',
        },
        highlight: {
          DEFAULT: '#722b38',
          light: '#8f3a47',
          dark: '#5a222c',
        }
      },
      fontFamily: {
        heading: ['Masqualero', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 148, 61, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 148, 61, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 7, 20, 0.1)',
        'glass-lg': '0 25px 50px -12px rgba(0, 7, 20, 0.15)',
        'glass-gold': '0 8px 32px 0 rgba(201, 148, 61, 0.15)',
        'glow-gold': '0 0 40px rgba(201, 148, 61, 0.3)',
        'glow-primary': '0 0 40px rgba(1, 11, 33, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(201, 148, 61, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(1, 11, 33, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(201, 148, 61, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(1, 11, 33, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(201, 148, 61, 0.1) 0px, transparent 50%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, rgba(201, 148, 61, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(114, 43, 56, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(201, 148, 61, 0.15) 0px, transparent 50%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
export default config
