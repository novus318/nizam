import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { motion } from "framer-motion";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBIcon,
} from 'mdb-react-ui-kit';  
import Layout from '../Components/Layout';

const video=[
  {
    name:'Winndeal',
    link:'https://dms-exp3.licdn.com/playlist/vid/D5605AQGQevwFTR47kQ/mp4-720p-30fp-crf28/0/1692022469849?e=1692770400&v=beta&t=Lm-KW9HnDfip7690ltl7gznJRz4M7H88v4Yn0-ykcH4'
  },
  {
    name:'Sitara-Ecommerce',
    link:'https://dms-exp3.licdn.com/playlist/vid/D5605AQFoZJvPU0IVRg/mp4-720p-30fp-crf28/0/1690807862137?e=1692774000&v=beta&t=7Yyu8r1F9QvG1eOdy5i7cD0rpHoSj3Csw4-kLnTwhyU'
  },
  {
    name:'Netflix-Clone',
    link:'https://dms-exp3.licdn.com/playlist/vid/D5605AQEiZVLywH0wCQ/mp4-720p-30fp-crf28/0/1688026578655?e=1692788400&v=beta&t=0MEojA0o96Q0EwJhOjauAFRTcb2fT2DG4A1MPETnV2U'
  },
   {
    name:'Olx-Clone',
    link:'https://dms-exp3.licdn.com/playlist/vid/D5605AQFGnL9Cy_r6NA/mp4-720p-30fp-crf28/0/1692186547534?e=1692792000&v=beta&t=jKi8Qhr4tWWc5jqPX7gxuTY90QXNSu2UQcB6UJGUK2I'
  }
]
const projects = [
  {
    name:'Winndeal',
    title: "IT Solutions Company Website",
    description: "Created a responsive web application using React, to satisfy the needs of an IT Solutions company based in the UAE...",
    projectPoints: [
      " Highlighting services, expertise, and mission, providing visitors with a clear understanding of the company's offerings.",
      " Integrated WhatsApp and various social media platforms to facilitate easy communication between the company and its clients.",
      " Implemented a user-friendly contact form using EmailJS, enabling visitors to reach out to the company directly. This smooth communication process enhances customer",
      " UI design and engaging animations crafted using Framer Motion.",
      "Compatibility with a responsive design approach. The website is optimized for various screen sizes, including smartphones, tablets, and desktops.",
      "Implemented the chatbot as a virtual customer support representative",
    ],
    endline:'The Modern technologies and a well-structured codebase sets the project up for future scalability',
    websiteLink: "https://winndeal.com/",
    githubLink: "https://github.com/novus318/winndeal",
  },
  {
    name:'Sitara',
    title: "Dynamic Women's Clothing Web Application",
    description: "Successfully designed and developed a dynamic women's clothing web application, implementing a wide range of features...",
    projectPoints: [
      "Admin can added and updated website banners,enhancing the visual appeal of the application and Efficiently managed product categories, facilitating easy navigation for users.",
      "Implemented a comprehensive product management system, allowing the addition, updating, and deletion of products with multiple photos and detailed information in admin panel",
      "Designed and implemented an easy order management system, streamlining the process for admins to change order statuses in admin panel.",
      " A user-friendly, responsive design for the home page, incorporating banners, categories, best-selling products, and recommended items for an enhanced user experience.",
      "A product details page with multiple photos, enabling users to view products from various angles.",
      "Created a convenient cart system, allowing users to add items by selecting sizes and providing similar product suggestions",
      "Developed a powerful search feature, making it effortless for users to find their desired products",
      "Integrated user profile management, enabling users to edit their profiles and manage their information",
      "Facilitated smooth transactions with a secure (Cash on Delivery) and online payments using the Razorpay payment gateway",
      "Successfully integrated Google login, offering users a convenient option to sign in with their existing Google accounts and also secure and seamless user login and signup functionality"
    ],
    endline:'Utilizing my skills and idea, this project shows my ability to deliver user-friendly web applications, and showcases my proficiency in both front-end and back-end development.',
    githubLink: "https://github.com/novus318/E-Commerce-SITARA-MERN",
    videoLink:'https://dms-exp3.licdn.com/playlist/vid/D5605AQGQevwFTR47kQ/mp4-720p-30fp-crf28/0/1692022469849?e=1692770400&v=beta&t=Lm-KW9HnDfip7690ltl7gznJRz4M7H88v4Yn0-ykcH4'
  },
];
const smallProjects=[
{
    name:'NETFLIX',
    title: "Clone of netflix page",
    description: "Created a web application of netflix using React,To get latest update on movies and shows...",
    projectPoints: [
      " Implemented a movie browsing experience similar to Netflix's interface.",
      " Utilized the TMDB movie database API for fetching movie information and images.",
      " Categorized movies based on genres, enhancing user experience.",
      " UI design and engaging animations crafted using Framer Motion.",
      "Integrated YouTube trailers for each movie, providing additional information.",
      "Hosted the application on Netlify for easy accessibility.",
    ],
    endline:'The contents and data is dynamically updated automatically',
    websiteLink: "https://netfi.netlify.app/",
    githubLink: "https://github.com/novus318/netflix-clone",
  },
  {
    name:'OLX',
    title: "Clone of Olx",
    description: "Developed a web application similar to OLX, featuring user authentication, product listing, and viewing capabilities. The backend is powered by Firebase, and the frontend is built with React.js.",
    projectPoints: [
      "Implemented user authentication to allow users to create accounts and log in.",
      "Designed user interfaces for adding and viewing products, ensuring an intuitive experience.",
      "Utilized Firebase for backend services such as authentication and data storage.",
      " Created a user-friendly dashboard for users to manage their product listings.",
    ],
    endline:'Combining backend and frontend technologies,I created a platform for buying and selling products.',
    githubLink: "https://github.com/novus318/olx",
  }
]
function Projects() {
  const location = useLocation();
 const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 1500, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 400 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  }
  const listItem1Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    if (location.pathname === '/projects') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
    <Layout title={'Projects'}>
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12">
          <motion.h1
            className="me text-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0, color: "#233746" }}
            transition={{ duration: 0.2}}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
           <motion.span
            whileHover={{color:'#cd6242'}}
           >Projects</motion.span>
          </motion.h1>
          </div>
        </div>
        <div className="row justify-content-center">
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
           >details</motion.span>
          </motion.h1>
          {projects.map((project, index) => (
            <div key={index} className="col-11 col-md-12 p-2">
              <MDBCard>
                <div className="flex-md-row flex-column">
                  <MDBCardBody className="flex-md-8">
                    <h4 className="para">
                     {project.name}
                      <MDBIcon fas icon="angle-double-right" className='m-2' style={{ color: "#cd6242" }} />
                       {project.title}
                    </h4>
                    <h5 className='para'>{project.description}</h5>
                    <ul>
                      {project.projectPoints.map((point, index) => (
                        <li key={index} className="list">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <h5 className='para text-center'>{project.endline}</h5>
                    <span
                      onClick={() => {
                        window.open(project.websiteLink);
                      }}
                      className="list"
                      style={{ color: "#cd6242", cursor: "pointer" }}
                    >
                      {project.websiteLink}
                    </span><br/>
                    <span
                      onClick={() => {
                        window.open(project.githubLink);
                      }}
                      className="list"
                      style={{ color: "#cd6242", cursor: "pointer" }}
                    >
                      git repo - {project.githubLink}
                    </span>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
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
           >Small projects</motion.span>
          </motion.h1>
          {smallProjects.map((project, index) => (
            <div key={index} className="col-11 col-md-12 p-2">
              <MDBCard>
                <div className="flex-md-row flex-column">
                  <MDBCardBody className="flex-md-8">
                    <h4 className="para">
                     {project.name}
                      <MDBIcon fas icon="angle-double-right" className='m-2' style={{ color: "#cd6242" }} />
                       {project.title}
                    </h4>
                    <h5 className='para'>{project.description}</h5>
                    <ul>
                      {project.projectPoints.map((point, index) => (
                        <li key={index} className="list">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <h5 className='para text-center'>{project.endline}</h5>
                    <span
                      onClick={() => {
                        window.open(project.websiteLink);
                      }}
                      className="list"
                      style={{ color: "#cd6242", cursor: "pointer" }}
                    >
                      {project.websiteLink}
                    </span><br/>
                    <span
                      onClick={() => {
                        window.open(project.githubLink);
                      }}
                      className="list"
                      style={{ color: "#cd6242", cursor: "pointer" }}
                    >
                      git repo - {project.githubLink}
                    </span>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </div>
          ))}
        </div>
         <div className='row container-fluid justify-content-center mt-5'>
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
           >video preview</motion.span>
          </motion.h1>
          <Carousel responsive={responsive}>
        {video.map((v,i) => (
           <MDBCard className='p-1 me-4'>
                  <motion.div
                    key={i}
                    variants={listItem1Variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: i * 0.2 }}
                  >
                    <iframe
                      title={v.name}
                      src={v.link}
                      frameBorder="0"
                      allowFullScreen
                      autoplay
                      className="w-100"
                    ></iframe>
                    <MDBCardBody>
                    <MDBCardText>
                    <h2 className='para'>{v.name}</h2>
                    </MDBCardText>
                    </MDBCardBody>
                  </motion.div>
                  </MDBCard>
                ))}
                </Carousel>
        </div>
      </div>
      <Footer />
      </Layout>
    </>
  );
}

export default Projects;
