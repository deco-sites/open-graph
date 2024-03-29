/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1120px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        secondary: "#F5F6F6",
        "divider-blue": "#2E6ED9",
        divider: "#D4DBD7",
        transparent: "transparent",
        "linkedin-bg": "#EFF3F8",
        "facebook-bg": "#F0F2F5",
        "discord-bg": "#EEEFF1",
      },
      textColor: {
        primary: "#2F3031",
        secondary: "#161616",
        third: "#2E6ED9",
        common: "#66736C",
      },
      borderColor: {
        "light-border": "#D4DBD7",
      },

      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
