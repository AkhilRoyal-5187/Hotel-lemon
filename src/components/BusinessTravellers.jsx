import React, { useEffect, useRef } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import AOS from 'aos'; // Keeping AOS init, although GSAP is handling main scroll animations

gsap.registerPlugin(ScrollTrigger);

const BusinessTravelers = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRefs = useRef([]);
  const downloadButtonRef = useRef(null);
  const enquireButtonRef = useRef(null);

  useEffect(() => {
    // Initialize AOS (if you still need it for other elements or default behavior)
    AOS.init({
      duration: 1000,
      once: true, // Keeping once: true for AOS, as GSAP handles repeat
      easing: 'ease-out-cubic',
    });

    // Make sure the DOM elements exist before splitting
    if (!titleRef.current || !subtitleRef.current) return;

    const title = new SplitType(titleRef.current, { types: 'words, chars' });
    const subtitle = new SplitType(subtitleRef.current, { types: 'words' });

    // Animation for the entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
        },
      }
    );

    // Animation for Title Chars
    gsap.fromTo(
      title.chars,
      { opacity: 0, y: '100%' },
      {
        opacity: 1,
        y: '0%',
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
        },
      }
    );

    // Animation for Subtitle Words
    gsap.fromTo(
      subtitle.words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
        },
      }
    );

    // Animation for Features
    featuresRefs.current.forEach((feature, index) => {
      if (!feature) return; // Ensure feature element exists
      gsap.fromTo(
        feature,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3 + index * 0.1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
          },
        }
      );
    });

    // Animation for Download Button
    gsap.fromTo(
      downloadButtonRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: downloadButtonRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
        },
      }
    );

    // Animation for Enquire Button
    gsap.fromTo(
      enquireButtonRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.7,
        scrollTrigger: {
          trigger: enquireButtonRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Repeat on scroll in/out
        },
      }
    );

     // Cleanup function for ScrollTriggers
     return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-4 text-white bg-cover bg-center rounded-[40px] mx-3 mt-20"
      style={{
        backgroundColor: '#d4af37',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center ">
        {/* Added overflow-hidden to parent to prevent text overflow during SplitType animation */}
        <h2 ref={titleRef} className="text-4xl lg:text-5xl font-primary text-[#9b111e] mb-6 overflow-hidden">
          Work Meets Comfort
        </h2>
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-800 mb-10 overflow-hidden">
          Your ideal base in Vizag for meetings, conferences, and business trips.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4">
          {["Conference Room (20–50 pax)", "High-Speed Wi-Fi & AV Setup", "Early Check-in & Late Check-out", "Airport Transfers", "Corporate Packages"].map((item, index) => (
            <div
              key={index}
              ref={(el) => (featuresRefs.current[index] = el)}
              className="p-6 bg-[#9b111a] rounded-md text-white hover:bg-[#ac1c26] transition"
            >
              <h3 className="font-primary text-xl">{item}</h3>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            ref={downloadButtonRef}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full text-lg font-primary transition"
          >
            <FaDownload />
            Download Business Brochure
          </button>
          <button
            ref={enquireButtonRef}
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white/20 rounded-full text-lg font-primary transition"
          >
            <FaEnvelope />
            Enquire for Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTravelers;