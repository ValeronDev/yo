import React from "react";
import { Bot, FileText, MessageSquare, Phone, Link, Mail, Code, Zap } from "lucide-react";

const WhatWeDo = () => {
  const tools = [
    {
      icon: <FileText className="w-8 h-8 text-accent-blue" />,
      title: "SOP Bot",
      description: "Generates SOPs from task input, voice, or screen recordings. Keeps documentation current as processes evolve.",
      forText: "Operations teams, process-heavy businesses (e.g. logistics, agencies), and scaling startups",
      features: ["Auto SOP generation", "Voice & screen recording", "Always up-to-date docs"]
    },
    {
      icon: <Bot className="w-8 h-8 text-accent-blue" />,
      title: "AI Content Creation Bot",
      description: "Generates blogs, social media posts, product copy, and emails. Matches brand tone and is SEO-optimized.",
      forText: "Marketing teams, content agencies, e-commerce, SaaS",
      features: ["Brand tone matching", "SEO optimization", "Multi-language support"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-blue" />,
      title: "AI Customer Service Bot",
      description: "24/7 AI replies via chat, email, and social. Integrates with support platforms and escalates with full context.",
      forText: "eCommerce stores, SaaS companies, high-volume support teams",
      features: ["24/7 availability", "Platform integrations", "Smart escalation"]
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-blue" />,
      title: "AI Sales Call Review Bot",
      description: "Transcribes and summarizes sales calls. Detects objections, buying signals, and scores rep performance.",
      forText: "Sales teams, revenue ops, B2B SaaS, insurance, real estate",
      features: ["Call transcription", "Performance scoring", "CRM integration"]
    },
    {
      icon: <Link className="w-8 h-8 text-accent-blue" />,
      title: "AI Automation & Integration Bot",
      description: "AI-driven cross-platform workflows. Connects APIs and automates triggers/actions with no-code logic builder.",
      forText: "Teams using multiple SaaS tools (Notion, Slack, CRMs, Airtable)",
      features: ["Cross-platform workflows", "No-code builder", "API connections"]
    },
    {
      icon: <Mail className="w-8 h-8 text-accent-blue" />,
      title: "AI Email Response Bot",
      description: "Auto-reads and categorizes emails. Drafts intelligent, context-aware replies and suggests follow-ups.",
      forText: "Busy executives, sales/support teams, admin teams",
      features: ["Smart categorization", "Context-aware replies", "Follow-up suggestions"]
    }
  ];

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-tertiary border border-border-primary mb-8">
            <Code className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">AI-Powered Tools</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Our AI Tools
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From operations to sales, customer service to content creation — 
            our specialized AI bots handle the work so you can focus on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="feature-card bg-bg-secondary border border-border-primary rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:border-accent-blue hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-bg-tertiary flex items-center justify-center mb-4 group-hover:bg-accent-blue/10 transition-colors duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {tool.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {tool.description}
                </p>
                <div className="text-sm text-text-muted mb-4">
                  <strong className="text-accent-blue">For:</strong> {tool.forText}
                </div>
              </div>

              <div className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-blue mr-3 flex-shrink-0" />
                    <span className="text-sm text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border-primary">
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