import { useRef, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TbHexagonLetterS } from "react-icons/tb";

import "./Header.scss";

function Header() {
  const navRef = useRef();
  const headerRef = useRef();
  let lastScrollY = window.scrollY;

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const close = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {
        headerRef.current.classList.add("hidden");
      } else {
        headerRef.current.classList.remove("hidden");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <a className="logo" href="">
          <TbHexagonLetterS />
        </a>
        <nav ref={navRef}>
          <a onClick={close} href="#heroSec">
            Home
          </a>
          <a onClick={close} href="#About">
            About
          </a>
          <a onClick={close} href="#Service">
            Services
          </a>
          <a onClick={close} href="#Skill">
            Skills
          </a>
          <a onClick={close} href="#Projects">
            Works
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <IoClose />
          </button>
        </nav>
        <button className="nav-btn btn-open" onClick={showNavbar}>
          <IoMdMenu />
        </button>
        <a className="contact" href="#Footer">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
