import React from "react";
import { experiences } from "../data/constants";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col gap-8">
      <h2 className="text-4xl serif font-black border-b-4 border-double border-slate-700/50 pb-2 mb-6">
        The Professional <span className="italic underline decoration-accent-red decoration-4">Chronicles</span>
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="group border-b border-slate-700/50 pb-8 last:border-0">
            <div className="flex justify-between items-start mb-4">
              <div className="w-2/3">
                <h3 className="text-2xl serif font-bold group-hover:text-accent-red transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                  {exp.company}
                </p>
              </div>
              <div className="text-right w-1/3">
                <p className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 inline-block border border-slate-700">
                  {exp.date}
                </p>
              </div>
            </div>
            
            <div className="columns-1 md:columns-2 gap-8 mt-4 text-sm leading-relaxed">
               {exp.desc.map((bullet, i) => (
                 <p key={i} className="mb-4 first-letter:text-2xl first-letter:serif first-letter:float-left first-letter:mr-2">
                   {bullet}
                 </p>
               ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
