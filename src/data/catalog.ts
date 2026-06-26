import { Wind, Droplets, Filter, Cpu } from "lucide-react";

// -----------------------------
// Catalog Data Structure
// -----------------------------
export const catalogData = {
  compressors: {
    label: "Compressors",
    icon: Wind,
    description: "Authorized Dealers of Ingersoll-Rand, Sonee Air Compressors and Trident. Diverse range of options to optimize your business's fixed costs.",
    subcategories: [
      {
        id: "all-compressors",
        label: "Air Compressors",
        image: "/assets/images/about-main.webp",
        products: [
          {
            title: "Trendi Energy Efficient Screw Air Compressor",
            desc: "Advanced Screw Airend with Intelligent Microprocessor based Electronic Controller. Low Specific Power Consumption with less noise level and ease of maintenance.",
            brands: ["Trendi"],
            features: ["Three stage Air Oil Separator", "Compressors with VFD (Optional)", "Low Specific Power Consumption", "IE3 Electric Motors"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1VN7WVekzZYVYHpGATtpQOEQQiaSqvtpp",
            image: "/assets/images/about-main.webp"
          },
          {
            title: "Trendi Base Mounted Direct Drive Screw Compressors",
            desc: "Base mounted direct drive screw compressors providing reliable performance. Available in multiple capacities and dimensions.",
            brands: ["Trendi"],
            features: ["Direct Drive", "Base Mounted", "Low noise design"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1x45zNBjsj9jrgPzVVDyNcgDkvmIx5Kl7",
            image: "/assets/images/about-main.webp"
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
            catalogLink: "https://drive.google.com/uc?export=download&id=1V3G7HYCPfRk-0CJBdt7toAmquvRVHE3t",
            image: "/assets/images/about-main.webp"
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
            catalogLink: "https://drive.google.com/uc?export=download&id=1nZQ7xCTVp73Fyus9UpWcVJdn_YtEJt3E",
            image: "/assets/images/hero-machinery.webp"
          }
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
        id: "gear-pump",
        label: "Gear Pumps",
        image: "/assets/images/industry-cement.webp",
        products: [
          {
            title: "Gear Pumps",
            brands: ["Rotodel"],
            desc: "High viscosity fluid handling designed to run up to 1440 RPM.",
            features: ["Type HGSX", "Type HGHX"],
            catalogLink: "https://drive.google.com/uc?export=download&id=17bjoJ1m4XfzzhZwQdpA3J8bgP5_R1ln1",
            image: "/assets/images/industry-cement.webp"
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
            catalogLink: "https://drive.google.com/uc?export=download&id=1LCiAcCRJdCNlRRNhtmutsk5clv28rvUS",
            image: "/assets/images/industry-cement.webp"
          }
        ]
      },
      {
        id: "metering-pump",
        label: "Metering Pumps",
        image: "/assets/images/service-milling.webp",
        products: [
          {
            title: "Metering Pumps",
            desc: "Precision metering and dosing pumps engineered for accurate, repeatable flow control in chemical dosing and process applications.",
            brands: ["Kirloskar"],
            features: [
              "Accurate, repeatable dosing",
              "Adjustable flow / stroke control",
              "Chemical-compatible construction"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1J-1j3_cQbZW7RhaQY8N5plq0-sbBjl1F",
            image: "/assets/images/service-milling.webp"
          }
        ]
      },
      {
        id: "vacuum-pump",
        label: "Vacuum Pumps",
        image: "/assets/images/industry-paint.webp",
        products: [
          {
            title: "KV/DV VACUUM PUMPS",
            desc: "Designed to withstand wide voltage fluctuations. Features dynamic balancing mapping and designed to prevent overloading.",
            brands: ["Kirloskar"],
            features: [
              "Vacuum: Upto 640 mm of mercury", 
              "Air Flow Rate: Upto 162 m³/hr", 
              "Wide Voltage Design",
              "Replaceable Wearing Parts"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1QaclCLlzM8B9ZieP083Bxp-8M4_V41Pc",
            image: "/assets/images/industry-paint.webp"
          }
        ]
      }
    ]
  },
  "air-treatment": {
    label: "Air Treatment",
    icon: Filter,
    description: "Complete compressed air treatment solutions. From providing equipment, to piping, hosing and fitting needs of your enterprise.",
    subcategories: [
      {
        id: "air-dryers",
        label: "Air Dryers",
        image: "/assets/images/service-laser.webp",
        products: [
          {
            title: "TRIDENT Dryspell Series",
            desc: "Heatless desiccant compressed air dryers, offering total cleaning solution for lubricated as well as non-lubricated compressed air.",
            brands: ["Trident"],
            features: ["Noise level < 70 decibels", "Free from corrosion & scale formation", "High strength adsorbent material"],
            catalogLink: "https://drive.google.com/uc?export=download&id=17Km0_hcnxVQ6YcY75JUlFsmiWzbOSWmD",
            image: "/assets/images/service-laser.webp"
          },
          {
            title: "TRIDENT Coldspell",
            desc: "Refrigeration compressed air dryer featuring an anti-recycle feature for compressor protection.",
            brands: ["Trident"],
            features: ["ISO 8573 - 1 : 2010 (E) class -5-", "Anti-recycle feature", "Large condenser"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1W_-wRxgKEuZt5IZHc0WWDGESM2TcmBC-",
            image: "/assets/images/service-laser.webp"
          }
        ]
      },
      {
        id: "filtration",
        label: "Filtration Systems",
        image: "/assets/images/industry-packaging.webp",
        products: [
          {
            title: "TRIDENT Submicron Filters Cleansweep",
            desc: "Extremely low installation clearance filters removing oil and particulate down to 0.01 micron.",
            brands: ["Trident"],
            features: ["Oil Removal (Coalescing)", "Flow from 20 to 1810 m³/hour", "Install anywhere"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1_CM0y0VbRDy1iMxmjLadMl-1EqeA7g1e",
            image: "/assets/images/industry-packaging.webp"
          },
          {
            title: "TRIDENT Bacteria Filter Series",
            desc: "Provides protection from bacteria in compressed air applications for medical and food industries.",
            brands: ["Trident"],
            features: ["Aluminium alloy housing, hard anodized", "Compatible with autoclave sterilisation", "Borosilicate filter media"],
            catalogLink: "https://drive.google.com/uc?export=download&id=1Yhox1XasGhUigrJ6cnrAKFd0a4nhEPki",
            image: "/assets/images/industry-packaging.webp"
          }
        ]
      }
    ]
  },
  spares: {
    label: "Spares",
    icon: Cpu,
    description: "We provide you with all the spares and accessories for Boiler Feed Pumps, Chemical Pumps, Water Lifting Pumps, Sewerage Pumps, Self Priming Pumps, Centrifugal Pumps, Pumps for Fire Fighting, Booster Pumps, etc.",
    subcategories: [
      {
        id: "parts-accessories",
        label: "OEM Spares",
        image: "/assets/images/service-turning.webp",
        products: [
          {
            title: "Pump Spares",
            desc: "Genuine parts and accessories for a wide range of industrial and commercial pumps.",
            brands: ["Kirloskar", "Crompton", "Rotodel"],
            features: [
              "Boiler Feed Pump Spares",
              "Chemical Pump Spares",
              "Water Lifting & Sewerage Pump Spares",
              "Fire Fighting & Booster Pump Spares"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1rUveEEGcs_G-Ha8gmeC1tE9UAqGaPODX",
            image: "/assets/images/service-turning.webp"
          },
          {
            title: "Compressor & Air Parts",
            desc: "OEM and compatible accessories for major compressor brands. Air & oil filters, air-oil separators, intake valves, gaskets, service kits and more.",
            brands: ["Ingersoll Rand", "Trident", "Trendi"],
            features: [
              "Ingersoll Rand Spares",
              "Kirloskar & Crompton Greaves Spares",
              "Trident, Elgi, & Janatics Components",
              "Rotodel, Indfoss, & Everest Accessories"
            ],
            catalogLink: "https://drive.google.com/uc?export=download&id=1PIawPtp0X-e10yHstbav5lh5A1he4ABQ",
            image: "/assets/images/service-turning.webp"
          }
        ]
      }
    ]
  }
};
