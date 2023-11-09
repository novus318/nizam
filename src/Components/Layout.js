import { MDBIcon } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";

function Layout({children,title, description, keywords, author}) {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {children}
      {showGoToTop && (
        <MDBIcon fas icon="angle-double-up" className="go-to-top-button" onClick={scrollToTop}/>
      )}
    </div>
  )
}
Layout.defaultProps ={
  title:'Nizamudheen',
  description:'Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application.',
  keywords:'nizamudheen,Muhammed Nizamudheen,web developer,web development,software,software engineer',
  author:'Muhammed Nizamudheen M'
}
export default Layout
