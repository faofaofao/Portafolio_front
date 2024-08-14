// src/components/Footer.js
const Footer = () => (
  <footer className="bg-gray-900 text-white p-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Botón a la izquierda */}
      <div className="flex justify-start mb-4 md:mb-0">
        <a
          href="#contact" // Enlace de ejemplo; reemplaza con el destino deseado
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Contactar
        </a>
      </div>

      {/* Texto de derechos reservados centrado */}
      <div className="text-center flex-1">
        <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
      </div>

      {/* Íconos de redes sociales */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/faoenrico/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 border border-gray-700 p-1 rounded-full"
        >
          <Image
            src="/images/instagram_icon.png"
            alt="Instagram"
            className="h-8 w-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-alberto-enrico-cuevas-lav%C3%ADn-1645191a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 border border-gray-700 p-1 rounded-full"
        >
          <Image
            src="/images/linkedin_icon.png"
            alt="LinkedIn"
            className="h-8 w-8"
          />
        </a>
        <a
          href="https://github.com/faofaofao"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 border border-gray-700 p-1 rounded-full"
        >
          <Image
            src="/images/github_icon.png"
            alt="GitHub"
            className="h-8 w-8"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
