import React from 'react'
import './SportsMain.css'
import Navbar from '../Navbar/Navbar'
import SportSlider from '../SportsSlider/SportSlider'

function SportsMain() {
  return (
    <div>
      <div>
      <div className='mainbox1'>
        <div className="parallax1 bg-image11">
          <Navbar/>
          <SportSlider/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SportsMain
