import React from "react";
import Particle from "./Particles";

function Services() {
  return (
    <section id="services">
    <Particle />
    <div className="App-header">
      <div className="section-text">
        <div className="section-text__title-centered">
          Divergent makes traceability implementations simple, fast, and secure
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="qr-code-outline"></ion-icon>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Serialize</div>
              <div className="section-text__desc">
                your products by giving them digital identities
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="apps-outline"></ion-icon>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Store</div>
              <div className="section-text__desc">
                traceability data on a secure and scalable blockchain
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="scan-circle-outline"></ion-icon>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Capture</div>
              <div className="section-text__desc">
                data about the production processes by our data gathering tools
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Services;
