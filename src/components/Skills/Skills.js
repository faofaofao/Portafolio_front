import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { src: '/images/html_logo.png', alt: 'HTML' },
  { src: '/images/css_logo.png', alt: 'CSS' },
  { src: '/images/bootstrap_logo.png', alt: 'Bootstrap' },
  { src: '/images/tailwind_logo.png', alt: 'Tailwind' },
  { src: '/images/js_logo.png', alt: 'JavaScript' },
  { src: '/images/nodejs_logo.png', alt: 'Node.js' },
  { src: '/images/express_logo.png', alt: 'Express' },
  { src: '/images/react_logo.png', alt: 'React' },
  { src: '/images/nextjs_logo.png', alt: 'Next.js' },
  { src: '/images/vite_logo.png', alt: 'Vite' },
  { src: '/images/firebase_logo.png', alt: 'Firebase' },
  { src: '/images/mongodb_logo.png', alt: 'MongoDB' },
  { src: '/images/github_logo.png', alt: 'GitHub' }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // Reducido a 600ms para una aparición más rápida
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#EDF2F4]" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#2B2D42]">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-36 w-36 bg-[#8D99AE] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`} // Reducido el retraso a 50ms para una aparición más rápida
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="h-24 w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
