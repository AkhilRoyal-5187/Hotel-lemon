import { useRoomContext } from '../context/RoomContext';
import { SpinnerDotted } from 'spinners-react';
import { Room } from '.';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const Rooms = () => {
  const { rooms, loading } = useRoomContext();
  const controlsTitle = useAnimation();
  const controlsSubtitle = useAnimation();
  const controlsCards = rooms.map(() => useAnimation());
  const [refTitle, inViewTitle] = useInView({ threshold: 0.5 });
  const [refSubtitle, inViewSubtitle] = useInView({ threshold: 0.5 });
  const [refCards, inViewCards, entryCards] = useInView({ threshold: 0.2 }); // Get the entry for cards
  const isInitialRenderCards = useRef(true);

  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
    } else {
      controlsTitle.start({ y: 30, opacity: 0 });
    }
  }, [controlsTitle, inViewTitle]);

  useEffect(() => {
    if (inViewSubtitle) {
      controlsSubtitle.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 },
      });
    } else {
      controlsSubtitle.start({ y: 30, opacity: 0 });
    }
  }, [controlsSubtitle, inViewSubtitle]);

  useEffect(() => {
    const animateCardsIn = () => {
      controlsCards.forEach((control, index) => {
        control.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeInOut', delay: 0.1 * index },
        });
      });
    };

    const resetCards = () => {
      controlsCards.forEach((control) => {
        control.start({ y: 50, opacity: 0 });
      });
    };

    if (inViewCards) {
      animateCardsIn();
      isInitialRenderCards.current = false;
    } else if (isInitialRenderCards.current && entryCards?.isIntersecting) {
      animateCardsIn();
      isInitialRenderCards.current = false;
    } else if (!inViewCards) {
      resetCards();
    }
  }, [inViewCards, controlsCards, entryCards]);

  return (
    <section
      className='py-24 rounded-3xl m-3'
      style={{
        backgroundColor: '#d4af37',
      }}
      ref={refSubtitle}
    >
      {loading && (
        <div className='h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center'>
          <SpinnerDotted />
        </div>
      )}

      <div className='container mx-auto lg:px-0'>
        <motion.div
          className='text-center mb-6 overflow-hidden'
          ref={refTitle}
          initial={{ y: 30, opacity: 0 }}
          animate={controlsTitle}
        >
          <p className='font-tertiary uppercase text-[25px] tracking-[6px] text-[#9b111e]'>
            Our Stays
          </p>
          <h2 className='font-primary text-[60px]   text-[#9b111e]'>Sleep Your Best</h2>
        </motion.div>

        <div
          className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'
          ref={refCards}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ y: 50, opacity: 0 }}
              animate={controlsCards[index]}
              className='overflow-hidden'
            >
              <Room room={room} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;