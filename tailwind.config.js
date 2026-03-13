/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        custom: "url('/icons/cursor.png'), pointer",
      },
      fontFamily: {
        jetBrains: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        grey: '#63616e',
        darkGrey: '#494754',
        veryDarkGrey: '#3f48cc',
        lightGrey: '#dbd8eb',
        almostWhite: '#fdfdff',
        textPassword: '#f6f5fa',
        textForm: '#f6f5fa',
        neonGreen: '#b0ffbb',
        Yellow: 'rgba(248, 203, 99, 1)',
        Orange: '#fb7a56ff',
        Red: '#ff4400ff',
      },
      minHeight: {
        screen: '100dvh',
      },
      
     
    },
  },

  safelist: [
        'bg-Red',
        'outline-Red',
        'bg-Orange',
        'outline-Orange',
        'bg-Yellow',
        'outline-Yellow',
        'bg-neonGreen',
        'outline-neonGreen',
      ],
  plugins: [],
}
