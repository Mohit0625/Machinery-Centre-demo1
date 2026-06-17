import { Link, Outlet, useLocation } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Trendi", path: "/trendi" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Feedback", path: "/feedback" },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHeaderSolid = scrolled || !isHome || mobileMenuOpen;
  const textColor = isHeaderSolid ? "text-slate-600" : "text-white/80";
  const activeColor = isHeaderSolid ? "text-slate-900" : "text-white";
  const logoColor = isHeaderSolid ? "text-slate-900" : "text-white";
  const taglineColor = isHeaderSolid ? "text-slate-500" : "text-white/60";

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      
      {/* ── Header Container ───────────────────────── */}
      <div className={`w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0 bg-white shadow-sm'}`}>
        
        {/* Top Contact Strip */}
        <div className={`hidden sm:block transition-all duration-300 overflow-hidden w-full ${scrolled ? 'h-0 opacity-0' : 'h-[36px] opacity-100'} ${isHome ? 'bg-slate-900/40 backdrop-blur-sm' : 'bg-slate-900'} border-b border-white/5`}>
          <div className="max-w-7xl mx-auto h-full px-2 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-300">
            <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto justify-center sm:justify-start">
              <a href="tel:01141440012" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <PhoneCall className="w-3 h-3 shrink-0" /> 
                <span className="truncate">011-41440012, 9810054137</span>
              </a>
              <a href="mailto:machinerycentre@yahoo.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors overflow-hidden">
                <Mail className="w-3 h-3 shrink-0" /> <span className="truncate">machinerycentre@yahoo.com</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-accent-400" />
              <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shah+Ganj,+G.B.+Road,+Delhi-6" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors cursor-pointer">
                3858, Shah Ganj, G.B. Road, Delhi-6
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className={`transition-all duration-300 ${(scrolled || mobileMenuOpen) && isHome ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'py-4'}`}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center shrink-0 gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <img 
                  src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png" 
                  alt="Machinery Centre Logo" 
                  className="h-6 md:h-8 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <h1 className={`text-2xl font-sans font-bold ${logoColor} uppercase  leading-none`}>
                    Machinery Centre
                  </h1>
                  <p className={`text-[9px] font-semibold ${taglineColor} tracking-[0.25em] uppercase mt-1`}>
                    Compressors & Pumps
                  </p>
                </div>
              </div>
              <div className="h-4 md:h-6 w-px bg-slate-300/30"></div>
              <div>
                <img 
                  src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925599/Copy_of_TRENDI-LOGO-Photoroom_cnispn.png" 
                  alt="Trendi Logo" 
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav Container */}
            <nav className={`hidden lg:flex items-center rounded-full border transition-all duration-300 ${
              scrolled || !isHome 
                ? 'bg-slate-100/50 border-slate-200' 
                : 'bg-white/40 backdrop-blur-xl border-white/50 shadow-lg'
            }`}>
              {/* Links */}
              <div className="flex items-center px-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 text-[12px] font-medium transition-all duration-300 rounded-full ${
                      location.pathname === link.path
                        ? `${activeColor} font-semibold`
                        : `${textColor} hover:text-white`
                    } ${scrolled || !isHome ? 'hover:text-slate-900 hover:bg-slate-200/50' : 'hover:bg-white/10'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Button */}
              <Link
                to="/quote"
                className={`ml-2 rounded-full font-semibold text-[12px] px-6 py-2.5 m-1 transition-all duration-300 ${
                  scrolled || !isHome
                    ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800'
                    : 'bg-white text-slate-900 shadow-lg hover:bg-white/90'
                }`}
              >
                Request a Quote
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className={`block lg:hidden ml-auto mr-4 sm:mr-0 p-2 rounded-lg ${logoColor} hover:bg-slate-500/10 transition-colors shrink-0`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-300 absolute w-full left-0 top-full bg-white shadow-lg ${
            mobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100 border-t border-slate-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <nav className="px-5 sm:px-6 pb-5 pt-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between py-3 border-b border-slate-100 text-[13px] font-bold tracking-wide transition-all ${
                  location.pathname === link.path
                    ? "text-accent-600"
                    : "text-slate-700 hover:text-accent-500"
                }`}
              >
                {link.name}
                <ChevronRight className={`w-4 h-4 ${location.pathname === link.path ? "opacity-100 text-accent-500" : "opacity-40"}`} />
              </Link>
            ))}
            <Link
              to="/quote"
              className="btn-pill btn-accent w-full mt-4 text-[11px] py-3 shadow-md shadow-accent-500/20"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────── */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* ── Pre-Footer Banner ───────────────────────── */}
      {location.pathname !== '/contact' && (
        <section className="bg-accent-500 py-12 sm:py-16 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl text-white mb-2">Critical Repairs</h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl">
                Repair queries are dealt with utmost urgency and concern. Our team prioritizes getting your machinery back up and running.
              </p>
            </div>
            <Link
              to="/contact?type=repair"
              className="btn-pill btn-white shrink-0 text-[11px]"
            >
              Request Urgent Repair
            </Link>
          </div>
        </section>
      )}

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center mb-6 group w-max">
                <div className="flex items-center gap-3 pr-4 border-r border-slate-600">
                  <img 
                    src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png" 
                    alt="Machinery Centre Logo" 
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <div>
                    <h1 className="text-2xl font-sans font-bold text-white uppercase leading-none">
                      Machinery Centre
                    </h1>
                    <p className="text-[9px] font-semibold text-slate-400 tracking-[0.25em] uppercase mt-1">
                      Compressors & Pumps
                    </p>
                  </div>
                </div>
                <div className="pl-4">
                  <img 
                    src="https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925599/Copy_of_TRENDI-LOGO-Photoroom_cnispn.png" 
                    alt="Trendi Logo" 
                    className="h-7 sm:h-9 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                One Stop Shop For Compressors and Pumps. Providing expert and immensely experienced consultancy for your industrial Air and Water requirements for over {new Date().getFullYear() - 1987} years.
              </p>
              <div className="text-xs space-y-1.5 text-slate-500">
                <p><span className="text-slate-300">Authorized Dealer of:</span> Ingersoll-Rand, Trident</p>
                <p><span className="text-slate-300">Stockist for:</span> Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-white tracking-wider mb-6 text-xs">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Products", "Services", "About", "Feedback"].map((name) => {
                  const path = `/${name.toLowerCase()}`;
                  return (
                    <li key={name}>
                      <Link
                        to={path === "/home" ? "/" : path}
                        className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <h3 className="text-white tracking-wider mb-6 text-xs">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h3 className="text-white tracking-wider mb-6 text-xs">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <a href="https://www.google.com/maps/search/?api=1&query=3858,+Shah+Ganj,+G.B.+Road,+Delhi-6" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors cursor-pointer">
                    3858, Shah Ganj, G.B. Road,<br />Delhi-6
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span>
                    TEL: 011-41440012<br />
                    MOB: 9810054137, 9891155438
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <a href="mailto:machinerycentre@yahoo.com" className="hover:text-white transition-colors">
                    machinerycentre@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-800 text-xs text-center text-slate-600">
            &copy; {new Date().getFullYear()} Machinery Centre. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
