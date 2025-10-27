/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#00BFA6',
        'soft-mint': '#A7E5E2',
        'crisp-white': '#F8FEFF',
        'accent-blue': '#3EB4C1',
        'text-dark': '#1B2B34',
        'text-light': '#6E8A8F',
        'success-green': '#4BD37B',
        'error-red': '#FF6B6B',
      },
      borderRadius: {
        'card': '20px',
        'button': '30px',
      },
    },
  },
  safelist: [
    'bg-crisp-white',
    'text-text-dark',
    'bg-primary-teal',
    'bg-soft-mint',
    'bg-accent-blue',
    'text-primary-teal',
    'text-text-light',
    'bg-success-green',
    'bg-error-red',
    'text-error-red',
    'border-primary-teal',
    'border-error-red',
    'hover:bg-soft-mint',
    'rounded-card',
    'rounded-button',
  ],
  plugins: [],
}
