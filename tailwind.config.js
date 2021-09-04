module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "app-primary": "#0C365A",
        "app-secondary": "#EDF3FF",
        "app-tertiary": "#01D167",
        "app-semi-primary": "#EDF3FF",
        "app-bluish-grey": "#FAFCFF",
        "app-blue": "#325BAF",
        "transaction-blue": "#009DFF1A",
        "transaction-green": "#00D6B51A",
        "transaction-red": "#F251951A",
        white: "#FFF",
      },
      textColor: {
        "btn-primary": "#23CEFD",
        "app-primary": "#0C365A",
        "app-black": "#222222",
        "app-grey": "#AAAAAA",
        "app-green": "#01D167",
        "app-blue": "#325BAF",
      },
      colors: {
        grey: "#F0F0F0",
        grey2: "#F5F5F5",
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
