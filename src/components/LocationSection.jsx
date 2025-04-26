import React from 'react';

const LocationSection = () => {
  const sectionStyle = {
    backgroundColor: '#FFFACD', 
    padding: '20px',
    borderRadius: '8px',
    margin: '20px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    color: '#B8860B',
    fontSize: '2em',
    marginBottom: '10px',
  };

  const subheadlineStyle = {
    color: '#808000',
    marginBottom: '15px',
  };

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    border: '1px solid #EEE8AA', 
    borderRadius: '4px',
    marginBottom: '15px',
  };

  const distanceStyle = {
    color: '#A9A9A9', 
    margin: '5px 0',
  };

  const buttonStyle = {
    backgroundColor: '#FFD700', 
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>In the Middle of It All</h2>
      <p style={subheadlineStyle}>
        Located in Vizag’s business district – just minutes from the Railway Station, RTC Complex, and key city spots.
      </p>

      <div style={mapContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.579987854354!2d83.30844517488168!3d17.71914889484548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395109657909b5%3A0x79181c63f05d91f4!2sVisakhapatnam%20Railway%20Station!5e0!3m2!1sen!2sin!4v1678886478956!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location on Google Map"
        ></iframe>
      </div>

      <div>
        <p style={distanceStyle}>Airport – 20 mins</p>
        <p style={distanceStyle}>Beach Road – 10 mins</p>
        <p style={distanceStyle}>Railway Station – 5 mins</p>
      </div>

      <button style={buttonStyle}>
        <span role="img" aria-label="location pin">📍</span> Get Directions
      </button>
    </section>
  );
};

export default LocationSection;