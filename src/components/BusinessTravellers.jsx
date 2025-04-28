import React, { useEffect, useRef } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import AOS from 'aos';

gsap.registerPlugin(ScrollTrigger);

const BusinessTravelers = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRefs = useRef([]);
  const downloadButtonRef = useRef(null);
  const enquireButtonRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Default behavior: animate only once
      easing: 'ease-out-cubic',
    });

    const title = new SplitType(titleRef.current, { types: 'words, chars' });
    const subtitle = new SplitType(subtitleRef.current, { types: 'words' });

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
        },
      }
    );

    gsap.fromTo(
      subtitle.words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
        },
      }
    );

    featuresRefs.current.forEach((feature) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
          },
        }
      );
    });

    gsap.fromTo(
      downloadButtonRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: downloadButtonRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      enquireButtonRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: enquireButtonRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative py-12 px-4 text-white bg-cover bg-center rounded-xl mx-3 md:mx-10 lg:mx-20 mt-20"
      style={{
        backgroundColor: '#d4af37',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center ">
        <h2 ref={titleRef} className="text-4xl lg:text-5xl font-primary  text-[#9b111e] mb-6 overflow-hidden">
          Work Meets Comfort
        </h2>
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-800 mb-10 overflow-hidden">
          Your ideal base in Vizag for meetings, conferences, and business trips.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4">
          {[
            "Conference Room (20–50 pax)",
            "High-Speed Wi-Fi & AV Setup",
            "Early Check-in & Late Check-out",
            "Airport Transfers",
            "Corporate Packages",
          ].map((item, index) => (
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