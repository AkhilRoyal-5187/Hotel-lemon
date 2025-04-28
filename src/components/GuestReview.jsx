import React, { useState, useEffect } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GuestReviews = () => {
  const sectionStyle = {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    width: '98%',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #d4af37, #9b111e)',
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'serif',
    margin: '100px 30px',
    borderRadius: '40px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#9b111e',
    marginBottom: '40px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
    letterSpacing: '1.2px',
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '95%',
    maxWidth: '1000px',
    margin: '0 auto',
    overflow: 'hidden',
  };

  const carouselWrapperStyle = {
    display: 'flex',
    transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Increased speed (halved duration)
    alignItems: 'center',
    overflow: 'visible',
  };

  const reviewCardStyle = {
    flex: '0 0 100%',
    backgroundColor: '#fffaf0',
    border: '1px solid #eee8aa',
    borderRadius: '16px',
    padding: '30px 20px',
    margin: '0',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '300px',
  };

  const starContainerStyle = {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
  };

  const starStyle = {
    color: '#ffd700',
    marginRight: '3px',
    fontSize: '1em',
  };

  const reviewTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    fontStyle: 'italic',
    marginBottom: '20px',
  };

  const wishImageContainerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '15px',
    alignSelf: 'center',
  };

  const wishImageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const wishIconStyle = {
    color: '#ff6f61',
    fontSize: '1.4em',
    alignSelf: 'flex-end',
  };

  const ctaStyle = {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  };

  const ctaButton = {
    backgroundColor: '#daa520',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '15px 25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease',
    whiteSpace: 'nowrap',
  };

  const ctaButtonHoverStyle = {
    backgroundColor: '#b8860b',
    transform: 'scale(1.04)',
  };

  const reviews = [
    {
      text: 'An exquisite experience. The attention to detail and the level of service were truly remarkable. A gem for discerning travelers.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'Impeccable comfort and style. From the moment I arrived, I felt like royalty. The amenities and the ambiance were simply divine.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'A sanctuary of tranquility and elegance. The staff’s dedication to excellence is evident in every interaction. A truly unforgettable stay.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1568084686348-aeca669953f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'Exceptional in every aspect. The luxurious touches and the breathtaking views made my experience truly special. Highly recommended for those seeking indulgence.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1616940871268-964119898834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReadMoreHovered, setIsReadMoreHovered] = useState(false);
  const [isWriteReviewHovered, setIsWriteReviewHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3500); // Changed interval to 3500ms (7000 / 2)
    return () => clearInterval(intervalId);
  }, [reviews.length]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} style={i < rating ? starStyle : { color: '#eee8aa', marginRight: '3px', fontSize: '1em' }} />);
    }
    return <div style={starContainerStyle}>{stars}</div>;
  };

  const transformValue = -currentIndex * 100 + '%';

  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 10, duration: 1 },
    },
  };

  return (
    <motion.section
      style={sectionStyle}
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <h2 style={titleStyle}>What Our Guests Say</h2>
      <div style={carouselContainerStyle}>
        <div style={{ ...carouselWrapperStyle, transform: `translateX(${transformValue})` }}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              style={reviewCardStyle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
                {review.wishImage && (
                  <div style={wishImageContainerStyle}>
                    <img src={review.wishImage} alt="Luxury Stay" style={wishImageStyle} />
                  </div>
                )}
                {renderStars(review.rating)}
              </div>
              <p style={reviewTextStyle}>"{review.text}"</p>
              <FaRegHeart style={wishIconStyle} />
            </motion.div>
          ))}
        </div>
      </div>
      <div style={ctaStyle}>
        <a
          href="/read-more-reviews"
          style={{ ...ctaButton, ...(isReadMoreHovered && ctaButtonHoverStyle) }}
          onMouseEnter={() => setIsReadMoreHovered(true)}
          onMouseLeave={() => setIsReadMoreHovered(false)}
        >
          Read More Reviews
        </a>
        <a
          href="/write-a-review"
          style={{ ...ctaButton, ...(isWriteReviewHovered && ctaButtonHoverStyle) }}
          onMouseEnter={() => setIsWriteReviewHovered(true)}
          onMouseLeave={() => setIsWriteReviewHovered(false)}
        >
          Write a Review
        </a>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .reviewCardStyle {
            flex: 0 0 80%;
            margin: 0 10%;
          }
          .titleStyle {
            font-size: 3rem;
          }
          .reviewTextStyle {
            font-size: 1.1rem;
            line-height: 1.7;
          }
          .ctaStyle {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (min-width: 1200px) {
          .reviewCardStyle {
            flex: 0 0 70%;
            margin: 0 15%;
          }
          .titleStyle {
            font-size: 3.5rem;
          }
          .reviewTextStyle {
            font-size: 1.2rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default GuestReviews;