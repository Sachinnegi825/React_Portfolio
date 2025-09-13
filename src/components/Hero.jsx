import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "../data/constants"; // Path is preserved

// --- IMPORTANT ---
// 1. Make sure your resume PDF is in the `src/assets` folder.
// 2. Update the filename here to match your PDF file.
import ResumePDF from "../assets/About/Sachin_Negi_Resume.pdf";

// --- Asset Imports ---
// Make sure your hero image path is correct.
import HeroImg from "../Assets/About/photome.png";

const Hero = () => {
  // Hooks for the interactive parallax image effect
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  // Transform mouse position into a subtle movement effect
  const transformX = useTransform(x, [0, 400], [-15, 15]);
  const transformY = useTransform(y, [0, 400], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center">
        {/* Text content positioned absolutely */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-4">
            Hi, I'm <span className="text-cyan-300">{Bio.name}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-400 mb-6">
            <TypeAnimation
              sequence={Bio.roles}
              wrapper="span"
              speed={65} // Slower, more deliberate speed
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

        {/* Interactive Image positioned absolutely */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96"
          style={{ x: transformX, y: transformY }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/50 to-violet-600/50 blur-3xl"></div>
          <img
            src={HeroImg}
            alt="Sachin Negi"
            className="relative w-full h-full rounded-full object-cover border-4 border-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
