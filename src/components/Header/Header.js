const Header = () => (
  <header className="bg-[#2B2D42] bg-opacity-75 text-[#EDF2F4] p-4 fixed w-full top-0 z-50 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <a 
          href="#hero" 
          className="text-lg font-bold hover:text-[#EF233C] transition-colors duration-300"
        >
          Mi Portafolio
        </a>
        <Image
          src="/images/logo.png" // Reemplaza con la ruta de tu imagen
          alt="Logo"
          className="w-8 h-8 md:w-10 md:h-10" // Aumenta el tamaño del logo en pantallas más grandes
        />
      </div>
      <ul className="flex space-x-6">
        <li>
          <a 
            href="#about" 
            className="hover:text-[#EF233C] transition-colors duration-300 text-base md:text-lg"
          >
            Sobre mí
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className="hover:text-[#EF233C] transition-colors duration-300 text-base md:text-lg"
          >
            Formación
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className="hover:text-[#EF233C] transition-colors duration-300 text-base md:text-lg"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="hover:text-[#EF233C] transition-colors duration-300 text-base md:text-lg"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="hover:text-[#EF233C] transition-colors duration-300 text-base md:text-lg"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
