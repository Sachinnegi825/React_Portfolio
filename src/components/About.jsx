import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl serif italic border-b border-slate-700/50 pb-2 mb-4">
        The Developer&apos;s Sketch
      </h2>
      <p className="text-sm font-medium leading-relaxed italic text-slate-600 dark:text-slate-400">
        &quot;I am a Software Developer with 1.11 years of MERN stack and 8 months of frontend experience, building dynamic, scalable web applications. I specialize in transforming complex data workflows and AI integrations into clean, high-performance UIs.&quot;
      </p>
      <div className="h-px bg-slate-700/50 w-1/2 mx-auto my-2"></div>
      <p className="text-xs uppercase tracking-widest font-bold text-center">
        Established 2023
      </p>
    </motion.div>
  );
};

export default About;
