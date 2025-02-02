import React from 'react';
import cards from '../pages/SportDetails'; // Import the updated card data
import {Link } from "react-router-dom";

const Sportcontain = () => {

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="b p-0 rounded-lg  flex flex-col items-center" // Remove padding from the card
          >
             <Link className="anchor-link" to={`/sportviewsingle/${card.id}`}>
           
            <img
              src={card.image}  // Display the image
              alt={`Card ${card.id}`}  // Use card id for alt text
              className="w-full h-80 object-contain rounded-lg border cursor-pointer " // Make the image fill the card and maintain aspect ratio
            />
           
          </Link>    
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sportcontain;
