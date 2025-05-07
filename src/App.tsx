import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ApplyNow from "./sections/ApplyNow";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ConstructionPage from "./components/ConstructionPage";
import { useEffect } from "react";
import ContactForm from "./sections/ContactForm";
import LearnMore from "./components/LearnMore";
function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applynow" element={<ApplyNow />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="*" element={<ConstructionPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
