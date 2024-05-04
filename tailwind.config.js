// import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#91D0FF",
        secondary: "#F8D481",
        dark: "#303030",
        destructive: "#E51C00",
        green: "#29845A",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
  // prefix: "octaui-",
};
