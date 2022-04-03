module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM sans", "sans-serif"],
        display: ["Volkhov", "serif"],
      },
      colors: {
        gray: {
          50: "#F6FAFD",
        },
        orange: {
          DEFAULT: "#D9AC68",
        },
        blue: {
          DEFAULT: "#3EC1F3",
        },
        pink: {
          DEFAULT: "#F990BC",
        },
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [],
};
