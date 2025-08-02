import React from "react";
import { ArrowLeft, CheckCircle, MessageSquare, Users, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomerServiceBot = () => {
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
                <MessageSquare className="w-10 h-10 text-accent-blue" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                AI Customer Service Bot
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Handles live chat, email, and voice calls with a natural-sounding AI agent. Provides instant, branded support 24/7 — even on holidays and weekends.
              </p>
              
              {/* Pricing */}
              <div className="bg-bg-secondary rounded-2xl p-8 max-w-md mx-auto mb-8">
                <div className="text-3xl font-bold text-accent-blue mb-2">$2,500/month</div>
                <div className="text-text-secondary mb-4">+ $5,000 setup fee</div>
                <div className="text-green-600 font-semibold mb-2">Saves: $15,000/month</div>
                <div className="text-text-muted text-sm">Replaces: 3 support agents</div>
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
                <h3 className="text-xl font-bold text-text-primary mb-4">Natural Voice AI</h3>
                <p className="text-text-secondary">
                  Handles phone calls with human-like conversation skills, understanding context and emotions.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">24/7 Availability</h3>
                <p className="text-text-secondary">
                  Never miss a customer inquiry, even during holidays, weekends, and off-hours.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Branded Responses</h3>
                <p className="text-text-secondary">
                  Maintains your brand voice and follows your specific support guidelines and policies.
                </p>
              </div>
              
              <div className="feature-card bg-bg-primary border border-border-primary rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Multi-Channel Support</h3>
                <p className="text-text-secondary">
                  Seamlessly handles live chat, email, and voice calls from a single AI system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
              Return on Investment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-bg-secondary rounded-xl p-8">
                <DollarSign className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-text-primary mb-2">$15,000</div>
                <div className="text-text-secondary">Monthly Savings</div>
              </div>
              
              <div className="bg-bg-secondary rounded-xl p-8">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-text-primary mb-2">500%</div>
                <div className="text-text-secondary">ROI in Year 1</div>
              </div>
              
              <div className="bg-bg-secondary rounded-xl p-8">
                <Users className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-text-primary mb-2">100%</div>
                <div className="text-text-secondary">Uptime Guarantee</div>
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
              Schedule a consultation to see how AI Customer Service Bot can transform your support.
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

export default CustomerServiceBot;