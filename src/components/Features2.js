import React from "react";
import { Row, Container } from "react-bootstrap";

function Features2() {
  return (
    <section id="features">
      <Container>
        <Row>
          <div style={{ padding: "10px" }} className="section-text">
            <div className="section-text__title">What is Blockchain?</div>
            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Distributed ledger technology
                </div>
                <div className="section-text__desc">
                  All network participants have access to the distributed ledger
                  and its immutable record of transactions
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Immutable records
                </div>
                <div className="section-text__desc">
                  No participant can change or tamper with a transaction after
                  it’s been recorded to the shared ledger.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                Smart contracts
                </div>
                <div className="section-text__desc">
                To speed transactions, a set of rules — called a smart contract — is stored on the blockchain and executed automatically
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Distributed ledger technology
                </div>
                <div className="section-text__desc">
                  All network participants have access to the distributed ledger
                  and its immutable record of transactions
                </div>
              </div>
            </div>
          </div>
          <div className="section-image-features2">
            <img src="./images/pic33.gif" width="200" alt="features" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features2;
