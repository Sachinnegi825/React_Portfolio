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
    <div id="experience" className="flex flex-col gap-8">
      <h2 className="text-4xl serif font-black border-b-4 border-double border-slate-700/50 pb-2 mb-6">
        The Professional{" "}
        <span className="italic underline decoration-accent-red decoration-4">
          Chronicles
        </span>
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group border-b border-slate-700/50 pb-8 last:border-0"
          >
            <div className="flex justify-between items-start mb-4 gap-4">
              <div className="flex items-start gap-4 w-2/3">
                {exp.img && (
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="org-logo hidden sm:block"
                  />
                )}
                <div>
                  <h3 className="text-2xl serif font-bold group-hover:text-accent-red transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 inline-block border border-slate-700">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Impact Badges */}
            {IMPACT_BADGES[exp.id] && (
              <div className="flex flex-wrap gap-2 mb-4">
                {IMPACT_BADGES[exp.id].map((badge, j) => (
                  <span
                    key={j}
                    className="text-[9px] font-black uppercase tracking-tighter bg-accent-red text-white px-2 py-0.5 border border-accent-red"
                  >
                    ★ {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="columns-1 md:columns-2 gap-8 mt-4 text-sm leading-relaxed column-rule">
              {exp.desc.map((bullet, j) => (
                <p
                  key={j}
                  className="mb-4 first-letter:text-2xl first-letter:serif first-letter:float-left first-letter:mr-2"
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
