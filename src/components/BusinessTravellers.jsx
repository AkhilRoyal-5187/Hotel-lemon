import React, { useEffect } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets"; 
const BusinessTravelers = () => {
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

    const featuresGridVariants = {
         hidden: { opacity: 0 },
         visible: {
             opacity: 1,
             transition: {
                 staggerChildren: 0.08, 
                 delayChildren: 0.3, 
             }
         }
    };

    const featureItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

     const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }, 
     };


    const features = ["Conference Room (20–50 pax)", "High-Speed Wi-Fi & AV Setup", "Early Check-in & Late Check-out", "Airport Transfers", "Corporate Packages", "Dedicated Support Staff"]; // Added one more for potentially better grid layout

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl overflow-hidden text-white mt-7">
             <div className="Container"> 
                <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]">
                    <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants}>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> 
                        <a href="/" aria-label="Homepage">
                             <LogoWhite className="w-[50px] h-[50px]" /> 
                        </a>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> 
                    </motion.div>
                    <motion.h2 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase" variants={itemVariants}>
                         WORK MEETS COMFORT
                    </motion.h2>
                    <motion.p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base" variants={itemVariants}>
                        Your ideal base in Vizag for meetings, conferences, and business trips.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-10 md:mt-12 px-5 md:px-8 lg:px-10 xl:px-28" // Apply theme spacing and padding
                    variants={featuresGridVariants}
                >
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-[#272727] rounded-md text-white hover:bg-[#3a3a3a] transition duration-300 border border-[#343434] text-center" // Apply theme styles
                            variants={featureItemVariants} 
                        >
                            <h3 className="font-Garamond text-xl font-medium">{item}</h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-6 mt-12 px-5 md:px-8 lg:px-10 xl:px-28" // Apply theme spacing and padding
                    variants={containerVariants} 
                >
                    <motion.a
                        href="#" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#daa520] text-black border border-[#daa520] rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-[#b8860b] hover:border-[#b8860b] font-Garamond" // Apply theme styles
                        variants={buttonVariants} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                    >
                        <FaDownload />
                        Download Business Brochure
                    </motion.a>
                    <motion.a
                        href="#" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-white/20 font-Garamond" // Apply theme styles
                        variants={buttonVariants} 
                         whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                    >
                        <FaEnvelope />
                        Enquire for Event
                    </motion.a>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default BusinessTravelers;