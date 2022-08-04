module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2400px',
      },
      boxShadow: {
        "3xl": "rgb(0, 0, 0, 0.25) 0px 4px 20px 0px",
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("children-svgs", "& svg");
      },
    ],
  },
};
