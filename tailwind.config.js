module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
    screens: {},
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
        mymove: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        rubber: "rubber 1s",
        mymove: "mymove 0.5s ease",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
