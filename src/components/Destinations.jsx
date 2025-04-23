import React, { useRef } from "react";

const destinations = [
  { name: "Karwar", desc: "Coastal charm & naval heritage", image: "/images/karwar.jpg" },
  { name: "Sirsi", desc: "Forests, temples, waterfalls", image: "/images/sirsi.jpg" },
  { name: "Dandeli", desc: "Adventure & wildlife hotspot", image: "/images/dandeli.jpg" },
  { name: "Ankola", desc: "Beach town with rich temples", image: "/images/ankola.jpg" },
  { name: "Kumta", desc: "Golden sands & seafood flavors", image: "/images/kumta.jpg" },
  { name: "Yellapur", desc: "Gateway to hidden falls", image: "/images/yellapur.jpg" },
  { name: "Bhatkal", desc: "Cultural crossroad & history", image: "/images/bhatkal.jpg" },
];

const FeaturedDestinations = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") sliderRef.current.scrollLeft -= 300;
    else sliderRef.current.scrollLeft += 300;
  };

  return (
    <section id="destinations" className="py-20 px-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-white-800 dark:text-white">Top Destinations</h2>
        <div className="space-x-3">
          <button onClick={() => scroll("left")} className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full">←</button>
          <button onClick={() => scroll("right")} className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full">→</button>
        </div>
      </div>
<div ref={sliderRef} className="flex gap-6 overflow-hidden scroll-smooth pb-4">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[300px] rounded-xl shadow-lg overflow-hidden relative group"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{place.name}</h3>
              <p className="text-sm text-gray-200">{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => alert("Discover More coming soon!")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-lg shadow"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
