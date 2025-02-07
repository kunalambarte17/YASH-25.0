import "./technical.css";
import { Navigation, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';  
import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import technicalEvents from "../pages/TechnicalDetails.js";  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';  
import event from '../pages/TechnicalDetails';
import Footer from "../components/Footer/Footer.jsx";

const Technical = () => {
  return (
    <>
    <div className="h-[100vh]">
      <Navbar />
      <div className="mt-28  flex flex-col items-center text-white lg:justify-normal lg:mt-2 justify-center lg:px-4 px-1">
        {/* Title */}
        <h1 className="lg:text-7xl text-5xl font-extrabold text-center ">
          Technical Events
        </h1>

        {/* Swiper slider */}
        <div className="w-full my-8  mx-auto  lg:px-10 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={-200}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={0}
            navigation
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 500,
              modifier: 2,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000, // 2 seconds delay
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1000: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, A11y, EffectCoverflow,Autoplay]}
            className="swiper swiper_container h-full"
            style={{ overflow: 'hidden' }}
          >
            {technicalEvents.map((event, index) => (
              <SwiperSlide key={event.id} className={`swiper-slide-${index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'}`}>
                
                <Link className="anchor-link" to={`/Technicalviewsingle/${event.id}`}>
                <img className="lg:h-96  w-full border rounded-xl" src={event.image} alt={`Slide ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div>
          <Link className="anchor-link" to={"/Technicalview"}>
          <button className="p-2 lg:px-7 px-4 text-black rounded-xl font-bold lg:text-2xl text-lg bg-white">
              VIEW ALL
            </button>
          </Link>     
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Technical;
