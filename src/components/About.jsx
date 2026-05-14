
const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4">
      <h2 className="text-3xl serif italic border-b border-slate-700/50 pb-2 mb-4">The Developer's Sketch</h2>
      <p className="text-sm font-medium leading-relaxed italic text-slate-600 dark:text-slate-400">
        "I am a passionate Software Developer with 1.5+ years of experience crafting dynamic and scalable web applications. I thrive on transforming complex ideas into clean, user-friendly interfaces."
      </p>
      <div className="h-px bg-slate-700/50 w-1/2 mx-auto my-2"></div>
      <p className="text-xs uppercase tracking-widest font-bold text-center">Established 2023</p>
    </div>
  );
};

export default About;
