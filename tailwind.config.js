/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // İstersen QR Code tasarımındaki özel renkleri buraya ekleyebilirsin
        'slate-300': '#D5E1EF',
        'slate-500': '#68778D',
        'slate-900': '#1F314F',
      },
    },
  },
  plugins: [],
}