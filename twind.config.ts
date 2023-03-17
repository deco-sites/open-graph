/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        secondary: "#F5F6F6",
        divider: "#D4DBD7",
        transparent: "transparent",
        "linkedin-bg": "#EFF3F8",
      },
      textColor: {
        primary: "#2F3031",
        secondary: "#161616",
        common: "#66736C",
      },

      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
