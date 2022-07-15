import React from "react";
import { Row, Container } from "react-bootstrap";
import Particle from "./Particles";
function HeroBanner() {
  return (
    <section
      style={{backgroundImage: `url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)`, width: '100%' }}
      id="home"
    >
      <Container>
        <div className="App-header">
          <Row>
            <div className="home-text">
              {/* <div className="section-text__subtitle">Explore the whiskers</div> */}
              <div className="section-text__title-big">
                The #1 end-to-end food traceability solution on blockchain
              </div>
              <div className="section-text__body">
                All components you need to tell the story of your product. In
                one place.
              </div>
              <div className="section-text__body">
              <p style={{fontSize: '3rem'}} >
              Click here 
              </p>
              </div>

      

              {/* <a href="#download" className="download-btn">
                Download App
              </a> */}
            </div>

            <div className="section-image">
              <img src="https://www.allgeo.com/newtemp/images/t3/qr3.gif" alt="App Preview" />
            </div>
          </Row>
        </div>
        <Particle />
      </Container>
    </section>
  );
}

export default HeroBanner;
