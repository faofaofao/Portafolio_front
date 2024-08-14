// src/components/Hero/Hero.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Hero.module.css'; // Importa el CSS módulo

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Nuevo estado para manejar el tipo de escritura

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      setIndex((prevIndex) => {
        if (prevIndex < text.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        setIsTyping(false); // Dejar de escribir
        setTimeout(() => {
          setDisplayedText('');
          setIndex(0);
          setIsTyping(true); // Reiniciar el efecto
        }, 2000); // Tiempo de permanencia del texto visible
        return prevIndex;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{displayedText}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#00bfae] to-[#0072ff] opacity-30 blur-md -z-10"></span>
      {/* Cursor que parpadea */}
      <span 
        className={`absolute top-0 right-0 h-full border-r-2 border-[#00bfae] ${!isTyping && styles.animateCursor}`}
      ></span>
    </span>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#00c6ff] to-[#0072ff]">
      <div className="absolute inset-0 bg-[#1e2a38] bg-opacity-60"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full relative z-10">
        <div className="text-center md:text-left text-[#FFFFFF] md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 custom-typewriter-text relative">
            <TypewriterEffect text="Pedro Cuevas Lavin" />
          </h1>
          <p className="text-xl mb-6">
            Desarrollador web Full-Stack con experiencia en crear aplicaciones completas. Trabajo en el diseño de interfaces y en el desarrollo de funcionalidades tanto en el front-end como en el back-end, buscando siempre ofrecer soluciones efectivas.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="bg-[#00bfae] hover:bg-[#009688] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contáctame
            </a>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-[#00bfae] hover:bg-[#009688] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/images/herojs_icon.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg border-4 border-[#00bfae] w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
