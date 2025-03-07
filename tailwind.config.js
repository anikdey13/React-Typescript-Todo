/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans your React files for Tailwind classes
  ],
  darkMode: 'class', // Enables manual dark mode with the 'dark' class
  theme: {
    extend: {}, // Add customizations here if needed
  },
  plugins: [],
};