import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              
              <div className="text-text-secondary mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </div>

              <div className="space-y-8 text-text-secondary">
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Business information (company name, industry, job title)</li>
                    <li>Account credentials and preferences</li>
                    <li>Communications with our support team</li>
                    <li>Usage data and analytics from our AI automation tools</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our AI automation services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends and usage patterns</li>
                    <li>Personalize and improve your experience with our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                    <li>With trusted service providers who assist in operating our services</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction. 
                    This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">5. Data Retention</h2>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes 
                    outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                    When we no longer need your personal information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">6. Your Rights</h2>
                  <p className="mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing activities</li>
                    <li>Data portability</li>
                    <li>Objection to certain processing activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">7. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect and use personal information about you. 
                    You can control cookies through your browser settings, though this may affect the functionality 
                    of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">8. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers comply with applicable data protection laws and implement 
                    appropriate safeguards to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    Your continued use of our services after such changes constitutes your acceptance of the new policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">10. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;