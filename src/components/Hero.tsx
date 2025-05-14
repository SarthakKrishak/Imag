import element from "/element.svg";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Loader from "./Loader.tsx";
import TextHoverComp from "./TextHoverComp.tsx";

const Hero = () => {
  const img1X = useMotionValue(90);
  const img1Y = useMotionValue(0);
  const img2X = useMotionValue(-90);
  const img2Y = useMotionValue(-10);
  const [isHover, setIsHover] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });
  const shouldAnimate = isInView && loaderFinished;

  const handleLoaderComplete = () => {
    setLoaderFinished(true);
  };

  const handleExploreClick = () => {
    const aboutSection = document.getElementById("about-home");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Loader onLoadingComplete={handleLoaderComplete} />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:min-h-[85vh] min-h-[48vh] flex flex-col justify-between mt-16 py-8 px-6 md:px-12"
      >
        <div className="flex flex-col items-center gap-6 text-center mt-[3vh] md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-5 py-1 bg-gradient-to-r from-slate-950 to-sky-700 text-white outline outline-1 outline-blue-300 rounded-full text-[2.4vw] sm:text-[2.7vw] md:text-sm font-['Lexend'] font-medium"
          >
            Innovate • Design • Build
          </motion.div>

          <motion.h1
            className="font-bold text-white text-[1.4rem] sm:text-[2vw] md:text-[2.5rem] lg:text-[2.9rem] leading-snug font-['Geist'] capitalize"
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Building the{" "}
            <i className="font-['Canela_Trial'] font-medium">Future</i> with
            smart,
            <br />
            <i className="font-medium font-['Canela_Trial'] capitalize text-[#9DC9FF]">
              seamless
            </i>{" "}
            <span className="font-bold font-['Geist'] text-[#9DC9FF]">
              Technology.
            </span>
          </motion.h1>

          <motion.button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleExploreClick}
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl px-6 py-2 flex items-center bg-gradient-to-b from-white to-neutral-400 shadow-[0px_12px_60px_0px_rgba(57,143,255,0.60)]"
            aria-label="Explore Now Button"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHover ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-black z-0"
            />
            <span
              className="relative z-10 text-[0.8rem] md:text-base font-['Geist'] capitalize text-black transition-colors duration-300"
              style={{ color: isHover ? "#fff" : "#000" }}
            >
              Explore Now
            </span>
          </motion.button>
        </div>

        <div className="relative">
          <TextHoverComp />

          <motion.img
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ x: img1X, y: img1Y }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            dragMomentum={false}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ zIndex: 50 }}
            onDragEnd={() => {
              animate(img1X, 90, { type: "spring", stiffness: 200 });
              animate(img1Y, 0, { type: "spring", stiffness: 200 });
            }}
            src={element}
            alt="Rotating element image"
            loading="lazy"
            className="absolute h-24 sm:h-28 md:h-32 lg:h-40 top-[2rem] left-[-16vw] md:top-[-3rem] md:left-[-2.6rem] lg:top-[-3.5rem] lg:left-14 cursor-grab active:cursor-grabbing"
          />
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ x: img2X, y: img2Y }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
          dragMomentum={false}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ zIndex: 50 }}
          onDragEnd={() => {
            animate(img2X, -90, { type: "spring", stiffness: 200 });
            animate(img2Y, -10, { type: "spring", stiffness: 200 });
          }}
          src={element}
          alt="Rotating element image"
          loading="lazy"
          className="absolute h-20 sm:h-24 md:h-28 top-[6.5rem] right-[-12vw] md:right-12 lg:right-28 cursor-grab active:cursor-grabbing"
        />
      </motion.div>
    </>
  );
};

export default Hero;
