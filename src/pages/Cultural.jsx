import "./cultural.css";
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';  // Remove Pagination and Scrollbar imports
import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import des1 from "../assets/cultural/des1.png";
import des2 from "../assets/cultural/des2.png";
import des3 from "../assets/cultural/des3.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';  // Import the effect for Swiper

const Cultural = () => {
  return (
    <div className="cul  ">
      <Navbar />
      <div className=" w-[100%] flex flex-col items-center text-white justify-center py-6 px-4">
        {/* Title */}
        <h1 className="lg:text-7xl text-4xl font-extrabold text-center mb-8">
          Cultural Events
        </h1>

        {/* Swiper slider */}
        <div className="w-full my-8 h-full mx-auto px-10 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}  // Default: show 3 slides for screens > 1000px
            centeredSlides={true}
            loop={true}
            navigation
            effect="coverflow"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              1000: { slidesPerView: 1 }, // Show 1 slide for screens <= 1000px (mobile view)
              1024: { slidesPerView: 3 }, // Show 3 slides for screens > 1000px (larger screens)
            }}
            modules={[Navigation, A11y, EffectCoverflow]}
            className="swiper swiper_container h-full"
            style={{ overflow: 'hidden' }}
          >
            {/* Left Side Slide */}
            <SwiperSlide className="swiper-slide-left">
              <img className="h-80 w-full border rounded-xl" src={des1} alt="Slide 1" />
            </SwiperSlide>

            {/* Center Slide (Active) */}
            <SwiperSlide className="swiper-slide-center">
              <img className="h-80 w-full border rounded-xl" src={des2} alt="Slide 2" />
            </SwiperSlide>

            {/* Right Side Slide */}
            <SwiperSlide className="swiper-slide-right">
              <img className="h-80 w-full border rounded-xl" src={des3} alt="Slide 3" />
            </SwiperSlide>

            {/* Additional slides, following the same pattern */}
            <SwiperSlide className="swiper-slide-left">
              <img className="h-80 w-full border rounded-xl" src={des1} alt="Slide 4" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-center">
              <img className="h-80 w-full border rounded-xl" src={des2} alt="Slide 5" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-right">
              <img className="h-80 w-full border rounded-xl" src={des3} alt="Slide 6" />
            </SwiperSlide>
          </Swiper>



        </div>
      </div>
    </div>
  );
};

export default Cultural;
