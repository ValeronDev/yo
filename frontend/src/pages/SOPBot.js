import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, CheckCircle, Users, TrendingUp, Clock, Shield } from "lucide-react";

const SOPBot = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-tertiary border border-border-primary mb-8">
              <FileText className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">SOP Automation</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              SOP Answer System
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Your team's internal GPS — always available, always accurate. Get precise, actionable guidance based on your company's own SOPs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold inline-block"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="btn-secondary px-8 py-3 rounded-lg border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-200 font-semibold inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  Stop the Endless Questions
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  Instead of digging through folders, pinging managers, or guessing the next step, employees can now ask the system a question in natural language and get precise, actionable guidance based on your company's own SOPs.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  Whether it's "What do I do if a shipment is delayed?" or "How do I handle a refund request?", the system understands the context and delivers a step-by-step process — tailored to your workflow.
                </p>
                <p className="text-lg text-text-secondary">
                  It's like having your best operations manager on-call 24/7, minus the interruptions.
                </p>
              </div>
              
              <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Instant SOP Access</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">24/7 availability</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Process compliance</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Reduced manager dependency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Transform Your Operations
            </h2>
            <p className="text-lg text-text-secondary">
              This drastically reduces dependency on human supervisors, improves response time, and ensures process compliance across departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Faster Response Times</h3>
              <p className="text-text-secondary">Instant answers eliminate waiting for manager approval or clarification.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Ensure Compliance</h3>
              <p className="text-text-secondary">Consistent process execution across all departments and team members.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Reduce Interruptions</h3>
              <p className="text-text-secondary">Free up managers to focus on strategy instead of answering routine questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Perfect For Your Business
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Ideal for operations teams, agencies, and physical businesses where SOP clarity can make or break efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Operations Teams</h3>
              <p className="text-text-secondary mb-4">
                Perfect for teams managing complex workflows, inventory processes, or customer service operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Manufacturing processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Quality control procedures</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Safety protocols</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Growing Businesses</h3>
              <p className="text-text-secondary mb-4">
                Scale your operations without losing process consistency as you hire new team members.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Onboarding automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Training consistency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Process standardization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-bg-secondary rounded-3xl p-8 border border-border-primary">
              <div className="mb-6">
                <div className="text-3xl font-bold text-accent-blue mb-2">$200/month</div>
                <div className="text-lg text-text-secondary">+ $400 setup fee</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium">Saves $2,000/month</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-text-muted mr-2" />
                  <span className="text-text-muted">Equivalent to 1 operations manager</span>
                </div>
              </div>

              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 px-6 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold inline-block"
              >
                Schedule Implementation Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SOPBot;