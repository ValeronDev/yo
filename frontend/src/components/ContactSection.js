import React, { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with dummy handling
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-tertiary border border-border-primary mb-8">
            <Mail className="w-4 h-4 text-accent-blue mr-2" />
            <span className="text-sm font-medium text-text-secondary">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to transform your business with AI automation? 
            Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-bg-primary border border-border-primary rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field w-full bg-bg-secondary border-2 border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-4 focus:ring-accent-blue/10 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field w-full bg-bg-secondary border-2 border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-4 focus:ring-accent-blue/10 transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-field w-full bg-bg-secondary border-2 border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-4 focus:ring-accent-blue/10 transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field w-full bg-bg-secondary border-2 border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-4 focus:ring-accent-blue/10 transition-all duration-200 resize-none"
                  placeholder="Tell us about your automation needs..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/25 font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-bg-primary border border-border-primary rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email us</h4>
                    <p className="text-text-secondary">info@valeron.ca</p>
                    <p className="text-text-muted text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Call us</h4>
                    <p className="text-text-secondary">+1 (514) 349-6658</p>
                    <p className="text-text-muted text-sm mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Visit us</h4>
                    <p className="text-text-secondary">San Francisco, CA</p>
                    <p className="text-text-muted text-sm mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="bg-bg-primary border border-border-primary rounded-2xl p-8">
              <h4 className="font-semibold text-text-primary mb-4">Why choose Valeron?</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">Custom AI solutions tailored to your needs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">ROI-focused automation strategies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">Seamless integration with existing tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;