import { useRoomContext } from '../context/RoomContext';
import { SpinnerDotted } from 'spinners-react';
// Assuming Room component is imported correctly and updated to handle its own animation
import { Room } from '.';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { LogoWhite } from "../assets"; // Assuming LogoWhite is correctly imported

const Rooms = () => {
    const { rooms, loading } = useRoomContext();

    // Controls and ref for the main section (used for header animation)
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1, // Adjust as needed for when the animation should start
        triggerOnce: false, // Animation triggers every time the section comes into view
    });

    // Effect to control the main section animation based on inView status
    // This will now primarily control the header elements
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            // Reset animation when out of view to trigger again on scroll in
            controls.start("hidden");
        }
    }, [controls, inView]);

    // Animation variants for header elements
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    // Note: The grid container variants and staggerChildren are removed from here.
    // Each Room component will now manage its own animation based on its own inView status.

    return (
        <section
            ref={ref} // Attach the inView ref to the main section element
            className='py-[110px] bg-gradient-to-br from-gray-900 to-[#9b111e] mx-2 rounded-3xl overflow-hidden text-white' // Apply theme background, padding, margin, rounding
        >
            {loading && (
                <div className='h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center'>
                    <SpinnerDotted color="yellow" size={80} /> {/* Styled spinner */}
                </div>
            )}

            <div className='Container mx-auto'> {/* Assuming Container class provides max-width and centering */}

                {/* Header section mimicking other sections */}
                {/* Animate header elements using itemVariants controlled by main 'controls' */}
                <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]">
                     <motion.div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5" variants={itemVariants} initial="hidden" animate={controls}>
                         <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color */}
                          <a href="/" aria-label="Homepage">
                              <LogoWhite className="w-[50px] h-[50px]" /> {/* Adjust size as needed */}
                          </a>
                         <hr className="w-[100px] h-[1px] bg-[#3b3b3b] border-none" /> {/* Use theme color */}
                     </motion.div>
                     <motion.p className='font-Lora uppercase text-sm sm:text-base tracking-[6px] text-lightGray mb-3' variants={itemVariants} initial="hidden" animate={controls}> {/* Apply theme font, size, color, spacing */}
                         Our Stays
                     </motion.p>
                     <motion.h2 className='font-Garamond text-3xl md:text-4xl 2xl:text-[38px] leading-tight font-semibold text-white mb-6' variants={itemVariants} initial="hidden" animate={controls}> {/* Apply theme font, size, color */}
                         Sleep Your Best
                     </motion.h2>
                </div>

                {/* Rooms Grid */}
                {/* This grid container will no longer manage stagger animation. */}
                {/* Each Room component inside will handle its own animation. */}
                <div
                    className='grid grid-cols-1 max-w-sm mx-auto gap-8 lg:grid-cols-3 lg:max-w-none lg:mx-0 mt-10 px-5 md:px-8 lg:px-10 xl:px-28' // Apply theme spacing and padding
                    // Removed variants and animate props here
                >
                    {rooms.map((room) => (
                         // Render the Room component. Ensure Room component uses useInView
                         // and useAnimation internally to animate its own motion.div.
                         <Room key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
