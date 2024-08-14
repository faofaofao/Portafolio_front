/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Actualiza esta ruta según la ubicación de tus archivos
    './public/index.html'         // Si usas HTML directamente
  ],
  darkMode: 'media', // Puedes eliminar esta línea si no estás utilizando el modo oscuro
  theme: {
    extend: {},
  },
  plugins: [],
}
