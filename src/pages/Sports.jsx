import "./sport.css";
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';  
import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import sportEvents from "../pages/SportDetails.js";  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';  
import event from '../pages/SportDetails';
import Footer from "../components/Footer/Footer.jsx";

const Sports = () => {
  return (
    <>
    <div className="h-[100vh]  ">
      <Navbar />
      <div className="flex mt-28 flex-col items-center text-white lg:justify-normal lg:mt-2 justify-center lg:px-4 px-1">
        {/* Title */}
        <h1 className="lg:text-7xl text-5xl font-extrabold text-center ">
          Sports Events
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
            breakpoints={{
              0: { slidesPerView: 1 },
              1000: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, A11y, EffectCoverflow]}
            className="swiper swiper_container h-full"
            style={{ overflow: 'hidden' }}
          >
            {sportEvents.map((event, index) => (
              <SwiperSlide key={event.id} className={`swiper-slide-${index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'}`}>
                <Link className="anchor-link" to={`/sportviewsingle/${event.id}`}>
                <img className="lg:h-96 m w-full border rounded-xl" src={event.image} alt={`Slide ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div>
          <Link className="anchor-link" to={"/sportview"}>
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

export default Sports;
