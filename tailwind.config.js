module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [
      require("tw-elements/dist/plugin.cjs"),
      require("@tailwindcss/typography")],
  darkMode: "class"
};
