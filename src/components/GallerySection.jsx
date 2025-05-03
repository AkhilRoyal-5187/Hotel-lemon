import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets"; // Assuming LogoWhite is correctly imported

// Gallery data remains the same
const photoCategories = [
  { name: "Rooms", imageUrl: "https://static.wixstatic.com/media/c837a6_1c6101ab26bd4ce39dc24d05df83afe1~mv2.jpg/v1/fill/w_432,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aura_Restaurant.jpg" },
  { name: "Restaurant", imageUrl: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=scseGeDCjSghwD2RELSaaT2Pn2NQz0gflEQ4BuiTSjs=" },
  { name: "Lobby & Reception", imageUrl: "https://royellaa.netlify.app/images/home-1/room-1.jpg" },
  { name: "Events", imageUrl: "https://royellaa.netlify.app/images/home-1/room-3.jpg" },
];

// Reusing animation variants from FacilitiesSection
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Adjusted timing slightly for potentially fewer items
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const gridContainerVariants = {
     hidden: { opacity: 0 },
     visible: {
         opacity: 1,
         transition: {
             staggerChildren: 0.1, // Adjusted timing for gallery items
             delayChildren: 0.1,
         }
     }
};

const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};


const GallerySection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false, // Animation triggers every time it comes into view
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            // Reset animation when out of view to trigger again on scroll in
            controls.start("hidden"); // <-- Uncommented/Added this line
        }
        // Dependency on controls and inView is correct
    }, [controls, inView]);


    return (
        // Main container matching FacilitiesSection theme and padding/margin/rounding
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            // Applied matching background, padding, margin, and rounding
            className="py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl overflow-hidden mt-8" // Added overflow-hidden
        >
            {/* Using Container div structure like FacilitiesSection */}
            <div className="Container"> {/* Assuming "Container" class provides max-width and centering */}

                {/* Header section mimicking FacilitiesSection */}
                <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]">
                    <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants}>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                        <a href="/" aria-label="Homepage"> {/* Added aria-label */}
                             <LogoWhite className="w-[50px] h-[50px]" /> {/* Assuming LogoWhite is a component, adjust size if needed */}
                        </a>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                    </motion.div>
                    <motion.h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase" variants={itemVariants}>
                        OUR GALLERY
                    </motion.h1>
                    <motion.p className="font-Lora leading-[26px] text-lightGray font-normal text-white sm:text-base" variants={itemVariants}>
                        Explore the visual allure of our hotel, showcasing elegant rooms, exquisite dining, and inviting spaces.
                    </motion.p>
                </div>

                {/* Gallery Grid mimicking FacilitiesSection grid */}
                <motion.div
                    className="grid items-stretch justify-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-[26px] pt-[60px] pb-[50px] px-5 md:px-8 lg:px-10 xl:px-28" // Adjusted pb, added responsive padding
                    variants={gridContainerVariants}
                    initial="hidden" // Set initial state for the grid container
                    animate={controls} // Animate based on the main section controls
                >
                    {photoCategories.map(category => (
                        // Gallery Item mimicking Facilities Item
                        <motion.div
                            key={category.name}
                            className="w-full h-full min-h-[280px] bg-gray-900 p-5 border border-[#343434] text-center transition-all duration-500 relative z-[1] group overflow-hidden
                                       bg-[#272727] flex flex-col justify-between" // Use dark bg, ensure flex column layout
                            variants={gridItemVariants} // Animate individual items
                            // Initial state and animation controlled by parent stagger
                        >
                            {/* Image container */}
                            <div className="mb-4 lg:mb-6 relative overflow-hidden ">
                                <motion.img
                                    src={category.imageUrl}
                                    alt={category.name}
                                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Image style, subtle hover scale
                                />
                            </div>

                            {/* Title container mimicking Facilities Item Title */}
                            <div className="mt-auto pt-5 "> {/* Pushed to bottom */}
                                <h4 className="text-[20px]  rounded-full leading-tight font-Garamond text-white font-medium relative transition-colors duration-300
                                             before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:-translate-x-1/2 before:bottom-[100%] before:mb-2 before:transition-all before:duration-300
                                             group-hover:text-[#9b111e] group-hover:before:bg-[#9b111e]
                                             before:bg-white"> {/* Adjusted before pseudo-element position */}
                                    {category.name}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                

            </div>
        </motion.div>
    );
};

export default GallerySection;
