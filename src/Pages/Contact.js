// Contact.js
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout";
import emailjs from "emailjs-com";
import { motion,useAnimation } from 'framer-motion';
import Footer from "../Components/Footer/Footer";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


 const SERVICE_ID_EMAIL='service_3spbets'
const EMAILJS_TEMPLATE_ID='template_v3q7i4l'
const EMAIL_USER_ID='S9OwkwUHVt4r-2P18'
  const handleEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };
    toast.success('Enquiry has been Sent', {
      style: {
        border: '1px solid #cd6242',
        padding: '10px',
        color: '#233746',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#cd6242',
      },
    });
    emailjs
      .send(SERVICE_ID_EMAIL,EMAILJS_TEMPLATE_ID, templateParams,EMAIL_USER_ID)
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          toast.error('Somthing wrong,Try again', {
            style: {
              border: '1px solid #fd0',
              padding: '10px',
              color: '#333333',
            },
            iconTheme: {
              primary: '#333333',
              secondary: '#fd0',
            },
          });
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionElements = document.querySelectorAll('.section');

    sectionElements.forEach((element) => {
      const elementTop = element.offsetTop;
      const desiredPosition = elementTop - 300; 

      if (scrollY > desiredPosition) {
        controls.start({ opacity: 1, y: 0 });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Layout title={"Connect with me"} keywords={'nizamudheen m,muhammed nizamudheen m,muhammed nizamudheen,nizam,web application,software developer,react,mern stack,web developer'}>
        <Header />
        <div className="mt-5 pt-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="container-fluid"
          >
            <div className="row mt-2 justify-content-center">
              <div className="col-12 col-md-8 mt-2">
                <motion.h1 transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, color: "#cd6242" }}
            whileTap={{ scale: 0.9 }}
            style={{
              color:'#233746',
              cursor: "pointer",
              transition: "color 0.2s ease",
            }} className="text-center mb-1 me">Connect With me</motion.h1>
                <h4 className="text-center mb-2 para">I'm excited to engage with you!</h4>
                <motion.form
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9 }}
                  onSubmit={handleEmail}
                  className="text-center mt-4"
                >
                  <input
          className="input col-12 p-2 mb-4"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input col-12 p-2 mb-4"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input col-12 p-2 mb-4"
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="input col-12 p-2 mb-4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
                  <motion.button transition={{ duration: 0.2 }}
            whileHover={{ scale: 0.99, color: "#fff" }}
            whileTap={{ scale: 0.99 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }} type="submit" className="col-12 p-2 mb-5 form-btn">
                    Connect
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer/>
      </Layout>
    </>
  );
}

export default Contact;
