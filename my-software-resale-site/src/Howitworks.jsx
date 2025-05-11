import React from 'react';
import { FaUpload, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">How It Works</h2>
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaUpload />
                </div>
                <h5 className="card-title fw-semibold">Upload License</h5>
                <p className="card-text text-muted">
                  Provide your software license details through our secure platform.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaCalculator />
                </div>
                <h5 className="card-title fw-semibold">Get Valuation</h5>
                <p className="card-text text-muted">
                  We analyze and provide a competitive quote within hours.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary fs-1">
                  <FaMoneyBillWave />
                </div>
                <h5 className="card-title fw-semibold">Get Paid</h5>
                <p className="card-text text-muted">
                  Accept the offer and receive fast, secure payment — no hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
