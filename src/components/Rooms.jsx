import { useRoomContext } from '../context/RoomContext';
import { SpinnerDotted } from 'spinners-react';
import { Room } from '.';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Rooms = () => {
  const { rooms, loading } = useRoomContext();
  const controlsTitle = useAnimation();
  const controlsRooms = rooms.map(() => useAnimation());
  const [refTitle, inViewTitle] = useInView({ threshold: 0.5 });
  const [refRooms, inViewRooms] = useInView({ threshold: 0.2 });

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
    if (inViewRooms) {
      controlsRooms.forEach((control, index) => {
        let initialX = 0;
        if (rooms.length === 3) {
          if (index === 0) initialX = -50; // Start from left
          if (index === 2) initialX = 50;  // Start from right
        } else if (rooms.length === 2) {
          if (index === 0) initialX = -50; // Start from left
          if (index === 1) initialX = 50;  // Start from right
        }
        control.start({
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeInOut' },
        });
      });
    } else {
      controlsRooms.forEach((control, index) => {
        let initialX = 0;
        if (rooms.length === 3) {
          if (index === 0) initialX = -50; // Start from left
          if (index === 2) initialX = 50;  // Start from right
        } else if (rooms.length === 2) {
          if (index === 0) initialX = -50; // Start from left
          if (index === 1) initialX = 50;  // Start from right
        }
        control.start({ x: initialX, y: 50, opacity: 0 });
      });
    }
  }, [inViewRooms, controlsRooms, rooms.length]);

  return (
    <section className='py-24'>
      {loading && (
        <div className='h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center'>
          <SpinnerDotted />
        </div>
      )}

      <div className='container mx-auto lg:px-0'>
        <motion.div
          className='text-center mb-6'
          ref={refTitle}
          initial={{ y: 30, opacity: 0 }}
          animate={controlsTitle}
        >
          <p className='font-tertiary uppercase text-[15px] tracking-[6px]'>
            Our Stays
          </p>
          <h2 className='font-primary text-[45px]'>Sleep Your Best</h2>
        </motion.div>

        <div
          className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'
          ref={refRooms}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ x: rooms.length === 3 ? (index === 0 ? -50 : index === 2 ? 50 : 0) : rooms.length === 2 ? (index === 0 ? -50 : 50) : 0, y: 50, opacity: 0 }}
              animate={controlsRooms[index]}
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