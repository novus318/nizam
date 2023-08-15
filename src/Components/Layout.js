import { MDBIcon } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'

function Layout({children}) {
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
      {children}
      {showGoToTop && (
        <MDBIcon fas icon="angle-double-up" size='2x' className="go-to-top-button" onClick={scrollToTop}/>
      )}
    </div>
  )
}

export default Layout
