import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";

const images = [img1, img2, img3, img4];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <section className="py-20 text-white" id="gallery">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Photo Gallery</h2>
        <p className="text-lg text-gray-300 mb-10">
          Explore real travel memories submitted by explorers and nature lovers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden cursor-pointer shadow-lg" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
              <img src={img} alt={`Travel memory ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
