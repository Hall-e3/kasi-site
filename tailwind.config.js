/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#1E1B1B",
        navy: "#1D5A25",
        navydeep: "#1E1B1B",
        green: "#287E33",
        greenbright: "#3AB54A",
        amber: "#D0DB57",
        steel: "#68707B",
        line: "#DEE2D6",
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(29,90,37,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,90,37,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
