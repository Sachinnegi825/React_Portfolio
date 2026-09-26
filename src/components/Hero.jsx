import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "../data/constants";
import HeroImg from "../assets/About/photome.webp";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col mt-4">
      {/* Editorial Header / Masthead */}
      <div className="border-y-2 border-black dark:border-white py-2 mb-8 flex justify-between items-center uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
        <span>The Daily Developer</span>
        <span>Vol. I — Engineering</span>
        <span className="hidden md:inline-block">Special Portfolio Edition</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl serif leading-tight tracking-tight mb-8"
      >
        Architecting the{" "}
        <span className="italic font-light">Digital</span> Landscape with{" "}
        <span className="text-accent-red italic">
          Precision.
        </span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-start border-t border-slate-700/50 pt-8">
        {/* Left Column: Image & Caption */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-5/12 pr-0 lg:pr-8 mb-8 lg:mb-0 border-r-0 lg:border-r border-slate-700/50"
        >
          <div className="relative overflow-hidden group">
            <img
              src={HeroImg}
              alt="Sachin Negi"
              className="editorial-img w-full h-[500px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 mb-4"
            />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic border-b border-slate-700/50 pb-4">
            Fig 1. Sachin Negi, Fullstack Developer at Sidlabs LLP. Specializing in high-performance MERN architecture.
          </p>
        </motion.div>

        {/* Right Column: Bio & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full lg:w-7/12 pl-0 lg:pl-8 flex flex-col gap-6"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            <span className="text-6xl md:text-7xl serif float-left mr-4 mt-2 leading-[0.7] text-accent-red font-black">
              I
            </span>
            {Bio.description}
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-700/50 pb-2 mb-2 inline-block w-max">
              Current Engineering Focus
            </div>
            <div className="text-3xl md:text-4xl serif italic">
              <TypeAnimation
                sequence={Bio.roles}
                wrapper="span"
                speed={65}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-widest border border-ink-color dark:border-white px-8 py-4 hover:bg-ink-color hover:text-paper-bg transition-colors duration-300"
            >
              Full Biography (Resume)
            </a>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-widest bg-ink-color text-paper-bg px-8 py-4 hover:bg-accent-red hover:text-white transition-colors duration-300"
            >
              The Code Archive
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
