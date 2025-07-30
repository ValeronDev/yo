import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_897cccf0-ca73-442b-9ddf-c62916f83865/artifacts/h4l9w71y_valeron_logo.png"
              alt="Valeron"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection("high-leverage-teams")}
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary px-6 py-2 text-sm font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary hover:text-accent-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border-primary pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Tools
              </button>
              <button
                onClick={() => scrollToSection("high-leverage-teams")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary w-full py-3 text-sm font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;