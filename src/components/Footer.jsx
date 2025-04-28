import React from 'react';
import { LogoWhite } from "../assets";
import { useInView } from 'react-intersection-observer';


import { LinkIcon, GlobeAltIcon, PhoneIcon, ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';


const Footer = () => {

  const yellowShade = '#d4af37';

  // Use useInView hook to detect when the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  const footerStyle = {
    background: 'linear-gradient(135deg, #555 0%, #333 100%)',
    padding: '60px 20px',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin : '10px 10px',
    borderRadius: '30px',
  };

  // Styles for the container, controlled by inView state
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '45px',
    // Initial state (hidden/below)
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', // Animation transition
  };


  const logoLinkStyle = {
    display: 'inline-block',
    lineHeight: 0,
  };

  const contactSectionStyle = {
    display: 'flex',
    gap: '15px',
    fontSize: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const contactButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px 18px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
    color: '#eee',
  };


  const socialLinksSectionStyle = {
    display: 'flex',
    gap: '25px',
    fontSize: '1.8em',
  };

  const quickLinksSectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px 25px',
    fontSize: '1rem',
  };


  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '5px',
    borderRadius: '4px',
    transition: 'color 0.3s ease, transform 0.2s ease',
    display: 'inline-block',
    cursor: 'pointer',
  };


  const linkHoverColor = yellowShade;


  const iconStyle = {
      color: yellowShade,
  };



  return (
    <footer style={footerStyle}>
      {/* Attach the ref to the element you want to observe */}
      <div ref={ref} style={containerStyle}>
        <a href="/" style={logoLinkStyle} aria-label="Homepage">
          <LogoWhite />
        </a>

        <div style={contactSectionStyle}>
          <div
             style={contactButtonStyle}
             onMouseEnter={(e) => {
               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
               e.currentTarget.style.transform = 'translateY(-3px)';
              }}
             onMouseLeave={(e) => {
               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
             }}
           >
            <PhoneIcon style={iconStyle} height="1em" width="1em" /> <span>8121 55 9494</span>
          </div>
          <div
             style={contactButtonStyle}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)';}}
             onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(0)';}}
          >
            <ClockIcon style={iconStyle} height="1em" width="1em" /> <span>Reception: 24×7</span>
          </div>
          <div
             style={contactButtonStyle}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)';}}
             onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(0)';}}
           >
           <EnvelopeIcon style={iconStyle} height="1em" width="1em" /> <span>info@hotellemonpark.in</span>
          </div>
          <div
             style={contactButtonStyle}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)';}}
             onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(0)';}}
          >
            <MapPinIcon style={iconStyle} height="1em" width="1em" /> <span>Hotel Lemon Park, Vishakapatnam</span>
          </div>
        </div>

        <div style={socialLinksSectionStyle}>

          <a href="#" aria-label="Instagram" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <LinkIcon style={iconStyle} />
          </a>

          <a href="#" aria-label="Google Reviews" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <GlobeAltIcon style={iconStyle} />
          </a>

          <a href="#" aria-label="LinkedIn" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
             <LinkIcon style={iconStyle} />
          </a>
        </div>

        <div style={quickLinksSectionStyle}>
          <a href="#" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}>
            Rooms
          </a>
          <a href="#" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}>
            Dining
          </a>
          <a href="#" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}>
            Business
          </a>
           <a href="#" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}>
            Gallery
          </a>
          <a href="#" style={linkStyle}
             onMouseEnter={(e) => { e.currentTarget.style.color = linkHoverColor; }}
             onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}>
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;