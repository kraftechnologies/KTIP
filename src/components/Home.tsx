import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProgramHighlights from "../sections/ProgramHighlights";
import WhyChooseKTIP from "../sections/WhyChooseKTIP";
import ApplicationProcess from "../sections/ApplicationProcess";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <ProgramHighlights />
        <WhyChooseKTIP />
        <ApplicationProcess />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;
