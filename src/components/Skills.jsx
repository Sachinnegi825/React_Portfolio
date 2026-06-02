import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-800 text-white p-1 text-center font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
        Technical Classifieds
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-b border-dashed border-slate-700/50 pb-4"
          >
            <h3 className="text-sm font-black uppercase tracking-tighter mb-3 flex justify-between items-center">
              <span>{category.title}</span>
              <span className="text-[10px] text-slate-500 italic">
                Available Now
              </span>
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {category.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="text-xs font-bold flex items-center gap-2 hover:text-accent-red transition-colors cursor-default group"
                >
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-icon group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-accent-red">✓</span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-4 p-3 border border-slate-700 text-center italic text-xs">
        &quot;Highly skilled in building modern digital infrastructure.&quot;
      </div>
    </div>
  );
};

export default Skills;
