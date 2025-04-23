import React from "react";
import natureBg from "../assets/nature.jpg";
import { useNavigate } from "react-router-dom";
import {
  TentTree,
  Building,
  Landmark,
  Waves,
  Mountain,
} from "lucide-react";

const PlanTripRedesign = () => {
  const navigate = useNavigate();

  const data = [
    { title: "Resorts", icon: <TentTree size={32} />, listings: 24, path: "/resorts" },
    { title: "Hotels", icon: <Building size={32} />, listings: 18, path: "/hotels" },
    { title: "Temples", icon: <Landmark size={32} />, listings: 12, path: "/temples" },
    { title: "Beaches", icon: <Waves size={32} />, listings: 16, path: "/beaches" },
    { title: "Waterfalls", icon: <Mountain size={32} />, listings: 9, path: "/waterfalls" },
  ];

  return (
    <section
      className="relative py-20 text-white"
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Plan Your Trip</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-white/80">
          Discover the best rated options across Uttara Kannada
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-48 h-40 bg-white text-blue-700 rounded-xl shadow-lg hover:scale-105 transition-all p-4 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <div className="mb-2">{item.icon}</div>
              <div className="font-bold text-lg">{item.title}</div>
              <div className="text-sm text-gray-600">{item.listings} listings</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTripRedesign;
