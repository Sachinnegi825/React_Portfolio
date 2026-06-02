import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Bio } from "../data/constants";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="flex flex-col items-center gap-6 md:gap-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full flex items-center gap-4 md:gap-6">
        <div className="h-0.5 flex-grow bg-slate-800"></div>
        <h2 className="text-3xl md:text-5xl serif italic tracking-tighter text-center">
          Letter to the Editor
        </h2>
        <div className="h-0.5 flex-grow bg-slate-800"></div>
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-xl md:text-2xl serif leading-relaxed mb-6 md:mb-8">
          &quot;The most powerful tool a developer possesses is the ability to
          connect. If you wish to discuss a vision, a project, or a digital
          revolution, I am at your service.&quot;
        </p>

        <div className="inline-block border-y-4 border-double border-slate-800 py-3 md:py-4 px-6 md:px-10 w-full md:w-auto overflow-hidden">
          <a
            href="mailto:sachinnegi825@gmail.com"
            className="flex items-center justify-center gap-3 text-xl sm:text-2xl md:text-4xl serif font-black hover:text-accent-red transition-colors break-all"
          >
            <FaEnvelope className="text-lg md:text-2xl flex-shrink-0" />{" "}
            sachinnegi825@gmail.com
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-8 w-full">
        <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-slate-500 text-center">
          Correspond Via Social Channels
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { icon: FaLinkedin, url: Bio.linkedin },
            { icon: FaGithub, url: Bio.github },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 md:p-4 border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all transform hover:-rotate-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} className="md:w-6 md:h-6" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-10 italic text-slate-400">
        Signed, — Sachin Negi
      </div>
    </motion.div>
  );
};

export default Contact;
