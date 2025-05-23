import { useEffect, useState } from "react";
import insta from "/insta.svg";
import whatsapp from "/whatsapp.svg";
import linkedin from "/linkedin.svg";
import x from "/x.svg";
import { FaArrowUp } from "react-icons/fa";
import Footerbg from "./Footerbg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);

useEffect(() => {
  const footerElement = document.getElementById("footer");
  const arrowElement = document.getElementById("scrollArrow");

  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.5 }
  );

  const arrowObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setArrowVisible(true);
    },
    { threshold: 0.1 }
  );

  if (footerElement) footerObserver.observe(footerElement);
  if (arrowElement) arrowObserver.observe(arrowElement);

  return () => {
    footerObserver.disconnect();
    arrowObserver.disconnect();
  };
}, []);



  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <footer
        id="footer"
        className={` relative w-full text-white px-6 lg:px-[4vw] md:ml-[2.7rem] lg:py-[30vh] md:py-[30vh] md:mb-0 lg:pr-52 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto lg:flex gap-8 pb-28 md:pb-0 lg:pb-24 justify-between">
          <div>
            <a
              href="/"
              className="text-2xl font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 mb-3 font-['Figtree'] tracking-wide"
            >
              Imaginum
            </a>
            <p className="text-base text-gray-300 max-w-xs font-['Figtree'] tracking-wide font-light lg:w-64 lg:mt-4 mt-2">
              Building next-generation digital experiences with cutting-edge
              technology and futuristic design.
            </p>
          </div>

          <div className="lg:flex justify-between gap-24 md:mt-[5vh] mt-[6vh] lg:mt-0">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-['Geist'] tracking-wide">
                Quick Links
              </h3>
              <ul className="lg:space-y-1 text-base text-gray-300 font-['Figtree'] tracking-wide font-light">
                <li>
                  <button
                    className="inline-block text-gray-300 transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full font-light"
                    onClick={() => {
                      document
                        .getElementById("about-home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="inline-block text-gray-300 font-light transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full"
                    onClick={() => {
                      document
                        .getElementById("project-home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    className="inline-block text-gray-300 font-light transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full"
                    onClick={() => {
                      document
                        .getElementById("expertise-home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button
                    className="inline-block text-gray-300 font-light transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full"
                    onClick={() => {
                      document
                        .getElementById("team-home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    className="inline-block text-gray-300 font-light transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full"
                    onClick={() => {
                      document
                        .getElementById("contact-home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {" "}
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg lg:text-xl font-semibold lg:mb-4 md:mt-[5vh] md:mb-4 mt-[4vh] lg:mt-0 mb-[1.5vh] font-['Geist']">
                Follow Us
              </h3>
              <div className="flex items-center gap-4 lg:gap-5 text-2xl aspect-auto">
                <a
                  href="https://www.instagram.com/ima.ginum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={insta}
                    alt="Follow Imaginum on Instagram"
                    className="lg:w-8 lg:h-8 w-6 h-6 transform hover:scale-[125%] transition duration-500 ease-in-out"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/imaginumorgg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Follow Imaginum on LinkedIn"
                    className="lg:w-7 lg:h-7 w-5 h-5 transform hover:scale-[125%] transition duration-500 ease-in-out"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://x.com/Imaginum_org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={x}
                    alt="Follow Imaginum on X"
                    className="lg:w-8 lg:h-8 w-6 h-6 transform hover:scale-[125%] transition duration-500 ease-in-out"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://discord.gg/A2Qq6WKVnW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatsapp}
                    alt="Join Imaginum's WhatsApp group"
                    className="lg:w-[33px] lg:h-[33px] w-5 h-5  transform hover:scale-[125%] transition duration-500 ease-in-out"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute lg:w-[85vw] md:bottom-[7vh] w-[84vw] bottom-[2.5vh] md:w-[82vw] ">
          <div className=" w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-white mb-[1.3vh] md:mb-[2vh] lg:mb-[2.5vh]"></div>
          <div className="flex justify-between items-center">
            <div className="text-sm lg:text-md md:text-base text-white font-semibold lg:bottom-[6vh] cursor-default font-['Figtree'] tracking-wide hover:underline">
              <h3>© 2025 Imaginum. All rights reserved.</h3>
            </div>
            <button
              id="scrollArrow"
              title="Scroll to top"
              className={` p-2 lg:p-3 flex items-center justify-center rounded-full bg-white text-black   transform hover:scale-[115%] transition duration-300 ease-in-out  ${
                arrowVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              onClick={handleClick}
            >
              <FaArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
      <Footerbg />
    </div>
  );
};

export default Footer;

