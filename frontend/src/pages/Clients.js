import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle, Building2, Users, TrendingUp } from "lucide-react";

const Clients = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const clients = [
    {
      name: "Payflow",
      industry: "HR & Recruitment",
      solution: "AI Hiring Assistant Bot",
      logo: "https://via.placeholder.com/200x80/3B82F6/ffffff?text=Payflow",
      challenge: "Manual resume screening was taking 40+ hours per week for their growing team",
      solution_description: "Automated resume screening and initial candidate interviews",
      results: [
        "Reduced screening time by 85%",
        "Increased quality candidate pipeline by 60%",
        "Saved $15,000/month in recruitment costs"
      ],
      testimonial: "The AI Hiring Assistant completely transformed our recruitment process. We're now able to identify top candidates in minutes, not hours."
    },
    {
      name: "Expensif World",
      industry: "Financial Services",
      solution: "SOP Answer Bot",
      logo: "https://via.placeholder.com/200x80/3B82F6/ffffff?text=Expensif+World",
      challenge: "Customer service team was overwhelmed with repetitive process questions",
      solution_description: "24/7 internal SOP guidance system for customer support team",
      results: [
        "90% reduction in internal process questions",
        "Improved response time by 70%",
        "Increased team productivity by 45%"
      ],
      testimonial: "Our team now has instant access to every process and procedure. No more waiting for managers or digging through documentation."
    },
    {
      name: "Prime Closing",
      industry: "Real Estate",
      solution: "AI Sales Call Review Bot",
      logo: "https://via.placeholder.com/200x80/3B82F6/ffffff?text=Prime+Closing",
      challenge: "Sales managers couldn't review and coach on all team calls effectively",
      solution_description: "Automated call analysis and personalized coaching for every sales interaction",
      results: [
        "35% increase in closing rates",
        "Reduced training time by 50%",
        "Improved call quality scores by 40%"
      ],
      testimonial: "Every agent now gets personalized coaching after each call. Our closing rates have never been higher, and our team is more confident than ever."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-tertiary border border-border-primary mb-8">
              <Building2 className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Success Stories</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Trusted by Forward-Thinking Companies
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how leading companies are transforming their operations with our AI automation solutions. 
              Real results from real businesses.
            </p>
          </div>

          {/* Client Case Studies */}
          <div className="space-y-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-bg-secondary border border-border-primary rounded-3xl p-8 lg:p-12 hover:border-accent-blue transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto mb-6"
                    />
                    
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-semibold mb-4">
                        {client.industry}
                      </span>
                      <h2 className="text-2xl font-bold text-text-primary mb-4">
                        {client.solution}
                      </h2>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Challenge:</h4>
                        <p className="text-text-secondary">{client.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Solution:</h4>
                        <p className="text-text-secondary">{client.solution_description}</p>
                      </div>
                    </div>

                    <div className="bg-bg-primary rounded-2xl p-6 border border-border-primary">
                      <p className="text-text-secondary italic mb-4">
                        "{client.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary">{client.name}</p>
                          <p className="text-sm text-text-muted">{client.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-bg-primary rounded-2xl p-6 border border-border-primary">
                      <h4 className="font-semibold text-text-primary mb-6 flex items-center">
                        <TrendingUp className="w-5 h-5 text-accent-blue mr-2" />
                        Results Achieved
                      </h4>
                      <div className="space-y-4">
                        {client.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                            <span className="text-text-secondary">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-bg-secondary rounded-3xl p-8 lg:p-12 border border-border-primary">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can transform your business operations and deliver measurable results.
              </p>
              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold inline-block"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;