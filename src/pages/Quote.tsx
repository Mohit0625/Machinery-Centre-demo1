import { useState } from "react";
import { Send, FileText, CheckCircle } from "lucide-react";

export function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-serif uppercase tracking-normal text-slate-900 mb-4">Request a Quote</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Please place your order query here and we will get back to you with the details. Fill your details correctly for further processing.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-sm shadow-xl border border-slate-200 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl font-serif uppercase text-slate-900 mb-4">Quote Request Received</h2>
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Thank you for your enquiry. Our team is reviewing your specifications and will contact you shortly.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-sm shadow-xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-serif italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name <span className="text-orange-500">*</span></label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-orange-500">*</span></label>
                    <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mobile No.</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-serif italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Shipping Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Address Line 1</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Address Line 2</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">City</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">State / Province</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Country</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Zip / Postal Code</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Order Specs */}
              <div>
                <h3 className="text-lg font-serif italic text-slate-900 mb-6 border-b border-slate-200 pb-2">Order Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Item Name / Model No. <span className="text-orange-500">*</span></label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Quantity <span className="text-orange-500">*</span></label>
                    <input required type="number" min="1" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Application Industry</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Paint, Cement..." />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Delivery Instructions</label>
                    <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Other Comments</label>
                    <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">How did you find us?</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors">
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

              <div className="pt-6">
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-[10px] py-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
