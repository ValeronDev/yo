import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import HighLeverageTeams from "../components/AutomationGrid";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <Hero />
      <WhatWeDo />
      <HighLeverageTeams />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;