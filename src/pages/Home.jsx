import "./Home.css";
import Navbar from '../components/Navbar/Navbar'
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home" id="home">
        <Navbar/>
      <div className="main-div">
        <div className="heading-conatiner">
            <p className="enigma-p">YCCE Presents</p>
            <img src={logo} alt="" height={100} width={700} />
          <p className="sub-heading">Code. Create. Conquer. 🚀</p>
          <a
            href="#"
            className="sub-head-anchor"
          >
            <p>Let&apos;s Orbit</p>&nbsp;&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
