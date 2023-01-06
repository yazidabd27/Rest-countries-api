/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        DarkBlue: 'hsl(209, 23%, 22%)',
        vdb: 'hsl(207, 26%, 17%)',
        edb: 'hsl(200, 15%, 8%)',
        DarkGray: 'hsl(0, 0%, 52%)',
        vlg: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
