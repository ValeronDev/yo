import React from "react";
import { 
  Building2, 
  Rocket, 
  TrendingUp, 
  Zap,
  CheckCircle,
  Users
} from "lucide-react";

const HighLeverageTeams = () => {
  const teamTypes = [
    {
      icon: <Rocket className="w-6 h-6 text-accent-blue" />,
      title: "Lean Startups",
      description: "Early-stage companies maximizing output with minimal resources",
      badge: "0-50 employees"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
      title: "Growth Companies",
      description: "Scaling businesses automating operations to focus on expansion",
      badge: "50-200 employees"
    },
    {
      icon: <Building2 className="w-6 h-6 text-accent-blue" />,
      title: "Enterprise Teams",
      description: "Large organizations optimizing specific departments and workflows",
      badge: "200+ employees"
    }
  ];

  // Placeholder client logos/cards - blurred for privacy
  const clientCards = [
    { name: "TechCorp", industry: "SaaS", blur: true },
    { name: "GrowthCo", industry: "E-commerce", blur: true },
    { name: "ScaleUp", industry: "FinTech", blur: true },
    { name: "InnovateLab", industry: "AI/ML", blur: true },
    { name: "StreamlineOps", industry: "Operations", blur: true },
    { name: "AutoFlow", industry: "Logistics", blur: true }
  ];

  return (
    <section id="high-leverage-teams" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-secondary border border-border-primary mb-8">
            <Users className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">Our Clients</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Used by High-Leverage Teams
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From lean startups to scaled operations — Valeron powers fast-moving teams across industries.
          </p>
        </div>

        {/* Team Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamTypes.map((team, index) => (
            <div
              key={index}
              className="feature-card bg-bg-secondary border border-border-primary rounded-xl p-6 hover:transform hover:-translate-y-1 hover:border-accent-blue hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center mb-4 mx-auto group-hover:bg-accent-blue/10 transition-colors duration-300">
                {team.icon}
              </div>
              
              <div className="mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {team.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {team.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Cards Grid - Blurred for Privacy */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-text-primary mb-8 text-center">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientCards.map((client, index) => (
              <div
                key={index}
                className="bg-bg-secondary border border-border-primary rounded-lg p-4 text-center hover:border-accent-blue transition-colors duration-300 relative overflow-hidden"
              >
                {/* Blur effect for privacy */}
                <div className="filter blur-sm">
                  <div className="w-full h-8 bg-gradient-to-r from-text-muted to-text-secondary rounded mb-2"></div>
                  <div className="text-xs text-text-muted">{client.industry}</div>
                </div>
                
                {/* Privacy overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary/80">
                  <span className="text-xs text-text-muted">Client Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-accent-blue mr-2" />
              <span className="text-3xl font-bold text-text-primary">10x</span>
            </div>
            <p className="text-text-muted text-sm">Faster Operations</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-accent-blue mr-2" />
              <span className="text-3xl font-bold text-text-primary">40%</span>
            </div>
            <p className="text-text-muted text-sm">Cost Reduction</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-accent-blue mr-2" />
              <span className="text-3xl font-bold text-text-primary">99%</span>
            </div>
            <p className="text-text-muted text-sm">Accuracy Rate</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-bg-secondary border border-border-primary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Join High-Performing Teams
            </h3>
            <p className="text-text-secondary mb-6">
              See how Valeron's AI tools can transform your team's productivity 
              and give you the competitive edge you need.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary px-8 py-3 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLeverageTeams;