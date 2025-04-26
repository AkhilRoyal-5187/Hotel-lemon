import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { FaWifi, FaBriefcase, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const HeroSlider = () => {

  // Define the badges with icons
  const badges = [
    { text: 'Free Wi-Fi', icon: <FaWifi className="w-6 h-6 text-white" /> },
    { text: 'Business Friendly', icon: <FaBriefcase className="w-6 h-6 text-white" /> },
    { text: 'Multi-cuisine Dining', icon: <FaUtensils className="w-6 h-6 text-white" /> },
    { text: 'Prime Location', icon: <FaMapMarkerAlt className="w-6 h-6 text-white" /> },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
    >
      {
        sliderData.map(({ id, title, bg, btnNext }) =>
          <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>

            {/* Slide Content */}
            <div className='z-20 text-white text-center'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'></div>
              <h1 className='font-primary text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                {title}
              </h1>
              <h2 className='mb-6'>
                A modern business hotel in the heart of Vizag – where comfort meets convenience for travelers, corporates, and event guests.
              </h2>
              <button className='btn btn-lg btn-primary mx-auto mt-6 text-black'>{btnNext}</button>
            </div>

            {/* Background Image */}
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt="slide background" />
            </div>

            {/* Dark Overlay */}
            <div className='absolute w-full h-full bg-black/70' />

            {/* Badges Section */}
            <div className="absolute bottom-4 w-full flex justify-center gap-4 py-4 bg-transparent">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white">
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

          </SwiperSlide>
        )
      }
    </Swiper>
  )
};

export default HeroSlider;
