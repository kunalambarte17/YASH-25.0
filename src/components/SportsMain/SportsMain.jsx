import React from 'react'
import './SportsMain.css'
import Navbar from '../Navbar/Navbar'
import SportsCard from '../SportsCard/SportsCard'

function SportsMain() {
  return (
    <div>
      <div>
      <div className='mainbox1'>
        <div className="parallax1 bg-image11">
          <Navbar/>
        </div>
      </div>
      <div className="parallax1 bg-image21">
        <SportsCard/>
      </div>
    </div>
    </div>
  )
}

export default SportsMain
