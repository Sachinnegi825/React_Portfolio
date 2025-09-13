import React from "react";
import { motion } from "framer-motion";
// Note: Ensure this import path matches your project structure.
// The data was previously in '../data', not '../data/constants'.
import { skills } from "../data/constants";

// Variants for the container of the skill cards to orchestrate staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Controls the delay between each child animating in
    },
  },
};

// Variants for each individual skill card
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
          My Technical Skills
        </h2>
        <div className="w-24 h-1 bg-cyan-300 mx-auto mb-20"></div>
      </motion.div>

      <div className="space-y-16 max-w-4xl mx-auto">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            {/* Category Title (takes 1 column on desktop) */}
            <h3 className="text-2xl font-bold text-cyan-300 md:col-span-1 md:text-right md:pr-8">
              {category.title}
            </h3>

            {/* Skill Cards Container (takes 3 columns on desktop) */}
            <motion.div
              className="md:col-span-3 flex flex-wrap justify-start gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center gap-3 py-2 px-4 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(45, 212, 191, 0.4)",
                    borderColor: "rgba(45, 212, 191, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={skill.image} alt={skill.name} className="h-8 w-8" />
                  <p className="text-slate-300">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
