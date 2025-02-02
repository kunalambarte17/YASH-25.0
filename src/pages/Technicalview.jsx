import React from 'react'
import "./technical.css";
import Navbar from '../components/Navbar/Navbar'
import Technicalcontain from './Technicalcontain';

const Technicalview = () => {
    return (
        <div className="cul ">
            <Navbar />
            <div className=" w-[100%] flex flex-col items-center text-white justify-center py-6 px-4">
                <Technicalcontain/>
            </div>
        </div>

    )
}

export default Technicalview;
