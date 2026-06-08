import { useState } from "react";
import { Mail, MapPin, PhoneCall, Send, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

import { isValidIndianPhone, isValidEmail } from "../utils/validation";
import { useSEO } from "../utils/useSEO";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const isRepairQuery = new URLSearchParams(location.search).get('type') === 'repair';
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", mobile: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useSEO(
    isRepairQuery ? "Industrial Machinery Repair & OEM Spares | Machinery Centre" : "Contact Machinery Centre | Industrial Equipment Suppliers",
    isRepairQuery ? "Expert industrial machinery repair and maintenance services. We provide genuine OEM spares for packaging, cement, and paint industry compressors and pumps." : "Get in touch with Machinery Centre. We are here to assist you with inquiries, sales, and support for all your industrial pump and compressor needs."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!formData.name.trim()) { newErrors.name = "Required"; hasErrors = true; }
    
    if (!formData.email.trim()) { 
      newErrors.email = "Required"; hasErrors = true; 
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address"; hasErrors = true;
    }

    if (!formData.mobile.trim()) { 
      newErrors.mobile = "Required"; hasErrors = true; 
    } else if (!isValidIndianPhone(formData.mobile)) {
      newErrors.mobile = "Invalid Indian mobile"; hasErrors = true;
    }

    if (formData.contact.trim() && !isValidIndianPhone(formData.contact)) {
      newErrors.contact = "Invalid phone format"; hasErrors = true;
    }

    if (!formData.message.trim()) { newErrors.message = "Required"; hasErrors = true; }

    setErrors(newErrors);

    if (!hasErrors) {
      setTimeout(() => {
        setSubmitted(true);
      }, 800);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex-1 bg-slate-50">
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 tracking-tight">
            {isRepairQuery ? "Industrial Machinery Repair & Maintenance Services" : "Contact Machinery Centre"}
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            {isRepairQuery ? "Expert service, routine maintenance, and genuine OEM spares for your equipment." : "We are here to assist you with any inquiries, sales, or support."}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
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
                    <p className="text-slate-800 font-medium">3858, SHAH GANJ, G.B. ROAD,<br />DELHI-6</p>
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
                  onClick={() => setSubmitted(false)}
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
                      <label className="text-sm text-slate-700">Contact No.</label>
                      <input name="contact" value={formData.contact} onChange={handleChange} type="tel" className={`w-full bg-slate-50 border ${errors.contact ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                      {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">Mobile No. <span className="text-orange-500">*</span></label>
                      <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" className={`w-full bg-slate-50 border ${errors.mobile ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} />
                      {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700">Company Name</label>
                      <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-slate-700">Message <span className="text-orange-500">*</span></label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`} placeholder={isRepairQuery ? "Please describe your machinery problem here..." : "How can we help you?"} />
                      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    </div>
                  </div>

                  <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors w-full sm:w-auto uppercase">
                    Submit Message <Send className="w-4 h-4" />
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
