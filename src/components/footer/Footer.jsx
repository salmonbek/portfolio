import { useEffect, useState, useRef } from "react";
import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const icons = [
  {
    component: <FaInstagram />,
    link: "https://www.instagram.com/salmon_d.w",
  },
  { component: <FaTelegramPlane />, link: "https://t.me/salmon_akbarov" },
  {
    component: <FaLinkedin />,
    link: "https://www.linkedin.com/in/https://www.linkedin.com/in/akbarov-salmonbek-862baa2b1/",
  },
];

function Footer() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      const interval = setInterval(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hasAnimated]);

  return (
    <footer className="footer" ref={footerRef}>
      <a
        href={icons[currentIconIndex].link}
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${hasAnimated ? "animated" : ""}`}
      >
        {icons[currentIconIndex].component}
      </a>
      <span> Web disgn Made By Salmonbek 2024 y</span>
    </footer>
  );
}

export default Footer;
