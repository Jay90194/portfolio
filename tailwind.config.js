module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '128': '65rem',
      },
      backgroundImage: {
        'Welcome': "url('/images/Welcome.svg')",
      }
    },
  },
  plugins: [],
}
