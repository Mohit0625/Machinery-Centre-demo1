import { useState, useRef } from "react";
import { Briefcase, Send, CheckCircle, Upload } from "lucide-react";
import { isValidIndianPhone, isValidEmail } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { sendLead, nowInIST } from "../utils/leadForm";

export function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    about: "", 
    cvFileName: "",
    consentTerms: false, 
    botcheck: "" 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useSEO(
    "Careers | Machinery Centre",
    "Join the Machinery Centre team. We are always looking for passionate and driven individuals to help us build the future of industrial solutions."
  );

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
        subject: `Career Application from ${formData.name.trim()}`,
        replyTo: formData.email.trim(),
        botcheck: formData.botcheck,
        fields: {
          "Enquiry Type": "Job Application",
          "Applicant Name": formData.name.trim(),
          Email: formData.email.trim(),
          Phone: formData.phone.trim(),
          "About Applicant": formData.about.trim() || "Not provided",
          "CV Attached": formData.cvFileName ? `Yes (File: ${formData.cvFileName})` : "No",
          Consent: formData.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
        },
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Career form submission failed:", err);
      setIsSubmitting(false);
      setSubmitError("Couldn't submit your application right now — please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, cvFileName: e.target.files![0].name }));
    }
  };

  return (
    <div className="flex-1 bg-slate-50">
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4 tracking-tight">Careers</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Join the Machinery Centre team and be a part of our 25+ years legacy of serving the Indian industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-slate-900 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-black text-slate-900">Join Our Team</h2>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Machinery Centre, we are always on the lookout for talented, passionate, and driven individuals to help us build the future of industrial solutions.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                If you are looking for a challenging and rewarding career, we encourage you to submit your details and CV. Our hiring team reviews all applications.
              </p>

              <div className="bg-orange-50 border border-orange-100 p-4 rounded text-sm text-slate-700">
                <strong>Note:</strong> While we try to respond to all applicants, high volumes of applications may cause delays.
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white p-12 rounded-sm shadow-sm border border-slate-200 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h2 className="text-2xl font-black text-slate-900 mb-4">Application Sent</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  Thank you for your interest in joining Machinery Centre! Our team will review your application and get back to you if your profile matches our requirements.
                </p>
              </div>
            ) : (
              <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-slate-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Submit Your Application</h3>
                  <p className="text-slate-600">Please provide your details below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">Full Name <span className="text-orange-500">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange} type="text" className={`w-full bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} placeholder="Jane Doe" />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">E-Mail Address <span className="text-orange-500">*</span></label>
                      <input name="email" value={formData.email} onChange={handleChange} type="email" className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} placeholder="jane@example.com" />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700">Contact Number <span className="text-orange-500">*</span></label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} placeholder="+91 9876543210" />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700">About Yourself <span className="text-slate-400 text-xs font-normal">(Optional)</span></label>
                      <textarea name="about" value={formData.about} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Tell us a little about your background and why you want to join us..." />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700 block">CV / Resume <span className="text-slate-400 text-xs font-normal">(Optional)</span></label>
                      <div 
                        className="w-full border-2 border-dashed border-slate-200 rounded-lg p-6 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-8 h-8 text-slate-400 mb-2" />
                        <span className="text-sm text-slate-600">
                          {formData.cvFileName ? formData.cvFileName : "Click to attach your CV (PDF, DOCX)"}
                        </span>
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </div>
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
                    {isSubmitting ? "Submitting..." : <>Submit Application <Send className="w-4 h-4" /></>}
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
