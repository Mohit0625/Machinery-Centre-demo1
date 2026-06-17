import { Building2, History, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../utils/useSEO";

const owners = [
  {
    name: "Sandeep Dhawan",
    role: "Partner",
    image: "https://res.cloudinary.com/dt3m8h52i/image/upload/v1781712588/ChatGPT_Image_Jun_17_2026_09_32_05_PM_mjmy4a.png",
    bio: "With over 35 years of experience in industrial machinery, leading the strategic vision and growth of the company.",
  },
  {
    name: "Sumit Dhawan",
    role: "Partner",
    image: "https://res.cloudinary.com/dt3m8h52i/image/upload/v1781713341/ChatGPT_Image_Jun_17_2026_09_51_46_PM_epeqih.png",
    bio: "Overseeing daily operations, supply chain logistics, and ensuring that our nationwide network runs smoothly.",
  },
];

export function About() {
  useSEO("About Machinery Centre | Industrial Equipment Suppliers Since 1987", "Established in 1987 under Gulson Engineering, Machinery Centre is a trusted B2B supplier of industrial machinery, air compressors, and pumps across India.");

  const yearsOfLegacy = new Date().getFullYear() - 1987;

  return (
    <div className="flex-1 bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4 tracking-tight">About</h1>
          <p className="text-slate-400 max-w-2xl text-lg">A legacy of trust, expertise, and commitment to the Indian industrial sector.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            <section>
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-black text-slate-900">Trusted Industrial Equipment Suppliers Since 1987</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Machinery Centre came into existence in November, 1987 after its parent company,
                  <strong> Gulson Engineering Company</strong>, decided to diversify its business which itself came
                  into existence in 1978.
                </p>
                <p>
                  With our presence at G.B. Road for over {yearsOfLegacy} years, our motto has always been
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
                <h2 className="text-2xl font-black text-slate-900">Our Core Industry Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
                  <h3 className="text-slate-900 tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" /> Pump Specialists
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    At Gulson Engineering Company we specialized in pumps, meeting industry demands for Boiler feed Pumps, Chemical Pumps, Water Lifting Pumps, Sewerage Pumps, Self Priming Pumps, Centrifugal Pumps, Fire Fighting Pumps, and Booster Pumps.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
                  <h3 className="text-slate-900 tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" /> Industry Partners
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    At Machinery Centre, we cater to industrial needs of Packaging, Paint, Cement, Garage Equipments, Textile, Shoe Making, and Laundry Industries.
                  </p>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-slate-200 mt-12 mb-12" />

            {/* ── Owners / Leadership (original position) ───────────── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-black text-slate-900">Leadership & Management</h2>
              </div>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Behind Machinery Centre's decades of success is a dedicated team of partners and management professionals who ensure operational excellence and unparalleled service delivery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {owners.map((o, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-sm border border-slate-200 shadow-sm overflow-hidden flex flex-col group"
                  >
                    <div className="relative overflow-hidden bg-slate-100 border-b border-slate-200 aspect-[4/5]">
                      <img
                        src={o.image}
                        alt={o.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-slate-900 font-bold text-xl mb-1">{o.name}</h3>
                      <p className="text-orange-500 text-sm font-semibold tracking-wide uppercase mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        {o.role}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">{o.bio}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 sticky top-24 self-start">
            <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl border-t-4 border-orange-500">
              <Building2 className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl tracking-wide mb-6">Corporate Office</h3>

              <div className="space-y-6 text-slate-300">
                <div>
                  <h4 className="text-xs tracking-widest text-slate-500 mb-1">Address</h4>
                  <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shah+Ganj,+G.B.+Road,+Delhi-6" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white hover:underline transition-colors cursor-pointer block">
                    3858, SHAH GANJ, G.B. ROAD,<br />DELHI-6
                  </a>
                </div>
                <div>
                  <p className="font-medium">TEL: 011-41440012</p>
                  <p className="font-medium">MOB: 9810054137, 9891155438</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-slate-500 mb-1">Email</h4>
                  <p className="font-medium text-orange-400">machinerycentre@yahoo.com</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-xs tracking-widest text-slate-500 mb-4">Authorized Dealer &amp; Stockist</h4>
                <div className="flex flex-wrap gap-2">
                  {["Ingersoll-Rand", "Sonee", "Trident", "Crompton Greaves", "Kirloskar", "Rotodel", "Indfoss", "Everest"].map(brand => (
                    <span key={brand} className="text-[10px] tracking-wider px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
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
