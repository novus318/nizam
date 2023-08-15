import React, { useEffect } from 'react'
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from '../Components/Footer/Footer';
import { MDBIcon } from 'mdb-react-ui-kit';
import awsIcon from '../Images/icons8-amazon-web-services.svg'
import Illustrator from '../Images/icons8-adobe-illustrator.svg'
import Photoshop from '../Images/icons8-adobe-photoshop.svg'
import Firebase from '../Images/icons8-firebase.svg'
import Motion from '../Images/framer-motion.svg'
import Postman from '../Images/postman-icon.svg'
function AboutPage() {
  const location = useLocation();
  const skills = ['JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'HTML',
  'CSS',
  'Git',
  'Express.js',
  'Redux',
  'RESTful APIs',
  'Bootstrap',];
  const tools = [
    { name: 'AWS', icon: awsIcon },
    { name: 'Framer Motion', icon: Motion },
    { name: 'Adobe Illustrator', icon: Illustrator },
    { name: 'Adobe Photoshop', icon: Photoshop },
    { name: 'Firebase', icon: Firebase },
    { name: 'Postman', icon: Postman }
  ];
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
      <div className='row m-auto mt-5 container'>
      <div className='col-12 col-md-3'>
      <motion.h1
            className="me"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0, color: "#233746" }}
            transition={{ duration: 0.2}}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <MDBIcon fas icon="arrow-circle-right" style={{color:'#cd6242'}}/><motion.span
            whileHover={{color:'#cd6242'}}
           >Skills</motion.span>
          </motion.h1>
<div className='m-auto mt-3'>
         <ul>
         {skills.map((skill, index) => (
              <li className='list' key={index}>{skill}</li>
            ))}
         </ul>
        </div>
        </div>
        <div className='col-12 col-md-9 mt-auto mb-auto'>
  <motion.h1
    className='text-center me'
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0, color: '#233746' }}
    transition={{ duration: 0.2 }}
    style={{
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    }}
  >
    <MDBIcon fas icon='arrow-circle-right' style={{ color: '#cd6242' }} />
    <motion.span whileHover={{ color: '#cd6242' }}>Tools</motion.span>
  </motion.h1>
  <div className='row justify-content-center m-auto'>
    {tools.map((tool, index) => (
      <div key={index} className='col-4 col-md-4 text-center'>
        <div className='col-6 m-auto'>
          <img src={tool.icon} alt={tool.name} className='img-fluid' />
        </div>
        <p className='para mt-1'>{tool.name}</p>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Education Section */}
      <div className='container mt-5'>
      <motion.h1
            className="me"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0, color: "#233746" }}
            transition={{ duration: 0.2}}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <MDBIcon fas icon="arrow-circle-right" style={{color:'#cd6242'}}/><motion.span
            whileHover={{color:'#cd6242'}}
           >Education</motion.span>
          </motion.h1>
        <div className='row'>
          <div className='col-md-6'>
            <h4>[Degree] - [University]</h4>
            <p>[Year]</p>
          </div>
          {/* Add more education entries */}
        </div>
      </div>

      {/* Experience Section */}
      <div className='container mt-5'>
        <h2 className='text-center mb-4'>Experience</h2>
        <div className='row'>
          <div className='col-md-6'>
            <h4>[Position] - [Company]</h4>
            <p>[Date]</p>
            <p>[Description]</p>
          </div>
          {/* Add more experience entries */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutPage
