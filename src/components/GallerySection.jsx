import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const photoCategories = [
  { name: "Rooms", imageUrl: "https://static.wixstatic.com/media/c837a6_1c6101ab26bd4ce39dc24d05df83afe1~mv2.jpg/v1/fill/w_432,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aura_Restaurant.jpg" },
  { name: "Restaurant", imageUrl: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=scseGeDCjSghwD2RELSaaT2Pn2NQz0gflEQ4BuiTSjs=" },
  { name: "Lobby & Reception", imageUrl: "https://royellaa.netlify.app/images/home-1/room-1.jpg" },
  { name: "Events", imageUrl: "https://royellaa.netlify.app/images/home-1/room-3.jpg" },
];


const GallerySection = () => {

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <motion.section
      ref={ref}
      className="py-20 px-5 bg-gradient-to-br from-[#ddda29] to-[#9b0e04] text-center rounded-2xl shadow-xl my-10 mx-auto max-w-[98%] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2
        className="text-4xl text-[#9b111e] mb-12 tracking-wide font-primary font-semibold uppercase"
        variants={itemVariants}
      >
        See It Before You Stay
      </motion.h2>

      <motion.div
        className="flex justify-center gap-6 mb-12 flex-wrap"
        variants={containerVariants}
      >
        {photoCategories.map((category) => (
          <motion.button
            key={category.name}
            className="group py-4 px-8 bg-white text-gray-600 border-2 border-[#eee8aa] rounded-lg cursor-pointer text-lg shadow-md font-medium flex flex-col items-center overflow-hidden relative
                       transition duration-300 ease-in-out
                       hover:bg-[#9b111e] hover:border-[#daa520] hover:text-gray-800"
            onClick={() => console.log(`View photos of ${category.name}`)}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={itemVariants}
          >
            <motion.img
              src={category.imageUrl}
              alt={category.name}
              className="w-32 h-32 rounded-full mb-4 object-cover transition-transform duration-300 ease
                         group-hover:scale-110"
            />
            <span
              className="mt-2.5 text-sm text-inherit"
            >
              {category.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <motion.a
        href="/gallery"
        className="inline-block py-4 px-8 bg-[#9b111e] text-white rounded-lg cursor-pointer text-xl no-underline shadow-xl font-semibold
                   transition duration-300 ease-in-out
                   hover:bg-[#b8860b]"
        whileHover={{ scale: 1.03, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
        transition={{ type: "spring", stiffness: 300 }}
        variants={itemVariants}
      >
        View Full Gallery
      </motion.a>
    </motion.section>
  );
};

export default GallerySection;