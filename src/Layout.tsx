import { Link, Outlet, useLocation } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Menu, X, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Trendi", path: "/trendi" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Feedback", path: "/feedback" },
];

const productCategories = [
  { name: "Air Compressors", path: "/products/compressors", desc: "Reliable industrial air systems" },
  { name: "Industrial Pumps", path: "/products/pumps", desc: "High-performance fluid handling" },
  { name: "Air Treatment", path: "/products/air-treatment", desc: "Dryers, filters, and purifiers" },
  { name: "Spares & Accessories", path: "/products/spares", desc: "Genuine OEM parts and oils" },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const isHeaderSolid = scrolled || !isHome || mobileMenuOpen;
  
  // Industrial Premium Colors
  const textColor = isHeaderSolid ? "text-slate-600" : "text-white/90";
  const hoverTextColor = isHeaderSolid ? "group-hover:text-slate-900" : "group-hover:text-white";
  const activeColor = isHeaderSolid ? "text-slate-900" : "text-white";
  const logoColor = isHeaderSolid ? "text-slate-900" : "text-white";
  const taglineColor = isHeaderSolid ? "text-slate-500" : "text-white/70";

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-clip">
      
      {/* ── Header Container ───────────────────────── */}
      <div className={`w-full z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0'}`}>
        
        {/* Top Contact Strip */}
        <div className={`hidden sm:block transition-all duration-500 overflow-hidden w-full ${scrolled ? 'h-0 opacity-0' : 'h-[36px] opacity-100'} ${isHome ? 'bg-slate-900/40 backdrop-blur-sm border-b border-white/10' : 'bg-slate-900 border-b border-slate-800'}`}>
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1.5 text-[11px] font-medium text-slate-300 tracking-wide">
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
              <a href="tel:01141440012" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneCall className="w-3.5 h-3.5 shrink-0 text-orange-500" /> 
                <span className="truncate">011-41440012, 9810054137</span>
              </a>
              <a href="mailto:machinerycentre@yahoo.com" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors overflow-hidden">
                <Mail className="w-3.5 h-3.5 shrink-0 text-orange-500" /> <span className="truncate">machinerycentre@yahoo.com</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shah+Ganj,+G.B.+Road,+Delhi-6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                3858, Shah Ganj, G.B. Road, Delhi-6
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className={`transition-all duration-500 w-full ${
          (scrolled || mobileMenuOpen) && isHome 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60 py-3' 
            : !isHome ? 'bg-white border-b border-slate-200 shadow-sm py-4' : 'py-5'
        }`}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logos */}
            <Link to="/" className="flex items-center shrink-0 gap-3 md:gap-5 group relative z-50">
              <div className="flex items-center gap-2 md:gap-3">
                <img 
                  src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png" 
                  alt="Machinery Centre Logo" 
                  className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="hidden sm:block">
                  <h1 className={`text-xl md:text-2xl font-sans font-black ${logoColor} uppercase leading-none tracking-tight`}>
                    Machinery Centre
                  </h1>
                  <p className={`text-[9px] font-bold ${taglineColor} tracking-[0.25em] uppercase mt-1`}>
                    Compressors & Pumps
                  </p>
                </div>
              </div>
              <div className="h-10 md:h-12 w-[1px] bg-slate-300/40 mx-1"></div>
              <div>
                <img 
                  src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925599/Copy_of_TRENDI-LOGO-Photoroom_cnispn.png" 
                  alt="Trendi Logo" 
                  className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Nav Container */}
            <nav className={`hidden lg:flex items-center rounded-full transition-all duration-500 ${
              scrolled || !isHome 
                ? '' 
                : 'bg-slate-900/20 backdrop-blur-md border border-white/10 shadow-2xl pl-6 pr-2 py-1.5'
            }`}>
              
              <div className={`flex items-center ${scrolled || !isHome ? 'gap-1' : 'gap-2'}`}>
                {/* Home Link */}
                <Link
                  to="/"
                  className={`relative px-3 xl:px-4 py-2.5 text-[12px] xl:text-[13px] font-bold tracking-wide transition-all duration-300 group whitespace-nowrap ${
                    location.pathname === "/" ? activeColor : textColor
                  }`}
                >
                  <span className={`block transition-transform duration-300 group-hover:-translate-y-[2px] ${hoverTextColor}`}>Home</span>
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-300 ease-out rounded-full ${
                    location.pathname === "/" ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}></span>
                </Link>

                {/* Products Mega Menu Trigger */}
                <div 
                  className="relative group h-full flex items-center"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button className={`relative flex items-center gap-1.5 px-3 xl:px-4 py-2.5 text-[12px] xl:text-[13px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    location.pathname.includes("/products") ? activeColor : textColor
                  }`}>
                    <span className={`block transition-transform duration-300 group-hover:-translate-y-[2px] ${hoverTextColor}`}>Products</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-[2px] ${megaMenuOpen ? 'rotate-180' : ''} ${hoverTextColor}`} />
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-300 ease-out rounded-full ${
                      location.pathname.includes("/products") ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                    }`}></span>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out transform origin-top ${
                    megaMenuOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                  }`}>
                    <div className="w-[600px] bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 overflow-hidden flex flex-col relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-50/50 before:to-transparent before:pointer-events-none">
                      <div className="grid grid-cols-2 p-4 gap-2 relative z-10">
                        {productCategories.map((category) => (
                          <Link 
                            key={category.name} 
                            to={category.path}
                            className="group/item flex flex-col p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            <span className="text-sm font-bold text-slate-900 group-hover/item:text-orange-600 transition-colors flex items-center justify-between">
                              {category.name}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                            </span>
                            <span className="text-xs text-slate-500 mt-1">{category.desc}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <div>
                          <p className="text-xs font-bold text-slate-900">Need expert consultation?</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">We help you choose the right equipment.</p>
                        </div>
                        <Link 
                          to="/contact" 
                          className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center group/btn"
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          Talk to an Engineer <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rest of Nav Links */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 xl:px-4 py-2.5 text-[12px] xl:text-[13px] font-bold tracking-wide transition-all duration-300 group whitespace-nowrap ${
                      location.pathname === link.path ? activeColor : textColor
                    }`}
                  >
                    <span className={`block transition-transform duration-300 group-hover:-translate-y-[2px] ${hoverTextColor}`}>{link.name}</span>
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-300 ease-out rounded-full ${
                      location.pathname === link.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                    }`}></span>
                  </Link>
                ))}
              </div>
              
              {/* Divider */}
              <div className={`h-6 w-[1px] mx-4 transition-colors duration-500 ${scrolled || !isHome ? 'bg-slate-300' : 'bg-white/20'}`}></div>

              {/* Premium CTA Button */}
              <Link
                to="/quote"
                className={`group relative overflow-hidden rounded-full font-bold text-[11px] xl:text-[12px] uppercase tracking-widest pl-5 pr-4 py-2.5 xl:py-3 transition-all duration-300 ease-out flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap shrink-0 ${
                  scrolled || !isHome
                    ? 'bg-slate-900 text-white shadow-lg hover:shadow-xl hover:shadow-slate-900/20'
                    : 'bg-white text-slate-900 shadow-xl shadow-black/10'
                }`}
              >
                {/* Subtle Hover Glow inside button */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                
                <span className="relative z-10">Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 -translate-x-1 opacity-70 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
              </Link>
            </nav>

            {/* Mobile Toggle - Standard Hamburger */}
            <button
              className={`block lg:hidden ml-auto mr-0 p-2 rounded-lg ${logoColor} hover:bg-slate-500/10 transition-colors shrink-0 relative z-50 outline-none focus:outline-none focus:ring-0`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 transition-transform ${scrolled || !isHome ? 'text-slate-900' : 'text-slate-900'}`} />
              ) : (
                <Menu className="w-6 h-6 transition-transform" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        <div
          className={`lg:hidden fixed inset-0 top-[60px] sm:top-[70px] z-40 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
          }`}
        >
          <div className="h-full overflow-y-auto pb-24">
            <nav className="px-6 pt-6 flex flex-col">
              <div className="space-y-1">
                {[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, ...navLinks].map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between py-4 border-b border-slate-100 text-[14px] font-bold tracking-wide transition-all duration-300 ${
                      mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    } ${
                      location.pathname === link.path
                        ? "text-orange-600"
                        : "text-slate-800 hover:text-orange-500 hover:pl-2"
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {link.name}
                    <ChevronRight className={`w-4 h-4 ${location.pathname === link.path ? "opacity-100 text-orange-500" : "opacity-30"}`} />
                  </Link>
                ))}
              </div>
              
              <div className={`mt-8 transition-all duration-500 delay-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Product Categories</p>
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {productCategories.map(cat => (
                    <Link key={cat.name} to={cat.path} className="text-sm font-semibold text-slate-600 hover:text-orange-600 py-2 border-l-2 border-transparent hover:border-orange-500 pl-4 transition-all">
                      {cat.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/quote"
                  className="bg-slate-900 text-white w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 active:scale-95 transition-transform"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────── */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* ── Pre-Footer Banner ───────────────────────── */}
      {location.pathname !== '/contact' && (
        <section className="bg-orange-500 py-12 sm:py-16 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl text-white mb-2 font-black">Critical Repairs</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl font-medium">
                Repair queries are dealt with utmost urgency and concern. Our team prioritizes getting your machinery back up and running.
              </p>
            </div>
            <Link
              to="/contact?type=repair"
              className="bg-white text-orange-600 hover:bg-slate-50 font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
              Request Urgent Repair
            </Link>
          </div>
        </section>
      )}

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center mb-6 group w-max">
                <div className="flex items-center gap-4 pr-5 border-r border-slate-800">
                  <img 
                    src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png" 
                    alt="Machinery Centre Logo" 
                    className="h-16 w-auto object-contain"
                  />
                  <div>
                    <h1 className="text-2xl font-sans font-black text-white uppercase leading-none tracking-tight">
                      Machinery Centre
                    </h1>
                    <p className="text-[9px] font-bold text-orange-500 tracking-[0.25em] uppercase mt-1">
                      Compressors & Pumps
                    </p>
                  </div>
                </div>
                <div className="pl-5">
                  <img 
                    src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925599/Copy_of_TRENDI-LOGO-Photoroom_cnispn.png" 
                    alt="Trendi Logo" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8 font-medium">
                One Stop Shop For Compressors and Pumps. Providing expert and immensely experienced consultancy for your industrial Air and Water requirements for over {new Date().getFullYear() - 1987} years.
              </p>
              <div className="text-xs space-y-2 text-slate-500 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p><span className="text-white font-bold">Authorized Dealer of:</span> Ingersoll-Rand, Trident</p>
                <p><span className="text-white font-bold">Stockist for:</span> Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">Quick Links</h3>
              <ul className="space-y-3">
                {[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, ...navLinks].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm font-medium text-slate-400 hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block flex items-center"
                    >
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-sm font-medium text-slate-400 hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="text-sm font-medium text-slate-400 hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">Contact</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-900 p-2 rounded text-orange-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shah+Ganj,+G.B.+Road,+Delhi-6" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors font-medium pt-1">
                    3858, Shah Ganj, G.B. Road,<br />Delhi-6
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-900 p-2 rounded text-orange-500 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span className="font-medium pt-1">
                    TEL: 011-41440012<br />
                    MOB: 9810054137, 9891155438
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-900 p-2 rounded text-orange-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:machinerycentre@yahoo.com" className="hover:text-white transition-colors font-medium pt-1">
                    machinerycentre@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-800 text-xs font-medium text-center text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Machinery Centre. All rights reserved.</p>
            <p>Engineered for Industrial Excellence.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        <a 
          href="tel:01141440012" 
          className="bg-slate-900 hover:bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          aria-label="Call Us"
        >
          <PhoneCall className="w-5 h-5" />
        </a>
        <a 
          href="https://wa.me/919810054137" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#22bf5b] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          aria-label="WhatsApp Us"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
