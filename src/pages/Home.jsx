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
        <div className="stats-container">
          <div className="stats-div">
            <div>
              <h2 className="stat-head">27K+</h2>
              <p>Artists</p>
            </div>
            <div>
              <h2 className="stat-head">876K+</h2>
              <p>Artworks</p>
            </div>
            <div>
              <h2 className="stat-head">20K+</h2>
              <p>Auction</p>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default Home;
