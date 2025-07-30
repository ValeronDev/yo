import React from "react";
import { Bot, Puzzle, Workflow, Code, MessageSquare, Zap } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-accent-blue" />,
      title: "AI Automations",
      description: "Custom AI workflows that handle repetitive tasks, data processing, and intelligent decision-making for your business.",
      features: ["Smart data processing", "Automated decision making", "Custom AI models"]
    },
    {
      icon: <Puzzle className="w-8 h-8 text-accent-blue" />,
      title: "Plug-and-Play Software",
      description: "Ready-to-use software solutions that integrate seamlessly with your existing tools and platforms.",
      features: ["Easy integration", "No coding required", "Instant deployment"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-accent-blue" />,
      title: "GPT Workflows",
      description: "Advanced GPT-powered workflows for content creation, customer support, and business intelligence.",
      features: ["Content generation", "Smart responses", "Business insights"]
    }
  ];

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-dark-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-secondary border border-border-subtle mb-8">
            <Code className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            What We Do
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We specialize in creating intelligent automation solutions that save time, 
            reduce costs, and scale your business operations efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card bg-dark-secondary border border-border-subtle rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:border-accent-blue hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-dark-tertiary flex items-center justify-center mb-4 group-hover:bg-accent-blue/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-blue mr-3 flex-shrink-0" />
                    <span className="text-sm text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border-subtle">
                <button className="text-accent-blue font-medium hover:text-accent-blue-hover transition-colors group/btn">
                  Learn More
                  <MessageSquare className="w-4 h-4 ml-2 inline group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;