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
import Layout from '../Components/Layout';
function AboutPage() {
  const location = useLocation();
  const skills = ['JavaScript',
  'React',
  'Node.js',
  'MongoDB',
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
    <Layout title={'About me'}>
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
          <div className='col-12'>
            <h4 className='para'>Web Development <MDBIcon fas icon="angle-double-right" style={{color:'#cd6242'}}/> Self-taught</h4>
            <p className='para'>[Progress]</p>
            <ul>
              <li className='list'>Learned various web development technologies and frameworks.</li>
              <li className='list'>Built projects for practical skills.</li>
              <li className='list'>
          Developed responsive and user-friendly websites using my skills.
        </li>
        <li className='list'>
          Built RESTful APIs using Node.js and Express.js for backend development.
        </li>
        <li className='list'>
          Managed version control system using Git and GitHub.
        </li>
            </ul>
          </div>
          <div className='col-12'>
            <h4 className='para'>B.VOC-Software Development <MDBIcon fas icon="angle-double-right" style={{color:'#cd6242'}}/> St.Aloysius College (Mangalore)</h4>
            <p className='para'>[2021-2023_March]</p>
            <ul>
            <li className='list'>
          Enrolled in a software development program at St.Aloysius (Autonomus) College.
        </li>
        <li className='list'>Attended classes on basic programming,data structure,and networking</li>
        <li className='list'>Completed the 2nd year and decided to focus on self-learning.</li>
            </ul>
          </div>
          <div className='col-12'>
            <h4 className='para'>Higher Secondary <MDBIcon fas icon="angle-double-right" style={{color:'#cd6242'}}/> AKGVHSS (Payyannur)</h4>
            <p className='para'>[2019-2021]</p>
            <ul>
            <li className='list'>Completed higher secondary education with a focus on science.</li>
            </ul>
          </div>
        </div>
      </div>

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
           >Technical experience</motion.span>
          </motion.h1>
        <div className='row'>
          <div className='col-12'>
          <h4 className='para'>Freelance <MDBIcon fas icon="angle-double-right" style={{color:'#cd6242'}}/> Winndeal(UAE)</h4>
            <p className='para'>[2023]</p>
            <ul>  
            <li className='list'>Crafted a project for Winndeal-IT Solutions in UAE.</li>
            <li className='list'>Completed the project successfully within the specified timeframe.</li>
            <li className='list'>
          Developed and deliver a quality solution.
        </li>
        <li className='list'>Utilized React and other frame works to achieve the project's objectives.</li>
        <span onClick={()=>{window.open('https://winndeal.com/')}} className='list' style={{color:'#cd6242',cursor:'pointer'}}>winndeal.com</span>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </Layout>
    </>
  )
}

export default AboutPage
