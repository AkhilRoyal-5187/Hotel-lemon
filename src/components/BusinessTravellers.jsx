import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa'; 

const BusinessTravelers = () => {
  return (
    <section className="relative py-16 px-4 text-white bg-white bg-cover bg-center">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-500 mb-6">
          Work Meets Comfort
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
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
              className="p-6 bg-yellow-100 rounded-xl text-gray-900 hover:bg-yellow-400 transition"
            >
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-600 text-white rounded-full text-lg font-semibold transition">
            <FaDownload />
            Download Business Brochure
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-700 hover:text-white rounded-full text-lg font-semibold transition">
            <FaEnvelope />
            Enquire for Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTravelers;
