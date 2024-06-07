/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: {
          "hero-pattern": "url('/bill/app/asset/win98.png')",
         "bgg": "url('/bill/app/asset/bg.png')",
        },
      },
      fontFamily: {
        ustom: ["LEVI WINDOWS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
