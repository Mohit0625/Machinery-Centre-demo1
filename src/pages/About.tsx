import { Building2, History, Target } from "lucide-react";

export function About() {
  return (
    <div className="flex-1 bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">About Us</h1>
          <p className="text-slate-400 max-w-2xl text-lg">A legacy of trust, expertise, and commitment to the Indian industrial sector.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Our History</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Machinery Centre came into existence in November, 1987 after its parent company, 
                  <strong> Gulson Engineering Company</strong>, decided to diversify its business which itself came 
                  into existence in 1978.
                </p>
                <p>
                  With our presence at G.B. Road for over 25 years, our motto has always been 
                  serving the Indian industry with our expert knowledge to select the right product 
                  to match their exact requirements. We look forward to becoming a one stop shop for 
                  your Water &amp; Air Requirements.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-slate-200" />

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Our Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Pump Specialists
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    At Gulson Engineering Company we specialized in pumps, meeting industry demands for Boiler feed Pumps, Chemical Pumps, Water Lifting Pumps, Sewerage Pumps, Self Priming Pumps, Centrifugal Pumps, Fire Fighting Pumps, and Booster Pumps.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" /> Industry Partners
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    At Machinery Centre, we cater to industrial needs of Packaging, Paint, Cement, Garage Equipments, Textile, Shoe Making, and Laundry Industries.
                  </p>
                </div>
              </div>
            </section>
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl sticky top-24 border-t-4 border-orange-500">
              <Building2 className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-6">Corporate Office</h3>
              
              <div className="space-y-6 text-slate-300">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Address</h4>
                  <p className="font-medium">3858, SHAH GANJ, G.B. ROAD,<br />DELHI-6</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Contact</h4>
                  <p className="font-medium">TEL: 23214983</p>
                  <p className="font-medium">TELEFAX: 23210012</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</h4>
                  <p className="font-medium text-orange-400">machinerycentre@yahoo.com</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Authorized Dealer &amp; Stockist</h4>
                <div className="flex flex-wrap gap-2">
                  {["Ingersoll-Rand", "Sonee", "Trident", "Crompton Greaves", "Kirloskar", "Rotodel", "Indfoss", "Everest"].map(brand => (
                    <span key={brand} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
