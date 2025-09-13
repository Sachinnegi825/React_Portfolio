import { motion } from "framer-motion";
import { education } from "../data/constants"; // Path is preserved as requested

const Education = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
        Education
      </h2>
      <div className="w-24 h-1 bg-cyan-300 mx-auto mb-16"></div>

      <div className="max-w-3xl mx-auto space-y-8 px-4 md:px-0">
        {education.map((edu, index) => (
          // The main card container
          <motion.div
            key={edu.id}
            className="p-6 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              borderColor: "rgba(45, 212, 191, 0.5)", // cyan-300 with opacity
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-16 h-16 rounded-md object-contain p-1 bg-slate-300 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-100">
                    {edu.school}
                  </h3>
                  <p className="text-md font-medium text-slate-400">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right flex-shrink-0">
                <p className="text-md font-semibold text-cyan-300">
                  {edu.grade}
                </p>
                <p className="text-sm text-slate-500">{edu.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
