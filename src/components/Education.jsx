import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/constants";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
        Education
      </h2>
      <div className="w-24 h-1 bg-cyan-300 mx-auto mb-16"></div>

      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="flex gap-6 p-6 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={edu.img}
              alt={edu.school}
              className="w-16 h-16 rounded-md object-contain p-1 bg-slate-300"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-100">{edu.school}</h3>
              <p className="text-md font-medium text-slate-400">{edu.degree}</p>
              <p className="text-sm text-slate-500">{edu.date}</p>
            </div>
            <p className="text-md font-semibold text-cyan-300">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
