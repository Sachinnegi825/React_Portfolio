import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
        Professional Journey
      </h2>
      <div className="w-24 h-1 bg-cyan-300 mx-auto mb-16"></div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 w-1 h-full bg-slate-700/50"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="mb-12 flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-300 flex items-center justify-center absolute left-4 md:left-1/2 -translate-x-1/2">
              <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
            </div>
            <div className="ml-12 w-full">
              <div className="p-6 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700 shadow-md">
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <p className="text-md font-medium text-cyan-300 mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-500 mb-3">{exp.date}</p>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-1 text-left">
                  {exp.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
