import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Bot, 
  MessageSquare, 
  Phone, 
  Link as LinkIcon, 
  Building2,
  Zap,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Users
} from "lucide-react";

const AutomationTools = () => {
  const tools = [
    {
      icon: <FileText className="w-8 h-8 text-accent-blue" />,
      title: "SOP Bot",
      targetAudience: "Operations teams, process-heavy businesses, scaling startups",
      description: "Provides employees with real-time answers to operational questions by referencing your internal SOPs. Reduces manager interruptions, speeds up onboarding, and ensures compliance across departments.",
      pricing: "$200/month + $400 setup fee",
      averageSavings: "$2,000/month",
      equivalentStaff: "1 operations manager",
      link: "/sop-bot"
    },
    {
      icon: <Bot className="w-8 h-8 text-accent-blue" />,
      title: "AI Content Creation Bot",
      targetAudience: "Marketing teams, content agencies, e-comm & SaaS",
      description: "Generates blogs, social posts, emails, product copy. Matches brand tone. SEO-optimized, multi-language.",
      pricing: "$1,500/month + $2,500 setup fee",
      averageSavings: "$10,000/month",
      equivalentStaff: "2 copywriters",
      link: "/content-creation-bot"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-blue" />,
      title: "AI Customer Service Bot",
      targetAudience: "eCommerce, SaaS, support-heavy businesses",
      description: "Handles live chat, email, and voice calls with a natural-sounding AI agent. Provides instant, branded support 24/7 — even on holidays and weekends.",
      pricing: "$2,500/month + $5,000 setup fee",
      averageSavings: "$15,000/month",
      equivalentStaff: "3 support agents",
      link: "/customer-service-bot"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-blue" />,
      title: "AI Sales Call Review Bot",
      targetAudience: "Sales teams, call centers, B2B, real estate, insurance",
      description: "Automatically reviews Zoom/Meet calls, summarizes objections, key points, and gives performance coaching on tone, pacing, filler words, and more.",
      pricing: "$1,500/month + $2,400 setup fee",
      averageSavings: "$9,000/month",
      equivalentStaff: "1 sales ops analyst",
      link: "/sales-call-review-bot"
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-accent-blue" />,
      title: "AI Hiring Assistant Bot",
      targetAudience: "HR teams, recruiters, growing startups",
      description: "Screens resumes, conducts AI interviews, scores candidates, and recommends top fits — all integrated into your ATS. Greatly reduces time-to-hire and bias in early-stage screening.",
      pricing: "$1,800/month + $3,000 setup fee",
      averageSavings: "$12,000/month",
      equivalentStaff: "2 technical operations staff",
      link: "/hiring-assistant-bot"
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent-blue" />,
      title: "Enterprise – Custom AI Projects",
      targetAudience: "Companies needing advanced, custom-built automations",
      description: "Built-to-spec AI agents and workflow systems. Bespoke UI, logic, and integrations. Dedicated support team.",
      pricing: "Custom Quote",
      averageSavings: "Varies",
      equivalentStaff: "Flexible per scope",
      link: "/enterprise-projects"
    }
  ];

  const bundleOptions = [
    {
      title: "Any 3 Automations",
      price: "$2,800/month + $5,000 setup",
      savings: "Save 15% vs individual pricing",
      features: ["Choose any 3 tools", "Priority support", "Monthly strategy calls"]
    },
    {
      title: "All 5 Automations",
      price: "$6,500/month + $11,000 setup",
      savings: "Save 25% vs individual pricing",
      features: ["All automation tools", "Dedicated success manager", "Custom integrations included"],
      popular: true
    },
    {
      title: "Enterprise Package",
      price: "Custom Quote",
      savings: "Maximum savings + custom features",
      features: ["All tools + custom projects", "White-label options", "24/7 dedicated support"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="automation-tools" className="pb-20 lg:pb-32">
      <div className="container mx-auto px-6">
        {/* Automation Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="feature-card bg-bg-secondary border border-border-primary rounded-2xl p-6 hover:transform hover:-translate-y-2 hover:border-accent-blue hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center mb-4 group-hover:bg-accent-blue/10 transition-colors duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs text-accent-blue font-semibold mb-3 uppercase tracking-wide">
                  For: {tool.targetAudience}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Pricing & Savings */}
              <div className="space-y-3 border-t border-border-primary pt-4">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-accent-blue mr-2" />
                  <span className="text-sm font-semibold text-text-primary">{tool.pricing}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Saves: {tool.averageSavings}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-text-muted mr-2" />
                  <span className="text-xs text-text-muted">{tool.equivalentStaff}</span>
                </div>
              </div>

              <div className="mt-4">
                <Link 
                  to={tool.link}
                  className="w-full bg-accent-blue text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-accent-blue-hover transition-colors duration-200 inline-block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle & Save Section */}
        <div className="bg-bg-secondary rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-tertiary border border-border-primary mb-6">
              <Zap className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Save More</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Bundle & Save
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Combine tools and reduce setup cost. Built for high-output teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundleOptions.map((bundle, index) => (
              <div
                key={index}
                className={`relative bg-bg-primary border rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${
                  bundle.popular 
                    ? 'border-accent-blue ring-2 ring-accent-blue/20' 
                    : 'border-border-primary hover:border-accent-blue'
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {bundle.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent-blue mb-1">
                    {bundle.price}
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    {bundle.savings}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {bundle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-blue mr-3 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    bundle.popular
                      ? 'bg-accent-blue text-white hover:bg-accent-blue-hover hover:transform hover:-translate-y-0.5'
                      : 'bg-bg-tertiary text-text-primary hover:bg-accent-blue hover:text-white'
                  }`}
                >
                  Talk to Sales
                </button>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-4">
              Need help choosing the right bundle? Our automation specialists can help.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary px-8 py-3 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTools;