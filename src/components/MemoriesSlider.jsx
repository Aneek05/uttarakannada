import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cuisine from "../assets/memories/cuisine.jpg";
import monsoon from "../assets/memories/monsoon.jpg";
import boating from "../assets/memories/boating.jpg";
import bamboo from "../assets/memories/bamboo.jpg";
import sunset from "../assets/memories/sunset.jpg";

const memories = [
  {
    title: "Savouring Coastal Cuisine",
    desc: "Relish fish thali, banana-leaf meals, and jackfruit desserts across Karwar and Sirsi.",
    img: cuisine,
  },
  {
    title: "Monsoon Treks",
    desc: "Trek to Yana caves or Sathodi waterfalls during the misty green monsoons.",
    img: monsoon,
  },
  {
    title: "Backwater Boating",
    desc: "Enjoy tranquil cruises through Honnavar’s serene mangrove-lined rivers.",
    img: boating,
  },
  {
    title: "Tribal Bamboo Craft",
    desc: "Try your hand at weaving with Joida’s Halakki tribal artisans.",
    img: bamboo,
  },
  {
    title: "Sunset at Om Beach",
    desc: "Watch a golden sunset while walking barefoot along the shore of Om Beach.",
    img: sunset,
  },
];

const MemoriesSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
    <section
      className="py-20 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-white-800">Unforgettable Moments</h2>
          <p className="text-md text-white-700 mt-2">
            From coastal flavors to tribal artforms and monsoon treks — Uttara Kannada is
            filled with timeless memories.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <Slider {...settings}>
            {memories.map((item, i) => (
              <div key={i} className="px-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4 text-black">
                    <h3 className="text-md font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
