import React from "react";
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  FileText, 
  Database, 
  ShoppingCart, 
  BarChart3, 
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

const AutomationGrid = () => {
  const automationExamples = [
    {
      icon: <MessageSquare className="w-6 h-6 text-accent-blue" />,
      title: "Customer Support Bot",
      description: "AI-powered chatbot that handles 90% of customer inquiries automatically",
      category: "Customer Service",
      timesSaved: "15 hours/week"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent-blue" />,
      title: "Email Marketing Automation",
      description: "Smart email sequences that personalize content based on user behavior",
      category: "Marketing",
      timesSaved: "10 hours/week"
    },
    {
      icon: <Calendar className="w-6 h-6 text-accent-blue" />,
      title: "Meeting Scheduler",
      description: "Intelligent scheduling that finds optimal meeting times for all participants",
      category: "Productivity",
      timesSaved: "5 hours/week"
    },
    {
      icon: <FileText className="w-6 h-6 text-accent-blue" />,
      title: "Document Generator",
      description: "Auto-generate contracts, invoices, and reports from templates",
      category: "Documentation",
      timesSaved: "8 hours/week"
    },
    {
      icon: <Database className="w-6 h-6 text-accent-blue" />,
      title: "Data Sync & Migration",
      description: "Seamlessly sync data between different platforms and databases",
      category: "Data Management",
      timesSaved: "12 hours/week"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-accent-blue" />,
      title: "E-commerce Automation",
      description: "Automate inventory management, order processing, and customer follow-ups",
      category: "E-commerce",
      timesSaved: "20 hours/week"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent-blue" />,
      title: "Analytics Dashboard",
      description: "Real-time business intelligence with automated report generation",
      category: "Analytics",
      timesSaved: "6 hours/week"
    },
    {
      icon: <Users className="w-6 h-6 text-accent-blue" />,
      title: "HR Workflow Automation",
      description: "Streamline hiring, onboarding, and employee management processes",
      category: "Human Resources",
      timesSaved: "18 hours/week"
    }
  ];

  return (
    <section id="automations" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-secondary border border-border-subtle mb-8">
            <CheckCircle className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">Automation Examples</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            See Our Automations in Action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From simple task automation to complex AI workflows, we've built solutions 
            that save businesses hundreds of hours every month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationExamples.map((automation, index) => (
            <div
              key={index}
              className="automation-card bg-dark-secondary border border-border-subtle rounded-xl p-6 hover:transform hover:-translate-y-1 hover:border-accent-blue hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {automation.category}
                </span>
              </div>

              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-dark-tertiary flex items-center justify-center mb-3 group-hover:bg-accent-blue/10 transition-colors duration-300">
                  {automation.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {automation.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {automation.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-accent-blue mr-2" />
                  <span className="text-sm font-medium text-accent-blue">
                    {automation.timesSaved}
                  </span>
                </div>
                <span className="text-xs text-text-muted">saved</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-dark-secondary border border-border-subtle rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your specific needs and create custom automation solutions 
              that will transform your workflow.
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
              Start Your Automation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationGrid;