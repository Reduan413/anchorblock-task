/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#404040",
        textColor2: "#4E5D78",
        backgroundColor: "#FDE9CC",
      },
      boxShadow: {
        "3xl":
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "4xl":
          "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "5xl": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "6xl":
          "0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
