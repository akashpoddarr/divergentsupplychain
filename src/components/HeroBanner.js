import React from "react";
import { Row, Container } from "react-bootstrap";

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle">Explore the whiskers</div>
            <div className="section-text__title-big">
              The #1 end-to-end food traceability solution on blockchain
            </div>
            <div className="section-text__body">
              All components you need to tell the story of your product. In one
              place.
            </div>
            <a href="#download" className="download-btn">
              Download App
            </a>
          </div>

          <div className="section-image">
            <img src="./images/hero-right.png" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
