import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/projects') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Header/>
      <h1>Projects</h1>
      <h1>Projects</h1>
      <Footer/>
    </>
  )
}

export default Projects
