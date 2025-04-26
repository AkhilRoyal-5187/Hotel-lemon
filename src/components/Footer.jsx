import React from 'react';
import { LogoWhite } from "../assets"; // Assuming this is a local file
import { FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa'; // For social media icons

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    paddingTop: '60px',
    paddingBottom: '60px',
    color: '#fff',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  };

  const logoStyle = {
    // You can add styles for the logo if needed, e.g.,
    // height: '50px',
  };

  const contactStyle = {
    display: 'flex',
    gap: '20px', // Horizontal gap between "buttons"
    fontSize: '1.1em',
    alignItems: 'center', // Vertically align items
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    justifyContent: 'center', // Center the "buttons"
  };

  const contactButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
    padding: '12px 20px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    margin: '5px 0', // Vertical margin for spacing
    display: 'flex', // Use flexbox for icon alignment, if you add icons
    alignItems: 'center',
    gap: '8px',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '1.5em',
  };

  const quickLinksStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '1.1em',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    padding: '5px',
  };

  const linkHoverStyle = {
    color: '#ffdb58',
  };


  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <a href="/" style={logoStyle}>
          <LogoWhite /> {/* Use the LogoWhite component */}
        </a>

        <div style={contactStyle}>
          {/* <div style={contactButtonStyle}>
            <span>📞</span> <span>Contact</span>
          </div> */}
          
          <div style={contactButtonStyle}>
            <span>📞</span> <span>8121 55 9494</span>
          </div>
          <div style={contactButtonStyle}>
            <span>🕑</span> <span>Reception: 24×7</span>
          </div>
          
          
          <div style={contactButtonStyle}>
           <span>📧</span> <span>info@hotellemonpark.in</span>
          </div>
          
          <div style={contactButtonStyle}>
            <span>📍</span> <span>Hotel Lemon Park, Vishakapatnam</span>
          </div>
        </div>

        <div style={socialLinksStyle}>
          <a href="#" aria-label="Instagram" style={linkStyle}><FaInstagram /></a>
          <a href="#" aria-label="Google Reviews" style={linkStyle}><FaGoogle /></a>
          <a href="#" aria-label="LinkedIn" style={linkStyle}><FaLinkedin /></a>
        </div>

        <div style={quickLinksStyle}>
          <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Rooms</a>
          <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Dining</a>
          <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Business</a>
          <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Gallery</a>
          <a href="#" style={{ ...linkStyle, ...linkHoverStyle }}>Book Now</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
