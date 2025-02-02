import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import culturalEvents from '../pages/Details.js'; // Import the event array
import "./cultural.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Culturalsingleevent = () => {
  const { id } = useParams(); // Get the ID from the URL
  const event = culturalEvents.find(e => e.id.toString() === id); // Find the event by ID

  if (!event) {
    return <div className="text-white text-center py-10">Event not found</div>;
  }

  return (
    <div className="cule">
      <Navbar />
      <div className="h-[100vh] flex flex-col items-center text-white justify-center py-6 px-4">
        <div className="max-w-screen-lg  bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        
        <Link className="anchor-link" to={"/culturalview"}>
              <h1 className='text-2xl p-1' ><IoMdArrowRoundBack /></h1>
          </Link> 
  
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Part - Image */}
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <img
                src={event.image} 
                alt={event.title} 
                className="w-full h-96 object-contain rounded-lg" 
              />
            </div>

            {/* Right Part - Title, Register Button, and Description */}
            <div className="w-full md:w-1/3 flex  flex-col md:pl-6">
              <h3 className="text-2xl mb-1 font-semibold">{event.title}</h3>
              <p className="text-gray-300 text-xl mt-2">{event.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                <a href={event.link}>Register</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culturalsingleevent;
