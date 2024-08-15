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
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#2B2D42]" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#EDF2F4]">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative h-36 w-36 bg-gradient-to-b from-[#8D99AE] to-[#4A5568] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="h-28 w-28 object-contain transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#2B2D42] text-[#EDF2F4] text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.alt}
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#EDF2F4] rounded-full pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
