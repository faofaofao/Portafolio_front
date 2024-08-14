import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      setIndex((prevIndex) => {
        if (prevIndex < text.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText('');
          setIndex(0);
        }, 1000);
        return prevIndex;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [text, index]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
      <div className="absolute inset-0 bg-[#4a3c6c] bg-opacity-60"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full relative z-10">
        <div className="text-center md:text-left text-[#FFFFFF] md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 custom-typewriter-text">
            <TypewriterEffect text="Pedro Cuevas Lavin" />
          </h1>
          <p className="text-xl mb-6">
          Desarrollador web Full-Stack con experiencia en crear aplicaciones completas. Trabajo en el diseño de interfaces y en el desarrollo de funcionalidades tanto en el front-end como en el back-end, buscando siempre ofrecer soluciones efectivas.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="bg-[#e64a19] hover:bg-[#d32f2f] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contáctame
            </a>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-[#e64a19] hover:bg-[#d32f2f] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/images/herojs_icon.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg border-4 border-[#e64a19] w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
