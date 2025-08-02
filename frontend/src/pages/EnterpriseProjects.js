import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2, CheckCircle, Users, TrendingUp, Link, Zap, Settings } from "lucide-react";

const EnterpriseProjects = () => {
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
              <Building2 className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-sm font-medium text-text-secondary">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Enterprise – Custom AI Projects
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Every company uses dozens of tools — but they rarely talk to each other. We build seamless automations using custom workflows tailored to your operations.
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
                  Make Your Tools Work Together
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  We build seamless automations using tools like n8n, Make, or custom APIs to eliminate repetitive work. Think: auto-updating CRMs, syncing Notion tasks with Slack, generating reports, moving data between Sheets and Stripe — the possibilities are endless.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  These automations replace hours of tedious work, reduce costly errors, and let your team focus on growth, not grunt work.
                </p>
                <p className="text-lg text-text-secondary">
                  Unlike rigid SaaS integrations, every flow is tailor-made for your business and scalable across departments.
                </p>
              </div>
              
              <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Custom Integration Suite</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Link className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">API integrations</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Custom workflows</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-accent-blue mr-3" />
                    <span className="text-text-secondary">Scalable architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Endless Automation Possibilities
            </h2>
            <p className="text-lg text-text-secondary">
              Transform your business operations with intelligent, custom-built automations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-secondary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Data Flow Automation</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Connect your business tools and eliminate manual data entry forever.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Auto-updating CRMs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Sync Notion with Slack</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Sheets to Stripe data flow</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Report Generation</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Automated reporting systems that deliver insights when you need them.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Real-time dashboards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Scheduled reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Multi-platform analytics</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <Link className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Cross-Platform Sync</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Keep all your business platforms perfectly synchronized and up-to-date.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Inventory management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Customer data sync</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Financial reconciliation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-secondary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-accent-blue mr-4" />
                <h3 className="text-xl font-bold text-text-primary">Workflow Optimization</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Streamline your business processes with intelligent automation workflows.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Approval processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Task assignments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Quality control checks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Built for Forward-Thinking Organizations
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Perfect for enterprise teams, agencies, or process-heavy businesses that want to operate lean and smart — without sacrificing power or flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Enterprise Teams</h3>
              <p className="text-text-secondary mb-4">
                Scale operations across departments with unified, intelligent automation systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Multi-department workflows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Compliance automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Security integrations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Growing Agencies</h3>
              <p className="text-text-secondary mb-4">
                Manage multiple clients and projects with automated workflows and reporting.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Client reporting automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Project management flows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Resource allocation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-bg-primary rounded-2xl p-8 border border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-4">Process-Heavy Businesses</h3>
              <p className="text-text-secondary mb-4">
                Eliminate bottlenecks and manual processes with intelligent automation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Manufacturing workflows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Supply chain automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-blue mr-3" />
                  <span className="text-sm text-text-secondary">Quality assurance systems</span>
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
                <div className="text-3xl font-bold text-accent-blue mb-2">Custom Quote</div>
                <div className="text-lg text-text-secondary">Pricing based on project scope</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium">Savings vary by implementation</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 text-text-muted mr-2" />
                  <span className="text-text-muted">Flexible per scope</span>
                </div>
              </div>

              <a
                href="https://calendly.com/valeron-info/integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 px-6 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold inline-block"
              >
                Schedule Consultation Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseProjects;