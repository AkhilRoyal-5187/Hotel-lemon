import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { FaWifi, FaBriefcase, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
// import './HeroSlider.css';

const HeroSlider = () => {
  const titleRefs = useRef([]);
  const intervalRefs = useRef([]);

  const startTypingAnimation = (index) => {
    const titleRef = titleRefs.current[index];
    const text = sliderData[index]?.title || '';
    let i = 0;

    if (titleRef) {
      clearInterval(intervalRefs.current[index]); // Clear any existing interval

      const typeWriter = () => {
        if (i < text.length) {
          titleRef.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(intervalRefs.current[index]);
        }
      };

      titleRef.textContent = ''; // Clear the text before starting
      intervalRefs.current[index] = setInterval(typeWriter, 100); // Adjust speed as needed
    }
  };

  useEffect(() => {
    // Start typing animation for the initial slide after a small delay
    setTimeout(() => {
      startTypingAnimation(0);
    }, 500);

    // Cleanup function to clear all intervals
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, [sliderData]);

  const handleSlideChange = (swiper) => {
    startTypingAnimation(swiper.activeIndex);
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
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
      onSlideChange={handleSlideChange}
    >
      {sliderData.map(({ id, title, bg, btnNext }, index) => (
        <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>
          <div className='z-20 text-white text-center'>
            <div className='uppercase font-tertiary tracking-[6px] mb-5'></div>
            <h1
              ref={(el) => (titleRefs.current[index] = el)}
              className='text-yellow-400 font-primary text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 title-animation'
            >
              {/* Title will be dynamically added here */}
            </h1>
            <h2 className='mb-6'>
              A modern business hotel in the heart of Vizag – where comfort meets convenience for travelers, corporates, and event guests.
            </h2>
            <button className='btn btn-lg btn-primary mx-auto mt-6 text-black'>{btnNext}</button>
          </div>
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover h-full w-full' src={bg} alt="slide background" />
          </div>
          <div className='absolute w-full h-full bg-black/70' />
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