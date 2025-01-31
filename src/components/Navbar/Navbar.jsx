import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import BuyMeCoffee from "../../assets/react.svg";

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };


  return (
    <div className="navbar">
      <a href="/"><img src={logo} alt="" className="logo" /></a>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav_menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li className="li-text">
          <AnchorLink className="anchor-link" href="#home">
            <p>
              Home
            </p>
          </AnchorLink>
        </li>
        <li className= "li-text">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>
              Theme
            </p>
          </AnchorLink>
        </li>
        <li className= "li-text">
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p>
              Prize
            </p>
          </AnchorLink>
        </li>
        <li className= "li-text">
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p>
              Rules
            </p>
          </AnchorLink>
        </li>
        <li className= "li-text">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect ">
        <a
          href="#"
          className="flex justify-center items-center"
        >
          {/* <img src={BuyMeCoffee} alt="" className="buy-me-img" /> */}
          <i className="fa-solid fa-globe text-white"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="flex justify-center items-center   buy-me-coffee">
            Join Us
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
