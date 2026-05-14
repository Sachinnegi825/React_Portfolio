import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../data/constants";

const Projects = () => {
  return (
    <div id="projects" className="contents">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className={`col-span-12 lg:col-span-4 news-column flex flex-col gap-4 group ${index % 3 !== 2 ? 'lg:border-r-1.5' : ''} border-slate-700/50`}
        >
          <div className="border-b-1.5 border-slate-700/50 pb-2 mb-2 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <span>Feature No. {index + 1}</span>
            <span className="text-accent-red">★ MERN Stack</span>
          </div>
          
          <div className="relative overflow-hidden border border-slate-700/50">
            <img 
              src={project.image} 
              alt={project.title} 
              className="editorial-img w-full h-48 object-cover group-hover:filter-none transition-all duration-500"
            />
          </div>
          
          <h3 className="text-3xl serif font-black leading-tight group-hover:text-accent-red transition-colors">
            {project.title}
          </h3>
          
          <div className="h-px bg-slate-700/30 w-full"></div>
          
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <span className="font-black">TECH REPORT:</span> {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[9px] font-black uppercase tracking-tighter border border-slate-400 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t-4 border-double border-slate-700/50">
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-red transition-colors">
                  <FaGithub size={18} />
                </a>
              )}
              <a href={project.webapp} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-red transition-colors">
                <FaLink size={16} />
              </a>
            </div>
            <span className="text-[10px] font-bold italic text-slate-400 uppercase tracking-widest group-hover:text-accent-red transition-colors">
               Read Full Report
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Projects;
