module.exports = {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgb(38, 57, 77) 0px 20px 30px -10px",
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("children-svgs", "& svg");
      },
    ],
  },
}
