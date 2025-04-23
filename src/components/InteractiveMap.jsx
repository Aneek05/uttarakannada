import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const spots = [
  { name: "Karwar 🏖️", lat: 14.807, lng: 74.132 },
  { name: "Yana 🌿", lat: 14.636, lng: 74.632 },
  { name: "Sirsi ⛩️", lat: 14.619, lng: 74.835 },
  { name: "Dandeli 🐘", lat: 15.267, lng: 74.618 },
  { name: "Honnavar 🛶", lat: 14.278, lng: 74.445 },
  { name: "Gokarna 🕉️", lat: 14.547, lng: 74.317 },
  { name: "Ankola 🏯", lat: 14.659, lng: 74.303 },
];

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const UttaraKannadaMap = () => {
  return (
    <section className="py-20 text-white px-6">
      <h2 className="text-3xl font-bold text-center mb-2">Explore on the Map</h2>
      <p className="text-center text-gray-300 mb-6">
        Click on the icons to discover places across Uttara Kannada
      </p>
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[14.8, 74.5]}
          zoom={9}
          scrollWheelZoom={false}
          style={{ height: "350px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {spots.map((place, i) => (
            <Marker
              key={i}
              position={[place.lat, place.lng]}
              icon={customIcon}
            >
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default UttaraKannadaMap;
