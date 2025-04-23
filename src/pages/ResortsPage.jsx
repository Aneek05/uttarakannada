// src/pages/ResortsPage.jsx
import React from "react";

const resorts = [
  {
    name: "Jungle Lodges & Resorts – Kali Adventure Camp",
    location: "Dandeli",
    rating: 4.6,
    image: "https://uttarakannadatourism.com/uploads/destination_images/dandeli_kali.jpg",
    mapsLink: "https://www.google.com/maps/place/Kali+Adventure+Camp/@15.2676646,74.6035896,17z",
  },
  {
    name: "Om Beach Resort",
    location: "Gokarna",
    rating: 4.4,
    image: "https://uttarakannadatourism.com/uploads/destination_images/gokarna_resort.jpg",
    mapsLink: "https://www.google.com/maps/place/Om+Beach+Resort/@14.5283396,74.3083748,17z",
  },
  {
    name: "Devbagh Beach Resort",
    location: "Karwar",
    rating: 4.5,
    image: "https://www.karwartourism.com/uploads/images/devbagh-beach.jpg",
    mapsLink: "https://www.google.com/maps/place/Devbagh+Beach+Resort/@14.8292764,74.1172632,17z",
  },
];

const ResortsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Top Rated Resorts in Uttara Kannada</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resorts.map((resort, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={resort.image}
              alt={resort.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-700">{resort.name}</h2>
              <p className="text-sm text-gray-500">{resort.location}</p>
              <p className="text-yellow-600 font-medium mt-1">
                ⭐ {resort.rating} / 5
              </p>
              <a
                href={resort.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline"
              >
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResortsPage;
