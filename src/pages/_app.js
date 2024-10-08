// src/pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
