import React, { useEffect } from 'react'; // Import useEffect
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation
import { useInView } from 'react-intersection-observer'; // Import useInView

const Room = ({ room }) => {

    const { id, name, image, size, maxPerson, description, price } = room ?? {};

    // Animation hooks for this specific Room component
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1, // Adjust as needed for when the animation should start for THIS element
        triggerOnce: false, // IMPORTANT: Set to false to re-trigger animation on every scroll
    });

    // Effect to control this Room component's animation based on its inView status
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            // Reset animation when out of view to trigger again on scroll in
            controls.start("hidden");
        }
    }, [controls, inView]); // Dependencies on controls and inView

    // Animation variants for this specific Room component
    const roomVariants = {
        hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7, // Animation duration
                ease: 'easeOut',
            },
        },
    };


    return (
        // Wrap the main div with motion.div and apply animation props
        <motion.div
            ref={ref} // Attach the inView ref to the top-level motion.div
            variants={roomVariants} // Apply the defined animation variants
            initial="hidden" // Start in the 'hidden' state
            animate={controls} // Animate using the controls based on inView status
            className='bg-white shadow-2xl min-h-[500px] group rounded-lg overflow-hidden flex flex-col' // Added rounded corners, overflow hidden, and flex-col
        >

            <div className='overflow-hidden flex-shrink-0'> {/* flex-shrink-0 prevents image from shrinking */}
                <img src={image} alt="img" className='group-hover:scale-110 transition-all duration-300 w-full object-cover h-full' /> {/* Added object-cover h-full for better image fitting */}
            </div>

            {/* Added text-gray-800 class here for visibility */}
            <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base rounded-lg z-10 flex-shrink-0 text-gray-800'> {/* Added rounded corners, z-10 for stacking context, flex-shrink-0, and text-gray-800 */}

                <div className='flex justify-between w-[80%]'>

                    <div className='flex items-center gap-x-2'>
                        <div className='text-yellow-500'>
                            <BsArrowsFullscreen className='text-[15px]' />
                        </div>
                        {/* Flex container for Size label and value */}
                        <div className='flex items-center'> {/* Added flex and gap-x-1 */}
                            {/* Fixed width for the label */}
                            <div className='w-[40px]'>Size</div> {/* Adjusted width */}
                            <div>{size}m²</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='text-yellow-500'>
                            <BsPeople className='text-[18px]' />
                        </div>
                        {/* Flex container for Max people label and value */}
                        <div className='flex items-center gap-x-3'> {/* Added flex and gap-x-1 */}
                             {/* Adjusted fixed width for the label */}
                            <div className='w-[120px]'>{maxPerson}  people Max</div> {/* Adjusted width for label */}
                            {/* The maxPerson div already has text-black-900, which is fine */}
                            <div className='text-black-900'></div>
                        </div>
                    </div>

                </div>

            </div>

            {/* name and description and button container - Use flex-grow to push button down */}
            <div className='text-center px-4 flex flex-col flex-grow justify-between'> {/* Added horizontal padding, flex-col, flex-grow, justify-between */}
                <div> {/* Wrapper for name and description */}
                    <Link to={`/room/${id}`}>
                        <h3 className="h3 text-[#9b111e] font-Garamond text-xl font-semibold mb-2">{name}</h3> {/* Applied theme font and size */}
                    </Link>

                    {/* Changed min-h to fixed h-[60px] for consistent height */}
                    {/* Added overflow-hidden to prevent text overflow if it's slightly too long */}
                    <p className='max-w-[300px] mx-auto mb-3 lg:mb-6 text-gray-600 font-Lora text-sm h-[60px] overflow-hidden'>{description.slice(0, 56)}..</p> {/* Applied theme font and size, CHANGED TO FIXED HEIGHT, added overflow-hidden */}
                </div>

                {/* button */}
                {/* Removed the 'block' class as the parent is now flex-col */}
                <Link
                    to={`/room/${id}`}
                    className="bg-[#9b111e] hover:bg-[#ec2c3f] text-white font-bold py-2 px-4 rounded max-w-[240px] mx-auto duration-300 text-center font-Garamond text-lg mb-4" // Added text-center, theme font/size, and bottom margin
                >
                    Book now from ${price}
                </Link>
            </div>


        </motion.div>
    );

};

export default Room;
