import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
    <section id="about" className="py-16 bg-gradient-to-b from-[#40261F] to-[#2F1C17] text-[#D8C0B5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Imagen a la izquierda en pantallas grandes */}
          <div className="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
            <Image
              src="/images/aboutjs_icon.png"
              alt="Sobre mí"
              width={400}
              height={300}
              className="p-4 max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>
          {/* Texto a la derecha en pantallas grandes */}
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" style={{ color: '#F2C4B7' }}>
              Desde que empecé con el desarrollo web, me atrajo la capacidad de transformar ideas en aplicaciones funcionales a través del código. He adquirido experiencia práctica a lo largo de proyectos realizados durante mi formación, lo cual me ha permitido desarrollar soluciones digitales efectivas.
            </p>
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200" style={{ color: '#D8C0B5' }}>
              A menudo, los problemas en programación se presentan en la lógica, y me enfoco en entender cómo resolver estos desafíos para comunicarme eficazmente con las tecnologías. Disfruto escribir código y enfrentar los retos técnicos, especialmente en el backend, donde trabajo en la estructura y funcionalidad de las aplicaciones.
            </p>
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="400" style={{ color: '#C49B85' }}>
              Mi objetivo es seguir aprendiendo y creciendo profesionalmente mientras colaboro en proyectos de equipo y gestiono iniciativas independientes. Estoy comprometido a aplicar mis habilidades en proyectos que tengan un impacto real y a seguir enfrentando desafíos técnicos en mi carrera.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleExpand}
            className="text-[#B4654A] focus:outline-none hover:text-[#D89C7A]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {expanded ? '▲ Ver menos' : '▼ Ver más'}
          </button>
        </div>
        {expanded && (
          <div className="mt-8" data-aos="fade-down">
            <p className="leading-relaxed text-lg md:text-xl" style={{ color: '#F2C4B7' }}>
              Aquí puedes añadir más información sobre ti o tu trabajo. Por ejemplo, podrías hablar sobre tus hobbies, experiencias adicionales o cualquier otra cosa que desees compartir.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
