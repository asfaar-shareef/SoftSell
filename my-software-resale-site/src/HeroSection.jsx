import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Inline global style for smooth scrolling and no horizontal overflow */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          body {
            overflow-x: hidden;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        id="hero"
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '70px', // offset for fixed navbar
        }}
      >
        <div className="text-center px-4">
          {/* Logo */}
          <img
            src=" https://softsell.solutions/wp-content/uploads/2023/01/Soft-Sell-Dot-Solutions-Logo-Artboards_SS_Solutions_Secondary-Stacked-White-1024x377.png"  alt="SoftSell Logo"
            style={{ maxWidth: '220px', marginBottom: '20px' }}
          />

          <h1 className="display-3 fw-bold mb-3">
            Maximize Your Unused Software
          </h1>
          <p className="lead mb-4">
            SoftSell turns idle software licenses into profit — securely, quickly, and with ease.
          </p>
          <a href="#quote" className="btn btn-lg btn-primary px-4 py-2 shadow-sm">
            Sell My Licenses
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
