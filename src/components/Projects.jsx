import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../data/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
        My Creations
      </h2>
      <div className="w-24 h-1 bg-cyan-300 mx-auto mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-slate-800/50 backdrop-blur-md rounded-lg overflow-hidden border border-slate-700 group flex flex-col hover:border-cyan-300/50 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-700 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-end items-center gap-4">
                {project.github && (
                  <a
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project?.title} on GitHub`}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-2xl"
                  >
                    <FaGithub />
                  </a>
                )}
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="text-slate-400 hover:text-cyan-300 transition-colors text-2xl"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
