import React from 'react';
import { motion } from 'framer-motion';
import "../About/About.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mongo from '../../Images/mongo.png'
import express from '../../Images/expressjs.png'
import react from '../../Images/physics (1).png'
import node from '../../Images/node-js.png'
import JS from '../../Images/js.png'
import Html from '../../Images/html.png'
import Css from '../../Images/css-3.png'
import bootsrap from '../../Images/bootstrap.png'
import firebase from '../../Images/firebase.png'
import Aws from '../../Images/aws.png'
import Digital from '../../Images/digital.png'
import Git from '../../Images/git.png'
import Framer from '../../Images/framer.png'
const brandImages = [mongo,express,react,Css,node,JS,Html,bootsrap];
const brandImages2 = [firebase,Aws,Digital,Git,Framer];
function Ido() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, 
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2, 
            },
          },
        ]
  };
  return (
    <div className='container-fluid mt-5'>
      <div className="text-center">
          <motion.h1
            className="me"
            whileHover={{scale:1.1,color:'#cd6242'}}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, color: "#233746" }}
            transition={{ duration: 0.6 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            What I do ?
          </motion.h1>
        </div>

     <div className='row mt-4 justify-content-center'>
     <motion.div className='col-11 col-md-6 col-lg-5'>
        <div>
        <Slider {...settings}>
      {brandImages.map((image, index) => (
        <div key={index} className='p-5'>
          <img src={image} alt={`Brand ${index}`} className="mt-3 img-fluid no-focus-outline" />
        </div>
      ))}
    </Slider>
        </div>
        <div>
        <Slider {...settings}>
      {brandImages2.map((image, index) => (
        <div key={index} className='p-5'>
          <img src={image} alt={`Brand ${index}`} className="mt-3 img-fluid no-focus-outline" />
        </div>
      ))}
    </Slider>
        </div>
      </motion.div>

            <motion.div className='col-11 col-md-6 col-lg-6'>
            <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
      >
          <h4 className='para'>
          <motion.span
          whileHover={{color:'#233746',cursor:'pointer'}}
          animate={{ opacity: 1, y: 0, color: "#cd6242" }}>MERN Stack :</motion.span> I specialize in developing applications using
          MongoDB,Express.js,React,and Node.js.
          </h4>
      </motion.div>
        <ul>
            <li className='list'>I bring ideas to life using JSX, CSS, and JavaScript. Crafting engaging user interfaces and responsive designs</li>
            <li className='list'>NPM to manage dependencies and streamline the development process</li>
            <li className='list'>Developing online stores with seamless shopping experiences and secure payment gateways.</li>
            <li className='list'>Proficient in using Git for version control and collaboration.</li>
            <li className='list'>Experienced in integrating APIs to boost functionality.</li>
        </ul>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}  
      >

        <h4 className='para text-center'>From concept to deployment, I provide end-to-end development solutions.
        I Develop by analyzing problems and enhance user experiences.</h4>
      </motion.div>
            </motion.div>
     </div>
    </div>
  );
}

export default Ido;
