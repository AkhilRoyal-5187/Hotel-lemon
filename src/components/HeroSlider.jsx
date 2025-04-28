import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { FaWifi, FaBriefcase, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
// import './HeroSlider.css'; // Make sure your CSS is correctly linked

const HeroSlider = () => {
  const titleRefs = useRef([]);
  const intervalRefs = useRef([]);
  const swiperRef = useRef(null);

  const startTypingAnimation = (index) => {
    const titleRef = titleRefs.current[index];
    const text = sliderData[index]?.title || '';
    let i = 0;

    // Ensure the ref and text exist
    if (!titleRef || !text) return;

    // Clear any existing interval for this index
    clearInterval(intervalRefs.current[index]);

    // Function to perform the typing effect
    const typeWriter = () => {
      if (i < text.length) {
        titleRef.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalRefs.current[index]); // Stop interval when typing is complete
      }
    };

    titleRef.textContent = ''; // Clear the text before starting animation
    // Store the interval ID
    intervalRefs.current[index] = setInterval(typeWriter, 100); // Adjust speed (milliseconds per character)
  };

  useEffect(() => {
    // Start typing animation for the initial slide (index 0) on mount
    // Add a small initial delay to allow Swiper to initialize
    const initialAnimationTimeout = setTimeout(() => {
      startTypingAnimation(0);
    }, 300); // Initial delay, adjust as needed

    // Cleanup function to clear all intervals and the initial timeout
    return () => {
      intervalRefs.current.forEach(clearInterval);
      clearTimeout(initialAnimationTimeout);
    };
  }, []); // Empty dependency array means this runs once on mount

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    console.log('Slide Change to index:', activeIndex); // Optional: for debugging

    // Start animation for the new active slide
    // Add a small delay specifically for the first slide when looping back
    if (activeIndex === 0) {
       // Delay the start of typing animation slightly when looping back to slide 0
      setTimeout(() => {
         startTypingAnimation(activeIndex);
      }, 150); // Small delay (e.g., 150ms), adjust for visual smoothness
    } else {
      // For other slides, start animation immediately on slide change
      startTypingAnimation(activeIndex);
    }
  };

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const badges = [
    { text: 'Free Wi-Fi', icon: <FaWifi className="w-6 h-6 text-white text-xs" /> },
    { text: 'Business Friendly', icon: <FaBriefcase className="w-6 h-6 text-white text-xs" /> },
    { text: 'Multi-cuisine Dining', icon: <FaUtensils className="w-6 h-6 text-white text-xs" /> },
    { text: 'Prime Location', icon: <FaMapMarkerAlt className="w-6 h-6 text-white text-xs" /> },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true} // Ensure loop is enabled
      autoplay={{
        delay: 4000, // Increased delay slightly for better timing
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
      onSlideChange={handleSlideChange} // Trigger animation on slide change
      onSwiper={handleSwiper} // Get the Swiper instance
    >
      {sliderData.map(({ id, title, bg, btnNext }, index) => (
        <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>
          <div className='z-20 text-white text-center'>
            {/* You can keep this div or remove if not needed */}
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
          <div className="absolute bottom-4 w-full flex justify-center gap-2 sm:gap-4 py-2 sm:py-4 bg-transparent flex-wrap">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs font-bold text-white whitespace-nowrap">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;