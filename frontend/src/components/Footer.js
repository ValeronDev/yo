import React from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-border-subtle pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_897cccf0-ca73-442b-9ddf-c62916f83865/artifacts/h4l9w71y_valeron_logo.png"
                alt="Valeron"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              Transform your workflow with cutting-edge AI automations and plug-and-play software solutions. 
              Built for creators, startups, and teams who want to scale efficiently.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="footer-social-link w-10 h-10 rounded-lg bg-dark-tertiary flex items-center justify-center text-text-muted hover:bg-accent-blue hover:text-white hover:transform hover:-translate-y-1 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="footer-social-link w-10 h-10 rounded-lg bg-dark-tertiary flex items-center justify-center text-text-muted hover:bg-accent-blue hover:text-white hover:transform hover:-translate-y-1 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="footer-social-link w-10 h-10 rounded-lg bg-dark-tertiary flex items-center justify-center text-text-muted hover:bg-accent-blue hover:text-white hover:transform hover:-translate-y-1 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#what-we-do" className="text-text-secondary hover:text-accent-blue transition-colors text-sm">
                  AI Automations
                </a>
              </li>
              <li>
                <a href="#automations" className="text-text-secondary hover:text-accent-blue transition-colors text-sm">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-accent-blue mr-3" />
                <span className="text-text-secondary">info@valeron.ca</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-accent-blue mr-3" />
                <span className="text-text-secondary">+1 (514) 349-6658</span>
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="w-4 h-4 text-accent-blue mr-3" />
                <span className="text-text-secondary">Montreal, QC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm mb-4 md:mb-0">
              © {currentYear} Valeron. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-text-muted hover:text-accent-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-text-muted hover:text-accent-blue transition-colors text-sm">
                Terms of Service
              </Link>
              <a href="#" className="text-text-muted hover:text-accent-blue transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;