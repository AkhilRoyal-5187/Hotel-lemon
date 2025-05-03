import React, { useEffect } from 'react'; // Import useEffect
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets"; // Assuming LogoWhite is correctly imported
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import map icon

const LocationSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1, // Adjust as needed
        triggerOnce: false, // Animation triggers every time it comes into view
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            // Reset animation when out of view to trigger again on scroll in
            controls.start("hidden");
        }
    }, [controls, inView]);

    // Animation variants matching GallerySection and GuestReviews
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger delay for immediate children (header elements and grid container)
                delayChildren: 0.2, // Delay before immediate children start animating
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

     const mapVariants = {
         hidden: { opacity: 0, x: -50 }, // Animate from left
         visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 } }, // Added delay
     };

     const detailsVariants = {
         hidden: { opacity: 0, x: 50 }, // Animate from right
         visible: {
           opacity: 1,
           x: 0,
           transition: {
             duration: 0.7,
             ease: 'easeOut',
             delay: 0.5, // Slightly delayed after the map
             staggerChildren: 0.1, // Stagger within the right column (distance items and button)
           }
         },
     };

     const distanceItemVariants = {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      };

      const buttonVariants = {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } }, // Delay relative to its container (detailsVariants)
      };


    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl overflow-hidden text-white mt-8" // Apply theme and base styles
        >
             <div className="Container mx-auto px-4 sm:px-6 lg:px-8"> {/* Assuming "Container" class provides max-width and centering, added responsive padding */}

                 {/* Header section mimicking GallerySection and GuestReviews */}
                 <div className="text-center mx-auto max-w-3xl mb-16"> {/* Added max-width and margin bottom */}
                     <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants}>
                         <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                         <a href="/" aria-label="Homepage"> {/* Added aria-label */}
                              <LogoWhite className="w-[50px] h-[50px]" /> {/* Assuming LogoWhite is a component, adjust size if needed */}
                         </a>
                         <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                     </motion.div>
                     <motion.h2 className="text-2xl md:text-3xl 2xl:text-[38px] leading-tight text-white mb-4 font-Garamond font-semibold uppercase" variants={itemVariants}> {/* Adjusted leading and margin bottom */}
                         IN THE MIDDLE OF IT ALL
                     </motion.h2>
                     <motion.p className="font-Lora leading-relaxed text-lightGray font-normal text-sm sm:text-base max-w-2xl mx-auto" variants={itemVariants}> {/* Adjusted leading and added max-width/centering */}
                         Located in Vizag’s business district – just minutes from the Railway Station, RTC Complex, and key city spots.
                     </motion.p>
                 </div>

                 {/* Two-column layout for map and details */}
                 {/* Adjusted grid, gap, and padding for responsiveness */}
                 {/* Added justify-items-center to center grid items horizontally */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center"> {/* Adjusted gap, ADDED justify-items-center */}

                     {/* Map Container - Left Column */}
                     {/* ADDED mx-auto for centering, REMOVED ml-[15%] */}
                     <motion.div
                         className="w-full max-w-md lg:max-w-none h-[350px] md:h-[450px] lg:h-[500px] border border-[#343434] rounded-lg overflow-hidden shadow-xl mx-auto" // Apply theme styles, responsive height, rounded corners, shadow, ADDED max-w-md for centering on small screens, ADDED mx-auto, REMOVED ml-[15%]
                         variants={mapVariants} // Animate the map container
                     >
                         <div className='m-x-auto h-full'> {/* Added mx-auto for centering */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.579987854354!2d83.30844517488168!3d17.71914889484548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395109657909b5%3A0x79181c63f05d91f4!2sVisakhapatnam%20Railway%20Station!5e0!3m2!1sen!2sin!4v1678886478956!5m2!1sen!2sin" // Ensure this is a valid and safe map URL
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location on Google Map"
                            ></iframe>
                         </div>
                     </motion.div>

                     {/* Details - Right Column */}
                     {/* Changed lg:items-start to lg:items-center to center content in the right column on large screens */}
                     <motion.div
                         className="text-center lg:text-center flex flex-col items-center" // Align text and items, CHANGED lg:items-start to lg:items-center
                         variants={detailsVariants} // Animate the details container and stagger its children
                     >
                         {/* Distance List */}
                         <div className="mb-8 w-full lg:w-auto max-w-md"> {/* Add margin bottom and width control, ADDED max-w-md for centering list on small screens */}
                             <h3 className="text-xl font-Garamond font-semibold text-white mb-4">Key Distances:</h3> {/* Added heading */}
                             <ul className="space-y-3"> {/* Added list styling */}
                                 <motion.li className="flex items-center justify-center lg:justify-center gap-x-2 text-lg text-yellow-400 font-Lora" variants={distanceItemVariants}> {/* Styled list item, CHANGED lg:justify-start to lg:justify-center */}
                                     <FaMapMarkerAlt className="text-xl flex-shrink-0" /> <span>Airport – 20 mins</span>
                                 </motion.li>
                                 <motion.li className="flex items-center justify-center lg:justify-center gap-x-2 text-lg text-yellow-400 font-Lora" variants={distanceItemVariants}> {/* Styled list item, CHANGED lg:justify-start to lg:justify-center */}
                                      <FaMapMarkerAlt className="text-xl flex-shrink-0" /> <span>Beach Road – 10 mins</span>
                                 </motion.li>
                                 <motion.li className="flex items-center justify-center lg:justify-center gap-x-2 text-lg text-yellow-400 font-Lora" variants={distanceItemVariants}> {/* Styled list item, CHANGED lg:justify-start to lg:justify-center */}
                                      <FaMapMarkerAlt className="text-xl flex-shrink-0" /> <span>Railway Station – 5 mins</span>
                                 </motion.li>
                             </ul>
                         </div>

                         {/* Get Directions Button */}
                         <motion.a
                             href="https://maps.google.com/" // Replace with actual directions link
                             target="_blank" // Open in new tab
                             rel="noopener noreferrer" // Security best practice
                             className="inline-block bg-[#daa520] text-black border border-[#daa520] rounded-lg px-8 py-3 text-lg font-semibold transition-colors duration-300 hover:bg-[#b8860b] hover:border-[#b8860b] font-Garamond shadow-lg" // Apply theme styles, increased padding, added shadow
                             variants={buttonVariants} // Animate the button relative to its container
                         >
                             <span role="img" aria-label="location pin">📍</span> Get Directions
                         </motion.a>
                     </motion.div>

                 </div>

             </div>
        </motion.section>
    );
};

export default LocationSection;
