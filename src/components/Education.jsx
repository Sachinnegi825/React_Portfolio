import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/constants";

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Education = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl serif font-black border-b-4 border-double border-slate-700/50 pb-2 mb-6 text-right">
        Academic <span className="italic">Records</span>
      </h2>

      <div className="space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border-l-4 border-slate-800 pl-6 pb-4"
          >
            <div className="flex items-start gap-4">
              {edu.img && (
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="org-logo hidden sm:block"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl serif font-bold mb-1">{edu.school}</h3>
                <p className="text-sm font-bold text-accent-red uppercase tracking-wider mb-2">
                  {edu.degree}
                </p>
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-500">
                  <span>
                    Class of {edu.date.split("-")[1] || edu.date}
                  </span>
                  <span className="border border-slate-400 px-2 py-0.5">
                    {edu.grade}
                  </span>
                </div>
                {edu.desc && edu.desc.trim() !== "" && (
                  <p className="mt-4 text-xs italic leading-relaxed text-slate-500">
                    &quot;{edu.desc}&quot;
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-800 text-center uppercase tracking-[0.2em] font-black text-xs">
        Validated Credentials
      </div>
    </div>
  );
};

export default Education;
