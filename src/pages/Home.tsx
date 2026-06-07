import { Link } from "react-router-dom";
import { ArrowRight, Settings, Droplets, Wind, ShieldCheck, Filter } from "lucide-react";

export function Home() {
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden isolate">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="container mx-auto px-4 py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-[11px] uppercase tracking-[0.3em] text-orange-500 font-bold mb-6 block">Established 1987</span>
            <h1 className="text-5xl sm:text-7xl font-serif leading-[1.05] text-white mb-8">
              Curating <br />
              <span className="italic text-orange-300">
                Pumps &amp; Compressors
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Providing expert, immensely experienced consultancy and solutions for your 'Air' and 'Water' requirements for over 25 years.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold tracking-widest text-[10px] uppercase transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2">
                Explore Products <ArrowRight className="w-3 h-3" />
              </Link>
              <Link to="/contact" className="bg-transparent hover:bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-full font-bold tracking-widest text-[10px] uppercase transition-all w-full sm:w-auto text-center">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="aspect-square sm:aspect-[4/3] rounded-lg bg-slate-800 border flex flex-col p-8 border-slate-700 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-12 bg-orange-600/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 p-12 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="flex-1 flex items-center justify-center relative z-10 flex-col gap-6 text-slate-400">
                    <Settings className="w-24 h-24 stroke-1" />
                    <div className="text-center">
                      <p className="font-bold text-xl text-white">Industrial Strength</p>
                      <p className="text-sm mt-2">Authorized dealer of leading brands.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-slate-900 uppercase">Our Expertise</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 mb-6" />
            <p className="text-slate-600">Modernized services enabling you with a better, more efficient system of trust and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <Link to="/products" className="group bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 group-hover:bg-orange-100 text-slate-700 group-hover:text-orange-600 rounded-full flex items-center justify-center mb-6 transition-colors">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-3">Air Compressors</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Ingersoll-Rand, Sonee Air Compressors, and Trident. Wide range of options to optimize your fixed costs.
              </p>
              <span className="text-orange-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1 mt-auto">
                View Compressors <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Category 2 */}
            <Link to="/products" className="group bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-slate-500 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 group-hover:bg-slate-200 text-slate-700 group-hover:text-slate-900 rounded-full flex items-center justify-center mb-6 transition-colors">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-3">Compressed Air Filtration</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Ensure 100% clean, dry, oil-free compressed air to safeguard your valuable pneumatic equipment.
              </p>
              <span className="text-slate-800 font-bold uppercase tracking-wider text-xs flex items-center gap-1 mt-auto">
                View Filters <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Category 3 */}
            <Link to="/products" className="group bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 group-hover:bg-blue-100 text-slate-700 group-hover:text-blue-600 rounded-full flex items-center justify-center mb-6 transition-colors">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-3">Industrial Pumps</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Boiler feed, Chemical, Centrifugal, Fire Fighting and more. Stockist for Crompton Greaves, Kirloskar, etc.
              </p>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1 mt-auto">
                View Pumps <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Category 4 */}
            <Link to="/services" className="group bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 group-hover:bg-emerald-100 text-slate-700 group-hover:text-emerald-600 rounded-full flex items-center justify-center mb-6 transition-colors">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-3">Repairs &amp; Spares</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Complete treatment solutions, piping, hosing, and prompt after-sales service with utmost urgency.
              </p>
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1 mt-auto">
                View Services <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight mb-6">Trusted by Indian Industry for 25+ Years</h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Whether you are in Packaging, Paint, Machinery, Textiles, or Cement, we have the precise Air and Water solutions tailored for your scale of operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Minimalist logos represent brands */}
            <div className="text-xl font-bold tracking-widest uppercase">Ingersoll-Rand</div>
            <div className="text-xl font-bold tracking-widest uppercase">Kirloskar</div>
            <div className="text-xl font-bold tracking-widest uppercase">Crompton Greaves</div>
            <div className="text-xl font-bold tracking-widest uppercase">Trident</div>
          </div>
        </div>
      </section>
    </div>
  );
}
