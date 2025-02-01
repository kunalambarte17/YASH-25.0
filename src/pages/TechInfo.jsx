import { useState } from "react";
import { motion } from "framer-motion";
import "./TechInfo.css";

import image1 from "../assets/Technical/Img1.png"
import image2 from "../assets/Technical/Img2.png"


const images = [
  { id: 1, src: image1, description: "Description for Event 1." },
  { id: 2, src: image2, description: "Description for Event 2." },

];


// const images = Array.from({ length: 10 }, (_, index) => ({
//   id: index + 1,
//   src: `/technical/image${index + 1}.png`,
//   description: `Description for Event ${index + 1}.`,
// }));

export default function TechInfo() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Technical Events</h1>
      <div className="grid-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="card"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} className="card-image" />
            <h2 className="card-title">{image.title}</h2>
          </div>
        ))}
      </div>
      {selectedImage && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal">
            <div><img src={selectedImage.src} alt={selectedImage.title} className="modal-image" /></div>
            <div><p className="modal-description">{selectedImage.description}</p></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
