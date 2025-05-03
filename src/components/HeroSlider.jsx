import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data'; // Assuming sliderData structure is correct
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
// Import Fa icons - ensure they inherit or are explicitly set to the desired color
import { FaWifi, FaBriefcase, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion'; // Import motion, useAnimation
import { useInView } from 'react-intersection-observer'; // Import useInView
import { LogoWhite } from "../assets"; // Assuming LogoWhite is correctly imported

const HeroSlider = () => {
    const titleRefs = useRef([]);
    const intervalRefs = useRef([]);
    const swiperRef = useRef(null);

    // State to track the currently active slide index (used for titleRefs and sliderData access)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // Animation hooks for the entire Swiper component's visibility
    const controls = useAnimation();
    const [swiperRefForView, inView] = useInView({ // Ref for the Swiper itself for inView detection
        threshold: 0.1, // Adjust threshold as needed
        triggerOnce: false, // Animation triggers every time it comes into view
    });

    const startTypingAnimation = (index) => {
        // Calculate the correct index for sliderData, accounting for loop duplicates if necessary
        // Swiper's realIndex is the index of the currently active slide in the original slides array
        const realIndex = swiperRef.current?.realIndex ?? index;
        const titleRef = titleRefs.current[realIndex];
        const text = sliderData[realIndex]?.title || '';
        let i = 0;

        if (!titleRef || !text) return;

        // Clear any existing interval for all titles
        intervalRefs.current.forEach(clearInterval);


        const typeWriter = () => {
            if (i < text.length) {
                titleRef.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalRefs.current[realIndex]);
            }
        };

        // Reset text content before starting typing for the *new* slide
        // Reset all titles first to avoid seeing text from previous slides before new text types
        titleRefs.current.forEach(ref => {
             if(ref) ref.textContent = '';
        });
        intervalRefs.current[realIndex] = setInterval(typeWriter, 100);
    };

    // Effect to handle animation based on inView state
    // This primarily controls the badges animation and triggers the initial typing
    useEffect(() => {
        if (inView) {
            controls.start("visible");
             // Start typing animation for the current slide when in view
             // Use realIndex to get the correct slide data
             const realIndex = swiperRef.current?.realIndex ?? 0;
             startTypingAnimation(realIndex);

        } else {
            // Reset animations when out of view
            controls.start("hidden");
             // Clear all typing intervals when out of view
             intervalRefs.current.forEach(clearInterval);
        }
         // Dependency on controls and inView
    }, [controls, inView]);


    const handleSlideChange = (swiper) => {
         // Update the state with the active index (can be a duplicate index in loop mode)
        setCurrentSlideIndex(swiper.activeIndex);

        // Trigger typing animation for the newly active slide using realIndex
         // Add a small delay to allow the slide transition to complete visually
         setTimeout(() => {
             startTypingAnimation(swiper.realIndex);
         }, 150); // Short delay

    };

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
        // Attach the inView ref helper to the Swiper's DOM element
        swiperRefForView(swiper.el);
        // Initial typing animation for the first slide once Swiper is initialized
        startTypingAnimation(swiper.realIndex);
    };

     // Cleanup intervals on component unmount
     useEffect(() => {
         return () => {
             intervalRefs.current.forEach(clearInterval);
         };
     }, []); // Empty dependency array means this runs only on mount and unmount


    const badges = [
        // Icons using yellow text class
        { text: 'Free Wi-Fi', icon: <FaWifi className="w-6 h-6 text-yellow-400 text-xs" /> },
        { text: 'Business Friendly', icon: <FaBriefcase className="w-6 h-6 text-yellow-400 text-xs" /> },
        { text: 'Multi-cuisine Dining', icon: <FaUtensils className="w-6 h-6 text-yellow-400 text-xs" /> },
        { text: 'Prime Location', icon: <FaMapMarkerAlt className="w-6 h-6 text-yellow-400 text-xs" /> },
    ];

    // Animation variants for individual badges (consistent with item variants)
    const badgeVariants = {
        hidden: { opacity: 0, y: 30 }, // Start slightly below and hidden
        visible: { opacity: 1, y: 0 }, // Animate to visible and correct position
    };

     // Container variants for staggering badges
     const badgesContainerVariants = {
         hidden: { opacity: 0 },
         visible: {
             opacity: 1,
             transition: {
                 staggerChildren: 0.1, // Stagger delay between badges
                 delayChildren: 0.3, // Delay before the first badge starts animating
             },
         },
     };


    return (
        // The Swiper component itself will be observed for viewport visibility
        // The ref from useInView is applied via handleSwiper -> swiperRefForView(swiper.el)
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            className='heroSlider h-[600px] lg:h-[860px]' // Ensure consistent height
            onSlideChange={handleSlideChange}
            onSwiper={handleSwiper} // Use handleSwiper to get ref and attach inView ref
        >
            {/* Render slides using sliderData - Swiper handles duplicating for loop */}
            {sliderData.map(({ id, title, bg, btnNext }, index) => (
                <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>
                    <div className='z-20 text-white text-center px-4'> {/* Added horizontal padding */}
                         {/* Added Header structure */}
                         

                        {/* Use the original index to assign ref, as realIndex mapping happens in startTypingAnimation */}
                        <h1
                            ref={(el) => (titleRefs.current[index] = el)}
                            className='text-yellow-400 font-Garamond text-3xl md:text-4xl lg:text-5xl 2xl:text-[68px] uppercase tracking-[2px] max-w-[920px] leading-tight min-h-[100px] md:min-h-[120px] lg:min-h-[150px] 2xl:min-h-[180px]' // Applied theme font, responsive sizes, AND MIN-HEIGHT
                        >
                            {/* The title text will be added here by the typing animation */}
                        </h1>


                        <h2 className='mb-8 text-base md:text-lg font-Lora text-lightGray max-w-[800px] mx-auto'> {/* Applied theme font, color, and responsive size */}
                            A modern business hotel in the heart of Vizag – where comfort meets convenience for travelers, corporates, and event guests.
                        </h2>
                        {/* Ensure button styling matches theme if not already */}
                        <button className='inline-block bg-[#daa520] text-black border border-[#daa520] rounded-lg px-6 py-3 text-lg font-semibold transition-colors duration-300 hover:bg-[#b8860b] hover:border-[#b8860b] font-Garamond'>
                            {btnNext}
                        </button>
                    </div>
                    <div className='absolute inset-0'> {/* Use inset-0 for full coverage */}
                        <img className='object-cover h-full w-full' src={bg} alt="slide background" />
                    </div>
                    <div className='absolute inset-0 bg-black/70' /> {/* Overlay */}

                    {/* Badges Container - Position and Color Updated */}
                    {/* Animate this container based on Swiper's in-view status */}
                    <motion.div
                         className="absolute bottom-10 w-full flex justify-center gap-2 sm:gap-4 py-2 sm:py-4 bg-transparent flex-wrap px-4" // Added horizontal padding
                         variants={badgesContainerVariants} // Apply staggering to the container
                         initial="hidden"
                         animate={controls} // Control animation with the main section controls
                    >
                        {badges.map((badge, idx) => (
                             <motion.div
                                 key={idx}
                                 // Text color set to yellow-400 and other theme styles
                                 className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-yellow-400 whitespace-nowrap border border-[#343434] rounded-full bg-[#272727]" // Applied theme styles
                                 variants={badgeVariants} // Animate individual badges
                                 // Animation controlled by the parent container's animation
                             >
                                 {/* Icons already updated to text-yellow-400 in the badges array */}
                                 {badge.icon}
                                 <span>{badge.text}</span>
                             </motion.div>
                        ))}
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;
