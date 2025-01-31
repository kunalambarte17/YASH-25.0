import "./Navbar.css";
import {Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";
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
          <Link className="anchor-link" to={"/"}>
            <p>
              Home
            </p>
          </Link>
        </li>
        <li className= "li-text">
          <Link className="anchor-link" to={"/cultural"}>
            <p>
              Cultural
            </p>
          </Link>
        </li>
        <li className= "li-text">
          <Link className="anchor-link" to={"/technical"}>
            <p>
              Technical
            </p>
          </Link>
        </li>
        <li className= "li-text">
          <Link className="anchor-link" to={"/sports"}>
            <p>
              Sports
            </p>
          </Link>
        </li>
        <li className= "li-text">
          <Link className="anchor-link"  to={"/contact"}>
            <p>
              Contact
            </p>
          </Link>
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
