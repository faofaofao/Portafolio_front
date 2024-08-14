import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="education" className="py-20 bg-[#EDF2F4]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#2B2D42]" data-aos="zoom-in">
          Formación
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: '/images/udemy_logo.png',
              title: 'JavaScript & NODEJS - Udemy',
              date: '02-2023 - 05-2023',
            },
            {
              src: '/images/desafioLatam_logo.png',
              title: 'JavaScript FullStack - Desafio Latam',
              date: '05-2023 - 09-2023',
            },
            {
              src: '/images/udd_icon.png',
              title: 'Desarrollo web FullStack - Universidad del Desarrollo',
              date: '11-2023 - 08-2024',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#8D99AE] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 min-h-[350px] flex flex-col"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="flex-grow">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="h-48 w-full object-cover mb-6 rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2B2D42]">{item.title}</h3>
              <p className="text-[#EDF2F4]">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
