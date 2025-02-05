import "./cultural.css";
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';  
import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import culturalEvents from "../pages/Details.js";  
import 'swiper/css';
import event from '../pages/Details';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';  

const Cultural = () => {
  return (
    <div className="cul">
      <Navbar />
      <div className="h-[100vh]  flex flex-col items-center text-white lg:justify-normal lg:mt-2 justify-center lg:px-4 px-1">


        <h1 className="lg:text-7xl text-5xl font-extrabold text-center ">
          Cultural Events
        </h1>

        {/* Swiper slider */}
        <div className="w-full my-8  mx-auto  lg:px-10 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={-200}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={0}
            navigation ={window.innerWidth > 1024}
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
            className="swiper swiper_container "
            style={{ overflow: 'hidden' }}
          >
            {culturalEvents.map((event, index) => (
              <SwiperSlide key={event.id} className={`swiper-slide-${index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'}`}>
                <Link className="anchor-link" to={`/culturalviewsingle/${event.id}`}>
                <img className="lg:h-96  w-full border rounded-xl" src={event.image} alt={`Slide ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div>
          <Link className="anchor-link" to={"/culturalview"}>
            <button className="p-2 lg:px-7 px-4 text-black rounded-xl font-bold lg:text-2xl text-lg bg-white">
              VIEW ALL
            </button>
          </Link>     
        </div>
      </div>
    </div>
  );
};

export default Cultural;
