/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#e6f4df", 
        customBg1: "#f7eed6",
        customBgGreen: "#62865a",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(118,154,110) 0%, rgba(31,66,32) 100%)',
      },
    },
  },
  plugins: [],
}

//#f4e5cb     #fcf4e6 