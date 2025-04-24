import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";

const images = [img1, img2, img3].map(src => ({ src }));

const PhotoGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-16 px-6 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Traveler Photo Gallery</h2>
        <p className="text-gray-200">Captured by explorers across Uttara Kannada</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Photo ${i + 1}`}
            className="rounded-xl cursor-pointer shadow-md hover:brightness-90 transition"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
};

export default PhotoGallery;
