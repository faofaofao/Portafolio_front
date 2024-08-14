import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-[#004e92] to-[#0056d2] text-white"> {/* Fondo degradado más oscuro */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Imagen a la izquierda en pantallas grandes */}
          <div className="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
            <Image
              src="/images/aboutjs_icon.png"
              alt="Sobre mí"
              width={400} // Ajusta el ancho según el tamaño real de la imagen
              height={300} // Ajusta la altura según el tamaño real de la imagen
              className="rounded-lg shadow-lg bg-white p-4 max-w-xs md:max-w-md lg:max-w-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Texto a la derecha en pantallas grandes */}
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up">
              Desde que empecé con el desarrollo web, me atrajo la capacidad de transformar ideas en aplicaciones funcionales a través del código. He adquirido experiencia práctica a lo largo de proyectos realizados durante mi formación, lo cual me ha permitido desarrollar soluciones digitales efectivas.
            </p>
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
              A menudo, los problemas en programación se presentan en la lógica, y me enfoco en entender cómo resolver estos desafíos para comunicarme eficazmente con las máquinas. Disfruto escribir código y enfrentar los retos técnicos, especialmente en el backend, donde trabajo en la estructura y funcionalidad de las aplicaciones.
            </p>
            <p className="text-[#F1F1F1] leading-relaxed mb-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="400">
              Mi objetivo es seguir aprendiendo y creciendo profesionalmente mientras colaboro en proyectos de equipo y gestiono iniciativas independientes. Estoy comprometido a aplicar mis habilidades en proyectos que tengan un impacto real y a seguir enfrentando desafíos técnicos en mi carrera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
