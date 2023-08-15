import React, { useEffect } from 'react'
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Header/>
    <div className='mt-5 pt-5'>
      <About/>
      </div>
      <Footer/>
    </>
  )
}

export default AboutPage
