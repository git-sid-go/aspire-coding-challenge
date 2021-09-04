module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0C365A",
        secondary: "#EDF3FF",
        white: "#FFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
