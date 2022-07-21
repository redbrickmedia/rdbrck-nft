module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgb(38, 57, 77) 0px 0px 24px 5px",
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("children-svgs", "& svg");
      },
    ],
  },
};
