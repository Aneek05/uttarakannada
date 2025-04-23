import React, { useState } from "react";

const tabs = {
  Nature: "/videos/nature.mp4",
  Heritage: "/videos/heritage.mp4",
  Spiritual: "/videos/spiritual.mp4",
  Adventure: "/videos/adventure.mp4"
};

const HeroTabs = () => {
  const [selected, setSelected] = useState("Nature");

  return (
    <section id="home" className="relative w-full h-screen text-white overflow-hidden">
      <video
        src={tabs[selected]}
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center z-10 px-4">
	<h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome To Uttara Kannada Tourism</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore {selected}</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`px-4 py-2 rounded-full font-medium border ${
                selected === tab
                  ? "bg-yellow-500 text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTabs;
