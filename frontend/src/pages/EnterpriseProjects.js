import React from "react";
import { ArrowLeft, CheckCircle, Building2, Users, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EnterpriseProjects = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-accent-blue hover:text-accent-blue-hover mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <div className="w-20 h-20 rounded-2xl bg-bg-secondary flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-accent-blue" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Enterprise – Custom AI Projects
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Built-to-spec AI agents and workflow systems. Bespoke UI, logic, and integrations. Dedicated support team.
              </p>
              
              {/* Pricing */}
              <div className="bg-bg-secondary rounded-2xl p-8 max-w-md mx-auto mb-8">
                <div className="text-3xl font-bold text-accent-blue mb-2">Custom Quote</div>
                <div className="text-text-secondary mb-4">Based on project scope</div>
                <div className="text-green-600 font-semibold mb-2">Saves: Varies</div>
                <div className="text-text-muted text-sm">Replaces: Flexible per scope</div>
              </div>
              
              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 inline-block"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Custom AI Agents</h3>
                <p className="text-text-secondary">
                  Purpose-built AI systems designed specifically for your unique business processes and requirements.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Bespoke User Interface</h3>
                <p className="text-text-secondary">
                  Custom-designed interfaces that match your brand and provide intuitive user experiences.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Advanced Integration</h3>
                <p className="text-text-secondary">
                  Deep integration with your existing systems, databases, and third-party applications.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Dedicated Support Team</h3>
                <p className="text-text-secondary">
                  Dedicated project managers, developers, and support staff for your enterprise needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Enterprise Use Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Financial Services</h3>
                <p className="text-text-secondary">
                  Risk assessment AI, fraud detection systems, automated compliance reporting, and customer portfolio analysis.
                </p>
              </div>
              
              <div className="bg-bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Healthcare</h3>
                <p className="text-text-secondary">
                  Medical record analysis, appointment scheduling, insurance claim processing, and patient communication systems.
                </p>
              </div>
              
              <div className="bg-bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Manufacturing</h3>
                <p className="text-text-secondary">
                  Quality control automation, predictive maintenance, supply chain optimization, and production scheduling.
                </p>
              </div>
              
              <div className="bg-bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Retail & E-commerce</h3>
                <p className="text-text-secondary">
                  Inventory management, personalized recommendations, dynamic pricing, and customer behavior analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Schedule a consultation to discuss your custom AI project requirements and get a detailed proposal.
            </p>
            <a
              href="https://calendly.com/valeron-info/integration-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 inline-block"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseProjects;