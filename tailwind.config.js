module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "app-primary": "#0C365A",
        "app-secondary": "#EDF3FF",
        "app-tertiary": "#01D167",
        white: "#FFF",
      },
      textColor: {
        "btn-primary": "#23CEFD",
      },
      fontSize: {
        xxs: ".563rem",
        xsm: ".813rem",
        xxl: "1.375rem",
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
