import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LocationSection = () => {
  const sectionStyle = {
    backgroundColor: '#9b111e',
    padding: '30px', // Increased padding
    borderRadius: '40px',
    margin: '20px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    color: '#d4af37',
    fontSize: '2.2em', // Slightly increased title size
    marginBottom: '12px', // Slightly increased margin
  };

  const subheadlineStyle = {
    color: '#808000',
    marginBottom: '20px', // Increased margin
    fontSize: '1.1em', // Slightly increased font size
  };

  const mapContainerStyle = {
    width: '100%',
    height: '350px', // Increased height
    border: '1px solid #EEE8AA',
    borderRadius: '4px',
    marginBottom: '20px', // Increased margin
  };

  const distanceStyle = {
    color: '#A9A9A9',
    margin: '8px 0', // Increased margin
    fontSize: '1em',
  };

  const buttonStyle = {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '12px 24px', // Increased padding
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em', // Increased font size
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section style={sectionStyle} ref={ref} initial={{ y: 50, opacity: 0 }} animate={controls}>
      <motion.h2 style={titleStyle} variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
      }} initial="hidden" animate={inView ? "visible" : "hidden"}>
        In the Middle of It All
      </motion.h2>
      <motion.p style={subheadlineStyle} variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
      }} initial="hidden" animate={inView ? "visible" : "hidden"}>
        Located in Vizag’s business district – just minutes from the Railway Station, RTC Complex, and key city spots.
      </motion.p>

      <motion.div style={mapContainerStyle} variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.6 } },
      }} initial="hidden" animate={inView ? "visible" : "hidden"}>
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
      </motion.div>

      <motion.div variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8, staggerChildren: 0.2 } },
      }} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.p style={distanceStyle} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Airport – 20 mins</motion.p>
        <motion.p style={distanceStyle} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Beach Road – 10 mins</motion.p>
        <motion.p style={distanceStyle} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Railway Station – 5 mins</motion.p>
      </motion.div>

      <motion.button style={buttonStyle} variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.0 } },
      }} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <span role="img" aria-label="location pin">📍</span> Get Directions
      </motion.button>
    </motion.section>
  );
};

export default LocationSection; 