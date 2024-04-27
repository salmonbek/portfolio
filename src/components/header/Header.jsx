import { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TbHexagonLetterS } from "react-icons/tb";

import "./Header.scss";

function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="">
          <TbHexagonLetterS />
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
        <button className="nav-btn btn-open" onClick={showNavbar}>
          <IoMdMenu />
        </button>
        {/* <button>Contact</button> */}
      </div>
    </header>
  );
}

export default Header;
