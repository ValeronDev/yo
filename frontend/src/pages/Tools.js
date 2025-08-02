import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import AutomationGrid from "../components/AutomationGrid";

const Tools = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <WhatWeDo />
      <AutomationGrid />
      <Footer />
    </div>
  );
};

export default Tools;