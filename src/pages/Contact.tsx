import { useState } from "react";
import { Mail, MapPin, PhoneCall, Send, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const isRepairQuery = new URLSearchParams(location.search).get('type') === 'repair';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex-1 bg-slate-50">
       <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl text-lg">We are here to assist you with any inquiries or support.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-slate-900 h-full">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-8">Get In Touch</h2>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-1">Office Location</h4>
                    <p className="text-slate-800 font-medium">3858, SHAH GANJ, G.B. ROAD,<br />DELHI-6</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-1">Phone</h4>
                    <p className="text-slate-800 font-medium">23214983</p>
                    <p className="text-slate-800 font-medium mt-1">TELEFAX: 23210012</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded text-orange-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-1">Email</h4>
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
                <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">Message Sent</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  Thank you for reaching out. We will contact you back within 1-2 business days.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-sm font-bold uppercase text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-slate-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">Send us a Message</h3>
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
                      <label className="text-sm font-bold text-slate-700">First and Last Name <span className="text-orange-500">*</span></label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">E-Mail Address <span className="text-orange-500">*</span></label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Contact No.</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Mobile No. <span className="text-orange-500">*</span></label>
                      <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700">Message <span className="text-orange-500">*</span></label>
                      <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder={isRepairQuery ? "Please describe your machinery problem here..." : "How can we help you?"} />
                    </div>
                  </div>

                  <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
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
