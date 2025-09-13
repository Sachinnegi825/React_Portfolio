import React from "react";
import { motion } from "framer-motion";
import { Bio } from "../data/constants";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-100">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-300 mx-auto mb-8"></div>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto my-8">
          My inbox is always open! Whether you have a question, a project
          proposal, or just want to say hello, I'll do my best to get back to
          you.
        </p>
        <a
          href="mailto:sachinnegi825@gmail.com"
          className="inline-block border border-cyan-300 text-cyan-300 text-lg font-mono px-8 py-4 rounded-md hover:bg-cyan-300/10 transition duration-300"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8 mt-12">
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
