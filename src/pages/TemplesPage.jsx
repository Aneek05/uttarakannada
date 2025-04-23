import React from "react";

const temples = [
  {
    name: "Koti Chennaya Temple",
    location: "Ankola",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Koti_Chennaya_Temple_Ankola.jpg",
    mapsLink: "https://www.google.com/maps/place/Koti+Chennaya+Temple/@14.6599435,74.2991164,17z",
  },
  {
    name: "Shiva Cave Temple",
    location: "Yana",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Yana_cave_temples.jpg",
    mapsLink: "https://www.google.com/maps/place/Yana+Caves/@14.5943409,74.5908872,17z",
  },
  {
    name: "Murudeshwar Temple",
    location: "Bhatkal",
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Murdeshwar_Shiva_statue.jpg",
    mapsLink: "https://www.google.com/maps/place/Murudeshwar+Temple/@14.094099,74.484103,17z",
  },
];

const TemplesPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Top Rated Temples</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {temples.map((temple, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={temple.image} alt={temple.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">{temple.name}</h2>
              <p className="text-sm text-gray-500">{temple.location}</p>
              <p className="text-yellow-600 font-medium mt-1">⭐ {temple.rating} / 5</p>
              <a href={temple.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline">
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplesPage;