import "./Home.css";
import Navbar from '../components/Navbar/Navbar'
import logo from "../assets/logo.png";
import Sponsors from "../components/Sponsors/Sponsors";
import StepperTimeline from "../components/Timeline/StepperTimeline";

const Home = () => {
  return (
    <div className="home" id="home">
        <Navbar/>
      <div className="main-div">
        <div className="heading-conatiner">
            {/* <p className="enigma-p">YCCE Presents</p> */}
            <img src={logo} alt="" height={50} width={500} />
          <p className="sub-heading mt-8">A Celebration of Innovation and Creativity</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 rounded-3xl flex justify-center items-start flex-col mt-8 mb-8 ml-16 mr-16">
        <h1 className="text-6xl text-white font-extrabold ml-8 mt-5 mb-4 ">ABOUT</h1>
        <p className=" pl-16 pr-16 pt-4 pb-8 text-white text-2xl"><p className="text-4xl font-extrabold mb-3">RUBY JUBILLE CELEBRATION (1984-2024)</p>Yashwantrao Chavan College of Engineering (YCCE), Nagpur, proudly presents YASH 25.0, its highly anticipated national-level techno-cultural extravaganza. Scheduled from 13th to 15th February, this vibrant fest brings together student from various institutions to celebrate creativity, innovation, and collaboration. With an exciting lineup of cultural,technical, and sports events, YASH 25.0 promises an amazing platform to show talents and inspire participants to reachnew heights.
        <p className="text-4xl font-extrabold mb-3 mt-16">RUBY JUBILLE CELEBRATION (1984-2024)</p>
        Yashwantrao Chavan College of Engineering (YCCE), Nagpur, proudly presents YASH 25.0, its highly anticipated national-level techno-cultural extravaganza. Scheduled from 13th to 15th February, this vibrant fest brings together student from various institutions to celebrate creativity, innovation, and collaboration. With an exciting lineup of cultural,technical, and sports events, YASH 25.0 promises an amazing platform to show talents and inspire participants to reachnew heights.
        </p>
      </div>
      <Sponsors/>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-white mb-16">SCHEDULE</h1>
        <StepperTimeline/>
      </div>
      
    
    </div>
  );
};

export default Home;
