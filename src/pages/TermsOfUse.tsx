import { Link } from "react-router-dom";
import { useSEO } from "../utils/useSEO";
import { FileText, Calendar } from "lucide-react";

export function TermsOfUse() {
  useSEO("Terms of Use | Machinery Centre", "Read the terms and conditions governing the use of Machinery Centre's website, product catalogues, and B2B quotation services.");

  return (
    <div className="flex-1 bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-black tracking-tight">Terms and Conditions of Use</h1>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Last Updated: June 17, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Table of Contents - Sticky Sidebar */}
        <div className="lg:w-1/4 shrink-0">
          <div className="sticky top-28 bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-3">Table of Contents</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#introduction" className="hover:text-orange-500 transition-colors">1. Introduction</a></li>
              <li><a href="#purpose" className="hover:text-orange-500 transition-colors">2. Purpose of the Website</a></li>
              <li><a href="#eligibility" className="hover:text-orange-500 transition-colors">3. Eligibility</a></li>
              <li><a href="#user-information" className="hover:text-orange-500 transition-colors">4. User Information</a></li>
              <li><a href="#intellectual-property" className="hover:text-orange-500 transition-colors">5. Intellectual Property Rights</a></li>
              <li><a href="#product-information" className="hover:text-orange-500 transition-colors">6. Product Info & Disclaimers</a></li>
              <li><a href="#prohibited-activities" className="hover:text-orange-500 transition-colors">7. Prohibited Activities</a></li>
              <li><a href="#third-party-links" className="hover:text-orange-500 transition-colors">8. Third-Party Links</a></li>
              <li><a href="#limitation-of-liability" className="hover:text-orange-500 transition-colors">9. Limitation of Liability</a></li>
              <li><a href="#indemnification" className="hover:text-orange-500 transition-colors">10. Indemnification</a></li>
              <li><a href="#privacy" className="hover:text-orange-500 transition-colors">11. Privacy</a></li>
              <li><a href="#force-majeure" className="hover:text-orange-500 transition-colors">12. Force Majeure</a></li>
              <li><a href="#governing-law" className="hover:text-orange-500 transition-colors">13. Governing Law & Jurisdiction</a></li>
              <li><a href="#modifications" className="hover:text-orange-500 transition-colors">14. Modifications</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">15. Contact Information</a></li>
            </ul>
          </div>
        </div>

        {/* Policy Content */}
        <div className="lg:w-3/4 prose prose-slate max-w-none">
          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. INTRODUCTION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern access to and use of the website operated by Machinery Centre, having its corporate office at 3858, Shah Ganj, G.B. Road, Delhi – 110006, India ("Machinery Centre", "Company", "we", "our", or "us").
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing, browsing, or using this Website, downloading any catalogue, brochure, technical document, or otherwise interacting with the Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any provision of these Terms, you should immediately discontinue use of the Website.
            </p>
            <p className="text-slate-600 leading-relaxed">
              These Terms constitute a legally binding agreement between the Company and every visitor, user, customer, prospective customer, vendor, business representative, or other person accessing the Website ("User" or "you").
            </p>
          </section>

          <section id="purpose" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. PURPOSE OF THE WEBSITE</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Website is intended to provide information regarding machinery, equipment, products, services, technical specifications, catalogues, and related business offerings of Machinery Centre.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The information made available on the Website is provided solely for general informational and business purposes and shall not be construed as a binding offer, warranty, guarantee, or contractual commitment unless expressly agreed in writing by the Company.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Company reserves the right to modify, suspend, discontinue, or update any content, product information, specifications, services, or functionality available on the Website without prior notice.
            </p>
          </section>

          <section id="eligibility" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. ELIGIBILITY</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Website is intended for access and use by individuals acting on behalf of businesses, commercial enterprises, organizations, institutions, or other legal entities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using the Website, you represent and warrant that you possess the legal authority to act on behalf of yourself and, where applicable, the organization you represent.
            </p>
          </section>

          <section id="user-information" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. USER INFORMATION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Certain portions of the Website may require Users to provide information including, but not limited to, name, business name, telephone number, email address, and other business-related information in order to access product catalogues, request quotations, or submit inquiries.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You represent and warrant that all information provided by you is accurate, complete, current, and lawfully provided. The Company shall not be responsible for any consequences arising from inaccurate, incomplete, misleading, or unauthorized information submitted by a User.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unless otherwise expressly stated, all content available on the Website, including text, graphics, logos, trademarks, trade names, product descriptions, images, catalogues, brochures, technical documentation, layouts, designs, software, and other materials are the exclusive property of Machinery Centre or its licensors and are protected under applicable intellectual property laws.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              No User shall copy, reproduce, modify, distribute, publish, transmit, display, create derivative works from, reverse engineer, exploit, or otherwise use any content from the Website without the Company's prior written consent.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The downloading of catalogues or technical documents does not transfer any ownership rights or intellectual property rights to the User.
            </p>
          </section>

          <section id="product-information" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. PRODUCT INFORMATION AND DISCLAIMERS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company endeavors to ensure that information relating to products, machinery, specifications, capacities, dimensions, pricing, availability, performance, and technical details is accurate at the time of publication.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              However, all such information is subject to change without notice and may contain typographical, technical, or clerical errors.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nothing contained on the Website shall constitute a warranty, representation, guarantee, or commitment regarding the suitability, performance, availability, merchantability, or fitness of any machinery or equipment for a particular purpose.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any purchase of products shall be governed exclusively by separate quotations, purchase orders, invoices, contracts, warranties, or other written agreements executed between the parties.
            </p>
          </section>

          <section id="prohibited-activities" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">7. PROHIBITED ACTIVITIES</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Users shall not:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
              <li>Use the Website for any unlawful purpose;</li>
              <li>Attempt to gain unauthorized access to any part of the Website, servers, databases, or networks;</li>
              <li>Introduce viruses, malware, malicious code, or harmful software;</li>
              <li>Interfere with the operation, security, or functionality of the Website;</li>
              <li>Copy, scrape, harvest, or extract information from the Website through automated means;</li>
              <li>Misrepresent their identity or affiliation;</li>
              <li>Engage in any activity that may damage the reputation, operations, or interests of the Company.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              The Company reserves the right to restrict or terminate access to any User found to be in violation of these Terms.
            </p>
          </section>

          <section id="third-party-links" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">8. THIRD-PARTY LINKS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Website may contain links to third-party websites, platforms, or services for convenience and informational purposes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company neither controls nor endorses such third-party websites and shall not be responsible for their content, security, privacy practices, products, services, or operations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Access to any third-party website shall be entirely at the User's own risk.
            </p>
          </section>

          <section id="limitation-of-liability" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">9. LIMITATION OF LIABILITY</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the fullest extent permitted under applicable law, Machinery Centre, its proprietors, partners, directors, employees, agents, representatives, affiliates, and service providers shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, or economic losses arising out of or relating to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
              <li>Access to or use of the Website;</li>
              <li>Reliance upon information contained on the Website;</li>
              <li>Temporary or permanent interruption of Website services;</li>
              <li>Errors, inaccuracies, omissions, or delays in information;</li>
              <li>Unauthorized access to data;</li>
              <li>Viruses, malware, or other harmful components;</li>
              <li>Any business loss, loss of profits, loss of opportunity, or loss of goodwill.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              The Website and all content therein are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section id="indemnification" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">10. INDEMNIFICATION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Machinery Centre and its officers, employees, representatives, affiliates, agents, and service providers from and against any claims, actions, proceedings, losses, liabilities, damages, costs, expenses, and legal fees arising from or relating to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Your use of the Website;</li>
              <li>Violation of these Terms;</li>
              <li>Violation of applicable laws;</li>
              <li>Infringement of third-party rights; or</li>
              <li>Submission of false, inaccurate, or unauthorized information.</li>
            </ul>
          </section>

          <section id="privacy" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">11. PRIVACY</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The collection, storage, processing, and use of personal information submitted through the Website shall be governed by the Company's Privacy Policy, which forms an integral part of these Terms and Conditions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using the Website, you acknowledge and agree to the Company's Privacy Policy.
            </p>
          </section>

          <section id="force-majeure" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">12. FORCE MAJEURE</h2>
            <p className="text-slate-600 leading-relaxed">
              The Company shall not be liable for any delay, interruption, failure, or inability to perform obligations arising from events beyond its reasonable control, including acts of God, natural disasters, governmental actions, war, cyberattacks, power failures, internet disruptions, labor disputes, pandemics, or other force majeure events.
            </p>
          </section>

          <section id="governing-law" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">13. GOVERNING LAW AND JURISDICTION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any dispute, controversy, or claim arising out of or relating to these Terms or the use of the Website shall be subject to the exclusive jurisdiction of the competent courts located in Delhi, India.
            </p>
          </section>

          <section id="modifications" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">14. MODIFICATIONS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company reserves the right to amend, modify, revise, or update these Terms at any time without prior notice.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any revised version shall become effective immediately upon publication on the Website. Continued use of the Website following such publication shall constitute acceptance of the revised Terms.
            </p>
          </section>

          <section id="contact" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">15. CONTACT INFORMATION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For any questions regarding these Terms and Conditions, please contact:
            </p>
            <div className="bg-slate-100 p-6 rounded-sm border border-slate-200 mt-4">
              <h3 className="font-bold text-slate-900 mb-2">Machinery Centre</h3>
              <p className="text-slate-700">3858, Shah Ganj, G.B. Road, Delhi – 110006, India</p>
              <div className="mt-4 space-y-1">
                <p className="text-slate-700"><span className="font-medium">Telephone:</span> +91-11-41440012</p>
                <p className="text-slate-700"><span className="font-medium">Mobile:</span> +91-9810054137 / +91-9891155438</p>
                <p className="text-slate-700"><span className="font-medium">Email:</span> <a href="mailto:machinerycentre@yahoo.com" className="text-orange-600 hover:underline">machinerycentre@yahoo.com</a></p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-bold text-orange-500 hover:text-orange-600 tracking-wider uppercase">
              &uarr; Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
