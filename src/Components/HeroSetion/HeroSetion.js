import './HeroSetion.css'
import React from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import Photo from '../../Images/Photo.avif'
function HeroSetion() {
  return (
    <section className='banner row'>
      
       <div className='col-11 col-md-4 col-lg-4 m-auto p-5'>
        <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }} src={Photo} alt={Photo} className='img-fluid ban-img' />
        </div>
        <div className='container mt-auto mb-auto col-11 pb-4 col-md-6 col-lg-6 text-center'>
          
          <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='display-3 name1'>Muhammed Nizamudheen M
           </motion.div>
           <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='display-6 slogan'>
           <TypeAnimation
           sequence={[
             'MERN DEVELOPER',
             4000,
             '-I Build Things for Web',
             4000,
           ]}
           wrapper="span"
           speed={50}
           repeat={Infinity}
         />
         </motion.div>
        </div>
    </section>
  )
}

export default HeroSetion
