import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <img
                src="https://customer-assets.emergentagent.com/job_valeron-marketing/artifacts/9ay1fzjj_output-onlinepngtools%20%287%29.png"
                alt="Valeron"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/tools"
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Tools
            </Link>
            <Link
              to="/clients"
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Clients
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
            >
              Contact
            </Link>
            <a
              href="https://calendly.com/valeron-info/integration-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2 text-sm font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
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
              <Link
                to="/tools"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Tools
              </Link>
              <Link
                to="/clients"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Clients
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Contact
              </Link>
              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full py-3 text-sm font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 text-center"
              >
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;