import React from 'react';
import { FaShieldAlt, FaClock, FaCogs, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Why Choose Us</h2>
        <div className="row g-4">
          {/* Bullet Point 1: Security */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaShieldAlt />
                </div>
                <h5 className="card-title fw-semibold">Top-Notch Security</h5>
                <p className="card-text text-muted">
                  We ensure the highest level of security for your data and transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Point 2: Speed */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaClock />
                </div>
                <h5 className="card-title fw-semibold">Fast Processing</h5>
                <p className="card-text text-muted">
                  Your software license valuation and payments are processed quickly.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Point 3: Easy Setup */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaCogs />
                </div>
                <h5 className="card-title fw-semibold">Easy Setup</h5>
                <p className="card-text text-muted">
                  Our platform is simple to use — just upload your license and get started.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Point 4: Support */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaHeadset />
                </div>
                <h5 className="card-title fw-semibold">24/7 Support</h5>
                <p className="card-text text-muted">
                  Our team is available around the clock to assist you with any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
