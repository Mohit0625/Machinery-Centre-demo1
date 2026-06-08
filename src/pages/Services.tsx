import { Link } from "react-router-dom";
import { Wrench, Package, Cpu, ArrowRight, Star } from "lucide-react";

export function Services() {
  return (
    <div className="flex-1 bg-slate-50 flex flex-col">
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">Our Services</h1>
          <p className="text-slate-400 max-w-2xl text-lg">Comprehensive after-sales support, spares, and end-to-end industrial solutions.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16 flex-1">
        
        {/* Solutions */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-6">
              <Package className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Industrial Solutions</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We provide you with all the Air and Water solutions for your specific industry. You can rely on us for your needs of Boiler Feed Pumps, Chemical Pumps, Sewerage Pumps, and complete Compressed Air networks.
            </p>
            <div className="space-y-2">
              <h4 className="tracking-widest text-xs text-slate-500 mb-3">Industries Served</h4>
              <div className="flex flex-wrap gap-2">
                {["Packaging", "Paint", "Cement", "Garage Equipments", "Textile", "Shoe Making", "Laundry"].map(ind => (
                  <span key={ind} className="bg-white border border-slate-200 px-3 py-1.5 rounded-sm text-sm font-medium text-slate-700 shadow-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded border border-slate-200 shadow-xl lg:ml-12">
            <h3 className="text-xl text-slate-900 mb-6">Solution Partners</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-medium text-slate-600">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Ingersoll Rand</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Kirloskar</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Crompton Greaves</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Trident</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> GECO</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> Rotodel</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> Indfoss, Everest</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> Sonee</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> Annest Iwata</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"/> Janatics, ELGI</li>
            </ul>
          </div>
        </section>

        <div className="w-full h-px bg-slate-200" />

        {/* Spares */}
        <section className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="md:w-1/3">
             <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Spares &amp; Accessories</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We provide you with all the necessary spares and genuine OEM accessories for continuous, uninterrupted operations. Our inventory covers everything from basic consumables (filters, lubricants) to critical components for Fire Fighting, Booster, and Self Priming pumps.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-emerald-600 tracking-widest text-sm hover:text-emerald-700 transition-colors">
              Enquire for Spares <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <div className="w-full h-px bg-slate-200" />

        {/* Repairs */}
        <section className="bg-slate-900 text-white p-8 lg:p-12 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <Wrench className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-black text-orange-500 mb-6 flex items-center gap-4">
              <Wrench className="w-8 h-8" /> Critical Repairs
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
              <p>
                We understand how important your machinery is for your flow of work. Repair queries are dealt with <strong>utmost urgency and concern</strong>, prioritized above all else.
              </p>
              <p>
                To ensure prompt recognition, our representatives require a brief description of the problem. We provide after-sales service for pumps and compressors of all our corresponding brands.
              </p>
            </div>
            
            <Link to="/contact?type=repair" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-sm tracking-wide transition-all inline-block shadow-lg shadow-orange-500/20">
              Request Urgent Repair
            </Link>
          </div>
        </section>

      </div>

      <div className="w-full h-px bg-slate-200" />

      <div className="container mx-auto px-4 py-16">
        {/* ═══════════════════════════════════════════════════════
             SUCCESSFUL SERVICES SHOWCASE
             ═══════════════════════════════════════════════════════ */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.3em] text-accent-500 mb-4 block uppercase font-bold">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
              Successful Service Operations
            </h2>
            <p className="text-slate-600 text-lg">
              A glimpse into our on-site deployments, critical repairs, and large-scale industrial installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <img 
                  src="/assets/images/industry-cement.png" 
                  alt="Compressor Overhaul" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="text-slate-900 font-bold text-lg leading-tight">Compressor Overhaul</h4>
                  <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded whitespace-nowrap">Apex Cement</span>
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-4">
                  "The overhaul was completed in record time. Our downtime was minimized, and the compressor is running more efficiently than ever."
                </p>
                <div className="mt-auto flex items-center gap-1 text-accent-500">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative h-48 bg-slate-900 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                  <img src="/assets/images/industry-textile.png" className="w-full h-full object-cover opacity-50 grayscale" alt="Video thumbnail" />
                </div>
                <div className="relative z-10 w-full h-full">
                  <video 
                    src="#" 
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
                <div className="absolute top-3 left-3 z-20 bg-accent-600 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                  Video
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="text-slate-900 font-bold text-lg leading-tight">Emergency Repair</h4>
                  <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded whitespace-nowrap">TexFab India</span>
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-4">
                  "Machinery Centre's rapid response team saved us from a massive production halt. Truly a reliable partner."
                </p>
                <div className="mt-auto flex items-center gap-1 text-accent-500">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <img 
                  src="/assets/images/industry-packaging.png" 
                  alt="Pump Installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="text-slate-900 font-bold text-lg leading-tight">Pump Installation</h4>
                  <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded whitespace-nowrap">PackPro Ltd.</span>
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-4">
                  "The new water solutions network was installed flawlessly. We're seeing great improvements in our operational scale."
                </p>
                <div className="mt-auto flex items-center gap-1 text-accent-500">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
