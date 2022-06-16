import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          A Plan for Every Cats's Needs
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">
                Increased supply chain transparency
              </span>
              <div className="pricing-card__title">
                <img src="./images/img1.png" width="200" alt="features" />
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>
                Supply chain networks can be limited by one-up/one-down
                visibility. Through distributed ledger technology that provides
                a shared, single version of the truth, IBM Blockchain supply
                chain solutions give permissioned participants greater
                visibility across all supply chain activities.
              </li>
            </ul>
            {/* <a href="#pricing" className="pricing-card__btn">
              Get started
            </a> */}
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">
                Build a resilient supply chain
              </span>
              <div className="pricing-card__title">
                <img src="./images/img2.png" width="200" alt="features" />
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>
                One unexpected event can cause a cascading array of supply chain
                disruptions. IBM Blockchain supply chain solutions use smart
                contracts that automatically trigger when pre-defined business
                conditions are met. This gives near real-time visibility into
                operations, and the ability to take action earlier should there
                be an exception.
              </li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Maine</span>
              <div className="pricing-card__title">
                <img src="./images/img3.png" width="200" alt="features" />
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Priority Listings</li>
              <li>Unlimited Matches & Messages</li>
              <li>Unlimited App Usage</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
