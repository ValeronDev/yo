import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, CheckCircle, Users, TrendingUp, Target, BarChart, Headphones } from "lucide-react";

const SalesCallReviewBot = () => {
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
              <Phone className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Sales Coaching</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              AI Sales Call Review System
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Imagine if every sales call your team made came with a detailed summary, performance breakdown, and personalized coaching advice — instantly.
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
                  Your Sales Coach and QA Analyst in One
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  It listens in on Zoom or Google Meet sales calls, captures the important moments, identifies objections, highlights buyer signals, and offers feedback on tone, pacing, clarity, and more.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  This tool helps reps self-correct faster, sales leaders track performance at scale, and teams close more deals without drowning in recordings or transcriptions.
                </p>
                <p className="text-lg text-text-secondary">
                  It's like having a sales coach and QA analyst for every call — minus the payroll.
                </p>
              </div>
              
              <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Call Analysis Suite</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BarChart className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Performance analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Buyer signal detection</span>
                  </div>
                  <div className="flex items-center">
                    <Headphones className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Tone & pacing analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Comprehensive Call Intelligence
            </h2>
            <p className="text-lg text-text-secondary">
              Every call analyzed with the precision of an expert sales trainer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Performance Tracking</h3>
              <p className="text-text-secondary">Detailed breakdowns of talk time, objection handling, and conversion metrics.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Objection Analysis</h3>
              <p className="text-text-secondary">Identify patterns in customer concerns and improve response strategies.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Communication Coaching</h3>
              <p className="text-text-secondary">Feedback on tone, pacing, clarity, and filler words for better engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Perfect For Sales-Driven Organizations
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Ideal for real estate firms, coaching businesses, or any sales-driven organization with a growing team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Real Estate Teams</h3>
              <p className="text-text-secondary mb-4">
                Perfect for analyzing client consultations, listing presentations, and closing calls.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Listing presentations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Buyer consultations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Negotiation analysis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">B2B Sales Teams</h3>
              <p className="text-text-secondary mb-4">
                Optimize discovery calls, demos, and closing conversations for better results.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Discovery calls</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Product demos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Closing conversations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Coaching Businesses</h3>
              <p className="text-text-secondary mb-4">
                Improve consultation calls and enrollment conversations for higher conversion.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Strategy sessions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Enrollment calls</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Follow-up analysis</span>
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
                <div className="text-3xl font-bold text-accent-blue mb-2">$1,500/month</div>
                <div className="text-lg text-text-secondary">+ $2,400 setup fee</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium">Saves $9,000/month</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-text-muted mr-2" />
                  <span className="text-text-muted">Equivalent to 1 sales ops analyst</span>
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

export default SalesCallReviewBot;