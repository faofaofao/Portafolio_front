const Header = () => (
  <header className="bg-[#2B2D42] bg-opacity-75 text-[#EDF2F4] p-6 fixed w-full top-0 z-50 shadow-lg flex items-center">
    <div className="absolute top-0 left-0 flex items-center pl-4 h-full" style={{ marginTop: '5px' }}>
      <a href="#hero">
        <div className="w-24 h-full flex items-center">
          <img
            src="/images/logo.png" 
            alt="Logo"
            className="h-full w-auto object-contain cursor-pointer transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </a>
    </div>
    <nav className="container mx-auto flex justify-between items-center">
      <ul className="flex space-x-6 ml-auto">
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
