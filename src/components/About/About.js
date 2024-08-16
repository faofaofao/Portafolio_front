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
    <section id="about" className="py-16 bg-gradient-to-b from-[#2D3047] to-[#1E2133] text-[#A8AAB8]"> {/* Fondo actualizado */}
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
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" style={{ color: '#CACDDB' }}>
              Desde que empecé con el desarrollo web, me atrajo la capacidad de transformar ideas en aplicaciones funcionales a través del código. He adquirido experiencia práctica a lo largo de proyectos realizados durante mi formación, lo cual me ha permitido desarrollar soluciones digitales efectivas.
            </p>
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200" style={{ color: '#A8AAB8' }}>
              A menudo, los problemas en programación se presentan en la lógica, y me enfoco en entender cómo resolver estos desafíos para comunicarme eficazmente con las tecnologías. Disfruto escribir código y enfrentar los retos técnicos, especialmente en el backend, donde trabajo en la estructura y funcionalidad de las aplicaciones.
            </p>
            <p className="leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="400" style={{ color: '#878A99' }}>
              Mi objetivo es seguir aprendiendo y creciendo profesionalmente mientras colaboro en proyectos de equipo y gestiono iniciativas independientes. Estoy comprometido a aplicar mis habilidades en proyectos que tengan un impacto real y a seguir enfrentando desafíos técnicos en mi carrera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
