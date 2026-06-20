import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Filter as FilterIcon, Search, CheckCircle2, 
  ChevronRight, ArrowRight, X, PhoneCall, ShieldCheck, Factory, Award, Droplets, Wind, Cpu
} from "lucide-react";
import { isValidEmail, isValidIndianPhone } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { getBrandLogo } from "../utils/logos";
import { sendLead, nowInIST } from "../utils/leadForm";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { catalogData } from "../data/catalog";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Flat structure of subcategories for the Visual Explorer
const allSubcategories = Object.values(catalogData).flatMap(cat => cat.subcategories);

// All distinct brands
const allBrands = Array.from(new Set(
  allSubcategories.flatMap(sub => sub.products.flatMap(p => p.brands))
));

export function Products() {
  useSEO(
    "Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre", 
    "Browse our extensive catalog of industrial air compressors, pumps, and specialized air treatment equipment. Authorized B2B dealers for premium OEM brands."
  );

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialBrand = searchParams.get("brand");
  
  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand ? [initialBrand] : []);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  // Mobile Drawers & Modals
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [quoteDrawerProduct, setQuoteDrawerProduct] = useState<any>(null);
  const [quickPreviewProduct, setQuickPreviewProduct] = useState<any>(null);

  // Filter products globally
  const filteredProducts = useMemo(() => {
    let results: any[] = [];
    allSubcategories.forEach(sub => {
      // Subcategory filter
      if (selectedSubcategories.length > 0 && !selectedSubcategories.includes(sub.id)) {
        return;
      }
      
      sub.products.forEach(product => {
        // Brand filter
        if (selectedBrands.length > 0 && !product.brands.some(b => selectedBrands.includes(b))) {
          return;
        }

        // Search query filter
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = product.title.toLowerCase().includes(q);
          const matchesDesc = product.desc.toLowerCase().includes(q);
          const matchesBrand = product.brands.some(b => b.toLowerCase().includes(q));
          if (!matchesTitle && !matchesDesc && !matchesBrand) return;
        }

        results.push({ ...product, subcategory: sub });
      });
    });
    return results;
  }, [selectedBrands, selectedSubcategories, searchQuery]);

  return (
    <div className="flex-1 bg-slate-50 flex flex-col relative">
      
      {/* 1. HERO SECTION */}
      <div className="bg-slate-900 text-white pt-20 pb-16 border-b-4 border-orange-500 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-orange-500 font-bold tracking-widest text-[11px] uppercase mb-4 block">
                Visual Explorer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-black tracking-tight">
                Industrial Product Catalogue
              </h1>
              <p className="text-slate-300 max-w-2xl text-lg leading-relaxed mb-8">
                Discover our comprehensive range of industrial solutions. Browse by category, application, or brand to find the exact equipment for your needs.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-white">{filteredProducts.length} Products Found</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-white">{allBrands.length} Partner Brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-white">39+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VISUAL SOLUTION EXPLORER */}
      <div className="bg-slate-100 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Explore Solutions</h2>
            {selectedSubcategories.length > 0 && (
              <button onClick={() => setSelectedSubcategories([])} className="text-[11px] font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700">Clear Selection</button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allSubcategories.map(sub => {
              const isSelected = selectedSubcategories.includes(sub.id);
              return (
                <div
                  key={sub.id}
                  onClick={() => {
                    if (isSelected) setSelectedSubcategories(selectedSubcategories.filter(id => id !== sub.id));
                    else setSelectedSubcategories([...selectedSubcategories, sub.id]);
                  }}
                  className={cn(
                    "relative h-32 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300",
                    isSelected ? "ring-2 ring-orange-500 ring-offset-2 shadow-lg scale-[1.02]" : "hover:-translate-y-1 hover:shadow-md"
                  )}
                >
                  <img src={sub.image || "/assets/images/about-main.png"} alt={sub.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t transition-colors duration-300",
                    isSelected ? "from-slate-900/90 via-slate-900/40 to-slate-900/20" : "from-slate-900/80 via-slate-900/30 to-transparent group-hover:from-slate-900/90"
                  )} />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-sm leading-tight group-hover:text-orange-400 transition-colors">{sub.label}</h3>
                    <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider">{sub.products.length} Items</span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. BRAND DISCOVERY SHOWCASE */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-8 shrink-0">Filter by Brand:</span>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-1 items-center">
            {allBrands.map(brand => {
              const isSelected = selectedBrands.includes(brand);
              const logo = getBrandLogo(brand);
              return (
                <button
                  key={brand}
                  onClick={() => {
                    if (isSelected) setSelectedBrands(selectedBrands.filter(b => b !== brand));
                    else setSelectedBrands([...selectedBrands, brand]);
                  }}
                  className={cn(
                    "flex items-center justify-center transition-all shrink-0",
                    isSelected ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"
                  )}
                >
                  {logo ? (
                    <img src={logo} alt={brand} className="h-6 w-auto object-contain" />
                  ) : (
                    <span className="text-sm font-black uppercase text-slate-800">{brand}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Layout (Sidebar + Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 flex flex-col lg:flex-row gap-8">
        
        {/* MOBILE FILTER TOGGLE & SEARCH */}
        <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 shadow-sm"
            />
          </div>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md shrink-0"
          >
            <FilterIcon className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* 4. SEARCH + FILTER BAR (Desktop Sidebar) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-[100px] space-y-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="relative mb-6">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-md pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center justify-between">
                Active Filters
                {(selectedBrands.length > 0 || selectedSubcategories.length > 0) && (
                  <button onClick={() => { setSelectedBrands([]); setSelectedSubcategories([]); }} className="text-[10px] text-orange-600 font-bold normal-case">Clear All</button>
                )}
              </h4>
              {(selectedBrands.length === 0 && selectedSubcategories.length === 0) ? (
                <p className="text-xs text-slate-400">No active filters.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedSubcategories.map(id => (
                    <span key={id} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                      {allSubcategories.find(s => s.id === id)?.label}
                      <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => setSelectedSubcategories(selectedSubcategories.filter(s => s !== id))} />
                    </span>
                  ))}
                  {selectedBrands.map(b => (
                    <span key={b} className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                      {b}
                      <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => setSelectedBrands(selectedBrands.filter(brand => brand !== b))} />
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Contact Block in Sidebar */}
            <div className="bg-slate-900 rounded-xl p-5 text-white mt-8 shadow-lg">
               <h4 className="font-bold mb-2 flex items-center gap-2 text-sm"><PhoneCall className="w-4 h-4 text-orange-500" /> Contact Sales</h4>
               <p className="text-xs text-slate-400 mb-4">Need help selecting the right industrial equipment?</p>
               <a href="tel:+919810156961" className="block text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded text-xs font-bold transition-colors">
                 +91 98101 56961
               </a>
            </div>

          </div>
        </div>

        {/* 5. PRODUCT GRID (Image-First) */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBrands([]);
                  setSelectedSubcategories([]);
                }}
                className="btn-pill btn-outline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => {
                const isTrendi = product.brands.includes("Trendi");
                
                return (
                  <div 
                    key={idx}
                    className={cn(
                      "group bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden relative shadow-sm hover:shadow-xl",
                      isTrendi ? "border-orange-200 hover:border-orange-500" : "border-slate-200 hover:border-slate-400"
                    )}
                  >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={product.image || product.subcategory.image || "/assets/images/about-main.png"} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {isTrendi && (
                          <span className="bg-orange-500 text-white shadow text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded">
                            OEM Approved
                          </span>
                        )}
                        <span className="bg-slate-900/80 backdrop-blur-sm text-white shadow text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded">
                          {product.subcategory.label}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        {product.brands.map((brand: string) => {
                          const logo = getBrandLogo(brand);
                          return logo ? (
                            <img key={brand} src={logo} alt={brand} className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" />
                          ) : (
                            <span key={brand} className="text-[10px] font-black uppercase text-slate-500">{brand}</span>
                          );
                        })}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                      
                      {product.features && product.features.length > 0 && (
                        <ul className="space-y-1.5 mb-6 flex-1">
                          {product.features.slice(0, 3).map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                              <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0 mt-1.5"></span>
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* 6. Hover Interactions / Animated CTAs */}
                      <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-slate-100">
                        <button 
                          onClick={() => setQuoteDrawerProduct(product)}
                          className="bg-slate-900 text-white hover:bg-orange-600 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded transition-all shadow-sm group/btn"
                        >
                          Get Quote
                        </button>
                        <button 
                          onClick={() => setQuickPreviewProduct(product)}
                          className="bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded transition-all flex items-center justify-center gap-1 group/btn2"
                        >
                          Quick View <ArrowRight className="w-3 h-3 group-hover/btn2:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 9. LEAD GENERATION DRAWER (Right Side) */}
      <QuoteDrawer 
        isOpen={!!quoteDrawerProduct} 
        onClose={() => setQuoteDrawerProduct(null)} 
        product={quoteDrawerProduct} 
      />

      {/* 7. QUICK PREVIEW MODAL */}
      <QuickPreviewModal 
        isOpen={!!quickPreviewProduct}
        onClose={() => setQuickPreviewProduct(null)}
        product={quickPreviewProduct}
        onRequestQuote={() => {
          setQuoteDrawerProduct(quickPreviewProduct);
          setQuickPreviewProduct(null);
        }}
      />

      {/* MOBILE FILTERS DRAWER */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col animate-slide-left">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 bg-slate-50 text-slate-500 rounded-md hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto space-y-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Product Type</h4>
                <div className="space-y-4">
                  {allSubcategories.map((sub) => (
                    <label key={sub.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(sub.id)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedSubcategories([...selectedSubcategories, sub.id]);
                          else setSelectedSubcategories(selectedSubcategories.filter(id => id !== sub.id));
                        }}
                        className="w-5 h-5 border-slate-300 rounded text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-base text-slate-700">{sub.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Brands</h4>
                <div className="space-y-4">
                  {allBrands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedBrands([...selectedBrands, brand]);
                          else setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }}
                        className="w-5 h-5 border-slate-300 rounded text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-base text-slate-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-slate-100">
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// -----------------------------------------------------------------
// Quick Preview Modal Component
// -----------------------------------------------------------------
function QuickPreviewModal({ isOpen, onClose, product, onRequestQuote }: { isOpen: boolean, onClose: () => void, product: any, onRequestQuote: () => void }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-full overflow-hidden flex flex-col md:flex-row animate-fade-in">
        
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-slate-900 hover:bg-white z-10 shadow-sm">
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Area */}
        <div className="w-full md:w-1/2 bg-slate-100 relative h-64 md:h-auto">
          <img src={product.image || product.subcategory.image || "/assets/images/about-main.png"} alt={product.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {product.brands.map((brand: string) => {
              const logo = getBrandLogo(brand);
              return logo ? (
                <img key={brand} src={logo} alt={brand} className="h-8 w-auto object-contain bg-white/80 backdrop-blur-sm p-1 rounded" />
              ) : null;
            })}
          </div>
        </div>

        {/* Right: Details Area */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[80vh] md:max-h-[600px]">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">{product.subcategory.label}</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">{product.title}</h2>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.desc}</p>
          
          {product.features && (
            <div className="mb-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">Core Specifications</h4>
              <ul className="space-y-2">
                {product.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button 
              onClick={onRequestQuote}
              className="flex-1 bg-slate-900 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Get Quote
            </button>
            {product.catalogLink && product.catalogLink !== "#" && (
              <a 
                href={product.catalogLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-400 font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Download PDF
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// -----------------------------------------------------------------
// Quote Drawer Component
// -----------------------------------------------------------------
function QuoteDrawer({ isOpen, onClose, product }: { isOpen: boolean, onClose: () => void, product: any }) {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", requirement: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", company: "", phone: "", email: "", requirement: "" });
      setStatus("idle");
      setErrors({});
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!formData.name.trim()) { newErrors.name = "Name is required"; hasErrors = true; }
    if (!formData.phone.trim() || !isValidIndianPhone(formData.phone)) { newErrors.phone = "Valid 10-digit phone required"; hasErrors = true; }
    if (formData.email && !isValidEmail(formData.email)) { newErrors.email = "Valid email required"; hasErrors = true; }

    setErrors(newErrors);
    if (hasErrors) return;

    setStatus("submitting");
    try {
      await sendLead({
        inbox: "sales",
        subject: `Product Inquiry: ${product?.title}`,
        botcheck: "",
        fields: {
          "Customer Name": formData.name,
          "Company": formData.company || "Not provided",
          "Phone": formData.phone,
          "Email": formData.email || "Not provided",
          "Interested In": product?.title || "General Product",
          "Brand": product?.brands?.join(", ") || "",
          "Requirement": formData.requirement || "Please contact me with quote",
          "Submitted At": nowInIST(),
          "Source": "Product Catalog Drawer",
        },
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] transition-opacity animate-fade-in" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-left z-10">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Request Quote</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Sent!</h3>
              <p className="text-slate-600 mb-8">Our sales team will review your request for the <strong className="text-slate-900">{product?.title}</strong> and contact you shortly with a formal quote.</p>
              <button onClick={onClose} className="btn-pill btn-outline w-full">Close Window</button>
            </div>
          ) : (
            <>
              <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex gap-4 items-center">
                <img src={product?.image || product?.subcategory?.image || "/assets/images/about-main.png"} alt="" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 block mb-1">Selected Product</span>
                  <h4 className="font-bold text-slate-900 leading-tight text-sm">{product?.title}</h4>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn("w-full px-4 py-3 bg-white border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500", errors.name ? "border-red-400" : "border-slate-300")}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="Optional"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={cn("w-full px-4 py-3 bg-white border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500", errors.phone ? "border-red-400" : "border-slate-300")}
                      placeholder="Mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={cn("w-full px-4 py-3 bg-white border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500", errors.email ? "border-red-400" : "border-slate-300")}
                      placeholder="Optional"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Specific Requirements</label>
                  <textarea
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none h-24"
                    placeholder="E.g., Quantity needed, target pressure, application..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm p-3 bg-red-50 rounded-lg border border-red-100 text-center">Failed to send request. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-4"
                >
                  {status === "submitting" ? "Submitting..." : "Send Request"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
