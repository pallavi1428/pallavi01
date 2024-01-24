/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sssm: "240px",
      ssm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        'hash350905': '#350905',
      },
      textColor: {
        'hash350905': '#350905',
      }
    },
  },
  plugins: [],
};
