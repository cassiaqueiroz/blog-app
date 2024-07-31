/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Paths to your page components
    './components/**/*.{js,ts,jsx,tsx}', // Paths to your UI components
    './app/**/*.{js,ts,jsx,tsx}', // Paths to your application files
    // Add any additional paths where Tailwind classes might be used
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
