module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children-svgs', '& svg')
    }
  ],
}