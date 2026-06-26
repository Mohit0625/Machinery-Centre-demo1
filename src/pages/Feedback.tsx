import { useState } from "react";
import { MessageSquare, CheckCircle } from "lucide-react";
import { isValidEmail } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { useJsonLd, breadcrumbSchema } from "../utils/seo";
import { sendLead, nowInIST } from "../utils/leadForm";

export function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", source: "", experienced: "", satisfied: "", message: "", consentTerms: false, botcheck: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useSEO("Customer Feedback & Grievance | Machinery Centre Delhi", "Share your feedback or raise a grievance with Machinery Centre, Delhi. Help us improve our compressor, pump and after-sales service across Delhi NCR.", { canonical: "/feedback" });
  useJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Feedback", path: "/feedback" }]));

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
    
    if (!formData.experienced) { newErrors.experienced = "Please select an option"; hasErrors = true; }
    if (!formData.satisfied) { newErrors.satisfied = "Please select an option"; hasErrors = true; }

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
        subject: `Feedback from ${formData.name.trim()}`,
        replyTo: formData.email.trim(),
        botcheck: formData.botcheck,
        fields: {
          "Customer Name": formData.name.trim(),
          Email: formData.email.trim(),
          "Heard About Us Via": formData.source || "Not specified",
          "Experienced Our Services": formData.experienced,
          "Satisfied With Us": formData.satisfied,
          Message: formData.message.trim() || "No additional comments",
          Consent: formData.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
        },
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Feedback form submission failed:", err);
      setIsSubmitting(false);
      setSubmitError("Couldn't submit your feedback right now — please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center py-20 sm:py-28">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Feedback</h1>
          <p className="text-slate-600 text-lg">
            Your feedback helps us modernize our services and enables a better system of trust and reliability.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-sm shadow-xl border border-slate-200 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-slate-900 mb-4">Feedback Submitted</h2>
            <p className="text-slate-600 mb-8">
              Thank you! We value your input and will use it to improve our services.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", source: "", experienced: "", satisfied: "", message: "", consentTerms: false, botcheck: "" });
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-sm text-sm"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-sm shadow-xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              
              <div className="space-y-2">
                <label className="text-sm text-slate-700">Your Name <span className="text-orange-500">*</span></label>
                <input name="name" value={formData.name} onChange={handleChange} type="text" className={`w-full bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-700">Your Email <span className="text-orange-500">*</span></label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-700">How did you hear about us?</label>
                <select name="source" value={formData.source} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors custom-select">
                  <option value="">Select an option</option>
                  <option value="Friend">Friend</option>
                  <option value="TV">TV</option>
                  <option value="Radio">Radio</option>
                  <option value="Newspaper">Newspaper</option>
                  <option value="Ad">Advertisement</option>
                  <option value="Internet">Internet Search</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="border-t border-slate-200 pt-6">
                 <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-700 block mb-2">Have you experienced our services? <span className="text-orange-500">*</span></label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="experienced" value="Yes" checked={formData.experienced === 'Yes'} onChange={handleChange} className="text-orange-600 focus:ring-orange-500" /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="experienced" value="No" checked={formData.experienced === 'No'} onChange={handleChange} className="text-orange-600 focus:ring-orange-500" /> No
                      </label>
                    </div>
                    {errors.experienced && <p className="text-red-500 text-xs mt-1">{errors.experienced}</p>}
                  </div>

                  <div>
                    <label className="text-sm text-slate-700 block mb-2">Are you satisfied with our products/services? <span className="text-orange-500">*</span></label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="satisfied" value="Yes" checked={formData.satisfied === 'Yes'} onChange={handleChange} className="text-green-600 focus:ring-green-500" /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="satisfied" value="No" checked={formData.satisfied === 'No'} onChange={handleChange} className="text-red-600 focus:ring-red-500" /> No
                      </label>
                    </div>
                    {errors.satisfied && <p className="text-red-500 text-xs mt-1">{errors.satisfied}</p>}
                  </div>
                 </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm text-slate-700">Message / Comments</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Please share your thoughts or details about any grievance..." />
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

              <div className="pt-4">
                <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] py-4 rounded-full flex items-center justify-center gap-2 transition-colors uppercase disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
