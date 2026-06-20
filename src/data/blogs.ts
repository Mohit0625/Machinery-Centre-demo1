export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Essential Maintenance Tips for Air Compressors",
    slug: "essential-maintenance-tips-for-air-compressors",
    excerpt: "Regular maintenance is crucial for the longevity and efficiency of your industrial air compressors. Learn the top 5 tips from our experts.",
    content: `
Regular maintenance of industrial air compressors is essential to ensure they operate efficiently and have a long lifespan. Neglecting routine checks can lead to unexpected breakdowns, costly repairs, and significant downtime for your operations.

### 1. Check and Change Oil Regularly
Just like a car engine, compressors require clean oil to function smoothly. Check the oil level daily and change it according to the manufacturer's recommendations, typically every 500 to 1000 hours of operation.

### 2. Inspect and Replace Filters
Air filters prevent dust and debris from entering the compressor. A clogged filter makes the compressor work harder, increasing energy consumption and wear. Inspect filters weekly and replace them when necessary.

### 3. Drain Moisture from Tanks
During operation, compressors accumulate moisture in the receiver tanks. This moisture must be drained regularly to prevent rust and corrosion inside the tank, which can compromise its structural integrity.

### 4. Monitor Belt Tension
For belt-driven compressors, maintaining the correct tension is vital. Loose belts can slip and reduce efficiency, while overly tight belts can cause excessive wear on bearings.

### 5. Check for Leaks
Air leaks are a major source of wasted energy. Regularly inspect hoses, fittings, and connections for any signs of leaks. Even a small leak can significantly increase your energy bill over time.

By following these simple maintenance tips, you can ensure your air compressors remain reliable and efficient for years to come.
    `,
    author: "Machinery Centre Expert",
    date: "June 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    tags: ["Maintenance", "Air Compressors", "Industrial"]
  },
  {
    id: "2",
    title: "Choosing the Right Pump for Your Industry",
    slug: "choosing-the-right-pump-for-your-industry",
    excerpt: "With so many options available, selecting the perfect pump can be daunting. We break down the key factors to consider for various industrial applications.",
    content: `
Selecting the right industrial pump is a critical decision that impacts the efficiency and reliability of your operations. With a vast array of pump types available, understanding your specific needs is the first step in making an informed choice.

### Centrifugal vs. Positive Displacement
The two primary categories of pumps are centrifugal and positive displacement. 
- **Centrifugal pumps** are ideal for handling large volumes of low-viscosity fluids, such as water or light chemicals. They are widely used in cooling systems, water supply, and general industrial applications.
- **Positive displacement pumps** are better suited for high-viscosity fluids or applications requiring high pressure at lower flow rates. Examples include gear pumps and diaphragm pumps.

### Key Factors to Consider
1. **Fluid Properties:** Consider the viscosity, temperature, and corrosiveness of the fluid being pumped. Specialized materials may be required for aggressive chemicals or abrasive slurries.
2. **Flow Rate and Head:** Determine the required volume of fluid per minute (flow rate) and the total resistance the pump must overcome (head).
3. **Power Source:** Will the pump be driven by an electric motor, diesel engine, or compressed air? Ensure the chosen power source matches your facility's capabilities.
4. **Reliability and Maintenance:** Look for pumps with a reputation for durability and easy access to spare parts. Minimal downtime is crucial in industrial settings.

By carefully evaluating these factors and consulting with experts, you can select a pump that delivers optimal performance and longevity for your specific application.
    `,
    author: "Machinery Centre Technical Team",
    date: "June 02, 2026",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    tags: ["Pumps", "Guide", "Equipment Selection"]
  },
  {
    id: "3",
    title: "The Importance of Energy Efficient Equipment",
    slug: "importance-of-energy-efficient-equipment",
    excerpt: "Upgrading to energy-efficient compressors and pumps can drastically reduce your operational costs. Discover the long-term benefits.",
    content: `
In today's industrial landscape, energy efficiency is no longer just a buzzword; it's a critical component of maintaining a competitive edge. Industrial machinery, particularly compressors and pumps, accounts for a significant portion of a facility's energy consumption.

### The Cost of Inefficiency
Older or poorly maintained equipment often operates at lower efficiency levels, consuming more power to deliver the same output. This inefficiency translates directly into higher utility bills and increased operational costs.

### Benefits of Upgrading
1. **Reduced Operating Costs:** Energy-efficient models, such as those featuring Variable Frequency Drives (VFDs), adjust their output to match the demand, minimizing wasted energy and significantly lowering electricity costs.
2. **Extended Equipment Lifespan:** Efficient machines generally run cooler and experience less mechanical stress, leading to fewer breakdowns and a longer operational life.
3. **Environmental Impact:** Lower energy consumption means a reduced carbon footprint, aligning your operations with sustainable business practices and environmental regulations.
4. **Rebates and Incentives:** Many governments and utility providers offer financial incentives for businesses that upgrade to energy-efficient equipment, offsetting the initial investment.

While the upfront cost of high-efficiency machinery may be higher, the long-term savings in energy and maintenance make it a smart investment for any industrial operation.
    `,
    author: "Machinery Centre Sustainability Group",
    date: "May 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Energy Efficiency", "Sustainability", "Cost Saving"]
  }
];
