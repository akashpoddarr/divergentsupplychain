import React from "react";
import { Row, Container } from "react-bootstrap";

function Features() {
  return (
    <section id="features">
      <Container  >
        <Row>
          <div className="section-image-features">
            <img src="./images/pic3.gif" width="200" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>
            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Track product authenticity individually
                </div>
                <div className="section-text__desc">
                  Consumers appreciate transparent food information, and
                  recognize brands with traceability.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  A digital passport for your products
                </div>
                <div className="section-text__desc">
                  Create an individual, immutable record of the data and
                  identity of your products on the blockchain. These records can
                  be used to accurately identify products around the world.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                Establish direct communication with consumers

                </div>
                <div className="section-text__desc">
                Engage directly with consumers, and collect valuable data about them.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Position your premium products</div>
                <div className="section-text__desc">
                Provide proofs of your quality sustainability claims.
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
