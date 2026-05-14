import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-800 text-white p-1 text-center font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
        Technical Classifieds
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {skills.map((category, index) => (
          <div key={index} className="border-b border-dashed border-slate-700/50 pb-4">
            <h3 className="text-sm font-black uppercase tracking-tighter mb-3 flex justify-between items-center">
              <span>{category.title}</span>
              <span className="text-[10px] text-slate-500 italic">Available Now</span>
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="text-xs font-bold flex items-center gap-1">
                  <span className="text-accent-red">✓</span> {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 border border-slate-700 text-center italic text-xs">
        "Highly skilled in building modern digital infrastructure."
      </div>
    </div>
  );
};

export default Skills;
