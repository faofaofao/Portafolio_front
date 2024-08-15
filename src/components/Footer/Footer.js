// src/components/Footer.js
const Footer = () => (
  <footer className="bg-gray-900 text-white p-6">
    <div className="container mx-auto flex justify-center">
      {/* Íconos de redes sociales */}
      <div className="flex justify-center space-x-44">
        <a
          href="https://www.instagram.com/faoenrico/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:rotate-12 hover:bg-gray-800 border border-gray-700 p-3 rounded-full"
        >
          <img
            src="/images/instagram_icon.png"
            alt="Instagram"
            className="h-10 w-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-alberto-enrico-cuevas-lav%C3%ADn-1645191a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:rotate-12 hover:bg-gray-800 border border-gray-700 p-3 rounded-full"
        >
          <img
            src="/images/linkedin_icon.png"
            alt="LinkedIn"
            className="h-10 w-10"
          />
        </a>
        <a
          href="https://github.com/faofaofao"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:rotate-12 hover:bg-gray-800 border border-gray-700 p-3 rounded-full"
        >
          <img
            src="/images/github_icon.png"
            alt="GitHub"
            className="h-10 w-10"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
