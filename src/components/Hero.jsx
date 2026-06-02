import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "../data/constants";
import HeroImg from "../assets/About/photome.webp";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl serif leading-none tracking-tight"
      >
        Local Developer{" "}
        <span className="italic">Transforms</span> Digital Landscape with{" "}
        <span className="text-accent-red underline decoration-double underline-offset-8">
          Innovation
        </span>
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <img
            src={HeroImg}
            alt="Sachin Negi"
            className="editorial-img w-full h-auto grayscale mb-2"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
            Fig 1. Sachin Negi, Fullstack Developer at Sidlabs LLP,
            photographed during a breakthrough deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <div className="h-0.5 bg-slate-700/50 w-full mb-2"></div>
          <p className="text-xl font-bold leading-tight">
            <span className="text-4xl serif float-left mr-3 mt-1 leading-none">
              I
            </span>
            {Bio.description}
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="text-sm font-bold uppercase tracking-wider text-accent-red">
              Current Roles:
            </div>
            <div className="text-2xl serif italic">
              <TypeAnimation
                sequence={Bio.roles}
                wrapper="span"
                speed={65}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8 border-t border-slate-700/50 pt-6">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black uppercase tracking-tighter border-2 border-slate-800 px-4 py-2 hover:bg-slate-800 hover:text-white transition-all"
            >
              Full Biography (Resume)
            </a>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black uppercase tracking-tighter bg-slate-800 text-white px-4 py-2 hover:bg-slate-700 transition-all"
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
