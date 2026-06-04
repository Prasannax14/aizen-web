/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(255, 45, 111, 0.08)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 12px 40px rgba(255, 45, 111, 0.08)',
        'soft-lg': '0 20px 50px rgba(255, 45, 111, 0.10)',
      },
      colors: {
        cream: {
          50: '#ffffff',     // Primary White
          100: '#EDEDED',    // Soft White
          200: '#E5E5EA',    // Light gray-white
          250: '#D1D1D6',    // Intermediate light gray
          300: '#C7C7CC',    // Light border color
          350: '#AEAEB2',    // Intermediate border
          400: '#A1A1AA',    // Light Gray (Muted Text)
          450: '#8E8E93',    // Intermediate muted text
          500: '#6B6B75',    // Medium Gray (Text Secondary)
          550: '#5C5C60',    // Darker muted text
          600: '#48484A',    // Dark secondary text
          650: '#3A3A3C',    // Dark text
          700: '#1C1C22',    // Dark Charcoal (Primary dark text)
        },
        maroon: {
          50: '#FFF0F5',     // palest pink tint
          100: '#FFB6C1',    // light pink
          200: '#FF8DA1',    // soft pink
          300: '#FF5E8E',    // medium pink
          400: '#E91E63',    // Hot Magenta
          500: '#FF2D6F',    // Neon Pink (Primary Accent)
          550: '#D81B60',    // slightly deeper pink
          600: '#C7154B',    // deep pink
          700: '#A10F3A',    // Deep Crimson Gradient
          800: '#2A2A30',    // Dark Gray (Cards / Panels / Borders)
          850: '#1C1C22',    // Dark Charcoal (Cards / Panels bg)
          900: '#141418',    // Soft Black Gradient (Page bg)
          950: '#0F0F12',    // Deep Black (Background)
        }
      }
    },
  },
  plugins: [],
}
