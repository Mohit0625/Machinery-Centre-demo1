import { useState } from "react";
import { Link } from "react-router-dom";
import { Wind, Droplets, Filter, CheckCircle2, Download, X, Cpu } from "lucide-react";
import { isValidEmail, isValidIndianPhone } from "../utils/validation";
import { useSEO } from "../utils/useSEO";
import { getBrandLogo } from "../utils/logos";
import { sendLead, nowInIST } from "../utils/leadForm";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// -----------------------------
// Catalog Data Structure
// -----------------------------
const catalogData = {
  compressors: {
    label: "Compressors",
    icon: Wind,
    description: "Authorized Dealers of Ingersoll-Rand, Sonee Air Compressors and Trident. Diverse range of options to optimize your business's fixed costs.",
    subcategories: [
      {
        id: "all-compressors",
        label: "",
        products: [
          {
            title: "Trendi Energy Efficient Belt Drive Screw Air Compressor",
            desc: "Advanced Screw Airend with Intelligent Microprocessor based Electronic Controller. Low Specific Power Consumption with less noise level and ease of maintenance.",
            brands: ["Trendi"],
            features: ["Three stage Air Oil Separator", "Compressors with VFD (Optional)", "Low Specific Power Consumption", "IE3 Electric Motors"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1VN7WVekzZYVYHpGATtpQOEQQiaSqvtpp"
          },
          {
            title: "Trendi Base Mounted Direct Drive Screw Compressors",
            desc: "Base mounted direct drive screw compressors providing reliable performance. Available in multiple capacities and dimensions.",
            brands: ["Trendi"],
            features: ["Direct Drive", "Base Mounted", "Low noise design"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1x45zNBjsj9jrgPzVVDyNcgDkvmIx5Kl7"
          },
          {
            title: "Trendi Motor Driven Two Stage Air Compressor",
            desc: "Two-stage design providing 175 PSIG operation with durable cast iron construction and extended pump life.",
            brands: ["Trendi"],
            features: [
              "Removable Cylinders: 360° cooling", 
              "Finned Copper Intercooler", 
              "Splash Lubrication",
              "Precision-balanced crankshaft"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1V3G7HYCPfRk-0CJBdt7toAmquvRVHE3t"
          },
          {
            title: "Ingersoll Rand Two Stage Electric Driven Reciprocating Air Compressor",
            desc: "Designed for heavy shop or industrial use, providing quality and performance ideal for a wide range of applications including automotive service, fleet maintenance, and manufacturing lines.",
            brands: ["Ingersoll Rand"],
            features: [
              "Durable cast-iron, two-stage design", 
              "175 PSI maximum operating pressure", 
              "100% continuous duty",
              "Automatic start/stop control"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1nZQ7xCTVp73Fyus9UpWcVJdn_YtEJt3E"
          }
        ]
      }
    ]
  },
  "air-treatment": {
    label: "Air Treatment",
    icon: Filter,
    description: "Complete compressed air treatment solutions.",
    subcategories: [
      {
        id: "all-air-treatment",
        label: "",
        products: [
          {
            title: "TRIDENT CTD Series",
            desc: "High discharge automatic drain valves with robust construction and adjustable ON/OFF timings.",
            brands: ["Trident"],
            features: ["Adjustable ON/OFF timings", "Highly reliable", "Can handle contaminated condensate"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1uM8Hn2Bv2HVHX-Wvn60GTgxMECPmA-Uq"
          },
          {
            title: "TRIDENT Series LDV",
            desc: "Condensate sensing type automatic drain valves, offering zero air loss, noise free, and fault tolerant system.",
            brands: ["Trident"],
            features: ["Condensate Sensing Type", "Zero Air Loss", "Design Patented", "Fault tolerant system"],
            catalogLink: "https://drive.google.com/uc?export=download&id=14Ya8W0lhZ4TCechRTRTRmAuH-TP9cYVZ"
          },
          {
            title: "TRIDENT Series EDV-X",
            desc: "Automatic drain valves designed specially to drain sludge and rust laden condensate.",
            brands: ["Trident"],
            features: ["Reliable all digital electronic circuitry", "ON and OFF timing adjustable", "Extended cycle time upto 32 hrs adjustable"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1WxilzKTFSq2qZkMLvzezbGtvClPkGs7i"
          },
          {
            title: "TRIDENT Submicron Filters Cleansweep",
            desc: "Extremely low installation clearance filters removing oil and particulate down to 0.01 micron.",
            brands: ["Trident"],
            features: ["Oil Removal (Coalescing)", "Flow from 20 to 1810 m³/hour", "Install anywhere"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1_CM0y0VbRDy1iMxmjLadMl-1EqeA7g1e"
          },

          {
            title: "TRIDENT Dryspell Series",
            desc: "Heatless desiccant compressed air dryers, offering total cleaning solution for lubricated as well as non-lubricated compressed air.",
            brands: ["Trident"],
            features: ["Noise level < 70 decibels", "Free from corrosion & scale formation", "High strength adsorbent material"],
            catalogLink: "https://drive.google.com/uc?export=download&id=17Km0_hcnxVQ6YcY75JUlFsmiWzbOSWmD"
          },
          {
            title: "TRIDENT Dryspell Core",
            desc: "Desiccant compressed air dryers providing consistent dew point performance. Aluminium construction.",
            brands: ["Trident"],
            features: ["Noise Level < 70 dBA", "Pressure Drop < 0.3 kg/cm² (g)", "ISO 8573-1:2010 class 3"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1OAHw-OTnWODzrDWahUTAl5fqhLpSGrUW"
          },
          {
            title: "TRIDENT Dryspell Plus",
            desc: "Desiccant compressed air dryers with purge economiser reducing purge loss according to load requirements.",
            brands: ["Trident"],
            features: ["Noise Level < 80 dBA", "Aluminium Construction", "Accepts dewpoint meter signal"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1_j0SdJC7_WD1-R9YIPlOHuLAbk_hm0FW"
          },
          {
            title: "TRIDENT Coldspell Core",
            desc: "Refrigeration compressed air dryer with large condenser for high ambient temperatures.",
            brands: ["Trident"],
            features: ["Low pressure drop", "High ambient temperatures handling"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1Dm1N3eWZrcqWPt-Vk9e21PDIFVrmQYr6"
          },
          {
            title: "TRIDENT Coldspell",
            desc: "Refrigeration compressed air dryer featuring an anti-recycle feature for compressor protection.",
            brands: ["Trident"],
            features: ["ISO 8573 - 1 : 2010 (E) class -5-", "Anti-recycle feature", "Large condenser"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1W_-wRxgKEuZt5IZHc0WWDGESM2TcmBC-"
          },
          {
            title: "TRIDENT Coldspell - HP Series",
            desc: "High pressure (40 Kg / cm2 (g)) refrigeration compressed air dryer with advanced 3 in 1 integrated SS heat exchanger.",
            brands: ["Trident"],
            features: ["Microprocessor controller", "Anti freezer & anti recycle", "High pressure 40 Kg/cm2 (g)"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1Q17byZmfDuDqD7HANn7tjynLKbCOfX-B"
          },
          {
            title: "TRIDENT DP V2 Series",
            desc: "Heatless compressed air dryers featuring purge economisers to reduce energy loss according to load requirements.",
            brands: ["Trident"],
            features: ["Dewpoint meter signal cycle", "Pressure Drop < 0.3 kg/cm²", "Stainless Steel Internals"],
            catalogLink: "https://drive.google.com/uc?export=download&id=17un7IYiQpsvC_6qeyW97u7iRm6j5-y2N"
          },
          {
            title: "TRIDENT DP V3 Series",
            desc: "Heatless compressed air dryers with inbuilt sample gas chamber and electrical outlet for miniature dew point transmitter.",
            brands: ["Trident"],
            features: ["ISO : 8573-1 : 2010 (E) Class 2", "LCD Display", "Aluminium filter with differential pressure indicator"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1wYmSf6wBnARcrwHrWk_oN9roTRBvNAX7"
          },
          {
            title: "TRIDENT Breathing Air System",
            desc: "Provides breathing air mandated by NFPA 99. Operates with pressure swing adsorption.",
            brands: ["Trident"],
            features: ["Guaranteed dew point performance", "Compact digital CO & Dewpoint Monitor", "Bacterial Penetration upto 0.0001%"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1abuKUpjlG9j9qRVYDo3CnzJtEa2xMxRJ"
          },
          {
            title: "TRIDENT Medical Vacuum Filters High Performance Series",
            desc: "Designed to remove liquid, solid, and bacterial contamination from the suction side of vacuum pumps.",
            brands: ["Trident"],
            features: ["Borosilicate filter element 99.995% efficiency", "Differential pressure gauge indicator", "Sterilisable drain flask"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1lSSUk5gfnjhAaFec_POZScmeE4YNvhRX"
          },
          {
            title: "TRIDENT Bacteria Filter Series",
            desc: "Provides protection from bacteria in compressed air applications for medical and food industries.",
            brands: ["Trident"],
            features: ["Aluminium alloy housing, hard anodized", "Compatible with autoclave sterilisation", "Borosilicate filter media"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1Yhox1XasGhUigrJ6cnrAKFd0a4nhEPki"
          },
          {
            title: "TRIDENT Nitrogen Generator",
            desc: "Modular nitrogen generator using PSA technology. Delivers uninterrupted nitrogen supply for multiple industries.",
            brands: ["Trident"],
            features: ["Purity from 95% to 99.999%", "Microprocessor controller", "Corrosion free modular aluminium construction"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1nNlJeUun0Zq2_VLr7fFNIKDoTU28uEnY"
          },
          {
            title: "TRIDENT Vortex Filter VXD 2",
            desc: "Eliminates 100% water in liquid phase from compressed air. Compact, light weight, and uses no electricity.",
            brands: ["Trident"],
            features: ["Removes water, oil and solid particles", "No Electricity used", "All aluminium resist oxidation"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1Gdeuy0sZfvVsvB89To4kVYZod1sjOeCj"
          },
          {
            title: "TRIDENT Carbon Adsorber Tower",
            desc: "Adsorber towers for production of oil free compressed air for various point of use applications.",
            brands: ["Trident"],
            features: ["Activated Carbon Adsorbent", "Max Operating Pressure: 16 Kg/cm2", "Aluminium Alloy IS 63400 Construction"],
            catalogLink: "https://drive.google.com/uc?export=download&id=15jBWXUF2HBFROzvLb4ishV8Ps5zmrat3"
          },
          {
            title: "TRIDENT DB Series",
            desc: "Blower Reactivated Air Dryers working on thermal swing principle for economical energy consumption.",
            brands: ["Trident"],
            features: ["Extensive Mimic display", "Energy saving purge economiser", "Dewpoint better than -40 ° C"],
            catalogLink: "https://drive.google.com/uc?export=download&id=15S-TVRADI6hlWn7VdATEqauw8EHgXG4Z"
          },
        ]
      }
    ]
  },
  pumps: {
    label: "Pumps",
    icon: Droplets,
    description: "Stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest. Specialized in meeting the demand of industry for diverse requirements.",
    subcategories: [
      {
        id: "metering-pump",
        label: "Metering Pump",
        products: [
          {
            title: "Metering Pumps",
            desc: "Precision metering pumps engineered for accurate, repeatable flow control in chemical dosing and process applications.",
            brands: ["Kirloskar"],
            features: [
              "Accurate, repeatable dosing",
              "Adjustable flow / stroke control",
              "Chemical-compatible construction"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1J-1j3_cQbZW7RhaQY8N5plq0-sbBjl1F"
          }
        ]
      },
      {
        id: "gear-pump",
        label: "Gear Pump",
        products: [
          {
            title: "Rotary Gear Pumps Type 'HGSX'",
            brands: ["Rotodel"],
            desc: "High viscosity fluid handling designed to run up to 1440 RPM.",
            features: ["Used in Food & Pharma", "Smooth, pulsation-free flow", "compact and efficient" ],
            catalogLink: "https://drive.google.com/uc?export=download&id=17bjoJ1m4XfzzhZwQdpA3J8bgP5_R1ln1"
          },
          {
            title: "Rotary Gear Pumps Type 'HGN'",
            desc: "Rotodel Type 'HGN' rotary gear pumps for transferring viscous, lubricating and non-abrasive fluids with smooth, pulsation-free flow.",
            brands: ["Rotodel"],
            features: [
              "Type 'HGN' construction",
              "Handles high-viscosity fluids",
              "Smooth, pulsation-free flow"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1LCiAcCRJdCNlRRNhtmutsk5clv28rvUS"
          }
        ]
      },
      
    ]
  },
  spares: {
    label: "Spares",
    icon: Cpu,
    description: "We provide you with all the spares and accessories for Boiler Feed Pumps, Chemical Pumps, Water Lifting Pumps, Sewerage Pumps, Self Priming Pumps, Centrifugal Pumps, Pumps for Fire Fighting, Booster Pumps, etc.",
    subcategories: [
      {
        id: "parts-accessories",
        label: "Parts & Accessories",
        products: [
          {
            title: "Pump Spares",
            desc: "Genuine parts and accessories for a wide range of industrial and commercial pumps.",
            features: [
              "Boiler Feed Pump Spares",
              "Chemical Pump Spares",
              "Water Lifting & Sewerage Pump Spares",
              "Fire Fighting & Booster Pump Spares"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1rUveEEGcs_G-Ha8gmeC1tE9UAqGaPODX"
          },
          {
            title: "Compressor & Air Parts",
            desc: "OEM and compatible accessories for major compressor brands. Air & oil filters, air-oil separators, intake valves, gaskets, service kits and more.",
            features: [
              "Ingersoll Rand Spares",
              "Kirloskar & Crompton Greaves Spares",
              "Trident, Elgi, & Janatics Components",
              "Rotodel, Indfoss, & Everest Accessories"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1PIawPtp0X-e10yHstbav5lh5A1he4ABQ"
          }
        ]
      }
    ]
  }
};

const categoriesList = Object.entries(catalogData).map(([id, data]) => ({
  id,
  ...data
}));

// -----------------------------
// Main Components
// -----------------------------

const CATALOG_FALLBACK_URL = "https://drive.google.com/drive/folders/1IHEIFLeqMeAJMWKnQADmtt1mQvwLI2JA";

function resolveCatalogUrl(catalogLink: string) {
  return catalogLink && catalogLink !== "#" ? catalogLink : CATALOG_FALLBACK_URL;
}

function openCatalog(catalogLink: string) {
  window.open(resolveCatalogUrl(catalogLink), "_blank", "noopener,noreferrer");
}

const REQUIRE_DETAILS_BEFORE_DOWNLOAD: boolean = false;

export function Products() {
  useSEO("Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre", "Browse our extensive catalog of industrial air compressors, pumps, and specialized air treatment equipment. Authorized B2B dealers for premium OEM brands.");
  
  const [activeCategoryId, setActiveCategoryId] = useState(categoriesList[0].id);
  const activeCategory = catalogData[activeCategoryId as keyof typeof catalogData];

  // State for Catalog Download Modal
  const [selectedCatalog, setSelectedCatalog] = useState<{ title: string, link: string } | null>(null);

  const handleDownloadRequest = (title: string, link: string) => {
    if (REQUIRE_DETAILS_BEFORE_DOWNLOAD) {
      setSelectedCatalog({ title, link }); // open the lead-capture modal
    } else {
      openCatalog(link); // popup disabled for now → download straight away
    }
  };

  return (
    <div className="flex-1 bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4 font-bold tracking-tight">Premium Industrial Compressors, Pumps & OEM Spares</h1>
          <p className="text-slate-400 max-w-2xl text-lg">Wide and diverse range of options to optimize your business's fixed costs.</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-slate-200 sticky z-40 shadow-sm" style={{ top: "var(--nav-h, 73px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-7 py-5 font-bold uppercase tracking-wide text-sm whitespace-nowrap border-b-2 transition-colors",
                    isActive ? "border-orange-500 text-orange-600" : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex-1">
        <div className="space-y-12">
          {/* Category Header */}
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl text-slate-900 mb-4 flex items-center gap-3">
              <activeCategory.icon className="w-8 h-8 text-orange-500" /> {activeCategory.label}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {activeCategory.description}
            </p>
          </div>

          {/* Subcategories */}
          <div className="space-y-16">
            {activeCategory.subcategories.map((subcat) => (
              <div key={subcat.id} className="space-y-6 pt-4 border-t border-slate-200 first:border-0 first:pt-0">
                {subcat.label && <h3 className="text-2xl text-slate-800">{subcat.label}</h3>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {subcat.products.map((product, idx) => (
                    <ProductCard 
                      key={idx} 
                      product={product} 
                      onDownloadRequest={() => handleDownloadRequest(product.title, product.catalogLink)} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Download Modal */}
      {selectedCatalog && (
        <CatalogDownloadModal 
          productTitle={selectedCatalog.title}
          catalogLink={selectedCatalog.link}
          onClose={() => setSelectedCatalog(null)} 
        />
      )}
    </div>
  );
}

// -----------------------------
// Sub-Components
// -----------------------------

function ProductCard({ product, onDownloadRequest }: { product: any, onDownloadRequest: () => void }) {
  return (
    <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {product.brands && (
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          {product.brands.map((b: string) => {
            const logoUrl = getBrandLogo(b);
            return (
              <div key={b} className="flex items-center gap-2">
                {logoUrl && (
                  <img 
                    src={logoUrl} 
                    alt={b} 
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  {b}
                </span>
              </div>
            );
          })}
        </div>
      )}
      <h3 className="text-xl text-slate-900 mb-4 font-bold leading-snug">{product.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.desc}</p>
      
      {product.features && product.features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {product.features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/quote" className="text-orange-600 tracking-wider text-xs hover:text-orange-700 transition-colors">
          Request Quote &rarr;
        </Link>
        <button 
          onClick={onDownloadRequest}
          className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase bg-orange-500 text-white px-5 py-2.5 rounded-full shadow hover:bg-orange-600 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Catalog
        </button>
      </div>
    </div>
  );
}

// -----------------------------
// Catalog Download Modal Form
// -----------------------------

function CatalogDownloadModal({ productTitle, catalogLink, onClose }: { productTitle: string, catalogLink: string, onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", consentTerms: false, botcheck: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // The catalog the visitor came for. Resolved once so the auto-open and the
  // manual fallback button always point at exactly the same destination.
  const downloadUrl = resolveCatalogUrl(catalogLink);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    if (!formData.name.trim()) { newErrors.name = "Required"; hasErrors = true; }
    
    if (!formData.email.trim()) { 
      newErrors.email = "Required"; hasErrors = true; 
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email"; hasErrors = true;
    }

    if (formData.phone.trim() && !isValidIndianPhone(formData.phone)) {
      newErrors.phone = "Invalid Indian mobile"; hasErrors = true;
    }

    if (!formData.company.trim()) { newErrors.company = "Required"; hasErrors = true; }

    if (!formData.consentTerms) {
      newErrors.consentTerms = "You must agree to the Terms of Use and Privacy Policy"; hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) return;

    // Open the catalog FIRST, while we're still inside the click's synchronous
    // path — this preserves the user-gesture token so the browser won't treat
    // the new tab as an unsolicited popup and block it. The lead notification
    // below is purely best-effort and must never gate the download.
    window.open(downloadUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(true);

    // Notifying Machinery Centre is best-effort: if it fails — relay service
    // down, inbox not activated, visitor offline, request times out — the
    // customer has ALREADY got their catalog, so we just log and move on.
    try {
      // The `fields` keys become the labels in the email, in the order listed.
      await sendLead({
        inbox: "product",
        subject: `New catalog request: ${productTitle} — ${formData.company.trim()}`,
        replyTo: formData.email.trim(),
        botcheck: formData.botcheck,
        fields: {
          "Product Requested": productTitle,
          "Customer Name": formData.name.trim(),
          Company: formData.company.trim(),
          Email: formData.email.trim(),
          Phone: formData.phone.trim() || "Not provided",
          Consent: formData.consentTerms
            ? "✓ Agreed to Terms of Use & Privacy Policy"
            : "✗ Not agreed",
          "Submitted At": nowInIST(),
        },
      });
    } catch (err) {
      console.error("Catalog lead notification failed — download already delivered:", err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="bg-white w-full max-w-md rounded-sm shadow-xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl text-slate-900 mb-2">Download Catalog</h3>
            <p className="text-sm text-slate-500">
              Please provide your details to download the complete {productTitle} PDF catalog.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-sm border border-emerald-100 flex flex-col items-center justify-center py-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-3" />
              <p className="font-medium text-center">Thank you!</p>
              <p className="text-sm text-emerald-600 text-center mt-1">Your catalog should have opened in a new tab.</p>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] uppercase py-3 px-6 rounded-full transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download catalog
              </a>
              <p className="text-[10px] text-emerald-700/70 text-center mt-3">Didn't open? Tap the button above.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot anti-spam field — hidden from real users, bots tend to fill it */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div>
                <label className="block text-xs text-slate-700 tracking-wider mb-1">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs text-slate-700 tracking-wider mb-1">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-700 tracking-wider mb-1">Phone <span className="text-slate-400 font-normal normal-case">(optional)</span></label>
                  <input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                    placeholder="+91 9800000000"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs text-slate-700 tracking-wider mb-1">Company</label>
                  <input 
                    name="company"
                    type="text" 
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.company ? 'border-red-400' : 'border-slate-200'} rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && <p className="text-red-500 text-[10px] mt-1">{errors.company}</p>}
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="consentTerms"
                      checked={formData.consentTerms as boolean} 
                      onChange={handleChange}
                      className="w-4 h-4 shrink-0 text-orange-600 bg-slate-50 border-slate-300 rounded focus:ring-orange-500 cursor-pointer accent-orange-500"
                    />
                    <div className="text-xs text-slate-600 leading-tight">
                      I have read and agree to the <a href="/terms-of-use" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">Terms of Use</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">Privacy Policy</a>. <span className="text-orange-500">*</span>
                    </div>
                  </label>
                  {errors.consentTerms && <p className="text-red-500 text-[10px] ml-7 mt-1">{errors.consentTerms}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white tracking-widest text-[10px] uppercase py-4 px-6 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Get Catalog"}
                </button>
                <p className="text-[10px] text-slate-400 mt-3 text-center">
                  By submitting, these details will be sent to Machinery Centre so we can better assist you.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
