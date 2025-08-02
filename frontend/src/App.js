import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SOPBot from "./pages/SOPBot";
import ContentCreationBot from "./pages/ContentCreationBot";
import CustomerServiceBot from "./pages/CustomerServiceBot";
import SalesCallReviewBot from "./pages/SalesCallReviewBot";
import HiringAssistantBot from "./pages/HiringAssistantBot";
import EnterpriseProjects from "./pages/EnterpriseProjects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sop-bot" element={<SOPBot />} />
          <Route path="/content-creation-bot" element={<ContentCreationBot />} />
          <Route path="/customer-service-bot" element={<CustomerServiceBot />} />
          <Route path="/sales-call-review-bot" element={<SalesCallReviewBot />} />
          <Route path="/hiring-assistant-bot" element={<HiringAssistantBot />} />
          <Route path="/enterprise-projects" element={<EnterpriseProjects />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;