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
        'soft-sm': '0 2px 8px -2px rgba(75, 102, 89, 0.04)',
        'soft': '0 8px 30px rgba(75, 102, 89, 0.03)',
        'soft-md': '0 12px 40px rgba(75, 102, 89, 0.04)',
        'soft-lg': '0 20px 50px rgba(75, 102, 89, 0.06)',
      },
      colors: {
        cream: {
          50: '#fdfcf8',   // light warm cream
          100: '#faf6ee',  // aesthetic linen background
          200: '#f0e9dc',  // warm earthy sand card background
          250: '#e9dfd0',  // intermediate warm sand
          300: '#e1d7c4',  // soft border color
          350: '#dad0bd',  // intermediate soft border
          400: '#d2c3ab',
          450: '#c8b99e',  // intermediate dark cream
          500: '#c2ae91',
          550: '#b39f81',  // intermediate darker cream
          600: '#a38f71',
          650: '#938063',  // intermediate dark text
          700: '#837154',
        },
        maroon: {
          50: '#f4f7f5',   // pale sage green tint
          100: '#e5ede9',  
          200: '#cfded5',
          300: '#b2ccbf',
          400: '#90ab9c',
          500: '#7ea18f',  // rose sage accent in dark mode
          550: '#6e907f',  // intermediate rose sage
          600: '#5e7f6e',
          700: '#4b6659',  // deep sage primary accent in light mode
          800: '#394e43',
          850: '#2a3831',  // intermediate deep forest sage
          900: '#1b221e',  // dark card background (forest slate)
          950: '#111613',  // dark mode canvas background (deep olive slate)
        }
      }
    },
  },
  plugins: [],
}
