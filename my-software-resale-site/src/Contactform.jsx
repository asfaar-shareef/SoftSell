import React, { useState } from 'react';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact/ Lead Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              noValidate
              className={validated ? 'was-validated' : ''}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
                <div className="invalid-feedback">Please enter a valid email.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" className="form-control" id="company" required />
                <div className="invalid-feedback">Please enter your company name.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="licenseType" className="form-label">License Type</label>
                <select className="form-select" id="licenseType" required>
                  <option value="">Select a license type</option>
                  <option>Microsoft Office</option>
                  <option>Adobe Creative Suite</option>
                  <option>Antivirus Software</option>
                  <option>Other</option>
                </select>
                <div className="invalid-feedback">Please select a license type.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
                <div className="invalid-feedback">Please enter your message.</div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
