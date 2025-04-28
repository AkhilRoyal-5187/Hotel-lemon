import { BsCalendar } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/datepicker.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
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
      controls.start({ opacity: 0, y: 20, transition: { duration: 0.3 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='relative flex items-center justify-end h-full'
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <div className='absolute z-10 pr-8'>
        <div><BsCalendar className='text-accent text-base' /> </div>
      </div>

      <DatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText='Check out'
        onChange={(date) => setEndDate(date)}
      />
    </motion.div>
  );
};

export default CheckOut;  