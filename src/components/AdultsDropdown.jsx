import { useRoomContext } from '../context/RoomContext';
import { BsChevronDown } from 'react-icons/bs';
import { adultsList } from '../constants/data';
import { Menu } from '@headlessui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AdultsDropdown = () => {
  const { adults, setAdults } = useRoomContext();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0, 
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    } else {
      controls.start({ opacity: 0, y: -20, transition: { duration: 0.3 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='w-full h-full bg-white relative'
      ref={ref}
      initial={{ opacity: 0, y: -20 }} 
      animate={controls}
    >
      <Menu as='div' className='w-full h-full bg-white relative'>
        <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
          {adults}
          <BsChevronDown className='text-base text-accent-hover' />
        </Menu.Button>

        <Menu.Items
          as='ul'
          className='bg-white absolute w-full flex flex-col z-40'
        >
          {adultsList.map(({ name }, idx) => (
            <Menu.Item
              as='li'
              key={idx}
              onClick={() => setAdults(name)}
              className='border-b last-of-type:border-b-0 h-10 hover:bg-accent hover:text-white w-full flex items-center justify-center cursor-pointer'
            >
              {name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </motion.div>
  );
};

export default AdultsDropdown;  