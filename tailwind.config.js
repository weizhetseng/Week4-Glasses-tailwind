module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1280px',
    },
    fontSize: {
      sm: ['14px', '1.5'],
      base: ['16px', '1.5'],
      lg: ['18px', '1.5'],
      xl: ['20px', '1.5'],
      '2xl': ['24px', '1.5'],
      '3xl': ['32px', '1.5'],
      '4xl': ['36px', '1.5'],
      '5xl': ['40px', '1.5'],
      '6xl': ['42px', '1.5'],
      '7xl': ['48px', '1.5'],
      '8xl': ['64px', '1.5'],
    },
    extend: {
      colors: {
        red: {
          light: '#AA0601',
          dark: '#650300',
        },
      },
      backgroundImage: {
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}