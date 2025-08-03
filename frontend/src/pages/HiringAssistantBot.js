import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Users, CheckCircle, TrendingUp, Clock, Shield, Target } from "lucide-react";

const HiringAssistantBot = () => {
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
              <Users className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Recruitment Automation</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              AI Hiring Assistant
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Hiring is time-consuming, inconsistent, and expensive — but it doesn't have to be. Screen resumes, conduct interviews, and recommend top candidates automatically.
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
                  Hire Better, Faster, Smarter
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  The AI Hiring Assistant screens resumes, ranks candidates, conducts structured interviews (with voice or video), and recommends top applicants based on your specific role requirements.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  You'll stop wasting time on unqualified leads and spend more time speaking to the best-fit candidates. Plus, it integrates seamlessly with your existing ATS tools like Workable, Lever, or Greenhouse.
                </p>
                <p className="text-lg text-text-secondary">
                  This tool makes the hiring process faster, smarter, and bias-free. It also helps you scale up recruitment during growth phases — without paying recruiters or burning out your HR team.
                </p>
              </div>
              
              <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Complete Hiring Pipeline</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Bias-free screening</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Faster time-to-hire</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">ATS integrations</span>
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
              End-to-End Recruitment Automation
            </h2>
            <p className="text-lg text-text-secondary">
              From resume screening to final recommendations, handle every step of your hiring process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Resume Screening</h3>
              <p className="text-text-secondary">Automatically filter and rank candidates based on role requirements and qualifications.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">AI Interviews</h3>
              <p className="text-text-secondary">Conduct structured interviews with voice or video to assess candidate fit and skills.</p>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-primary text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Smart Recommendations</h3>
              <p className="text-text-secondary">Get ranked candidate lists with detailed analysis and hiring recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Seamless ATS Integration
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Works with your existing recruitment tools and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Popular ATS Platforms</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Workable</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Lever</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Greenhouse</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Key Benefits</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Reduce bias in hiring</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Scale recruitment efforts</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Improve candidate quality</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Perfect For</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Growing startups</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Internal HR teams</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Recruitment agencies</span>
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
                <div className="text-3xl font-bold text-accent-blue mb-2">$1,800/month</div>
                <div className="text-lg text-text-secondary">+ $3,000 setup fee</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium">Saves $12,000/month</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-text-muted mr-2" />
                  <span className="text-text-muted">Equivalent to 2 technical operations staff</span>
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

export default HiringAssistantBot;