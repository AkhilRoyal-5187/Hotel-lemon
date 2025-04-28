import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
// Import Fa icons - ensure they inherit or are explicitly set to the desired color
import { FaWifi, FaBriefcase, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion'; // Import motion, useAnimation
import { useInView } from 'react-intersection-observer'; // Import useInView

const HeroSlider = () => {
  const titleRefs = useRef([]);
  const intervalRefs = useRef([]);
  const swiperRef = useRef(null);

  // State to track the currently active slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // *** Animation hooks for the entire Swiper component's visibility ***
  // This is the trigger for the badge animations
  const controls = useAnimation();
  const [swiperRefForView, inView] = useInView({ // Ref for the Swiper itself for inView detection
    threshold: 0.1, // Adjust threshold as needed
    triggerOnce: false, // *** THIS SETTING MAKES THE ANIMATION REPEAT ON EVERY SCROLL INTO VIEW ***
  });

  const startTypingAnimation = (index) => {
    const titleRef = titleRefs.current[index];
    const text = sliderData[index]?.title || '';
    let i = 0;

    if (!titleRef || !text) return;

    clearInterval(intervalRefs.current[index]);

    const typeWriter = () => {
      if (i < text.length) {
        titleRef.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalRefs.current[index]);
      }
    };

    titleRef.textContent = '';
    intervalRefs.current[index] = setInterval(typeWriter, 100);
  };

  useEffect(() => {
    // Initial typing animation on mount
    const initialAnimationTimeout = setTimeout(() => {
      startTypingAnimation(0);
    }, 300);

    // Cleanup function
    return () => {
      intervalRefs.current.forEach(clearInterval);
      clearTimeout(initialAnimationTimeout);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setCurrentSlideIndex(activeIndex); // Update the state

    // Typing animation logic remains tied to slide change
    // Add a small delay specifically for the first slide when looping back
    if (activeIndex === 0) {
      setTimeout(() => {
         startTypingAnimation(activeIndex);
      }, 150);
    } else {
      startTypingAnimation(activeIndex);
    }
  };

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
     // *** Attach the inView ref helper to the Swiper's DOM element ***
    swiperRefForView(swiper.el);
  };

  const badges = [
    // Icons using yellow text class
    { text: 'Free Wi-Fi', icon: <FaWifi className="w-6 h-6 text-yellow-400 text-xs" /> },
    { text: 'Business Friendly', icon: <FaBriefcase className="w-6 h-6 text-yellow-400 text-xs" /> },
    { text: 'Multi-cuisine Dining', icon: <FaUtensils className="w-6 h-6 text-yellow-400 text-xs" /> },
    { text: 'Prime Location', icon: <FaMapMarkerAlt className="w-6 h-6 text-yellow-400 text-xs" /> },
  ];

  // Animation variants for individual badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and hidden
    visible: { opacity: 1, y: 0 }, // Animate to visible and correct position
  };

  return (
    // *** The Swiper component itself will be observed for viewport visibility ***
    // The ref from useInView is applied via handleSwiper -> swiperRefForView(swiper.el)
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper} // Use handleSwiper to get ref and attach inView ref
    >
      {sliderData.map(({ id, title, bg, btnNext }, index) => (
        <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>
          <div className='z-20 text-white text-center'>
            <div className='uppercase font-tertiary tracking-[6px] mb-5'></div>
            <h1
              ref={(el) => (titleRefs.current[index] = el)}
              className='text-yellow-400 font-primary text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 title-animation'
            >
              {/* The title text will be added here by the typing animation */}
            </h1>
            <h2 className='mb-6'>
              A modern business hotel in the heart of Vizag – where comfort meets convenience for travelers, corporates, and event guests.
            </h2>
            <button className='btn btn-lg btn-primary mx-auto mt-6 text-black'>{btnNext}</button>
          </div>
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover h-full w-full' src={bg} alt="slide background" />
          </div>
          <div className='absolute w-full h-full bg-black/70' /> {/* Overlay */}

          {/* *** Badges Container - Position and Color Updated *** */}
          <div className="absolute bottom-12 w-full flex justify-center gap-2 sm:gap-4 py-2 sm:py-4 bg-transparent flex-wrap">
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                // Text color set to yellow-400
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs font-bold text-yellow-400 whitespace-nowrap"
                variants={badgeVariants}
                initial="hidden"
                // *** Animation controlled SOLELY by the inView status of the Swiper ***
                // Animate to 'visible' if the Swiper is in view, otherwise go to 'hidden'
                animate={inView ? "visible" : "hidden"}
                // *** Transition delay based solely on inView status and index ***
                transition={{ delay: inView ? idx * 0.1 : 0, duration: 0.5, ease: 'easeOut' }}
              >
                {/* Icons already updated to text-yellow-400 in the badges array */}
                {badge.icon}
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;