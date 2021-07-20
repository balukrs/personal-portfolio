module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      xmd: { max: "900px" },
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
    },
    extend: {
      keyframes: {
        rubber: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "35%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "45%": {
            transform: "scale3d(0.75, 1, 1)",
          },
          "60%": {
            transform: "scale3d(1.2, 0.8, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        rotater: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        rubber: "rubber 1s",
        rotater: "rotater 2s infinite linear",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
