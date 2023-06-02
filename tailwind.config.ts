/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5294e2",
        "primary-2": "#1e79e6",
        "dark-1": "#24282f",
        "dark-2": "#2c313a",
        "dark-3": "#363b4a",
        "gray-1": "#646971",
        "text-color": "#f1f1f1",
        "text-color-light": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
