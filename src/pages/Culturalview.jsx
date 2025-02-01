import React from 'react'
import "./cultural.css";
import Navbar from '../components/Navbar/Navbar'
import Culturalcontain from './Culturalcontain'

const Culturalview = () => {
    return (
        <div className="cul ">
            <Navbar />
            <div className=" w-[100%] flex flex-col items-center text-white justify-center py-6 px-4">
                <Culturalcontain/>
            </div>
        </div>

    )
}

export default Culturalview
