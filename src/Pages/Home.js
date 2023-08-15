import React, { useEffect } from 'react'
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import HeroSetion from '../Components/HeroSetion/HeroSetion';
import Ido from '../Components/Ido/Ido';
import Footer from '../Components/Footer/Footer.js';
import { useLocation } from 'react-router-dom';
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Header/>
    <HeroSetion/>
    <About/>
    <Ido/>
    <Footer/>
    </>
  )
}

export default Home
