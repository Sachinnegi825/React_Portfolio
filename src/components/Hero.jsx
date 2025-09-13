import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "../data/constants"; // Path is preserved

import ResumePDF from "../assets/About/Sachin_Negi_Resume.pdf";

import HeroImg from "../assets/About/photome.webp";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transformX = useTransform(x, [-100, 100], [-15, 15]);
  const transformY = useTransform(y, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="min-h-[100svh] relative flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:relative lg:h-[60vh]">
        <motion.div
          className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
          onMouseMove={isDesktop ? handleMouseMove : undefined}
          onMouseLeave={isDesktop ? handleMouseLeave : undefined}
          style={isDesktop ? { x: transformX, y: transformY } : {}}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/50 to-violet-600/50 blur-3xl"></div>
          <img
            src={HeroImg}
            alt="Sachin Negi"
            className="relative w-full h-full rounded-full object-cover border-4 border-slate-700"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 mb-4">
            Hi, I'm <span className="text-cyan-300">{Bio.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-400 mb-6">
            <TypeAnimation
              sequence={Bio.roles}
              wrapper="span"
              speed={65}
              repeat={Infinity}
              className="text-cyan-300"
            />
          </h2>
          <p className="text-lg text-slate-400 max-w-md mb-8">
            {Bio.description}
          </p>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            download="Sachin-Negi-Resume.pdf"
            className="inline-block bg-cyan-300 text-slate-900 font-bold text-lg px-8 py-4 rounded-md hover:bg-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
