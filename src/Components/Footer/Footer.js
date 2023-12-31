import {
    MDBFooter,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";
  import "./Footer.css";
  import React from "react";
import { Link } from "react-router-dom";
  function Footer() {
   
    const phoneNumber = "+917560845014";
    const emailAddress = "nizamudheen318@gmail.com";
    return (
      <div className="mt-5">
        <div className="shadow-overlay"></div>
        <MDBFooter className="footer pt-4" color="white">
        <section className="text-center col-11 m-auto cotainer">
          <h2 className="f-h">declaration</h2>
          <h5 className="f-p">I hereby declare that all the information provided here is authentic to the best of my knowledge.</h5>
        </section>
          <div className="container-fluid">
            <section>
              <MDBRow className="justify-content-center m-auto">
                <h3 className="text-center f-h">Connect me</h3>
                <div className="col-12 col-md-6 mt-auto mb-auto text-center">
                  <MDBIcon size='3x' onClick={()=>{window.open(`https://wa.me/${phoneNumber}`, "_blank")}} className="p-2 s-icons" fab icon="whatsapp-square" />
                  <MDBIcon size='3x' onClick={()=>{window.open(`mailto:${emailAddress}`, "_blank")}} className="p-2 s-icons" fas icon="envelope" />
                  <MDBIcon size='3x' onClick={()=>{window.open('https://www.linkedin.com/in/muhammednizamudheen')}} className="s-icons p-2" fab icon="linkedin" />
                  <MDBIcon size='3x' onClick={()=>{window.open('https://github.com/novus318')}} className="s-icons p-2 " fab icon="github" />
                  <MDBIcon size='3x' onClick={()=>{window.open('https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D')}} className="s-icons p-2" fab icon="instagram" />
                </div>
              </MDBRow>
            </section>
          </div>
  
          <div
            className="text-center p-3 mt-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; 2023 by{" "}
            <Link to='/'><span className="name">Muhammed Nizamudheen M</span></Link>
            </div>
        </MDBFooter>
      </div>
    );
  }
  
  export default Footer;
  