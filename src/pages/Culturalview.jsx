import React from 'react'
import "./cultural.css";
import Navbar from '../components/Navbar/Navbar'
import Culturalcontain from './Culturalcontain'

const Culturalview = () => {
    return (
        <div className="cul ">
            <Navbar />
            <div className=" w-[100%] flex flex-col items-center text-white justify-center py-6  px-4">
                <div className="w-full flex justify-evenly items-center ">
                
                    <h1 className="text-7xl font-bold text-center">Cultural Events</h1>


                </div>
                    <Culturalcontain />
            </div>
            </div>

            )
}

            export default Culturalview
