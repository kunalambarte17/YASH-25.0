import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './MainContainer.css'
import CardSection from '../TechCard/CardSection'

function MainContainer() {

  return (
    <div>
      <div className='mainbox'>
        <div className="parallax bg-image1">
          <Navbar/>
        </div>
      </div>
      {/* <div className="spacer"></div/> */}
      <div className="parallax bg-image2">
        <CardSection/>
      </div>
    </div>
  )
}

export default MainContainer

