import { useState } from "react";
import { Send, FileText, CheckCircle } from "lucide-react";
import { isValidIndianPhone } from "../utils/validation";
import { sendLead, nowInIST } from "../utils/leadForm";
export function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "",
    address1: "", address2: "", city: "", state: "", country: "", zip: "",
    item: "", quantity: "", industry: "", instructions: "", comments: "", source: "",
    consentTerms: false, botcheck: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!formData.firstName.trim()) { newErrors.firstName = "Required"; hasErrors = true; }
    
    if (!formData.phone.trim()) { 
      newErrors.phone = "Required"; hasErrors = true; 
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = "Invalid Indian mobile"; hasErrors = true;
    }



    if (!formData.item.trim()) { newErrors.item = "Required"; hasErrors = true; }
    
    if (!formData.quantity || Number(formData.quantity) < 1) {
      newErrors.quantity = "Invalid"; hasErrors = true;
    }

    if (!formData.consentTerms) {
      newErrors.consentTerms = "You must agree to the Terms of Use and Privacy Policy"; hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) return;

    setSubmitError("");
    setIsSubmitting(true);

    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
    const address = [formData.address1, formData.address2, formData.city, formData.state, formData.country, formData.zip]
      .map((p) => p.trim())
      .filter(Boolean)
      .join(", ");

    try {
      await sendLead({
        inbox: "general",
        subject: `Quote request: ${formData.item.trim()} ×${formData.quantity} — ${fullName}`,
        botcheck: formData.botcheck,
        fields: {
          "Customer Name": fullName,
          Phone: formData.phone.trim(),
          "Item / Model": formData.item.trim(),
          Quantity: formData.quantity,
          "Application Industry": formData.industry.trim() || "Not specified",
          "Shipping Address": address || "Not provided",
          "Delivery Instructions": formData.instructions.trim() || "None",
          "Other Comments": formData.comments.trim() || "None",
          "Heard About Us Via": formData.source || "Not specified",
          Consent: formData.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
        },
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Quote form submission failed:", err);
      setIsSubmitting(false);
      setSubmitError("Couldn't submit your enquiry right now — please try again, or call us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center py-20 sm:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl text-slate-900 mb-4">Request a Quote</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Please place your order query here and we will get back to you with the details. Fill your details correctly for further processing.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-sm shadow-xl border border-slate-200 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl text-slate-900 mb-4">Quote Request Received</h2>
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Thank you for your enquiry. Our team is reviewing your specifications and will contact you shortly.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: "", lastName: "", phone: "",
                  address1: "", address2: "", city: "", state: "", country: "", zip: "",
                  item: "", quantity: "", industry: "", instructions: "", comments: "", source: "", consentTerms: false, botcheck: ""
                });
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full text-[10px] tracking-widest"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-sm shadow-xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              
              {/* Personal Info */}
              <div>
                <h3 className="text-lg italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">First Name <span className="text-orange-500">*</span></label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className={`w-full bg-slate-50 border ${errors.firstName ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Phone Number <span className="text-orange-500">*</span></label>
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>

                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Shipping Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Address Line 1</label>
                    <input name="address1" value={formData.address1} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Address Line 2</label>
                    <input name="address2" value={formData.address2} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">City</label>
                    <input name="city" value={formData.city} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">State / Province</label>
                    <input name="state" value={formData.state} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">Country</label>
                    <input name="country" value={formData.country} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">Zip / Postal Code</label>
                    <input name="zip" value={formData.zip} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Order Specs */}
              <div>
                <h3 className="text-lg italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Order Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Item Name / Model No. <span className="text-orange-500">*</span></label>
                    <input name="item" value={formData.item} onChange={handleChange} type="text" className={`w-full bg-slate-50 border ${errors.item ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                    {errors.item && <p className="text-red-500 text-xs">{errors.item}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">Quantity <span className="text-orange-500">*</span></label>
                    <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" min="1" className={`w-full bg-slate-50 border ${errors.quantity ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                    {errors.quantity && <p className="text-red-500 text-xs">{errors.quantity}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700">Application Industry</label>
                    <input name="industry" value={formData.industry} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Paint, Cement..." />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Delivery Instructions</label>
                    <textarea name="instructions" value={formData.instructions} onChange={handleChange} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">Other Comments</label>
                    <textarea name="comments" value={formData.comments} onChange={handleChange} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-700">How did you find us?</label>
                    <select name="source" value={formData.source} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors custom-select">
                      <option value="">Select an option</option>
                      <option value="Person">Person</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Visiting Card">Visiting Card</option>
                      <option value="Past Customer">Past Customer</option>
                      <option value="Other">Other</option>
                    </select>
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

              <div className="pt-6">
                <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] py-4 rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : <>Submit Enquiry <Send className="w-4 h-4" /></>}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
