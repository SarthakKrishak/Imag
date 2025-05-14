import { useEffect } from "react";
import img1 from "/img1.svg";
import img2 from "/img2.svg";
import img3 from "/img3.svg";
import img4 from "/img4.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import square from "/square.svg";
import OrbitingCirclesAnimation from "./OrbitingCircle";

const title: string[] = ["Innovation", "Integrity", "Creativity", "Excellence"];
const desc: string[] = [
  "Constantly pushing boundaries and exploring new technologies",
  "Building trust through honesty and transparency",
  "Bringing unique and artistic perspectives to every project",
  "Delivering nothing short of the highest quality work",
];
const image: string[] = [img1, img2, img3, img4];

const About = () => {

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#about-home h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-home h1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animation for each item
    gsap.utils.toArray<HTMLElement>(".section-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    // Orbiting circle animation
    gsap.fromTo(
      ".orbiting-circles",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".orbiting-circles",
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div id="about-home" className="relative">
      {/* Title */}
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 lg:px-[6rem] md:px-[6.6vw] flex flex-col gap-4">
        <div className="flex items-center">
          <img src={square} alt="image" className="size-7 md:size-9" />
          <h1 className="ml-[0.4rem] md:ml-[0.6rem]">About us</h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded" />
      </div>

      {/* Intro */}
      <div className="px-6 lg:px-[6rem] md:px-[6.6vw] text-3xl md:text-4xl lg:text-5xl mt-4 md:mb-[6vh] lg:mb-0 mb-0">
        <h1 className="text-[#A1B0D1] font-semibold font-['Figtree'] tracking-widest">
          Innovating <br />
          with <span className="text-white">technology</span> to create <br />a
          smarter future.
        </h1>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-24 lg:px-32 py-12 gap-12 lg:gap-20">
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-3xl">
          {title.map((e, i) => (
            <div
              key={i}
              className="section-item flex flex-col items-center text-center gap-3"
            >
              <img src={image[i]} alt={`icon-${i}`} className="h-10 md:h-12" />
              <h2 className="text-white text-lg md:text-xl font-semibold font-['Geist']">
                {e}
              </h2>
              <p className="text-white text-sm md:text-base font-light leading-relaxed font-['Figtree'] px-4 sm:px-6">
                {desc[i]}
              </p>
            </div>
          ))}
        </div>

        {/* Orbiting Icons */}
        <div className="w-full max-w-[400px]">
          <OrbitingCirclesAnimation />
        </div>
      </div>

      {/* Background Blur Circle */}
      <div className="absolute top-[12vh] md:top-[15vh] left-1/6 -translate-x-1/2 md:left-[-15rem] md:translate-x-0 -z-[20]">
        <div className="h-[22rem] w-[24rem] md:h-[32rem] md:w-[30rem] rounded-full opacity-40 bg-[conic-gradient(from_177deg_at_50.00%_50.00%,_#2B6ED1_59deg,_#062550_247deg,_#006FFF_360deg)] blur-3xl" />
      </div>
    </div>
  );
};

export default About;
