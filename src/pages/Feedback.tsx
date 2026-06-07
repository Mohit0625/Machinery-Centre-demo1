import { useState } from "react";
import { MessageSquare, CheckCircle } from "lucide-react";

export function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 mb-4">Feedback &amp; Grievance</h1>
          <p className="text-slate-600 text-lg">
            Your feedback helps us modernize our services and enables a better system of trust and reliability.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-sm shadow-xl border border-slate-200 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">Feedback Submitted</h2>
            <p className="text-slate-600 mb-8">
              Thank you! We value your input and will use it to improve our services.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-sm font-bold uppercase text-sm"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-sm shadow-xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Name <span className="text-orange-500">*</span></label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Email <span className="text-orange-500">*</span></label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">How did you hear about us?</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
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
                    <label className="text-sm font-bold text-slate-700 block mb-2">Have you experienced our services?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="experienced" value="Yes" className="text-blue-600 focus:ring-blue-500" required /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="experienced" value="No" className="text-blue-600 focus:ring-blue-500" /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Are you satisfied with our products/services?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="satisfied" value="Yes" className="text-green-600 focus:ring-green-500" required /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input type="radio" name="satisfied" value="No" className="text-red-600 focus:ring-red-500" /> No
                      </label>
                    </div>
                  </div>
                 </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-bold text-slate-700">Message / Comments</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Please share your thoughts or details about any grievance..." />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-sm transition-colors shadow-lg shadow-blue-500/20">
                  Submit Feedback
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
