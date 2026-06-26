import { useSEO } from "../utils/useSEO";
import { useJsonLd, breadcrumbSchema } from "../utils/seo";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Settings, 
  Zap, 
  Wind, 
  Download,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  VolumeX,
  Gauge
} from "lucide-react";
import { Link } from "react-router-dom";

export function Trendi() {
  useSEO("Trendi Air Compressors & Air Treatment | Machinery Centre", "Trendi is Machinery Centre's own range of energy-efficient screw & reciprocating air compressors and air treatment, supplied across Delhi NCR & India.", { canonical: "/trendi" });
  useJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Trendi", path: "/trendi" }]));

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Energy Efficient",
      desc: "Low specific power consumption paired with optional VFD and IE3 Electric Motors to dramatically reduce operational costs."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "Microprocessor Control",
      desc: "Intelligent microprocessor-based electronic controllers for precise, automated performance and monitoring."
    },
    {
      icon: <VolumeX className="w-6 h-6 text-orange-500" />,
      title: "Low Noise Design",
      desc: "Engineered for quieter operation without compromising on industrial-grade power and reliability."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Robust Durability",
      desc: "Base-mounted direct drive and durable cast-iron construction ensures an extended lifecycle and minimal maintenance."
    }
  ];

  const compressors = [
    {
      title: "Energy Efficient Screw Air Compressor",
      desc: "Advanced Screw Airend with Intelligent Microprocessor based Electronic Controller. Low Specific Power Consumption with less noise level and ease of maintenance.",
      features: ["Three stage Air Oil Separator", "Compressors with VFD (Optional)", "Low Specific Power Consumption", "IE3 Electric Motors"]
    },
    {
      title: "Base Mounted Direct Drive Screw Compressors",
      desc: "Base mounted direct drive screw compressors providing reliable performance. Available in multiple capacities and dimensions.",
      features: ["Direct Drive", "Base Mounted", "Low noise design", "High Reliability"]
    },
    {
      title: "Motor Driven Two Stage Air Compressor",
      desc: "Two-stage design providing 175 PSIG operation with durable cast iron construction and extended pump life.",
      features: ["Removable Cylinders: 360° cooling", "Finned Copper Intercooler", "Splash Lubrication", "Precision-balanced crankshaft"]
    }
  ];

  const treatments = [
    {
      title: "Dryspell Series Dryers",
      desc: "Heatless desiccant compressed air dryers, offering a total cleaning solution for lubricated as well as non-lubricated compressed air.",
      features: ["Noise level < 70 decibels", "Free from corrosion & scale", "High strength adsorbent", "ISO 8573-1:2010 class 3"]
    },
    {
      title: "Automatic Drain Valves",
      desc: "Including the EDV-X and LDV series. Designed specially to drain sludge and rust laden condensate with reliable electronic circuitry.",
      features: ["Condensate Sensing Type", "Zero Air Loss", "Extended cycle time adjustable", "Fault tolerant system"]
    },
    {
      title: "Nitrogen Generators",
      desc: "Modular nitrogen generator using PSA technology. Delivers uninterrupted nitrogen supply for multiple industries.",
      features: ["Purity from 95% to 99.999%", "Microprocessor controller", "Corrosion free aluminium", "Modular Construction"]
    },
    {
      title: "Advanced Filtration",
      desc: "Comprehensive filtration including Vortex, Bacteria, and Submicron Cleansweep filters for extreme purity requirements.",
      features: ["Removes water, oil, solids", "Autoclave sterilisable", "Borosilicate filter media", "Down to 0.01 micron"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/about-main.png"
            alt="Trendi industrial air compressor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <img 
                src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925599/Copy_of_TRENDI-LOGO-Photoroom_cnispn.png" 
                alt="Trendi Logo" 
                className="h-20 md:h-28 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase">
              In-House <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent-600">Innovation</span>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the pinnacle of industrial efficiency with the Trendi range of Compressors, Pumps, and Air Treatment solutions. Engineered for durability, precision, and peak performance.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#compressors" className="btn-pill bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-xs">
                Explore The Range
              </a>
              <Link to="/products" className="btn-pill bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-xs flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Complete Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">The Trendi Advantage</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compressors Showcase */}
      <section id="compressors" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-slate-300" />
                <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">Air Power</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6 uppercase">Trendi<br/>Compressors</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                From intelligent energy-efficient screw compressors to robust two-stage reciprocating models, the Trendi compressor lineup is built to deliver relentless, uninterrupted air power for your enterprise.
              </p>
              <Link to="/quote?product=Trendi+Compressors" className="group inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-sm hover:text-orange-700 transition-colors mb-8">
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full hidden lg:block">
                <img
                  src="/assets/images/hero.png"
                  alt="Trendi Compressors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {compressors.map((comp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 ${i === 0 ? 'md:col-span-2 bg-slate-900 text-white border-none shadow-xl' : ''}`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${i === 0 ? 'text-white' : 'text-slate-900'}`}>{comp.title}</h3>
                  <p className={`mb-6 text-sm leading-relaxed ${i === 0 ? 'text-slate-300' : 'text-slate-600'}`}>{comp.desc}</p>
                  <ul className="space-y-3">
                    {comp.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${i === 0 ? 'text-orange-500' : 'text-orange-500'}`} />
                        <span className={`text-sm ${i === 0 ? 'text-slate-300' : 'text-slate-700'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Air Treatment Showcase */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-8 h-8 text-slate-700" />
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Purity Guaranteed</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-6 uppercase">Trendi Air<br/>Treatment</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Protect your pneumatic equipment and final product quality with our comprehensive range of Dryspell dryers, nitrogen generators, and submicron filtration systems. Total cleaning solutions for extreme purity.
              </p>
              <Link to="/quote?product=Trendi+Air+Treatment" className="group inline-flex items-center gap-2 text-accent-500 font-bold uppercase tracking-wider text-sm hover:text-accent-400 transition-colors mb-8">
                Enquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full hidden lg:block">
                <img
                  src="/assets/images/hero-machinery.png"
                  alt="Trendi Air Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map((treat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{treat.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-400">{treat.desc}</p>
                  <ul className="space-y-3">
                    {treat.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gauge className="w-16 h-16 text-white/20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 uppercase">
            Ready to Upgrade Your Operations?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to find the perfect Trendi compressor or air treatment solution tailored to your industry's exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote?product=Trendi+Complete+System" className="btn-pill bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-xs shadow-xl">
              Request a Custom Quote
            </Link>
            <Link to="/contact" className="btn-pill bg-white text-orange-600 hover:bg-slate-50 px-8 py-4 text-xs shadow-xl">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
