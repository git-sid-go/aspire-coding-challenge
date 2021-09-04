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
      fontSize: {
        xxs: ".563rem",
      },
      boxShadow: {
        bottomnav: "0 -3px 6px 0 #00000014",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
