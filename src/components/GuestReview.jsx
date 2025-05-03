import React, { useState, useEffect } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LogoWhite } from "../assets"; // Assuming LogoWhite is correctly imported and is an SVG or component

const GuestReviews = () => {
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

    // Animation variants matching GallerySection
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

    // Variants for the carousel container
    const carouselVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 10,
                duration: 1,
                delay: 0.4, // Delay after initial items animate
            },
        },
    };

    // Variants for individual review cards within the carousel
    const reviewCardVariants = {
         // Keeping a simple fade-in/scale for individual cards within the animated carousel
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
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
            wishImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            text: 'A sanctuary of tranquility and elegance. The staff’s dedication to excellence is evident in every interaction. A truly unforgettable stay.',
            rating: 5,
            wishImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            text: 'Exceptional in every aspect. The luxurious touches and the breathtaking views made my experience truly special. Highly recommended for those seeking indulgence.',
            rating: 5,
            wishImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3500); // Changed interval to 3500ms (7000 / 2)
        return () => clearInterval(intervalId);
    }, [reviews.length]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<FaStar key={i} className={`mr-[3px] text-sm ${i < rating ? 'text-[#ffd700]' : 'text-[#eee8aa]'}`} />);
        }
        return <div className="flex justify-center mb-[15px]">{stars}</div>;
    };

    const transformValue = -currentIndex * 100 + '%';

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl overflow-hidden font-serif mt-8" // Apply theme and base styles
        >
            <div className="Container text-white"> {/* Assuming "Container" provides max-width and centering */}

                {/* Header section mimicking GallerySection */}
                <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]">
                    <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants}>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                        <a href="/" aria-label="Homepage"> {/* Added aria-label */}
                            <LogoWhite className="w-[50px] h-[50px]" /> {/* Assuming LogoWhite is a component, adjust size if needed */}
                        </a>
                        <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color, ensure border-none */}
                    </motion.div>
                    <motion.h2 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase" variants={itemVariants}>
                        WHAT OUR GUESTS SAY
                    </motion.h2>
                    <motion.p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base" variants={itemVariants}>
                         Hear directly from those who have experienced the luxury and comfort of our hotel.
                    </motion.p>
                </div>

                {/* Carousel Section */}
                <motion.div
                    className="relative w-[95%] max-w-[1000px] mx-auto overflow-hidden mt-[40px] md:mt-[60px]" // Adjusted margin top
                    variants={carouselVariants} // Animate the carousel container
                >
                    <motion.div
                        className="flex items-stretch transition-transform duration-350 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)]" // Keep transition for carousel movement
                        style={{ transform: `translateX(${transformValue})` }}
                    >
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                className="flex-none w-full p-5 border border-[#343434] bg-[#272727] rounded-2xl shadow-md text-left flex flex-col justify-between min-h-[300px]" // Apply theme styles
                                variants={reviewCardVariants} // Apply animation to individual cards
                                initial="hidden" // Set initial state
                                animate="visible" // Animate based on carousel's visibility (handled by parent variants)
                                viewport={{ once: true }} // Keep individual card animation triggering once when it enters the viewport *within the animated carousel*
                            >
                                <div className="flex flex-col items-center mb-[15px]">
                                    {review.wishImage && (
                                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden mb-[15px]">
                                            <img src={review.wishImage} alt="Guest" className="block w-full h-full object-cover" />
                                        </div>
                                    )}
                                    {renderStars(review.rating)}
                                </div>
                                <p className="text-base leading-relaxed text-lightGray font-normal italic mb-5 font-Lora">"{review.text}"</p>
                                <FaRegHeart className="text-[#ff6f61] text-xl self-end" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <motion.a
                        href="/read-more-reviews"
                        className="inline-block bg-[#daa520] text-white border border-[#daa520] rounded-lg px-6 py-3 text-lg font-semibold transition-colors duration-300 hover:bg-[#b8860b] hover:border-[#b8860b]"
                        variants={itemVariants} // Animate buttons
                    >
                        Read More Reviews
                    </motion.a>
                    <motion.a
                        href="/write-a-review"
                        className="inline-block bg-[#daa520] text-white border border-[#daa520] rounded-lg px-6 py-3 text-lg font-semibold transition-colors duration-300 hover:bg-[#b8860b] hover:border-[#b8860b]"
                         variants={itemVariants} // Animate buttons
                    >
                        Write a Review
                    </motion.a>
                </div>

            </div>
        </motion.section>
    );
};

export default GuestReviews;