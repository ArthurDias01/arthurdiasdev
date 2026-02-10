/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#fafee7',
          100: '#f3fccb',
          200: '#e5f99d',
          300: '#d1f264',
          400: '#bee740',
          500: '#9ccc16',
          600: '#79a30d',
          700: '#5b7c0f',
          800: '#4a6212',
          900: '#3e5314',
          950: '#1f2e05',
        },
        secondary: {
          50: '#f5f2ff',
          100: '#ede8ff',
          200: '#dcd4ff',
          300: '#c3b1ff',
          400: '#a784ff',
          500: '#8c52ff',
          600: '#7e2ff8',
          700: '#701de4',
          800: '#661ad1',
          900: '#4d169c',
          950: '#2e0b6a',
        },
        neutral: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d6dae1',
          300: '#b1bac8',
          400: '#8795a9',
          500: '#68788f',
          600: '#536076',
          700: '#4a5568',
          800: '#3b4351',
          900: '#343a46',
          950: '#23272e',
        },
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        },
        fadeOut: {
          from: { opacity: 1, transform: 'translateY(0px)' },
          to: { opacity: 0, transform: 'translateY(-10px)' },
        },
        scaleUp: {
          from: { opacity: 0, transform: 'scale(0.8)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        pulseCaret: {
          '50%': { opacity: 0.25 },
        },
        staggerUp: {
          from: { opacity: 0, transform: 'translateY(14px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        fadeIn: 'fadeIn 300ms ease-in forwards',
        fadeOut: 'fadeOut 300ms ease-in forwards',
        scaleUp: 'scaleUp 300ms ease-in-out forwards',
        pulseCaret: 'pulseCaret 1500ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        staggerUp: 'staggerUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class
  plugins: [require('tailwindcss-dotted-background')],
}
