import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './MainContainer.css'
import TechSlider from '../TechSlider/TechSlider'

function MainContainer() {

  return (
    <div>
      <div className='mainbox'>
        <div className="parallax bg-image1">
          <Navbar/>
          <TechSlider/>
        </div>
      </div>
    </div>
  )
}

export default MainContainer

