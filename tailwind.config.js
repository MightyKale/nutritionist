/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          70: '#CBEA7B',
          75: '#D3EE91',
          80: '#DCF1A7',
          85: '#E5F5BD',
          90: '#EEF8D3',
          95: '#F6FBE9',
          97: '#FAFDF2',
          99: '#FDFEFB'
        },
        dark_green: {
          15: '#1A3129',
          20: '#234338',
          25: '#2C5446',
          30: '#346454',
          40: '#468671',
          60: '#79B9A4',
          80: '#BCDCD1',
          90: '#DDEDE8'
        },
        grey: {
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          60: '#98989A',
          90: '#E6E6E6',
          95: '#F2F2F2',
          97: '#F7F7F7',
          99: '#FCFCFC'
          
        },
      },
      // backgroundImage: {
      //   'bg-img-1': "url('/img-1.png')",
      //   'bg-img-2': "url('/img-2.png')",
      //   'feature-bg': "url('/feature-bg.png')",
      //   pattern: "url('/pattern.png')",
      //   'pattern-2': "url('/pattern-bg.png')",
      // },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};