import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="destinations" className="py-20 px-6 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Top Destinations</h2>
        <p className="text-gray-300 mt-2">Discover the most iconic places in Uttara Kannada</p>
      </div>

      <Slider {...settings}>
        {destinations.map((place, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl shadow-lg overflow-hidden relative group">
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
          </div>
        ))}
      </Slider>

      <div className="text-center mt-10">
        <button
          onClick={() => alert("Discover More coming soon!")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-lg shadow"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
