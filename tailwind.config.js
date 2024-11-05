/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#fcf4e6", 
        customBg1: "#f4e5cb",
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(5,75,28,1) 0%, rgba(59,131,86,1) 100%)',
      },
    },
  },
  plugins: [],
}

