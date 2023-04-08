/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    duration: {
        animationDuration: "1s"
    },
    extend: {
      
    },
  },
  plugins: [],
}

