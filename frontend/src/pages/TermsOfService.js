import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-accent-blue hover:text-accent-blue-hover mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
                Terms of Service
              </h1>
              
              <div className="text-text-secondary mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </div>

              <div className="space-y-8 text-text-secondary">
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using Valeron's AI automation services ("Services"), you accept and agree 
                    to be bound by the terms and provision of this agreement. If you do not agree to abide by 
                    the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">2. Description of Service</h2>
                  <p className="mb-4">
                    Valeron provides AI-powered automation solutions including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>SOP Bot for operational question answering</li>
                    <li>AI Content Creation Bot for marketing materials</li>
                    <li>AI Customer Service Bot for support automation</li>
                    <li>AI Sales Call Review Bot for performance analysis</li>
                    <li>AI Hiring Assistant Bot for recruitment processes</li>
                    <li>Enterprise custom AI projects</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Accounts and Registration</h2>
                  <p className="mb-4">
                    To access certain features of our Services, you may be required to register for an account. 
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept all responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">4. Payment Terms</h2>
                  <p className="mb-4">
                    Our Services are provided on a subscription basis with the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Monthly subscription fees are billed in advance</li>
                    <li>Setup fees are charged upon service activation</li>
                    <li>Payments are due within 30 days of invoice date</li>
                    <li>Late payments may result in service suspension</li>
                    <li>Refunds are provided according to our refund policy</li>
                    <li>Price changes will be communicated 30 days in advance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">5. Acceptable Use Policy</h2>
                  <p className="mb-4">You agree not to use the Services to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Distribute spam, malware, or other harmful content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Use the Services for illegal or fraudulent activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">6. Data and Privacy</h2>
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is governed 
                    by our Privacy Policy. By using our Services, you consent to the collection and use of 
                    information as outlined in our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">7. Intellectual Property</h2>
                  <p className="mb-4">
                    The Services and their original content, features, and functionality are and will remain 
                    the exclusive property of Valeron and its licensors. The Services are protected by copyright, 
                    trademark, and other laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">8. Service Availability</h2>
                  <p className="mb-4">
                    We strive to maintain high service availability but do not guarantee uninterrupted access. 
                    We may temporarily suspend access for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance and updates</li>
                    <li>Emergency repairs or security measures</li>
                    <li>Compliance with legal requirements</li>
                    <li>Prevention of abuse or system overload</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">9. Limitation of Liability</h2>
                  <p>
                    In no event shall Valeron, its directors, employees, or agents be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including without limitation, loss 
                    of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">10. Termination</h2>
                  <p className="mb-4">
                    We may terminate or suspend your account and access to the Services immediately, without prior 
                    notice or liability, for any reason, including if you breach the Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">11. Governing Law</h2>
                  <p>
                    These Terms shall be interpreted and governed by the laws of Quebec, Canada, without regard 
                    to conflict of law provisions. Any disputes shall be resolved in the courts of Montreal, Quebec.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">12. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any time. We will provide notice 
                    of any significant changes. Your continued use of the Services after such changes constitutes 
                    acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">13. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
                    <p><strong>Email:</strong> info@valeron.ca</p>
                    <p><strong>Phone:</strong> +1 (514) 349-6658</p>
                    <p><strong>Address:</strong> Montreal, QC, Canada</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;