import { Link, Outlet, useLocation } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Quote", path: "/quote" },
  { name: "Contact Us", path: "/contact" },
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

  const textColor = scrolled || !isHome ? "text-slate-600" : "text-white/80";
  const activeColor = scrolled || !isHome ? "text-slate-900" : "text-white";
  const logoColor = scrolled || !isHome ? "text-slate-900" : "text-white";
  const taglineColor = scrolled || !isHome ? "text-slate-500" : "text-white/60";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* ── Header Container ───────────────────────── */}
      <div className={`w-full z-50 transition-all duration-300 ${isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0 bg-white shadow-sm'}`}>
        
        {/* Top Contact Strip */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-[36px] opacity-100'} ${isHome ? 'bg-slate-900/40 backdrop-blur-sm' : 'bg-slate-900'} border-b border-white/5`}>
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-5">
              <a href="tel:01141440012" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <PhoneCall className="w-3 h-3" /> 011-41440012, 9810054137
              </a>
              <a href="mailto:machinerycentre@yahoo.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3 h-3" /> machinerycentre@yahoo.com
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-accent-400" />
              3858, Shah Ganj, G.B. Road, Delhi-6
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className={`transition-all duration-300 ${scrolled && isHome ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div>
                <h1 className={`text-2xl font-sans font-bold ${logoColor} uppercase  leading-none`}>
                  Machinery Centre
                </h1>
                <p className={`text-[9px] font-semibold ${taglineColor} tracking-[0.25em] uppercase mt-1`}>
                  Compressors & Pumps
                </p>
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
              className={`lg:hidden p-2 rounded-lg ${logoColor} hover:bg-slate-500/10 transition-colors`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 absolute w-full left-0 top-full bg-white shadow-lg ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 pb-6 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                  location.pathname === link.path
                    ? "bg-accent-50 text-accent-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
            <Link
              to="/quote"
              className="btn-pill btn-accent w-full mt-4 text-[12px] py-3"
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

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-accent-500/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-sans text-white leading-none">
                    Machinery Centre
                  </h2>
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
            <div className="md:col-span-3">
              <h3 className="text-white tracking-wider mb-6 text-xs">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Products", "Services", "About Us", "Feedback & Grievance"].map((name) => {
                  const path = name === "Feedback & Grievance" ? "/feedback" : name === "About Us" ? "/about" : `/${name.toLowerCase()}`;
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

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="text-white tracking-wider mb-6 text-xs">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span>3858, Shah Ganj, G.B. Road,<br />Delhi-6</span>
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
