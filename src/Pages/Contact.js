import React, { useEffect } from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Header/>
      <Footer/>
    </>
  )
}

export default Contact
