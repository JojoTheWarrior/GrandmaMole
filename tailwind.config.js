/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Permanent Marker', 'cursive'],
        'body': ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#F5F5DC',
        primaryDark: '#F5F5EC',
        secondary: '#FFF8DC',
        accent1: '#8B4513',
        accent2: '#6B8E23',
        accent3: '#D2691E',
        textDark: '#3E2723',
        textGray: '#4B4B4B',
        textHover: '#a68f32',
      },
      backgroundImage: {
        'floral-wallpaper': "https://creativesilhouettes.ca/wp-content/uploads/2021/09/botanical-floral_pattern.jpg"
      }
    },
  },
  plugins: [],
}