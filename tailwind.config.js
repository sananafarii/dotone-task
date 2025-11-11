/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#000000',
        'brand-dark': '#111111',
        surface: '#F5F5F5',
        primary: '#424242',
        'brand-contrast': '#FFFFFF',
      },
      borderRadius: {
        'xl-18': '18px',
        'lg-14': '14px',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // این خط مهمه!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Abar Low FaNum', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#F5F5F5',
          800: '#424242',
        },
      },
      // فاصله‌ها و اندازه‌ها رو دستی اضافه می‌کنیم
      spacing: {
        '24': '24px',
        '108': '108px',
        '1224': '1224px',
      },
      borderRadius: {
        '18': '18px',
        '14': '14px',
      },
      fontSize: {
        '16': '16px',
        '14': '14px',
      },
      height: {
        '60': '60px',
        '44': '44px',
        '40': '40px',
      },
      width: {
        '58.7': '58.7px',
        '162': '162px',
      },
    },
  },
  plugins: [],
}