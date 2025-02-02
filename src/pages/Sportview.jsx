import React from 'react'
import "./sport.css";
import Navbar from '../components/Navbar/Navbar'
import Sportcontain from './Sportcontain';

const Sportview = () => {
    return (
        <div className="cul ">
            <Navbar />
            <div className=" w-[100%] flex flex-col items-center text-white justify-center py-6 px-4">
                <Sportcontain/>
            </div>
        </div>

    )
}

export default Sportview
