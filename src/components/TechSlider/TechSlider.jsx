import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import './TechSlider.css'
import img1 from "../../assets/Technical/Img1.png"
import img2 from "../../assets/Technical/Img2.png"
import img3 from "../../assets/Technical/Img3.png"
import {Link } from "react-router-dom";

function TechSlider() {
  return (
  
    <div className="slider-container">
    <h2 className="slider-title">Technical Events</h2>
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3} 
      spaceBetween={-100} 
      loop={true} 
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1.5,
        slideShadows: false,
      }}
      navigation={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="Event 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Event 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Event 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="Event 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Event 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Event 3" />
      </SwiperSlide>
    </Swiper>
    <Link to={"/techinfo"}>
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Click Me
    </button>
    </Link>
  </div>
  )
}

export default TechSlider
