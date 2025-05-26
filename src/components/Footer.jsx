import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets";
import { PhoneIcon, ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'; 
const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false, 
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, 
                delayChildren: 0.2, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const linkItemVariants = {
         hidden: { opacity: 0, y: 10 },
         visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };


    return (
        <footer className='py-[60px] px-4 bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl text-white font-Lora mt-8'> {/* Applied theme styles */}
            <motion.div
                ref={ref} 
                className='max-w-7xl mx-auto flex flex-col items-center gap-10 text-center' 
                variants={containerVariants} 
                initial="hidden" 
                animate={controls}
            >
                <motion.a
                    href="/"
                    className='inline-block leading-none' 
                    aria-label="Homepage"
                    variants={itemVariants}
                >
                    <LogoWhite className="w-[100px] h-auto" /> 
                </motion.a>

                <motion.div
                    className='flex flex-wrap justify-center gap-4 text-base' 
                    variants={itemVariants} 
                >
                    <motion.div
                        className='flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer' // Applied elegant theme styles
                        variants={linkItemVariants} 
                    >
                        <PhoneIcon className='w-5 h-5 text-yellow-400' /> 
                        <span>8125 55 9494</span>
                    </motion.div>
                     <motion.div
                        className='flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer' // Applied elegant theme styles
                        variants={linkItemVariants} 
                    >
                        <ClockIcon className='w-5 h-5 text-yellow-400' /> 
                         <span>Reception: 24×7</span>
                    </motion.div>
                     <motion.div
                        className='flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer' // Applied elegant theme styles
                         variants={linkItemVariants} // Animate individual contact items
                    >
                        <EnvelopeIcon className='w-5 h-5 text-yellow-400' /> 
                         <span>info@hotellemonpark.in</span>
                    </motion.div>
                     <motion.div
                        className='flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer' // Applied elegant theme styles
                         variants={linkItemVariants} // Animate individual contact items
                    >
                        <MapPinIcon className='w-5 h-5 text-yellow-400' /> 
                         <span>Hotel Lemon Park, Vishakapatnam</span>
                    </motion.div>
                </motion.div>

               
                <motion.div
                    className='flex justify-center gap-6 text-2xl' 
                    variants={itemVariants}
                >
                    <motion.a
                        href="#"
                        aria-label="Instagram"
                        className='text-white transition-colors duration-300 hover:text-yellow-400'
                        variants={linkItemVariants} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 448 512"><path d="M224.1 155.C56 155.1 0 211.1 0 279.1v36.5c0 17.1 13.9 31 31 31s31-13.9 31-31v-36.5c0-34 27.5-61.5 61.5-61.5h8.8c17.1 0 31-13.9 31-31s-13.9-31-31-31zm-224.1 0c0-34 27.5-61.5 61.5-61.5h8.8c17.1 0 31-13.9 31-31s-13.9-31-31-31H61.5C27.5 31 0 58.5 0 92.5v62.5c0 17.1 13.9 31 31 31s31-13.9 31-31v-62.5zm448 0c0-34-27.5-61.5-61.5-61.5h-8.8c-17.1 0-31 13.9-31 31s13.9 31 31 31h8.8c34 0 61.5 27.5 61.5 61.5v36.5c0 17.1 13.9 31 31 31s31-13.9 31-31v-36.5c0-68-56-124-124-124.1zM386.5 31c-17.1 0-31 13.9-31 31s13.9 31 31 31h8.8c34 0 61.5 27.5 61.5 61.5v62.5c0 17.1 13.9 31 31 31s31-13.9 31-31v-62.5c0-34-27.5-61.5-61.5-61.5h-8.8zM192 352c-88.4 0-160 71.6-160 160v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-53 43-96 96-96s96 43 96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-88.4-71.6-160-160-160z"/></svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        aria-label="Google Reviews"
                        className='text-white transition-colors duration-300 hover:text-yellow-400'
                         variants={linkItemVariants} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        aria-label="LinkedIn"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                         variants={linkItemVariants} // Animate individual social links
                        whileHover={{ scale: 1.1 }} // Hover scale effect
                        whileTap={{ scale: 0.9 }} 
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 448 512"><path d="M416 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM135.5 421.1H81.8V185.9h53.7V421.1zM108.1 165.5c-18.9 0-34.2-15.3-34.2-34.2s15.3-34.2 34.2-34.2 34.2 15.3 34.2 34.2-15.3 34.2-34.2 34.2zM421.8 421.1h-53.7V298.3c0-28.3-1-.5-6.2-14.2-5.2-13.7-12.4-29.6-30.1-29.6-23.2 0-33.7 17.5-33.7 42.8v154.8H241.4V185.9h53.6v23.2h.4c7.5-14.5 25.8-29.6 53.1-29.6 36.1 0 63.7 23.2 63.7 73.8V421.1z"/></svg>
                    </motion.a>
                </motion.div>

                {/* Quick Links Section */}
                 {/* Animate this section with item variants */}
                <motion.div
                    className='flex flex-wrap justify-center gap-x-6 gap-y-3 text-base' // Applied layout, spacing, and text size
                    variants={itemVariants} // Animate with item variants
                >
                    {/* Individual Quick Links with hover animation */}
                    <motion.a
                        href="#"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                        variants={linkItemVariants} // Animate individual links
                        whileHover={{ scale: 1.05 }} // Hover scale effect
                        whileTap={{ scale: 0.95 }} // Tap scale effect
                    >
                        Rooms
                    </motion.a>
                    <motion.a
                        href="#"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                         variants={linkItemVariants} // Animate individual links
                        whileHover={{ scale: 1.05 }} // Hover scale effect
                        whileTap={{ scale: 0.95 }} // Tap scale effect
                    >
                        Dining
                    </motion.a>
                    <motion.a
                        href="#"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                         variants={linkItemVariants} // Animate individual links
                        whileHover={{ scale: 1.05 }} // Hover scale effect
                        whileTap={{ scale: 0.95 }} // Tap scale effect
                    >
                        Business
                    </motion.a>
                    <motion.a
                        href="#"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                         variants={linkItemVariants} // Animate individual links
                        whileHover={{ scale: 1.05 }} // Hover scale effect
                        whileTap={{ scale: 0.95 }} // Tap scale effect
                    >
                        Gallery
                    </motion.a>
                    <motion.a
                        href="#"
                        className='text-white transition-colors duration-300 hover:text-yellow-400' // Applied theme colors and hover
                         variants={linkItemVariants} // Animate individual links
                        whileHover={{ scale: 1.05 }} // Hover scale effect
                        whileTap={{ scale: 0.95 }} // Tap scale effect
                    >
                        Book Now
                    </motion.a>
                </motion.div>

                {/* Copyright */}
                <motion.div variants={itemVariants}> {/* Animate copyright with item variants */}
                     <p className="text-sm text-lightGray mt-8">
                         &copy; {new Date().getFullYear()} Hotel Lemon Park. All rights reserved.
                     </p>
                </motion.div>

            </motion.div>
        </footer>
    );
};

export default Footer;
