import React from "react";
import { ArrowRight, Zap, Users, Bot } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-secondary border border-border-subtle mb-8">
            <Zap className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">
              AI-Powered Automation Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Automate Your Business
            <span className="block text-accent-blue">With AI Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your workflow with cutting-edge AI automations and plug-and-play software solutions. 
            Built for creators, startups, and teams who want to scale efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-blue/25 flex items-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://calendly.com/valeron-info/integration-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg border-2 border-border-primary text-text-primary hover:border-accent-blue hover:text-accent-blue hover:bg-accent-blue/5 transition-all duration-200 hover:transform hover:-translate-y-1 inline-block"
            >
              Let's Talk
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Bot className="w-6 h-6 text-accent-blue mr-2" />
                <span className="text-2xl font-bold text-text-primary">500+</span>
              </div>
              <p className="text-text-muted text-sm">Automations Built</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Bot className="w-6 h-6 text-accent-blue mr-2" />
                <span className="text-2xl font-bold text-text-primary">$45K</span>
              </div>
              <p className="text-text-muted text-sm">Average Yearly Company Savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-accent-blue mr-2" />
                <span className="text-2xl font-bold text-text-primary">24/7</span>
              </div>
              <p className="text-text-muted text-sm">AI Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;