import "./Main.scss";
import About from "../../assets/images/about.jpg";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
import Project7 from "../../assets/images/phone.jpg";
import Project2 from "../../assets/images/project-2-js.jpg";
import Project4 from "../../assets/images/html-tailwind.jpg";
import Project5 from "../../assets/images/todo-reacrRedux.jpg";
import { PiStudentBold } from "react-icons/pi";
import Project1 from "../../assets/images/vanillaJs-country.jpg";
import Project8 from "../../assets/images/html-sass.jpg";
import Project11 from "../../assets/images/Ts-antd.jpg";
import Project12 from "../../assets/images/Js-sass.jpg";
import Project0 from "../../assets/images/crud-reactapp.jpg";
import { SiNetlify } from "react-icons/si";
// import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Main() {
  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <main className="main">
      {/* hero section */}
      <section id="heroSec" className="hero">
        <div className="container ">
          <div className="hero-left">
            <h1>
              Hi I am
              <br />
              Akbarov Salmonbek
              <br />
              <span>{typeEffect}</span>
              <span style={{ color: "red" }}>
                <Cursor cursorStyle="|" />
              </span>
            </h1>

            {/* <p className="hero-left-p">FrontEnd Developer</p> */}
            <div className="hero-left-flex">
              <div className="hero-left-flex__f">
                <a href="https://t.me/Developer_frontendd">
                  <FaTelegram />
                </a>
                <a href="https://www.instagram.com/akbarov_1s/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/akbarov-salmonbek-862baa2b1/">
                  <IoLogoLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/akbarov-salmonbek-862baa2b1/">
                  <a href="https://github.com/salmonbek">
                    <FaGithub />
                  </a>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={About} alt="me-img" />
          </div>
        </div>
      </section>
      {/* hero section */}

      {/* about section */}
      <section id="About" className="about">
        <div className="container">
          <div className="about-top">
            <h1>About Me</h1>
            <p>
              <span>Hey there!</span> I am Salmonbek I am a website developer
              and I am currently goining experience in this field. In the
              developing world infromation technology is becoming popular so I
              am going to be strong programmer in this job that I am
              learning.Once again I have ve been learning IT for 2023 at{" "}
              <span>NAJOT TALIM</span>.
            </p>
          </div>
          <div className="about-card">
            {/* <video className="video-bg" autoPlay muted loop>
              <source
                src="../../assets/videos/UI-UX-Design-Showreel-2020-Shakib-4K.mp4"
                type="video/mp4"
              />
            </video> */}
            <div className="about-card-item">
              <div className="icon">
                <FaCalendarDays />
              </div>
              <h4>Birthday</h4>
              <p>02.09.2000</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <FaLocationDot />
              </div>
              <h4>Place of residence</h4>
              <p>Tashkent</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <PiStudentBold />
              </div>
              <h4>Degree</h4>
              <p>Bachelor</p>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}

      {/* service section */}
      <section id="Service" className="service">
        <div className="container">
          <h1>My Services</h1>
          <p>My services are Web Programming, Video montage,Web design.</p>
          <div className="service-card">
            <div className="service-card-items">
              {/* <video className="ui-video" muted loop>
                <source src={Video1} type="video.mp4" />
              </video> */}
              <div className="icon-web">
                <IoLogoFigma />
              </div>
              <h4>Web Design</h4>
              <p>
                I can also create front-end web designs. I primarily use the
                Figma.com website for this.
              </p>
            </div>
            <div className="service-card-items2">
              <div className="icon-web">
                <FaVideo />
              </div>
              <h4>Video Montage</h4>
              <p>I could work with video montage ,espically in cup cut app.</p>
            </div>
            <div className="service-card-items3">
              <div className="icon-web">
                <MdOutlineDeveloperMode />
              </div>
              <h4>Web Programming</h4>
              <p>
                It is my major so I can create new web projects by using
                Front-End
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* service section  */}

      {/* skills section */}
      <section id="Skill" className="skills">
        <div className="container">
          <h1>My Skills</h1>
          <marquee behavior="scroll" direction="left">
            <div className="skills-card">
              <div className="skills-card__items">
                <FaHtml5 />
                <h3>Html</h3>
              </div>
              <div className="skills-card__items">
                <FaCss3 />

                <h3>Css</h3>
              </div>
              <div className="skills-card__items">
                <FaSass />

                <h3>Sass</h3>
              </div>
              <div className="skills-card__items">
                <FaBootstrap />

                <h3>Bootstrap</h3>
              </div>
              <div className="skills-card__items">
                <SiTailwindcss />

                <h3>Tailwind</h3>
              </div>
              <div className="skills-card__items">
                <IoLogoJavascript />

                <h3>JavaScript</h3>
              </div>
              <div className="skills-card__items">
                <FaReact />
                <h3>React</h3>
              </div>
              <div className="skills-card__items">
                <SiRedux />

                <h3>Redux</h3>
              </div>
              <div className="skills-card__items">
                <SiTypescript />

                <h3>TypeScript</h3>
              </div>
              <div className="skills-card__items">
                <PiFigmaLogoFill />

                <h3>Figma</h3>
              </div>
              <div className="skills-card__items">
                <ImGithub />

                <h3>GitHub</h3>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      {/* skills section */}

      {/* work section */}
      <section className="work" id="Projects">
        <div className="container">
          <h1>My Works</h1>
          <div className="work-card">
            <div className="work-card-item">
              <img className="img-project" src={Project1} alt="" />
              <div className="work-card-item__flex">
                <h3>FindCountries in JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis, eius?
                </p>
                <a href="https://comforting-gnome-2e3ceb.netlify.app">
                  View code
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project2} alt="" />
              <div className="work-card-item__flex">
                <h3>Realco in Javacript and scss</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project4} alt="" />
              <div className="work-card-item__flex">
                <h3>IceCream in Tailwind</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project5} alt="" />
              <div className="work-card-item__flex">
                <h3>To-Do-App in React-redux</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project7} alt="" />
              <div className="work-card-item__flex">
                <h3>Online-Phone in JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project8} alt="" />
              <div className="work-card-item__flex">
                <h3>Company in Html-sass</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project0} alt="" />
              <div className="work-card-item__flex">
                <h3>Crud-App in React -bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project11} alt="" />
              <div className="work-card-item__flex">
                <h3>Dashboard in TypeScript,bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Project12} alt="" />
              <div className="work-card-item__flex">
                <h3>Crud-App in JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="">View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
          </div>
          <div className="see-all">
            <a
              className="link-see"
              href="https://github.com/salmonbek?tab=repositories"
            >
              See more
            </a>
          </div>
        </div>
      </section>
      {/* work section */}
    </main>
  );
}

export default Main;
