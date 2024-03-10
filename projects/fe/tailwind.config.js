/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    keyframes: {
      'spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      },
      'fade-in': {
        '0%': { opacity: '0%' },
        '100%': { opacity: '100%' }
      },
      'fade-out': {
        '0%': { opacity: '100%' },
        '100%': { opacity: '0%' }
      },
      'rotate': {
        '0%': { transform: 'rotateY(0deg)' },
        '100%': { transform: 'rotateY(360deg)' }
      },
      'bounce': {
        '0%, 100%': {
          'transform': 'translateY(-5%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '30%': {
          'transform': 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      }
    },
    extend: {},
    animation: {
      'spin': 'spin 0.7s ease-in-out infinite',
      'flipped': 'rotate 0.4s ease-in-out 1',
      'bounce': 'bounce 1s infinite',
      'fade-in': 'fade-in 0.5s ease-in-out forwards',
      'fade-out': 'fade-out 0.5s ease-in-out forwards'
    }
  },
  plugins: [],
  darkMode: 'selector'
}

