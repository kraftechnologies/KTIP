import React from "react";
import Hero from "../sections/public/Hero.jsx";
import About from "../sections/public/About.jsx";
import ApplicationProcess from "../sections/ApplicationProcess.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQ from "../sections/FAQ.jsx";
import Domains from "../sections/public/Domain.jsx";
import Benefits from "../sections/public/Benefits.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Domains/>
        <Benefits/>
        <ApplicationProcess />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;