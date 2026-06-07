import { Link, Outlet, useLocation } from "react-router-dom";
import { Wrench, PhoneCall, Mail, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs sm:text-sm font-medium">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <PhoneCall className="w-3.5 h-3.5" /> 23214983, 23210012
            </span>
            <span className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> machinerycentre@yahoo.com
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            3858, Shah Ganj, G.B. Road, Delhi-6
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-orange-500 p-2 rounded-sm group-hover:bg-orange-600 transition-colors">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif italic text-slate-800 leading-none">
                Machinery Centre
              </h1>
              <p className="text-[10px] font-semibold text-slate-500 tracking-[0.2em] uppercase mt-1">
                Compressors &amp; Pumps
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide transition-colors",
                  location.pathname === link.path
                    ? "text-orange-600"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="ml-6 px-6 py-2 rounded-full border border-slate-600 text-[10px] uppercase tracking-widest hover:bg-slate-600 hover:text-white transition-colors text-slate-700"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden p-4 border-t border-slate-100 bg-slate-50 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center justify-between p-3 rounded-md font-bold uppercase text-sm tracking-wide",
                  location.pathname === link.path
                    ? "bg-orange-100 text-orange-700"
                    : "text-slate-700 hover:bg-slate-200"
                )}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-orange-500">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="bg-orange-500 p-1.5 rounded-sm">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-serif italic text-slate-200 leading-none">
                  Machinery Centre
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              One Stop Shop For Compressors and Pumps. Providing expert and immensely experienced consultancy for your industrial Air and Water requirements for over 25 years.
            </p>
            <div className="text-xs space-y-1">
              <p>Authorized Dealer of: Ingersoll-Rand, Trident</p>
              <p>Stockist for: Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/feedback" className="hover:text-white transition-colors">
                  Feedback &amp; Grievance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>3858, Shah Ganj, G.B. Road,<br />Delhi-6</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>23214983<br />23210012 (Telefax)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <a href="mailto:machinerycentre@yahoo.com" className="hover:text-white transition-colors">
                  machinerycentre@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          &copy; {new Date().getFullYear()} Machinery Centre. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
