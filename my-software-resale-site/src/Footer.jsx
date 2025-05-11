import React from 'react';
import ChatWidget from './Chatwidget';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3">
      <div className="container">
        <div className="row justify-content-between align-items-start">

          {/* Navigation Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="text-white text-decoration-none">Back To Top</a></li>
               </ul>
          </div>

          {/* Google Play Badge */}
          <div className="col-md-4 mb-4 mb-md-0 text-md-center">
            <h6>Download Our App</h6>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Download from Google Play"
                style={{ maxHeight: '40px' }}
              />
            </a>
          </div>

          {/* Chat Widget Label */}
          <div className="col-md-4 text-md-end">
              
          </div>

        </div>

        <hr className="border-light my-3" />

        {/* Copyright */}
        <div className="text-center small">
          ©  {new Date().getFullYear()} SoftSell Solutions. All rights reserved.
          <p> Designed by : Mohammed Asfaar Uddin Shareef </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
