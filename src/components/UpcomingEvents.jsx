import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import karavali from "../assets/festivals/karavali.jpg";
import shigmo from "../assets/festivals/shigmotsav.jpg";
import bhuta from "../assets/festivals/bhuta-kola.jpg";
import marikamba from "../assets/festivals/sirsi-jatra.jpg";
import shivaratri from "../assets/festivals/gokarna.jpg";

const festivals = [
  {
    name: "Karavali Festival",
    date: "04 May – 08 May",
    image: karavali,
    details: "Held along the coastal belt with processions, cultural events, and beach fairs."
  },
  {
    name: "Shigmotsav",
    date: "12 March",
    image: shigmo,
    details: "A vibrant spring festival celebrated with folk dances and parades."
  },
  {
    name: "Bhuta Kola & Nagaradhane",
    date: "Various Dates",
    image: bhuta,
    details: "Ancient spirit worship rituals, celebrated with grandeur across the region."
  },
  {
    name: "Sirsi Marikamba Jatra",
    date: "01 June",
    image: marikamba,
    details: "A massive biennial fair in Sirsi attracting lakhs of devotees."
  },
  {
    name: "Gokarna Shivaratri Festival",
    date: "10 June",
    image: shivaratri,
    details: "Night-long celebrations and rituals around Lord Shiva at Gokarna Temple."
  },
];

const FestivalCalendar = () => {
  const [activeFestival, setActiveFestival] = useState(null);

  return (
    <section className="py-20 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white-800">Festive Calendar</h2>
        <p className="text-md text-white-700 mt-2">Dive into the vibrant festivals that define Uttara Kannada's culture.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-2 hide-scrollbar">
        {festivals.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-white min-w-[250px] max-w-sm rounded-xl shadow-lg border border-yellow-400 cursor-pointer hover:shadow-xl transition-all"
            onClick={() => setActiveFestival(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-800 mb-1">{item.name}</h3>
              <p className="text-sm text-green-600 mb-2">{item.date}</p>
              <div className="flex items-center gap-1 text-green-700 text-sm">
                <FaInfoCircle /> Click for details
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeFestival && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 text-green-800 relative shadow-xl">
            <button
              onClick={() => setActiveFestival(null)}
              className="absolute top-2 right-3 text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <img src={activeFestival.image} alt={activeFestival.name} className="w-full h-60 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{activeFestival.name}</h3>
            <p className="text-sm mb-2">Date: {activeFestival.date}</p>
            <p className="text-md">{activeFestival.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FestivalCalendar;
