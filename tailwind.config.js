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
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['2rem', '1.5'],
      '4xl': ['2.25rem', '1.5'],
      '5xl': ['2.5rem', '1.5'],
      '6xl': ['2.625rem', '1.5'],
      '7xl': ['3rem', '1.5'],
      '8xl': ['4rem', '1.5'],
    },
    extend: {
      colors: {
        red: {
          light: '#AA0601',
          dark: '#650300',
        },
        'index-bg': '#FBF2F2',
        gray:{
          light: '#F2F2F2',
          default: '#DCDCDC',
          dark: '#555555',
        },
        
      },
      backgroundImage: {
        'banner-lg': "url('../images/home-header.png')",
        'banner-sm': "url('../images/home-header-sm.png')",
        'index-lg': "url('../images/index-bg.png')",
        'index-md': "url('../images/index-bg-md.png')",
        'index-sm': "url('../images/index-bg-sm.png')",
        'section4-1-lg': "url('../images/home-section4-1.png')",
        'section4-1-sm': "url('../images/home-section4-1-sm.png')",
        'section4-2-lg': "url('../images/home-section4-2.png')",
        'section4-2-sm': "url('../images/home-section4-2-sm.png')",
        'product-bg-1-lg': "url('../images/product-header-1.png')",
        'product-bg-2-lg': "url('../images/product-header-2.png')",
        'product-bg-3-lg': "url('../images/product-header-3.png')",
        'product-bg-4-lg': "url('../images/product-header-4.png')",
        'product-bg-1-sm': "url('../images/product-header-sm-1.png')",
        'product-bg-2-sm': "url('../images/product-header-sm-2.png')",
        'product-bg-3-sm': "url('../images/product-header-sm-3.png')",
        'product-bg-4-sm': "url('../images/product-header-sm-4.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}