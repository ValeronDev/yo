import React from "react";
import { Bot, FileText, MessageSquare, Phone, Link, Mail, Code, Zap, Building2 } from "lucide-react";

const WhatWeDo = () => {
  const tools = [
    {
      icon: <FileText className="w-8 h-8 text-accent-blue" />,
      title: "SOP Bot",
      targetAudience: "Operations teams, process-heavy businesses, scaling startups",
      description: "Generates SOPs from task input, voice, or screen recordings. Keeps documentation up-to-date as processes evolve. Simplifies onboarding and compliance.",
      pricing: "$200/month + $400 setup fee",
      averageSavings: "$2,000/month",
      equivalentStaff: "1 operations manager"
    },
    {
      icon: <Bot className="w-8 h-8 text-accent-blue" />,
      title: "AI Content Creation Bot",
      targetAudience: "Marketing teams, content agencies, e-comm & SaaS",
      description: "Generates blogs, social posts, emails, product copy. Matches brand tone. SEO-optimized, multi-language.",
      pricing: "$1,500/month + $2,500 setup fee",
      averageSavings: "$10,000/month",
      equivalentStaff: "2 copywriters"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-blue" />,
      title: "AI Customer Service Bot",
      targetAudience: "eCommerce, SaaS, support-heavy businesses",
      description: "24/7 replies via chat, email, social. Integrates with Zendesk, Intercom, etc. Escalates with full ticket context.",
      pricing: "$2,500/month + $5,000 setup fee",
      averageSavings: "$15,000/month",
      equivalentStaff: "3 support agents"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-blue" />,
      title: "AI Sales Call Review Bot",
      targetAudience: "Sales teams, call centers, B2B, real estate, insurance",
      description: "Transcribes & summarizes calls. Detects objections, buying signals, competitors. Scores performance, syncs with HubSpot, Salesforce.",
      pricing: "$1,300/month + $2,400 setup fee",
      averageSavings: "$9,000/month",
      equivalentStaff: "1 sales ops analyst"
    },
    {
      icon: <Link className="w-8 h-8 text-accent-blue" />,
      title: "AI Automation & Integration Bot",
      targetAudience: "SaaS-heavy teams, ops managers, non-technical leads",
      description: "Automates workflows across tools (Notion, Slack, CRMs). Connects APIs, custom logic, no-code interface. Eliminates repetitive tasks.",
      pricing: "$1,800/month + $3,000 setup fee",
      averageSavings: "$12,000/month",
      equivalentStaff: "2 technical operations staff"
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent-blue" />,
      title: "Enterprise – Custom AI Projects",
      targetAudience: "Companies needing advanced, custom-built automations",
      description: "Built-to-spec AI agents and workflow systems. Bespoke UI, logic, and integrations. Dedicated support team.",
      pricing: "Custom Quote",
      averageSavings: "Varies",
      equivalentStaff: "Flexible per scope"
    }
  ];

  return (
    <section id="what-we-do" className="pt-10 lg:pt-16 pb-6 lg:pb-10 bg-bg-secondary">
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
      </div>
    </section>
  );
};

export default WhatWeDo;