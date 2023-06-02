/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "quote-card": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      screens: {
        vsm: "370px",
      },
      colors: {
        primary: "#5294e2",
        "primary-2": "#1e79e6",
        "dark-1": "#1b1e26",
        "dark-2": "#20232b",
        "dark-3": "#272c39",
        "gray-1": "#4c515c",
        "text-color": "#f1f1f1",
        "text-color-light": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
