import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoWhite } from '../assets'; // SVG Logo
import { LogoDark } from '../assets'; // SVG Logo

const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = ['Book your stay', 'Location', 'Contact'];

  // Badges (stickers)
  // const badges = [
  //   { text: 'Free Wi-Fi' },
  //   { text: 'Business Friendly' },
  //   { text: 'Multi-cuisine Dining' },
  //   { text: 'Prime Location' },
  // ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}>
          {
            header
              ? <LogoDark className='w-[160px]' /> 
              : <LogoWhite className='w-[160px]' />
          }
        </Link>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(link =>
              <Link to="/" className='transition hover:text-accent' key={link}>
                {link}
              </Link>
            )
          }
        </nav>

      </div>

      {/* Stickers/Badges at the bottom */}
      {/* <div className="absolute bottom-0 w-full flex justify-center gap-6 py-4 bg-transparent">
        {badges.map((badge, index) => (
          <div key={index} className="px-4 py-2 text-xs font-bold text-gold-500">
            {badge.text}
          </div>
        ))}
      </div> */}

    </header>
  );
};

export default Header;