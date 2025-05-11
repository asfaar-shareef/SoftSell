import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const CustomerTestimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Customer Testimonials</h2>
        <div className="row g-4">
          {/* Testimonial 1 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="text-primary fs-2 mb-3">
                  <FaQuoteLeft />
                </div>
                <p className="card-text text-muted">
                  "SoftSell has completely transformed how we handle unused software licenses. The process was simple, and we got a great valuation — highly recommend!"
                </p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="John Doe"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">John Doe</h6>
                    <small className="text-muted">CTO, Tech Solutions Inc.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="text-primary fs-2 mb-3">
                  <FaQuoteLeft />
                </div>
                <p className="card-text text-muted">
                  "I was surprised by how fast and seamless the entire process was. SoftSell made selling our software licenses effortless and quick."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Jane Smith"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Jane Smith</h6>
                    <small className="text-muted">Operations Manager, GlobalTech Ltd.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
