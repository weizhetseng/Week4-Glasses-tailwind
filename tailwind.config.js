module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        red: {
          light: '#AA0601',
          dark: '#650300',
        }
      },
      backgroundImage: {
        'banner-lg': "url('../images/home-header.png')",
        'banner-sm': "url('../images/home-header-sm.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}