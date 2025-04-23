import React, { useState } from "react";
import { motion } from "framer-motion";
import cuisine1 from "../assets/cuisine/fish-thali.jpg";
import cuisine2 from "../assets/cuisine/bamboo-biryani.jpg";
import cuisine3 from "../assets/cuisine/jackfruit-dessert.jpg";
import cuisine4 from "../assets/cuisine/banana-meal.jpg";
import cuisine5 from "../assets/cuisine/karwar-seafood.jpg";

const dishes = [
  {
    title: "Fish Thali",
    place: "Karwar",
    desc: "A traditional coastal platter with fried fish, curry, and steamed rice.",
    img: cuisine1,
  },
  {
    title: "Bamboo Biryani",
    place: "Joida",
    desc: "Fragrant biryani cooked inside bamboo shoots, blending smoky aroma.",
    img: cuisine2,
  },
  {
    title: "Jackfruit Dessert",
    place: "Sirsi",
    desc: "Sweet jackfruit halwa made during the summer season.",
    img: cuisine3,
  },
  {
    title: "Banana Leaf Meal",
    place: "Ankola",
    desc: "A vegetarian feast served on banana leaf, including seasonal curries.",
    img: cuisine4,
  },
  {
    title: "Karwar Seafood Platter",
    place: "Karwar",
    desc: "Crabs, prawns, and clams in a rich Goan-style preparation.",
    img: cuisine5,
  },
];

const LocalCuisineSpotlight = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="cuisine" className="py-20 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Local Cuisine Spotlight</h2>
        <p className="mb-10 text-lg">Taste your way through Uttara Kannada — a journey of flavor and tradition.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition"
              onClick={() => setActive(dish)}
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{dish.title}</h3>
                <p className="text-sm text-gray-600">{dish.place}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={() => setActive(null)}>
            <div className="bg-white max-w-md rounded-xl p-6 text-black relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
              >
                &times;
              </button>
              <img src={active.img} alt={active.title} className="w-full h-56 object-cover rounded" />
              <h3 className="text-2xl font-bold mt-4 mb-2">{active.title}</h3>
              <p className="text-gray-700 font-medium">{active.place}</p>
              <p className="mt-2 text-gray-600">{active.desc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalCuisineSpotlight;
