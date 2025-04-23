import React from "react";

const waterfalls = [
  {
    name: "Sathodi Falls",
    location: "Yellapur",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Sathodi_Falls.jpg",
    mapsLink: "https://www.google.com/maps/place/Sathodi+Falls/@14.8746961,74.7300614,17z",
  },
  {
    name: "Magod Falls",
    location: "Yellapur",
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Magod_Falls.JPG",
    mapsLink: "https://www.google.com/maps/place/Magod+Falls/@14.9171584,74.7227493,17z",
  },
  {
    name: "Unchalli Falls",
    location: "Sirsi",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Unchalli_Falls_Karnataka.jpg",
    mapsLink: "https://www.google.com/maps/place/Unchalli+Falls/@14.5282839,74.7511643,17z",
  },
];

const WaterfallsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Top Rated Waterfalls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {waterfalls.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-yellow-600 font-medium mt-1">⭐ {item.rating} / 5</p>
              <a href={item.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline">
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterfallsPage;
