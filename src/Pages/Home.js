import React, { useEffect } from 'react'
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import HeroSetion from '../Components/HeroSetion/HeroSetion';
import Ido from '../Components/Ido/Ido';
import Footer from '../Components/Footer/Footer.js';
import { useLocation } from 'react-router-dom';
import Layout from '../Components/Layout';
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Layout keywords={'javascript,loopcod,muhammed nizamudheen,nizamudheen,muhammed nizamudheen M,software developer,developer,software engineer,full-stack developer,mern developer,web application'}>
    <Header/>
    <HeroSetion/>
    <About/>
    <Ido/>
    <Footer/>
    </Layout>
    </>
  )
}

export default Home
