import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets";


import {
    KeyIcon,
    WifiIcon,
    MapPinIcon,
    ClockIcon,
    SparklesIcon,
    SwatchIcon,
    BoltIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline';

const facilitiesData = [
    { id: 1, title: "Smart Key", icon: KeyIcon },
    { id: 2, title: "Free Wi-Fi", icon: WifiIcon },
    { id: 3, title: "Parking", icon: MapPinIcon },
    { id: 4, title: "24/7 Service", icon: ClockIcon },
    { id: 5, title: "Restaurant", icon: SparklesIcon },
    { id: 6, title: "Air Conditioning", icon: SwatchIcon },
    { id: 7, title: "Free Parking", icon: BoltIcon },
    { id: 8, title: "Shower", icon: FaceSmileIcon },
];

const FacilitiesSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

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

    const gridContainerVariants = {
         hidden: { opacity: 0 },
         visible: {
             opacity: 1,
             transition: {
                 staggerChildren: 0.05,
                 delayChildren: 0.1,
             }
         }
    };

    const gridItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);


    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl mt-8"
        >
            <div className="Container">
                <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]" data-aos="fade-up" data-aos-duration="1000">
                    <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants}>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
                                <a href="/" >
                                        <LogoWhite />
                                </a>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
                    </motion.div>
                    <motion.h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase" variants={itemVariants}>
                        HOTEL&apos;S FACILITIES
                    </motion.h1>
                    <motion.p className="font-Lora leading-[26px] text-white font-normal text-sm sm:text-base" variants={itemVariants}>
                        Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling
                    </motion.p>
                </div>

                <motion.div
                    className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-4 xl:gap-[26px] pt-[60px] pb-[110px] px-8 lg:px-10 xl:px-28 2xl:px-0"
                    data-aos="fade-up" data-aos-duration="1000"
                    variants={gridContainerVariants}
                >
                    {facilitiesData.map(facility => (
                        <motion.div
                            key={facility.id}
                            className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] group overflow-hidden
                                       bg-[#272727] group-hover:bg-khaki"
                            variants={gridItemVariants}
                        >
                            <div className="mb-4 lg:mb-6">
                                <facility.icon className="w-12 h-12 text-white mx-auto group-hover:text-[#9b111e] transition-colors duration-300" />
                            </div>

                            <div className="">
                                <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative
                                               before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:-translate-x-1/2 before:top-[-27px] before:transition-colors before:duration-300
                                               group-hover:text-[#9b111e] group-hover:before:bg-[#9b111e]
                                               before:bg-white">
                                    {facility.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FacilitiesSection;