import { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io";

import "./Header.scss";

function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="header">
      <a className="logo" href="">
        <IoLogoSkype />
      </a>
      <nav ref={navRef}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Skills</a>
        <a href="">Works</a>
        <a href="">Contact</a>
        <buttton className="nav-btn nav-close-btn" onClick={showNavbar}>
          <IoClose />
        </buttton>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <IoMdMenu />
      </button>
    </header>
  );
}

export default Header;
