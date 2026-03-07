/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
  // ... other Tailwind configurations
}

tailwind.config = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    }
  }
}