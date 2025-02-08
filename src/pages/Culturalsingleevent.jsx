import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import culturalEvents from '../pages/Details.js'; // Import event data
import "./cultural.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Culturalsingleevent = () => {
  const { id } = useParams(); // Get the event ID from URL
  const event = culturalEvents.find(e => e.id.toString() === id); // Find event by ID

  if (!event) {
    return <div className="text-white text-center py-10">Event not found</div>;
  }

  // List of events where registration should be disabled
  const disabledEvents = [
    "Bhairavi || 15TH Feb",
    "Farzi Mushaira || 13TH Feb",
    "Jashn E Mehfil || 13Th Feb",
    "Flash Mob 2k25 || 10TH Feb"
  ];

  return (
    <div>
      <Navbar />
      <div className="h-[100vh] flex flex-col items-center text-white py-12 px-4">
        <div className="max-w-screen-lg bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          
          {/* Back Button */}
          <Link className="anchor-link" to={"/culturalview"}>
            <h1 className="text-2xl p-1"><IoMdArrowRoundBack /></h1>
          </Link>

          <div className="flex flex-col md:flex-row items-center">
            
            {/* Left Part - Event Image */}
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full object-contain rounded-lg"
              />
            </div>

            {/* Right Part - Event Details */}
            <div className="w-full md:w-1/3 flex justify-center items-center flex-col md:pl-6">
              <h3 className="text-2xl font-semibold mb-1">{event.title}</h3>
              <p className="text-gray-300 text-xl mt-2">{event.description}</p>
              
              {/* Register Button Logic */}
              {disabledEvents.includes(event.title) ? (
                <button className="mt-2 px-10 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed" disabled>
                  Registration Closed
                </button>
              ) : (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-2 px-10 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Register
                  </button>
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Culturalsingleevent;
