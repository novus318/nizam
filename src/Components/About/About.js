import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div className="container-fluid">
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
            Me in words
          </motion.h1>
        </div>
        <div className="row container-fluid section m-auto">
          <motion.div
            ref={ref}
            className={`col-10 col-md-10 mt-2 m-auto ${
              inView ? "animate" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <h4 className="para text-center">
              As a self-taught web developer, I am passionate about creating
              innovative solutions for the web. I bring a creative mindset to
              every project I undertake. I possess skills to build both the
              frontend and backend components of a web application.
            </h4>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
