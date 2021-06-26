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
          "50%": {
            backgroundPosition: "center",
          },
        },
      },
      animation: {
        rubber: "rubber 1s",
        mymove: "mymove 18s infinite",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
