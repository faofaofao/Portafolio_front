import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Prjects/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Mi Portafolio</title>
      <meta name="description" content="Portafolio de [Tu Nombre]" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header />
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;



