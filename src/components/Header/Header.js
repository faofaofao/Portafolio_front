import { useEffect, useState } from 'react';
import styles from './Header.module.css'; // Importa el CSS módulo

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Check if the user scrolled down more than 50px
      if (scrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <a href="#hero" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </a>
      </div>

      {/* Header */}
      <header className={`${styles.header} ${isHeaderVisible ? styles.headerVisible : styles.headerHidden}`}>
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
    </>
  );
};

export default Header;
