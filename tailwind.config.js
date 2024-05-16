/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      widest: '1.5px',
    },
    extend: {
      animation: {
        'fadein': 'fadein 1s ease-in',
      },
      keyframes: {
        'fadein': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
    },
  },
  plugins: [],
}