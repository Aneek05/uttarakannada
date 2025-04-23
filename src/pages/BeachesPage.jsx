import React from "react";

const beaches = [
  {
    name: "Om Beach",
    location: "Gokarna",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Om_beach_Gokarna.jpg",
    mapsLink: "https://www.google.com/maps/place/Om+Beach/@14.5281092,74.3086564,17z",
  },
  {
    name: "Kudle Beach",
    location: "Gokarna",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Kudle_Beach_Gokarna.JPG",
    mapsLink: "https://www.google.com/maps/place/Kudle+Beach/@14.528203,74.3126344,17z",
  },
  {
    name: "Karwar Beach",
    location: "Karwar",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Karwar_beach.jpg",
    mapsLink: "https://www.google.com/maps/place/Karwar+Beach/@14.8129435,74.1206434,17z",
  },
];

const BeachesPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Top Rated Beaches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {beaches.map((beach, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={beach.image} alt={beach.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">{beach.name}</h2>
              <p className="text-sm text-gray-500">{beach.location}</p>
              <p className="text-yellow-600 font-medium mt-1">⭐ {beach.rating} / 5</p>
              <a href={beach.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline">
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachesPage;