import { Link } from "react-router-dom";
import { useSEO } from "../utils/useSEO";
import { ShieldCheck, Calendar } from "lucide-react";

export function PrivacyPolicy() {
  useSEO("Privacy Policy | Machinery Centre", "Learn how Machinery Centre collects, uses, and protects your personal data in compliance with the DPDP Act, 2023.");

  return (
    <div className="flex-1 bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
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
              <li><a href="#information-collected" className="hover:text-orange-500 transition-colors">2. Nature of Information Collected</a></li>
              <li><a href="#purpose-of-processing" className="hover:text-orange-500 transition-colors">3. Purpose of Processing</a></li>
              <li><a href="#consent" className="hover:text-orange-500 transition-colors">4. Consent</a></li>
              <li><a href="#disclosure-of-data" className="hover:text-orange-500 transition-colors">5. Disclosure of Personal Data</a></li>
              <li><a href="#data-retention" className="hover:text-orange-500 transition-colors">6. Data Retention</a></li>
              <li><a href="#data-security" className="hover:text-orange-500 transition-colors">7. Data Security</a></li>
              <li><a href="#rights" className="hover:text-orange-500 transition-colors">8. Rights of Data Principals</a></li>
              <li><a href="#cookies" className="hover:text-orange-500 transition-colors">9. Cookies & Tracking</a></li>
              <li><a href="#grievance" className="hover:text-orange-500 transition-colors">10. Grievance Redressal</a></li>
              <li><a href="#amendments" className="hover:text-orange-500 transition-colors">11. Amendments</a></li>
              <li><a href="#contact-details" className="hover:text-orange-500 transition-colors">Contact Details</a></li>
            </ul>
          </div>
        </div>

        {/* Policy Content */}
        <div className="lg:w-3/4 prose prose-slate max-w-none">
          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. INTRODUCTION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This Privacy Policy ("Policy") sets forth the manner in which Machinery Centre, a company engaged in the business of marketing, distribution, sale, installation, and servicing of industrial machinery and equipment ("Company", "we", "our" or "us"), collects, receives, stores, processes, uses, discloses, transfers, and otherwise handles Personal Data of individuals who access, browse, interact with, or submit information through the Company's website ("Website").
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company recognizes the importance of privacy and is committed to ensuring that Personal Data is processed in a lawful, fair, transparent, and secure manner in accordance with the provisions of the Digital Personal Data Protection Act, 2023, together with any rules, regulations, notifications, amendments, or statutory modifications issued thereunder from time to time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the Website, submitting any information through the Website, downloading product catalogues, requesting quotations, making inquiries, or otherwise interacting with the Company through digital channels, you acknowledge that you have read, understood, and agreed to the terms of this Policy.
            </p>
          </section>

          <section id="information-collected" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. NATURE OF INFORMATION COLLECTED</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In the course of providing access to machinery catalogues, technical documentation, quotations, demonstrations, customer support, and related business communications, the Company may collect certain Personal Data directly from you.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Such Personal Data may include, without limitation, your name, business email address, telephone number, mobile number, company or organization name, designation, business address, industry sector, details of products or machinery in which you have expressed interest, and any other information voluntarily provided by you through forms, inquiries, correspondence, or other interactions with the Website.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company may additionally collect certain technical information automatically through the operation of the Website, including internet protocol (IP) address, browser type, operating system, device identifiers, access times, referring URLs, pages visited, and other usage-related information necessary for security, analytics, and operational purposes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Company does not intentionally collect any sensitive personal information unless specifically required by applicable law or voluntarily provided by the data principal for a legitimate business purpose.
            </p>
          </section>

          <section id="purpose-of-processing" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. PURPOSE OF PROCESSING</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Personal Data collected by the Company shall be processed solely for lawful purposes connected with the Company's business activities and operations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Without limitation, such purposes may include providing access to machinery catalogues and product literature; responding to inquiries and requests for information; preparing quotations and commercial proposals; evaluating business requirements; facilitating communications between the Company and prospective or existing customers; conducting marketing and promotional activities relating to the Company's products and services; improving the functionality, performance, and security of the Website; maintaining business records; complying with contractual obligations; and fulfilling legal, regulatory, or statutory requirements.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Company shall process Personal Data only to the extent reasonably necessary for achieving the purposes for which such data was collected.
            </p>
          </section>

          <section id="consent" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. CONSENT</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Where required under applicable law, the Company shall process Personal Data on the basis of consent provided by the data principal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By voluntarily submitting Personal Data through the Website, you expressly consent to the collection, storage, processing, use, disclosure, and retention of such information for the purposes specified in this Policy.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may withdraw your consent at any time by submitting a written request to the Company using the contact details provided herein. Withdrawal of consent shall not affect the lawfulness of any processing undertaken prior to such withdrawal and may impact the Company's ability to provide certain services, information, or business communications requested by you.
            </p>
          </section>

          <section id="disclosure-of-data" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. DISCLOSURE OF PERSONAL DATA</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company does not sell, lease, rent, trade, or otherwise commercially exploit Personal Data.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              However, the Company may disclose Personal Data to its employees, affiliates, service providers, consultants, technology partners, hosting providers, customer relationship management service providers, legal advisors, auditors, or other authorized third parties where such disclosure is reasonably necessary for the performance of legitimate business functions or compliance with applicable law.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company may further disclose Personal Data where such disclosure is required pursuant to any law, regulation, court order, governmental directive, regulatory requirement, or lawful request issued by a competent authority.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any recipient of Personal Data shall be required to maintain appropriate standards of confidentiality and data protection consistent with applicable legal requirements.
            </p>
          </section>

          <section id="data-retention" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. DATA RETENTION</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company shall retain Personal Data only for such period as may be reasonably necessary to fulfill the purpose for which such data was collected, to maintain legitimate business records, to resolve disputes, to enforce legal rights, or to comply with statutory, regulatory, tax, accounting, or contractual obligations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Upon expiry of the applicable retention period, Personal Data shall be deleted, anonymized, archived, or otherwise disposed of in a secure manner consistent with applicable law and industry practices.
            </p>
          </section>

          <section id="data-security" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">7. DATA SECURITY</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company adopts commercially reasonable technical, organizational, administrative, and physical safeguards designed to protect Personal Data against unauthorized access, disclosure, alteration, misuse, destruction, loss, or accidental damage.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Such safeguards may include access controls, password protection, encryption technologies, network security measures, secure hosting environments, periodic audits, and other security practices deemed appropriate having regard to the nature of the information being processed.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Notwithstanding the foregoing, no method of transmission over the internet or electronic storage mechanism can be guaranteed to be entirely secure, and accordingly the Company cannot warrant or guarantee absolute security.
            </p>
          </section>

          <section id="rights" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">8. RIGHTS OF DATA PRINCIPALS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Subject to the provisions of applicable law, including the Digital Personal Data Protection Act, 2023, individuals whose Personal Data is processed by the Company may have the right to seek access to their Personal Data, request correction or updating of inaccurate information, request erasure of Personal Data, withdraw consent where processing is based on consent, nominate another individual to exercise rights on their behalf in accordance with law, and seek redressal of grievances relating to the processing of Personal Data.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Requests concerning the exercise of such rights may be submitted to the Company's Grievance Officer through the contact details provided below.
            </p>
          </section>

          <section id="cookies" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">9. COOKIES AND TRACKING TECHNOLOGIES</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Website may utilize cookies, web beacons, analytics tools, and similar technologies for purposes including authentication, security, performance monitoring, traffic analysis, user experience enhancement, and operational efficiency.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By continuing to use the Website, you acknowledge and agree to the use of such technologies unless disabled through your browser settings. Certain features of the Website may not function properly if cookies are disabled.
            </p>
          </section>

          <section id="grievance" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">10. GRIEVANCE REDRESSAL</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In accordance with applicable law, any grievance, complaint, request, or concern relating to the processing of Personal Data may be addressed to:
            </p>
            <div className="bg-slate-100 p-6 rounded-sm border border-slate-200">
              <p className="font-bold text-slate-900">Grievance Officer</p>
              <p className="text-slate-700">Machinery Centre</p>
              <p className="text-slate-700 mt-2">Email: <a href="mailto:machinerycentre@yahoo.com" className="text-orange-600 hover:underline">machinerycentre@yahoo.com</a></p>
              <p className="text-slate-700 mt-2">Phone: +91-9810054137, +91-9891155438</p>
              <p className="text-slate-700 mt-2">Registered Office Address: 3858, Shah Ganj, G.B. Road, Delhi – 110006, India</p>
            </div>
            <p className="text-slate-600 leading-relaxed mt-4">
              The Company shall endeavor to acknowledge and address grievances within the timelines prescribed under applicable law.
            </p>
          </section>

          <section id="amendments" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-black text-slate-900 mb-4">11. AMENDMENTS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Company reserves the right, at its sole discretion, to amend, modify, revise, or update this Policy from time to time in order to reflect changes in legal requirements, regulatory obligations, business operations, or technological developments.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any revised version of this Policy shall become effective upon publication on the Website unless otherwise stated. Continued access to or use of the Website following such publication shall constitute acceptance of the revised Policy.
            </p>
          </section>

          <section id="contact-details" className="mb-12 scroll-mt-32 border-t-2 border-slate-200 pt-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">GRIEVANCE REDRESSAL AND CONTACT DETAILS</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In accordance with applicable laws, including the Digital Personal Data Protection Act, 2023, any request, grievance, complaint, concern, or query relating to the collection, processing, storage, use, disclosure, correction, or deletion of Personal Data may be addressed to the Company through the contact details provided below:
            </p>
            <div className="bg-slate-100 p-6 rounded-sm border border-slate-200 mt-4">
              <h3 className="font-bold text-slate-900 mb-2">Machinery Centre</h3>
              <p className="text-slate-700 font-medium">Corporate Office:</p>
              <p className="text-slate-700">3858, Shah Ganj, G.B. Road,</p>
              <p className="text-slate-700">Delhi – 110006, India</p>
              <div className="mt-4 space-y-1">
                <p className="text-slate-700"><span className="font-medium">Telephone:</span> +91-11-41440012</p>
                <p className="text-slate-700"><span className="font-medium">Mobile:</span> +91-9810054137, +91-9891155438</p>
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
