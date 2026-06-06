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
          light: '#0D1F3C',
          dark: '#060F1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A07830',
        },
        steel: '#2563EB',
        lightbg: '#F5F6FA',
        textdark: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(10,22,40,0.10)',
        gold: '0 4px 20px rgba(201,168,76,0.3)',
      },
      borderRadius: {
        card: '12px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.4,0,0.2,1)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)',
      },
    },
  },
  plugins: [],
}
