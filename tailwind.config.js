module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0C365A",
        secondary: "#EDF3FF",
        tertiary: "#01D167",
        white: "#FFF",
      },
      textColor: {
        "btn-primary": "#23CEFD",
      },
      fontSize: {
        xxs: ".563rem",
        xsm: ".813rem",
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
