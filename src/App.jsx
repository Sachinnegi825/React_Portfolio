import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // The ONLY change is removing 'overflow-x-hidden' from this div
    <div className="min-h-screen relative">
      <div className="stars layer1 fixed top-0 left-0 w-full h-full z-[-2]"></div>
      <div className="stars layer2 fixed top-0 left-0 w-full h-full z-[-1]"></div>
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12 lg:px-20 w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
