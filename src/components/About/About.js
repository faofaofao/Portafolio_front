import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-t from-[#003366] to-[#004080] text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Imagen a la izquierda en pantallas grandes */}
          <div className="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
            <Image
              src="/images/aboutjs_icon.png"
              alt="Sobre mí"
              className="rounded-lg shadow-lg bg-white p-4 max-w-xs md:max-w-md lg:max-w-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Texto a la derecha en pantallas grandes */}
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up">
              Desde que empecé con el desarrollo web, me atrajo la capacidad de transformar ideas en aplicaciones funcionales a través del código...
            </p>
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
              A menudo, los problemas en programación se presentan en la lógica, y me enfoco en entender cómo resolver estos desafíos...
            </p>
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="400">
              Mi objetivo es seguir aprendiendo y creciendo profesionalmente mientras colaboro en proyectos de equipo y gestiono iniciativas independientes...
            </p>
            {expanded && (
              <div data-aos="fade-up" data-aos-delay="600">
                <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl">
                  Este es el contenido adicional que se muestra al hacer clic en "Ver más". Aquí puedes agregar más información sobre ti, tus proyectos, o cualquier otro detalle que quieras compartir.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Contenedor para el botón */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
          <button
            onClick={toggleExpand}
            className="bg-[#00bfae] hover:bg-[#009688] text-white font-bold py-2 px-4 rounded-full"
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
