import React from "react";
import { education } from "../data/constants";

const Education = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl serif font-black border-b-4 border-double border-slate-700/50 pb-2 mb-6 text-right">
        Academic <span className="italic">Records</span>
      </h2>
      
      <div className="space-y-10">
        {education.map((edu) => (
          <div key={edu.id} className="border-l-4 border-slate-800 pl-6 pb-4">
            <h3 className="text-xl serif font-bold mb-1">{edu.school}</h3>
            <p className="text-sm font-bold text-accent-red uppercase tracking-wider mb-2">
              {edu.degree}
            </p>
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-500">
              <span>Class of {edu.date.split('-')[1] || edu.date}</span>
              <span className="border border-slate-400 px-2 py-0.5">{edu.grade}</span>
            </div>
            {edu.desc && (
              <p className="mt-4 text-xs italic leading-relaxed text-slate-500">
                "{edu.desc}"
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-800 text-center uppercase tracking-[0.2em] font-black text-xs">
        Validated Credentials
      </div>
    </div>
  );
};

export default Education;
