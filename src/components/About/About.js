import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 bg-[#F0F4F8]"> {/* Fondo sólido */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Imagen a la izquierda en pantallas grandes */}
          <div className="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
            <img
              src="/images/aboutjs_icon.png"
              alt="Sobre mí"
              className="rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Texto a la derecha en pantallas grandes */}
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#2C3E50]">Sobre mí</h2>
            <p className="text-[#555] leading-relaxed">
  Desde que empecé con el desarrollo web, me atrajo la capacidad de transformar ideas en aplicaciones funcionales a través del código. He adquirido experiencia práctica a lo largo de proyectos realizados durante mi formación, lo cual me ha permitido desarrollar soluciones digitales efectivas.
</p>
<p className="text-[#555] leading-relaxed mt-4">
  A menudo, los problemas en programación se presentan en la lógica, y me enfoco en entender cómo resolver estos desafíos para comunicarme eficazmente con las máquinas. Disfruto escribir código y enfrentar los retos técnicos, especialmente en el backend, donde trabajo en la estructura y funcionalidad de las aplicaciones.
</p>
<p className="text-[#555] leading-relaxed mt-4">
  Mi objetivo es seguir aprendiendo y creciendo profesionalmente mientras colaboro en proyectos de equipo y gestiono iniciativas independientes. Estoy comprometido a aplicar mis habilidades en proyectos que tengan un impacto real y a seguir enfrentando desafíos técnicos en mi carrera.
</p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
