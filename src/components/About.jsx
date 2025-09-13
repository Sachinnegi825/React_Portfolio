import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
          About Me
        </h2>
        <div className="w-28 h-1 bg-cyan-300 mx-auto rounded-full mb-12"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 p-8 rounded-2xl shadow-lg shadow-cyan-300/10"
        >
          <p className="text-lg text-slate-400 leading-relaxed text-center">
            I am a passionate{" "}
            <span className="text-cyan-300 font-semibold">
              Software Developer
            </span>{" "}
            with 1.5 years of experience crafting dynamic and scalable web
            applications. I love transforming ideas into clean, user-friendly
            interfaces and robust backend systems. My journey in tech is driven
            by curiosity, problem-solving, and the excitement of building
            products that make a real impact. I thrive in collaborative teams
            and stay eager to explore new technologies to grow my skills
            further.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
