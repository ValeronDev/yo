import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MessageSquare, CheckCircle, Users, TrendingUp, Clock, Phone, Mail } from "lucide-react";

const CustomerServiceBot = () => {
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
              <MessageSquare className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Customer Support</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              AI Customer Service Bot (With Voice)
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              This isn't just another chatbot — it's a full-service, AI-powered support agent that communicates over email, DMs, live chat, and even voice calls using a natural-sounding AI voice.
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
                  Never Miss a Customer Again
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  Customers don't want to wait. Whether it's a refund question at midnight or a booking inquiry on the weekend, the AI Customer Service Bot is available 24/7 to give fast, polite, and helpful responses in your brand tone.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  Voice support makes your business feel more personal and professional — especially for service-based or high-touch brands. No more missing leads or overloading your support team during launches, promos, or peak seasons.
                </p>
                <p className="text-lg text-text-secondary">
                  This solution reduces support costs, increases customer satisfaction, and keeps your team focused on high-value problems, not repetitive tickets.
                </p>
              </div>
              
              <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Omnichannel Support</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Natural voice calls</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Email & DM support</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">24/7 availability</span>
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
              Transform Your Customer Experience
            </h2>
            <p className="text-lg text-text-secondary">
              A game-changer for e-commerce, SaaS, and service businesses with high message volume or customer expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Instant Response</h3>
              <p className="text-text-secondary">No more waiting for business hours or overwhelmed support queues.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Reduce Support Costs</h3>
              <p className="text-text-secondary">Handle routine inquiries automatically, freeing up human agents for complex issues.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Higher Satisfaction</h3>
              <p className="text-text-secondary">Consistent, professional responses that maintain your brand voice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Full-Service Support Channels
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Handle every customer touchpoint with natural, branded communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Voice Support</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Natural-sounding AI voice that handles phone calls with the same professionalism as your best human agents.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Natural conversation flow</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Brand-specific tone</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Escalation protocols</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Multi-Channel Messaging</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Seamless support across email, live chat, social media DMs, and messaging platforms.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Email automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Live chat integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Social media support</span>
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
                <div className="text-3xl font-bold text-accent-blue mb-2">$2,500/month</div>
                <div className="text-lg text-text-secondary">+ $5,000 setup fee</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium">Saves $15,000/month</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-text-muted mr-2" />
                  <span className="text-text-muted">Equivalent to 3 support agents</span>
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

export default CustomerServiceBot;