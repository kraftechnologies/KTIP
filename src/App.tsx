import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import ProgramHighlights from './sections/ProgramHighlights';
import WhyChooseKTIP from './sections/WhyChooseKTIP';
import ApplicationProcess from './sections/ApplicationProcess';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import ContactForm from './sections/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProgramHighlights />
        <WhyChooseKTIP />
        <ApplicationProcess />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;