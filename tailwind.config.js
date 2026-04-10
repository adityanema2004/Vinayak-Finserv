/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          50:  '#E8ECF3',
          100: '#C5D0E3',
          200: '#8FA3C6',
          300: '#5A76AA',
          400: '#2E4E8D',
          500: '#0A1628',
          600: '#091422',
          700: '#07101C',
          800: '#050C15',
          900: '#03070E',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50:  '#FBF5E5',
          100: '#F5E8C1',
          200: '#EBD182',
          300: '#E1BA43',
          400: '#C9A84C',
          500: '#A88A35',
          600: '#876C24',
          700: '#654E13',
          800: '#433002',
          900: '#211200',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0A1628 0%, #122040 50%, #0A1628 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C878 50%, #C9A84C 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201, 168, 76, 0.3)',
        'navy': '0 4px 24px rgba(10, 22, 40, 0.4)',
        'card': '0 2px 16px rgba(10, 22, 40, 0.08)',
        'card-hover': '0 8px 40px rgba(10, 22, 40, 0.16)',
      },
    },
  },
  plugins: [],
}
