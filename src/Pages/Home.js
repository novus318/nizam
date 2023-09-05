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
    <Layout keywords={'loopcod,muhammed nizamudheen,nizamudheen,Muhammed Nizamudheen M,software developer,developer,software engineer,full-stack,mern developer,web application,nizam,nizamudheen.tech'}>
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
