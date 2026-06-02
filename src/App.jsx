import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const TICKER_TEXT =
  "BREAKING: SACHIN NEGI LAUNCHES REVOLUTIONARY PORTFOLIO THEME • OPEN FOR NEW OPPORTUNITIES • MERN STACK EXPERT • REACT 19 READY • CHECK OUT FEATURED PROJECTS BELOW • ";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function App() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* Newspaper Masthead */}
      <header className="container mx-auto px-4 md:px-6 pt-10 pb-4 text-center border-x-1.5 border-slate-700/50 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-widest border-b-1.5 border-slate-700/50 pb-2 mb-4 gap-2">
          <div className="flex gap-4 order-2 md:order-1">
            <span>Vol. I — No. 001</span>
            <span className="hidden sm:inline text-accent-red">• 50 PAGES</span>
          </div>
          <span className="order-1 md:order-2 font-black border-b md:border-0 border-slate-700/30 pb-1 md:pb-0 w-full md:w-auto">
            {currentDate}
          </span>
          <div className="flex gap-4 order-3">
            <span className="hidden lg:inline uppercase">
              Tech Market: React 19 ▲ 4.2% • AI ▼ 0.5%
            </span>
            <span>Late Edition — 50¢</span>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] serif italic tracking-tighter mb-4 leading-none break-words"
        >
          The Daily Negi
        </motion.h1>

        <div className="border-y-4 border-double border-slate-700/50 py-3 mb-4 text-[9px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 px-2">
          <span>Software Engineering</span>
          <span className="hidden xs:inline">•</span>
          <span>Fullstack Mastery</span>
          <span className="hidden xs:inline">•</span>
          <span>Digital Innovation</span>
        </div>

        {/* Section Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-10 border-b-1.5 border-slate-700/50 pb-4 mb-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2">
          <a href="#hero" className="hover:text-accent-red transition-colors underline decoration-slate-400 decoration-1 underline-offset-4 whitespace-nowrap">Front Page</a>
          <a href="#about" className="hover:text-accent-red transition-colors underline decoration-slate-400 decoration-1 underline-offset-4 whitespace-nowrap">The Sketch</a>
          <a href="#experience" className="hover:text-accent-red transition-colors underline decoration-slate-400 decoration-1 underline-offset-4 whitespace-nowrap">Chronicles</a>
          <a href="#projects" className="hover:text-accent-red transition-colors underline decoration-slate-400 decoration-1 underline-offset-4 whitespace-nowrap">Features</a>
          <a href="#contact" className="hover:text-accent-red transition-colors underline decoration-slate-400 decoration-1 underline-offset-4 whitespace-nowrap">Editorials</a>
        </nav>
      </header>

      {/* Breaking News Ticker — content duplicated for seamless loop */}
      <div className="ticker-wrap border-y-1.5 border-slate-700/50">
        <div className="ticker-move">
          {TICKER_TEXT}
          {TICKER_TEXT}
        </div>
      </div>

      <main className="newspaper-grid">
        {/* Main Lead Story (Hero) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="col-span-12 lg:col-span-8 news-column"
        >
          <Hero />
        </motion.div>

        {/* Sidebar News */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="col-span-12 lg:col-span-4 news-column"
        >
          <About />
          <div className="my-8 border-t border-slate-700/50 pt-8">
            <Skills />
          </div>
        </motion.div>

        {/* Second Row */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="col-span-12 lg:col-span-6 news-column"
        >
          <Experience />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="col-span-12 lg:col-span-6 news-column"
        >
          <Education />
        </motion.div>

        {/* Full Width Section Header */}
        <div className="col-span-12 py-4 border-y-2 border-slate-700/50 bg-slate-100 dark:bg-slate-800 text-center">
          <h2 className="text-2xl serif italic uppercase tracking-widest">
            Special Feature: Project Portfolio
          </h2>
        </div>

        {/* Projects in Newspaper Format */}
        <Projects />

        {/* Footer Editorial */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="col-span-12 news-column text-center py-20"
        >
          <Contact />
        </motion.div>
      </main>

      <footer className="container mx-auto px-6 py-10 text-center border-x-1.5 border-slate-700/50 border-t-1.5 border-slate-700/50">
        <p className="text-xs font-bold uppercase tracking-widest">
          © {currentYear} The Daily Negi Publishing Group • All Rights Reserved
        </p>
        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
          Designed & Built by Sachin Negi
        </p>
      </footer>
    </div>
  );
}

export default App;
