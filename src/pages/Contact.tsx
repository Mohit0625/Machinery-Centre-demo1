import { useState } from "react";
import { Mail, MapPin, PhoneCall, Send, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

import { isValidIndianPhone, isValidEmail } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { useJsonLd, breadcrumbSchema } from "../utils/seo";
import { sendLead, nowInIST } from "../utils/leadForm";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const isRepairQuery = new URLSearchParams(location.search).get('type') === 'repair';
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "", consentTerms: false, botcheck: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useSEO(
    isRepairQuery ? "Air Compressor & Pump Repair & AMC in Delhi NCR" : "Contact Machinery Centre | Compressor & Pump Dealer Delhi",
    isRepairQuery ? "Expert air compressor & pump repair, AMC and genuine OEM spares in Delhi NCR. Fast on-site service for packaging, cement, paint and textile plants." : "Contact Machinery Centre, an air compressor & pump dealer in Old Delhi. Call 011-41440012 or WhatsApp for sales, spares, repair & AMC across Delhi NCR.",
    { canonical: "/contact" }
  );
  useJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: isRepairQuery ? "Repair & Service" : "Contact", path: "/contact" }]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!formData.name.trim()) { newErrors.name = "Required"; hasErrors = true; }
    
    if (!formData.email.trim()) { 
      newErrors.email = "Required"; hasErrors = true; 
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address"; hasErrors = true;
    }

    if (!formData.phone.trim()) { 
      newErrors.phone = "Required"; hasErrors = true; 
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = "Invalid Indian mobile"; hasErrors = true;
    }

    if (!formData.message.trim()) { newErrors.message = "Required"; hasErrors = true; }

    if (!formData.consentTerms) {
      newErrors.consentTerms = "You must agree to the Terms of Use and Privacy Policy"; hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) return;

    setSubmitError("");
    setIsSubmitting(true);

    try {
      await sendLead({
        inbox: "general",
        subject: `${isRepairQuery ? "Repair enquiry" : "Contact enquiry"} from ${formData.name.trim()}`,
        replyTo: formData.email.trim(),
        botcheck: formData.botcheck,
        fields: {
          "Enquiry Type": isRepairQuery ? "Repair / Service" : "General Contact",
          "Customer Name": formData.name.trim(),
          Email: formData.email.trim(),
          Phone: formData.phone.trim(),
          Company: formData.company.trim() || "Not provided",
          Message: formData.message.trim(),
          Consent: formData.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
        },
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setIsSubmitting(false);
      setSubmitError("Couldn't send your message right now — please try again, or call us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex-1 bg-slate-50">
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4 tracking-tight">
            {isRepairQuery ? "Air Compressor & Pump Repair & Maintenance Services" : "Contact Machinery Centre — Air Compressor & Industrial Pump Dealer in Delhi"}
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            {isRepairQuery ? "Expert service, routine maintenance, and genuine OEM spares for your equipment." : "We are here to assist you with any inquiries, sales, or support."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-slate-900 h-full">
              <h2 className="text-2xl font-black text-slate-900 mb-8">Get In Touch</h2>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest text-slate-500 mb-1">Office Location</h4>
                    <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shradhanand+Marg,+Shah+Ganj,+Behind+Hanuman+Mandir,+Delhi-110006" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-medium hover:text-orange-600 hover:underline transition-colors cursor-pointer block">
                      3858 SHRADHANAND MARG, SHAH GANJ,<br />BEHIND HANUMAN MANDIR, DELHI-110006
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest text-slate-500 mb-1">Telephone</h4>
                    <p className="text-slate-800 font-medium">011-41440012</p>
                    <h4 className="text-sm tracking-widest text-slate-500 mb-1 mt-4">Mobile No.</h4>
                    <p className="text-slate-800 font-medium">9810054137</p>
                    <p className="text-slate-800 font-medium mt-1">9891155438</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest text-slate-500 mb-1">Email</h4>
                    <p className="text-orange-600 font-medium">machinerycentre@yahoo.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white p-12 rounded-sm shadow-sm border border-slate-200 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h2 className="text-2xl font-black text-slate-900 mb-4">Message Sent</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  Thank you for reaching out. We will contact you back within 1-2 business days.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", message: "", consentTerms: false, botcheck: "" }); setErrors({}); }}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full text-[10px] tracking-widest uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-slate-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-600">Please fill up the form below and we'll be contacting you back within 1-2 business days.</p>
                  {isRepairQuery && (
                    <div className="mt-4 bg-orange-50 border border-orange-200 text-orange-800 px-4 py-3 rounded text-sm">
                      <strong>Note:</strong> We noticed you arrived from the Repairs section. Please start your message with a brief of your technical problem to ensure priority handling.
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">First and Last Name <span className="text-orange-500">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange} type="text" className={`w-full bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">E-Mail Address <span className="text-orange-500">*</span></label>
                      <input name="email" value={formData.email} onChange={handleChange} type="email" className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">Phone Number <span className="text-orange-500">*</span></label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">Company Name</label>
                      <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700">Message <span className="text-orange-500">*</span></label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} placeholder={isRepairQuery ? "Please describe your machinery problem here..." : "How can we help you?"} />
                      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="consentTerms"
                        checked={formData.consentTerms as boolean} 
                        onChange={handleChange}
                        className="w-4 h-4 shrink-0 text-orange-600 bg-slate-50 border-slate-300 rounded focus:ring-orange-500 cursor-pointer accent-orange-500"
                      />
                      <div className="text-sm text-slate-600 leading-tight">
                        I have read and agree to the <a href="/terms-of-use" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">Terms of Use</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">Privacy Policy</a>. <span className="text-orange-500">*</span>
                      </div>
                    </label>
                    {errors.consentTerms && <p className="text-red-500 text-xs ml-7">{errors.consentTerms}</p>}
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-100 rounded p-3">{submitError}</p>
                  )}

                  <button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors w-full uppercase disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : <>Submit Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
