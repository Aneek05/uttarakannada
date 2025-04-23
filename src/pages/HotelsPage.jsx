// src/pages/HotelsPage.jsx
import React from "react";

const hotels = [
  {
    name: "Sterling Karwar",
    location: "Karwar",
    rating: 4.3,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b9/f7/f3/sterling-karwar.jpg",
    mapsLink: "https://www.google.com/maps/place/Sterling+Karwar/@14.8151813,74.1229911,17z",
  },
  {
    name: "Hotel Pandurang International",
    location: "Yellapur",
    rating: 4.2,
    image: "https://content.r9cdn.net/rimg/himg/42/df/ef/leonardo-2289419-pandurang_international_standard_4_o-869496.jpg",
    mapsLink: "https://www.google.com/maps/place/Hotel+Pandurang+International/@14.9580934,74.7097472,17z",
  },
  {
    name: "Hotel Keerthi Residency",
    location: "Sirsi",
    rating: 4.1,
    image: "https://content.jdmagicbox.com/comp/sirsi/d9/9999px838.x838.180821164209.x3d9/catalogue/hotel-keerthi-residency-sirsi-hotels-83cv3kcckk.jpg",
    mapsLink: "https://www.google.com/maps/place/Hotel+Keerthi+Residency/@14.6194169,74.8459609,17z",
  },
];

const HotelsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Top Rated Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">{hotel.name}</h2>
              <p className="text-sm text-gray-500">{hotel.location}</p>
              <p className="text-yellow-600 font-medium mt-1">⭐ {hotel.rating} / 5</p>
              <a href={hotel.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline">
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;

