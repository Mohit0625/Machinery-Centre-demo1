import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  Wind,
  Droplets,
  Filter,
  ShieldCheck,
  Send,
  CheckCircle2,
  Cpu,
  Factory,
  Star
} from "lucide-react";
import { isValidIndianPhone } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { getBrandLogo } from "../utils/logos";
import { sendLead, nowInIST } from "../utils/leadForm";

// ── Intersection Observer Hook ────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Animated Counter ──────────────────────────────────────────
function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl text-accent-500 font-sans tracking-tight whitespace-nowrap">
        {count}{suffix}
      </div>
      <div className="text-slate-500 text-xs sm:text-sm mt-1 max-w-[100px] sm:max-w-none mx-auto leading-tight sm:leading-normal">{label}</div>
    </div>
  );
}



// ── Expertise cards ───────────────────────────────────────────
const expertiseCards = [
  { icon: Wind, title: "Air Compressors", desc: "Ingersoll-Rand, Sonee Air Compressors, and Trident. Wide range of options to optimize your fixed costs.", color: "from-orange-500/20 to-red-500/20" },
  { icon: Filter, title: "Compressed Air Filtration", desc: "Ensure 100% clean, dry, oil-free compressed air to safeguard your valuable pneumatic equipment.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Droplets, title: "Industrial Pumps", desc: "Boiler feed, Chemical, Centrifugal, Fire Fighting and more. Stockist for Crompton Greaves, Kirloskar.", color: "from-teal-500/20 to-emerald-500/20" },
  { icon: ShieldCheck, title: "Repairs & Spares", desc: "Complete treatment solutions, piping, hosing, and prompt after-sales service with utmost urgency.", color: "from-purple-500/20 to-indigo-500/20" },
];

// ── Industry data ─────────────────────────────────────────────
const industries = [
  { name: "Packaging", img: "/assets/images/industry-packaging.png" },
  { name: "Paint", img: "/assets/images/industry-paint.png" },
  { name: "Cement", img: "/assets/images/industry-cement.png" },
  { name: "Textile", img: "/assets/images/industry-textile.png" },
  { name: "Laundry", img: "/assets/images/industry-laundry.png" },
];

// ── Partner brands ────────────────────────────────────────────
const partners = [
  "Ingersoll-Rand",
  "Kirloskar",
  "Crompton Greaves",
  "Trident",
  "Rotodel",
  "Indfoss",
  "Everest",
  "Sonee",
];

// ── Featured solution categories (Home "Our Solutions" grid) ──
const solutions = [
  { name: "Air Compressors", path: "/products/compressors", desc: "Reliable industrial air systems", img: "/assets/images/about-main.png" },
  { name: "Industrial Pumps", path: "/products/pumps", desc: "High-performance fluid handling", img: "/assets/images/service-milling.png" },
  { name: "Air Treatment", path: "/products/air-treatment", desc: "Dryers, filters & purifiers", img: "/assets/images/service-laser.png" },
  { name: "Spares & Accessories", path: "/products/spares", desc: "Genuine OEM parts & oils", img: "/assets/images/service-turning.png" },
];

// ═══════════════════════════════════════════════════════════════
// HOME COMPONENT
// ═══════════════════════════════════════════════════════════════
export function Home() {
  const hero = useInView(0.1);
  const feature = useInView(0.1);
  const expertise = useInView(0.1);
  const productGrid = useInView(0.08);
  const quoteSection = useInView(0.1);
  const industrySection = useInView(0.1);
  const trustSection = useInView(0.1);

  useSEO("Industrial Air Compressors & Pumps | Authorized Dealer | Machinery Centre", "Machinery Centre is a leading authorized dealer of industrial air compressors, pumps, and OEM spares for 35+ years. Explore Ingersoll-Rand, Kirloskar & our Trendi range.");

  const [quoteForm, setQuoteForm] = useState({ firstName: "", phone: "", item: "", quantity: "", consentTerms: false, botcheck: "" });
  const [quoteErrors, setQuoteErrors] = useState<Record<string, string>>({});
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteError, setQuoteError] = useState("");

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!quoteForm.firstName.trim()) {
      newErrors.firstName = "First name is required";
      hasErrors = true;
    }
    
    if (!quoteForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
      hasErrors = true;
    } else if (!isValidIndianPhone(quoteForm.phone)) {
      newErrors.phone = "Valid 10-digit Indian mobile required (starts with 6-9)";
      hasErrors = true;
    }

    if (!quoteForm.item.trim()) {
      newErrors.item = "Item name is required";
      hasErrors = true;
    }

    if (!quoteForm.quantity || Number(quoteForm.quantity) < 1) {
      newErrors.quantity = "Invalid qty"; hasErrors = true;
    }
    
    if (!quoteForm.consentTerms) {
      newErrors.consentTerms = "You must agree to the Terms of Use and Privacy Policy"; hasErrors = true;
    }

    setQuoteErrors(newErrors);

    if (hasErrors) return;

    setQuoteError("");
    setQuoteSubmitting(true);

    try {
      await sendLead({
        inbox: "general",
        subject: `Quick quote: ${quoteForm.item.trim()} ×${quoteForm.quantity} — ${quoteForm.firstName.trim()}`,
        botcheck: quoteForm.botcheck,
        fields: {
          "Customer Name": quoteForm.firstName.trim(),
          Phone: quoteForm.phone.trim(),
          "Item / Model": quoteForm.item.trim(),
          Quantity: quoteForm.quantity,
          Consent: quoteForm.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
          Source: "Home page quick-quote form",
        },
      });
      setQuoteSubmitting(false);
      setQuoteSubmitted(true);
    } catch (err) {
      console.error("Home quote form submission failed:", err);
      setQuoteSubmitting(false);
      setQuoteError("Couldn't submit right now — please try again, or call us directly.");
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col">

      {/* ═══════════════════════════════════════════════════════
           1. HERO SECTION
           ═══════════════════════════════════════════════════════ */}
      <section
        ref={hero.ref}
        className="relative min-h-[100vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero-machinery.png"
            alt="Ingersoll-Rand industrial screw air compressor installed in a factory layout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-[80px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
          <div className="max-w-3xl">
            <span
              className={`inline-block text-[11px] uppercase tracking-[0.35em] text-accent-400 font-bold mb-6 transition-all duration-700 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Established 1987
            </span>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white leading-[1.05] mb-8 transition-all duration-700 delay-100 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Complete Industrial<br />
              <span className="text-white">
                Air Compressors<br />& Pump Solutions
              </span>
            </h1>

            <p
              className={`text-slate-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light transition-all duration-700 delay-200 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Providing expert, immensely experienced consultancy and solutions
              for your 'Air' and 'Water' requirements for over {new Date().getFullYear() - 1987} years.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Link to="/products" className="btn-pill btn-accent">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-pill btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/90 animate-subtle-bounce cursor-pointer"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
          <ArrowDown className="w-5 h-5 opacity-70" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           2. ASYMMETRICAL FEATURE BLOCK
           ═══════════════════════════════════════════════════════ */}
      <section ref={feature.ref} id="products-section" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Visual */}
            <div className={`relative transition-all duration-1000 ${feature.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/assets/images/about-main.png"
                  alt="Trendi energy-efficient reciprocating compressor for continuous B2B manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge card */}
              <div className="absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 glass-card-light p-6 shadow-xl max-w-[220px] animate-float">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-900 text-sm">Industrial Strength</p>
                <p className="text-slate-500 text-xs mt-1">Authorized dealer of leading brands.</p>
              </div>
            </div>

            {/* Right — Text & Stats */}
            <div className={`transition-all duration-1000 delay-200 ${feature.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <span className="text-[11px] tracking-[0.3em] text-accent-500 mb-4 block">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
                Our Expertise in Compressed Air & Fluid Handling
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Modernized services enabling you with a better, more efficient
                system of trust and reliability. With our presence at G.B. Road
                for over {new Date().getFullYear() - 1987} years, we have become the one stop shop for your
                Water & Air requirements.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 py-8 border-y border-slate-100">
                <Counter end={new Date().getFullYear() - 1987} suffix="+" label="Years Experience" />
                <Counter end={10} suffix="+" label="Brand Partners" />
                <Counter end={15000} suffix="+" label="Clients Served" />
              </div>

              <div className="mt-8">
                <Link to="/about" className="btn-pill btn-accent text-[11px]">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           3. GLASSMORPHISM EXPERTISE CARDS
           ═══════════════════════════════════════════════════════ */}
      <section ref={expertise.ref} className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/value-bg.png"
            alt=""
            className="w-full h-full object-cover blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${expertise.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[11px] tracking-[0.3em] text-accent-400 mb-4 block">
              Authorized Dealers for Global OEM Brands
            </span>
            <h2 className="text-4xl sm:text-5xl text-white mb-4">
              Comprehensive Service & Sales
            </h2>
            <p className="text-slate-300 text-lg">
              Modernized services enabling you with a better, more efficient
              system of trust and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((card, i) => (
              <div
                key={card.title}
                className={`transition-all duration-700 ${
                  expertise.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120 + 200}ms` }}
              >
                <div className="glass-card p-8 group hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 cursor-default h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg text-white mb-3">{card.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           4. BENTO PRODUCT GRID
           ═══════════════════════════════════════════════════════ */}
      <section ref={productGrid.ref} className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-center">

            {/* Text Block */}
            <div className={`lg:w-[32%] lg:shrink-0 flex flex-col justify-center transition-all duration-700 ${productGrid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[11px] tracking-[0.3em] text-accent-500 mb-4 block uppercase font-bold">
                Featured Range
              </span>
              <h2 className="text-4xl sm:text-5xl text-slate-900 mb-6 font-black tracking-tight">
                Our Solutions
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We understand specific needs and then build solutions to help industries unlock their limitless potential.
              </p>
              <div>
                <Link to="/products" className="btn-pill btn-accent inline-flex items-center gap-2 group">
                  Explore Products
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {solutions.map((s, i) => (
                <div
                  key={s.path}
                  style={{ transitionDelay: productGrid.visible ? `${i * 90 + 100}ms` : "0ms" }}
                  className={`transition-all duration-700 ${productGrid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <Link
                    to={s.path}
                    className="group relative block h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden ring-1 ring-slate-900/5 shadow-sm hover:shadow-2xl transition-shadow duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-400"
                  >
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent transition-colors duration-500 group-hover:from-slate-950"></div>

                    {/* Arrow affordance */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-accent-500 group-hover:ring-accent-500">
                      <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </div>

                    {/* Label */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">{s.name}</h3>
                      <p className="text-white/70 text-sm mt-1.5 leading-snug">{s.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           5. IN-HOUSE INNOVATION — THE TRENDI RANGE
           ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                {getBrandLogo("Trendi") && (
                  <img 
                    src={getBrandLogo("Trendi")} 
                    alt="Trendi Logo" 
                    className="h-8 sm:h-10 w-auto object-contain bg-white/5 px-2 py-1 rounded" 
                  />
                )}
                <span className="text-[11px] tracking-[0.3em] text-accent-500 block font-bold uppercase">
                  In-House Excellence
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl text-white mb-6 font-black tracking-tight leading-tight">
                The Trendi Product Range
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Advanced engineering with intelligent microprocessor control, low specific power consumption, and low noise design metrics built for peak efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Intelligent Control</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Microprocessor-based electronic controllers.</p>
                </div>
                
                <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Energy Efficiency</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">IE3 Electric Motors & Low Specific Power Consumption.</p>
                </div>

                <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Zero Air Loss</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Condensate-sensing technology for maximum efficiency.</p>
                </div>

                <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Filter className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Advanced Separation</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Three-stage Air-Oil separation systems.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 01 */}
              <Link to="/products" className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                <span className="text-[10px] tracking-widest text-accent-500 font-bold uppercase mb-2">Advanced Screw Airend</span>
                <h3 className="text-slate-900 text-xl font-black leading-tight mb-3">Screw Air Compressors</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Highlighting Energy Efficient & Base-Mounted Direct Drive Screw models.
                </p>
                <span className="text-accent-600 text-xs font-bold flex items-center gap-1 group-hover:text-accent-700 transition-colors">
                  Explore Models <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Card 02 */}
              <Link to="/products" className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                <span className="text-[10px] tracking-widest text-accent-500 font-bold uppercase mb-2">Continuous Duty</span>
                <h3 className="text-slate-900 text-xl font-black leading-tight mb-3">Reciprocating Compressors</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Motor-Driven Two-Stage Air Compressors with durable cast iron construction and 360° cooling.
                </p>
                <span className="text-accent-600 text-xs font-bold flex items-center gap-1 group-hover:text-accent-700 transition-colors">
                  Explore Models <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Card 03 */}
              <Link to="/products" className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                <span className="text-[10px] tracking-widest text-accent-500 font-bold uppercase mb-2">Low Pressure Drop</span>
                <h3 className="text-slate-900 text-xl font-black leading-tight mb-3">Desiccant Air Dryers</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Dryspell Series, Core, and Plus heatless compressed air dryers with purge economizers.
                </p>
                <span className="text-accent-600 text-xs font-bold flex items-center gap-1 group-hover:text-accent-700 transition-colors">
                  Explore Dryers <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Card 04 */}
              <Link to="/products" className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                <span className="text-[10px] tracking-widest text-accent-500 font-bold uppercase mb-2">Total Cleaning Solutions</span>
                <h3 className="text-slate-900 text-xl font-black leading-tight mb-3">Specialized Air Treatment</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Coldspell refrigeration dryers, automatic drain valves, and Nitrogen/Vortex filtration systems.
                </p>
                <span className="text-accent-600 text-xs font-bold flex items-center gap-1 group-hover:text-accent-700 transition-colors">
                  Explore Filtration <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
            
          </div>
          
          {/* Section Footer */}
          <div className="text-center mt-16 sm:mt-24">
            <Link to="/trendi" className="inline-block bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Explore the Complete Trendi Range
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           6. QUOTE REQUEST OVERLAY
           ═══════════════════════════════════════════════════════ */}
      <section ref={quoteSection.ref} className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/quote-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div className={`transition-all duration-700 ${quoteSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[11px] tracking-[0.3em] text-accent-400 mb-4 block">
                Get Started
              </span>
              <h2 className="text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Request a Quote
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Please place your order query here and we will get back to you
                with the details. Fill your details correctly for further processing.
              </p>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <span>Quick response within 24 hours</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm mt-3">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <span>Competitive pricing guaranteed</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm mt-3">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <span>Expert product recommendations</span>
              </div>
            </div>

            {/* Right — Form */}
            <div className={`transition-all duration-700 delay-200 ${quoteSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {quoteSubmitted ? (
                <div className="glass-card p-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-2">Thank You!</h3>
                  <p className="text-slate-300 mb-6">Our team will contact you shortly with quote details.</p>
                  <button
                    onClick={() => { setQuoteSubmitted(false); setQuoteForm({ firstName: "", phone: "", item: "", quantity: "", consentTerms: false, botcheck: "" }); }}
                    className="btn-pill btn-accent text-[11px]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleQuoteSubmit}
                  className="glass-card p-8 sm:p-10"
                >
                  <input type="text" name="botcheck" value={quoteForm.botcheck} onChange={(e) => setQuoteForm({ ...quoteForm, botcheck: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-white/70 text-xs font-semibold tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={quoteForm.firstName}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, firstName: e.target.value });
                          if (quoteErrors.firstName) setQuoteErrors({ ...quoteErrors, firstName: "" });
                        }}
                        className={`w-full bg-white/10 border ${quoteErrors.firstName ? 'border-red-400' : 'border-white/20'} rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors`}
                        placeholder="Your name"
                      />
                      {quoteErrors.firstName && <p className="text-red-400 text-[10px] mt-1.5">{quoteErrors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-white/70 text-xs font-semibold tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, phone: e.target.value });
                          if (quoteErrors.phone) setQuoteErrors({ ...quoteErrors, phone: "" });
                        }}
                        className={`w-full bg-white/10 border ${quoteErrors.phone ? 'border-red-400' : 'border-white/20'} rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors`}
                        placeholder="Your phone"
                      />
                      {quoteErrors.phone && <p className="text-red-400 text-[10px] mt-1.5">{quoteErrors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className="block text-white/70 text-xs font-semibold tracking-wider mb-2">
                        Item Name / Model *
                      </label>
                      <input
                        type="text"
                        value={quoteForm.item}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, item: e.target.value });
                          if (quoteErrors.item) setQuoteErrors({ ...quoteErrors, item: "" });
                        }}
                        className={`w-full bg-white/10 border ${quoteErrors.item ? 'border-red-400' : 'border-white/20'} rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors`}
                        placeholder="Product name or model"
                      />
                      {quoteErrors.item && <p className="text-red-400 text-[10px] mt-1.5">{quoteErrors.item}</p>}
                    </div>
                    <div>
                      <label className="block text-white/70 text-xs font-semibold tracking-wider mb-2">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={quoteForm.quantity}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, quantity: e.target.value });
                          if (quoteErrors.quantity) setQuoteErrors({ ...quoteErrors, quantity: "" });
                        }}
                        className={`w-full bg-white/10 border ${quoteErrors.quantity ? 'border-red-400' : 'border-white/20'} rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors`}
                        placeholder="Qty"
                      />
                      {quoteErrors.quantity && <p className="text-red-400 text-[10px] mt-1.5">{quoteErrors.quantity}</p>}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={quoteForm.consentTerms} 
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, consentTerms: e.target.checked });
                          if (quoteErrors.consentTerms) setQuoteErrors({ ...quoteErrors, consentTerms: "" });
                        }}
                        className="w-3.5 h-3.5 shrink-0 text-accent-500 bg-white/10 border-white/20 rounded focus:ring-accent-500 cursor-pointer accent-orange-500"
                      />
                      <div className="text-xs text-white/70 leading-tight">
                        I have read and agree to the <a href="/terms-of-use" target="_blank" rel="noreferrer" className="text-accent-400 hover:text-white transition-colors underline">Terms of Use</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer" className="text-accent-400 hover:text-white transition-colors underline">Privacy Policy</a>. *
                      </div>
                    </label>
                    {quoteErrors.consentTerms && <p className="text-red-400 text-[10px] mt-1.5 ml-6">{quoteErrors.consentTerms}</p>}
                  </div>
                  {quoteError && (
                    <p className="text-red-400 text-xs text-center bg-red-500/10 border border-red-400/20 rounded-md p-3 mb-4">{quoteError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={quoteSubmitting}
                    className="w-full btn-pill bg-white text-slate-900 hover:bg-slate-100 text-[11px] py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {quoteSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           7. INDUSTRY VERTICAL CARDS
           ═══════════════════════════════════════════════════════ */}
      <section ref={industrySection.ref} className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${industrySection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[11px] tracking-[0.3em] text-accent-500 mb-4 block">
              Sectors We Serve
            </span>
            <h2 className="text-4xl sm:text-5xl text-slate-900 mb-4">
              Industrial{" "}
              <span className="italic text-accent-500">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className={`transition-all duration-700 ${
                  industrySection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="industry-card h-full cursor-default">
                  <img src={industry.img} alt={industry.name} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                    <h3 className="text-white text-sm sm:text-base tracking-wide">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           8. TRUST HIGHLIGHT BLOCK
           ═══════════════════════════════════════════════════════ */}
      <section ref={trustSection.ref} className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto bg-white rounded-3xl p-10 sm:p-16 shadow-xl shadow-slate-200/50 text-center transition-all duration-700 ${trustSection.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-center justify-center mx-auto mb-8">
              <img 
                src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png" 
                alt="Machinery Centre Logo" 
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
              Trusted by Indian Industry<br />
              <span className="text-accent-500">for {new Date().getFullYear() - 1987}+ Years</span>
            </h2>
            <h3 className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you are in Packaging, Paint, Machinery, Textiles, or
              Cement, we have the precise Air and Water solutions tailored
              for your scale of operations.
            </h3>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           8.5 CUSTOMER SUCCESS & TESTIMONIALS
           ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.3em] text-accent-500 mb-4 block uppercase font-bold">
              Customer Success
            </span>
            <h2 className="text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 text-lg">
              Trusted by leading businesses across India to deliver reliable, efficient, and robust industrial solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-accent-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                </svg>
              </div>
              <div className="flex gap-1 text-accent-500 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "Machinery Centre has been our trusted partner for over a decade. Their prompt service and high-quality compressors have significantly improved our factory's operational efficiency."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                  R
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Rajesh Kumar</h4>
                  <p className="text-slate-500 text-sm">Plant Head, Manufacturing Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-accent-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                </svg>
              </div>
              <div className="flex gap-1 text-accent-500 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "We were facing frequent downtime with our old pneumatic systems. The team at Machinery Centre recommended the perfect Trendi models, and we haven't looked back since."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                  S
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Sneha Sharma</h4>
                  <p className="text-slate-500 text-sm">Operations Director, TexFab India</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-accent-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                </svg>
              </div>
              <div className="flex gap-1 text-accent-500 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "Exceptional after-sales support! Whenever we need OEM spares or routine maintenance, they deliver immediately. Truly a reliable B2B partner for any scale of operation."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                  A
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Amit Patel</h4>
                  <p className="text-slate-500 text-sm">Procurement Manager, BuildTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           9. PARTNER LOGO RIBBON
           ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs tracking-[0.3em] text-slate-400 mb-10">
            Our Trusted Partners
          </p>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex logo-scroll-track w-max py-4">
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
                  {partners.map((name, i) => {
                    const logoUrl = getBrandLogo(name);
                    return (
                      <div key={`${name}-${i}`} className="flex flex-col items-center justify-center gap-3 shrink-0 group">
                        {logoUrl ? (
                          <img
                            src={logoUrl}
                            alt={name}
                            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="h-10 sm:h-12 w-auto flex items-center justify-center">
                            <div className="text-xl sm:text-2xl font-bold tracking-wider text-slate-300 group-hover:text-slate-500 transition-colors duration-300">
                              {/* Fallback if no logo */}
                            </div>
                          </div>
                        )}
                        <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-600 transition-colors duration-300 whitespace-nowrap select-none cursor-default">
                          {name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
