import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const InternshipTerms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-white to-stone-50 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link to="/">
            <Button variant="outline" className="mb-6 hover:bg-[#2c3e2d] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Internship Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Effective Date: June 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section className="space-y-4">
            <p>
              These Terms and Conditions govern all internship engagements undertaken with The Insight
              Foundry unless expressly superseded in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">1. Organization Status</h2>
            <p>The Insight Foundry (“TIF”) is a student-led consulting initiative operating from Indore, Madhya Pradesh.</p>
            <p>
              The Insight Foundry currently operates as a student-led consulting initiative and not as a registered
              corporate entity. Interns acknowledge that participation is voluntary and educational in nature and that
              no representation has been made that the internship constitutes formal employment.
            </p>
            <p>
              The primary objective of the internship program is to provide practical exposure, mentorship,
              consulting experience, professional development, networking opportunities, and structured learning
              experiences for students and early-career professionals.
            </p>
            <p>
              Nothing contained herein shall be construed as creating an employment relationship, partnership,
              agency relationship, joint venture, or entitlement to future employment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">2. Nature of the Internship</h2>
            <p>The internship is intended solely as a learning and development opportunity.</p>
            <p>Participants may be assigned projects involving:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Market research</li>
              <li>Business analysis</li>
              <li>Strategic consulting exercises</li>
              <li>Internal operations</li>
              <li>Presentation preparation</li>
              <li>Client-facing simulations</li>
              <li>Business development support</li>
              <li>Content creation</li>
              <li>Data collection and analysis</li>
              <li>Process documentation</li>
              <li>Other educational consulting-related activities</li>
            </ul>
            <p>
              The scope of assignments may change at the discretion of TIF based on learning objectives and
              organizational requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">3. Duration</h2>
            <p>The standard internship duration shall be four (4) weeks.</p>
            <p>TIF may, at its sole discretion, extend an internship period based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance</li>
              <li>Organizational requirements</li>
              <li>Availability of projects</li>
              <li>Mutual agreement</li>
            </ul>
            <p>No participant shall have a right to automatic extension.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">4. Unpaid Nature of the Program</h2>
            <p>The internship is unpaid.</p>
            <p>Participants acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No salary shall be paid.</li>
              <li>No wages shall be paid.</li>
              <li>No remuneration shall be payable.</li>
              <li>No employment benefits shall accrue.</li>
              <li>No provident fund, gratuity, insurance, bonus, leave encashment, or similar employment benefits shall be provided.</li>
            </ul>
            <p>
              TIF may, at its sole discretion, provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Certificates</li>
              <li>Letters of Recommendation</li>
              <li>Recognition on social media</li>
              <li>LinkedIn recommendations</li>
              <li>Performance awards</li>
              <li>Training opportunities</li>
              <li>Networking opportunities</li>
            </ul>
            <p>
              Such benefits are discretionary and shall not constitute compensation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">5. Eligibility</h2>
            <p>Participants must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least eighteen (18) years of age.</li>
              <li>Possess the legal capacity to enter into agreements.</li>
              <li>Provide accurate information during application and onboarding.</li>
            </ul>
            <p>TIF reserves the right to request proof of age and identity.</p>
            <p>Any misrepresentation may result in immediate termination.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">6. Attendance Requirements</h2>
            <p>The internship is designed to be flexible.</p>
            <p>Participants are expected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attend scheduled meetings whenever reasonably possible.</li>
              <li>Communicate anticipated absences.</li>
              <li>Participate professionally in assigned activities.</li>
              <li>Meet project deadlines where applicable.</li>
            </ul>
            <p>
              For the purpose of certification: A participant must attend at least seventy percent (70%) of officially
              scheduled meetings during the internship period.
            </p>
            <p>
              Failure to satisfy this requirement may result in non-issuance of a completion certificate. TIF may waive
              this requirement in exceptional circumstances.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">7. Certificate of Completion</h2>
            <p>A Certificate of Completion may be issued where:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The participant satisfies the attendance requirement;</li>
              <li>Demonstrates professional conduct;</li>
              <li>Completes assigned tasks to a reasonable standard; and</li>
              <li>Is not terminated for misconduct.</li>
            </ul>
            <p>The issuance of certificates remains subject to TIF’s final review.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">8. Letter of Recommendation</h2>
            <p>Letters of Recommendation are not automatically granted.</p>
            <p>A Letter of Recommendation may be issued solely at the discretion of TIF based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance</li>
              <li>Initiative</li>
              <li>Professionalism</li>
              <li>Contribution</li>
              <li>Reliability</li>
            </ul>
            <p>No participant shall possess a contractual entitlement to a Letter of Recommendation.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">9. Confidentiality</h2>
            <p>Participants may receive access to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internal documents</li>
              <li>Research materials</li>
              <li>Client information</li>
              <li>Business strategies</li>
              <li>Contact databases</li>
              <li>Outreach records</li>
              <li>Financial information</li>
              <li>Training materials</li>
              <li>Presentations</li>
              <li>Proprietary methodologies</li>
            </ul>
            <p>All such information shall be treated as strictly confidential.</p>
            <p>
              Participants shall not: copy confidential materials for personal use, share confidential information with third
              parties, publish confidential information, retain confidential information after termination, or use confidential
              information to benefit themselves or others.
            </p>
            <p>Confidentiality obligations shall survive indefinitely following completion or termination of the internship.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">10. Intellectual Property</h2>
            <p>All work produced during the internship shall be the exclusive property of TIF.</p>
            <p>This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reports</li>
              <li>Research</li>
              <li>Databases</li>
              <li>Spreadsheets</li>
              <li>Presentations</li>
              <li>Graphics</li>
              <li>Documents</li>
              <li>Written content</li>
              <li>Templates</li>
              <li>Processes</li>
              <li>Frameworks</li>
              <li>Software</li>
              <li>Marketing materials</li>
            </ul>
            <p>Participants irrevocably assign all rights, title, and interest in such materials to TIF.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">11. Portfolio Rights</h2>
            <p>
              Participants may include work completed during the internship in portfolios, resumes, LinkedIn profiles, and applications only where:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confidential information is removed;</li>
              <li>Client identities are removed unless publicly known;</li>
              <li>Written approval is obtained from TIF.</li>
            </ul>
            <p>TIF may refuse permission where disclosure could harm client interests or organizational interests.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">12. LinkedIn Representation</h2>
            <p>Participants may represent themselves as “Associate Consultant Intern – The Insight Foundry” or any other title officially assigned by TIF.</p>
            <p>Participants shall not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Claim employment status;</li>
              <li>Claim partnership status;</li>
              <li>Represent themselves as authorized spokespersons;</li>
              <li>Make public commitments on behalf of TIF.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">13. Non-Solicitation</h2>
            <p>
              For a period of twelve (12) months following completion or termination of the internship, participants shall not knowingly:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solicit clients introduced through TIF;</li>
              <li>Attempt to divert active projects;</li>
              <li>Recruit or induce current interns to leave TIF for competing initiatives;</li>
              <li>Misappropriate organizational relationships developed through TIF.</li>
            </ul>
            <p>This clause shall not prevent general networking or ordinary professional interactions.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">14. Code of Conduct</h2>
            <p>Participants shall:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Act professionally;</li>
              <li>Respect fellow participants;</li>
              <li>Avoid harassment;</li>
              <li>Avoid discrimination;</li>
              <li>Avoid bullying;</li>
              <li>Maintain professionalism during meetings;</li>
              <li>Comply with lawful instructions.</li>
            </ul>
            <p>Misconduct may result in immediate termination.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">15. Social Media Policy</h2>
            <p>Participants shall not publish internal screenshots, client information, meeting recordings, internal communications, or confidential project details without prior written approval.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">16. Immediate Termination</h2>
            <p>
              TIF may terminate an internship immediately, without notice and without assigning any reason.
            </p>
            <p>Grounds may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Misconduct;</li>
              <li>Inactivity;</li>
              <li>Confidentiality breaches;</li>
              <li>Harassment;</li>
              <li>Dishonesty;</li>
              <li>Misrepresentation;</li>
              <li>Reputational harm;</li>
              <li>Non-performance;</li>
              <li>Organizational restructuring.</li>
            </ul>
            <p>Termination decisions shall be final.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">17. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TIF shall not be liable for indirect losses, consequential losses,
              lost opportunities, academic outcomes, employment outcomes, or career outcomes.
            </p>
            <p>Participation remains voluntary.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">18. Dispute Resolution</h2>
            <p>Any dispute arising from the internship shall first be attempted to be resolved amicably.</p>
            <p>Failing such resolution, the courts of Indore, Madhya Pradesh shall have exclusive jurisdiction.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">19. Contact</h2>
            <p>Official Email: <a href="mailto:theinsightfoundry@gmail.com" className="text-[#2c3e2d] hover:underline">theinsightfoundry@gmail.com</a></p>
            <p>Official Jurisdiction: Indore, Madhya Pradesh</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">20. Acceptance</h2>
            <p>
              By accepting an internship offer, attending onboarding, participating in meetings, accessing organizational
              resources, or performing internship-related activities, the participant acknowledges that they have read,
              understood, and agreed to these Terms and Conditions in their entirety.
            </p>
          </section>

          <div className="mt-10 pt-8 border-t border-gray-200 text-gray-600 text-sm">
            <p>
              Note: This page is intentionally not linked from the main site navigation or footer. It is only accessible via direct URL.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InternshipTerms;
