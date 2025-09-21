/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',  // 24px for mobile
        md: '2.5rem',       // 40px for tablet
        lg: '60px',         // 60px for desktop
      },
    },
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
        sans: ['Rogbold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
