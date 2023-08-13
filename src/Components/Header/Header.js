import React, { useEffect, useState } from 'react';
import "./Header.css";
import { motion } from "framer-motion";
import logo from '../../Images/logo.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsNavOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 950);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        expand="md"
        className={`navbar ${isNavOpen ? 'nav-open' : ''}`}
      >
        <motion.div className='container'>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='logo ms-3'
            src={logo}
            alt='logo'
            onClick={scrollToTop}
          />

          {isSmallScreen && (
            <button className={`toggle-button ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
              <span className="toggle-icon"></span>
            </button>
          )}

          {!isSmallScreen && (
            <motion.div 
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`ms-auto`}
            >
              <div className='d-flex'>
                <Link className='nav-item' to='/'>HOME</Link>
                <Link className='nav-item' to='/about' >ABOUT</Link>
                <Link className='nav-item' to='/projects'>PROJECTS</Link>
                <Link className='nav-item' to='/contact'>CONECT ME</Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Navbar>

     {isSmallScreen && ( <motion.div
        initial={{ x: -250 }}
        animate={{ x: isNavOpen ? 0 : -250 }}
        transition={{ duration: 0.6 }}
        className={`nav-menu ${isNavOpen ? 'nav-menu-open' : ''}`}
      >
        <div className='d-flex flex-column'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='mb-5'
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className='logo ms-3'
              src={logo}
              alt='logo'
            />
          </motion.div>
          <Link to='/'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='nav-item mb-3'
          >
            HOME
          </motion.div>
          </Link>
          <Link to='/about'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='nav-item mb-3'
          >
            ABOUT
          </motion.div>
          </Link>
          <Link to='/projects'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='nav-item mb-3'
          >
            PROJECTS
          </motion.div>
          </Link>
          <Link to='/contact'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='nav-item mb-3'
          >
            CONNECT ME
          </motion.div>
          </Link>
        </div>
      </motion.div>)}
    </>
  )
}

export default Header;