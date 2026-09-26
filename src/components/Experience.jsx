import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/constants";

const IMPACT_BADGES = {
  1: ["20% Perf Boost", "AI Pipeline (Gemini + Llama 3)", "End-to-End Ownership"],
  2: ["Lighthouse 65 → 92", "35% Bundle Cut", "RBAC + DP World Dashboard"],
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col mt-4">
      <div className="border-y-2 border-black dark:border-white py-2 mb-8 flex justify-between items-center uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
        <span>The Daily Developer</span>
        <span>Career Trajectory</span>
        <span className="hidden md:inline-block">Section II</span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl serif font-black leading-tight tracking-tight mb-8">
        Professional{" "}
        <span className="italic font-light">Chronicles.</span>
      </h2>

      <div className="space-y-16 border-t border-[var(--ink-color)] pt-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group border-b border-[var(--ink-color)] pb-12 last:border-0"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-6">
              <div className="flex items-start gap-6 md:w-2/3">
                {exp.img && (
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-16 h-16 object-contain border border-[var(--ink-color)] p-1 hidden sm:block grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl md:text-4xl serif font-black group-hover:text-accent-red transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-[10px] font-black uppercase tracking-widest border border-[var(--ink-color)] text-[var(--ink-color)] px-3 py-1 inline-block">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Impact Badges */}
            {IMPACT_BADGES[exp.id] && (
              <div className="flex flex-wrap gap-2 mb-8">
                {IMPACT_BADGES[exp.id].map((badge, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-black uppercase tracking-widest bg-[var(--ink-color)] text-[var(--paper-bg)] px-3 py-1 hover:bg-[var(--accent-red)] hover:text-white transition-colors duration-300 cursor-default"
                  >
                    ★ {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="columns-1 md:columns-2 gap-12 text-sm leading-relaxed column-rule text-[var(--ink-color)]">
              {exp.desc.map((bullet, j) => (
                <p
                  key={j}
                  className="mb-6 first-letter:text-4xl first-letter:serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-black first-letter:text-accent-red"
                >
                  {bullet}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
