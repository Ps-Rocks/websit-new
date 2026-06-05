
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-white to-stone-50 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link to="/">
            <Button variant="outline" className="mb-6 hover:bg-[#2c3e2d] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At The Insight Foundry, we take your privacy seriously and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, store, and protect your data when you interact with our website 
            and services. We comply with applicable data protection regulations, including the General Data Protection 
            Regulation (GDPR) and other relevant privacy laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website or submitting information through our forms, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          {/* Information We Collect */}
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              1. Information We Collect
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name and email address submitted via our booking form</li>
                  <li>Company name and website (if provided)</li>
                  <li>Business challenges and project details you share with us</li>
                  <li>Preferred time slots for strategy sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Booking Metadata:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Form submission timestamps</li>
                  <li>Session scheduling information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Site Analytics:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Usage data and site navigation patterns</li>
                  <li>Device and browser information</li>
                  <li>IP address and general location data</li>
                  <li>Cookies for improving user experience</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* How We Use Your Information */}
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              2. How We Use Your Information
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact and Communication:</strong> To reach out about your booking and confirm strategy session details</li>
                <li><strong>Session Preparation:</strong> To better understand your challenges and prepare customized insights for your call</li>
                <li><strong>Internal Improvements:</strong> For process optimization, service enhancement, and anonymized analytics</li>
                <li><strong>Legal Compliance:</strong> To meet our legal obligations and protect our legitimate business interests</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="font-semibold text-[#2c3e2d]">We do not sell your data to any third parties.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* How We Store Your Data */}
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              3. How We Store Your Data
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <div>
                <h4 className="font-semibold mb-2">Security Measures:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Data is stored securely in Supabase (hosted on EU or US-based servers, depending on region)</li>
                  <li>All data is encrypted at rest and during transmission</li>
                  <li>Access is restricted to authorized team members only</li>
                  <li>Regular security audits and updates are performed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Retention:</h4>
                <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Emails and Communication */}
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              4. Emails and Communication
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <div>
                <h4 className="font-semibold mb-2">Communication Types:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Booking confirmation emails sent to users</li>
                  <li>Calendar invites and session reminders</li>
                  <li>Internal alerts sent to our admin team</li>
                  <li>Follow-up communications related to your strategy session</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p><strong>Opt-Out:</strong> You can opt out of our communications at any time by replying to our emails with your request or contacting us directly at theinsightfoundry@gmail.com.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Third-Party Services */}
          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              5. Third-Party Services
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <p>We may use trusted third-party tools to enhance our services:</p>
              <div>
                <h4 className="font-semibold mb-2">Services We May Use:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>OpenAI (GPT-4):</strong> For AI-powered insights and analysis</li>
                  <li><strong>Resend/SendGrid:</strong> For email delivery and communication</li>
                  <li><strong>Google APIs:</strong> For analytics and optimization</li>
                  <li><strong>Supabase:</strong> For secure data storage and management</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p><strong>Important:</strong> These tools are used solely to improve automation and communication, not for marketing purposes. Their usage is governed by their respective privacy policies, and we ensure they meet our security standards.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Your Rights */}
          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              6. Your Rights
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <p>Under applicable data protection laws, you have the following rights:</p>
              <div>
                <h4 className="font-semibold mb-2">Data Subject Rights:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>
              </div>
              <div className="bg-[#2c3e2d] text-white rounded-lg p-4">
                <p><strong>Exercise Your Rights:</strong> Contact us at theinsightfoundry@gmail.com for any data-related requests. We will respond within 30 days.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cookies */}
          <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              7. Cookies and Tracking
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <div>
                <h4 className="font-semibold mb-2">Cookie Usage:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>We use minimal cookies for essential website functionality</li>
                  <li>Analytics cookies to understand page views, bounce rates, and user behavior</li>
                  <li>Session cookies to maintain your preferences during your visit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cookie Control:</h4>
                <p>You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Updates to This Policy */}
          <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              8. Updates to This Policy
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <p>
                This Privacy Policy may be updated occasionally to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify users of any material changes by posting 
                the updated policy on our website with a new "last updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we 
                protect your information.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Contact Us */}
          <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold text-[#2c3e2d] hover:no-underline">
              9. Contact Us
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-4 pt-4">
              <p>For any privacy-related concerns, questions, or requests, please contact us:</p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mt-4">
                <h4 className="font-semibold text-[#2c3e2d] mb-2">The Insight Foundry</h4>
                <p><strong>Email:</strong> <a href="mailto:theinsightfoundry@gmail.com" className="text-[#2c3e2d] hover:underline">theinsightfoundry@gmail.com</a></p>
                <p className="mt-2 text-sm text-gray-600">
                  We aim to respond to all privacy inquiries within 30 days.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            This Privacy Policy is effective as of the last updated date shown above and applies to all users of The Insight Foundry website and services.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
