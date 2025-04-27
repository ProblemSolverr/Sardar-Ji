// Mock product data - replace with actual data source (e.g., database, API)

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string; // Using string for flexibility (e.g., "$10.99", "₹500")
  weight: string; // e.g., "500g", "1kg"
  imageUrl: string;
  nutritionalInfo: string;
  usageSuggestions: string;
}

 
const products: Product[] = [
  {
    id: 1,
    name: 'Punjabi Gur',
    slug: 'premium-jaggery-block',
    description: 'Traditional, wholesome jaggery block made from pure sugarcane juice. Rich in minerals and natural sweetness. Perfect for traditional sweets and daily consumption.',
    price: '₹150',
    weight: '900gm',
    imageUrl: '/images/normalgurlarge.jpg',
    nutritionalInfo: 'Rich in Iron, Magnesium, and Potassium. Contains antioxidants. Energy: ~380 kcal per 100g.',
    usageSuggestions: 'Use in tea, coffee, desserts like ladoos and halwa, or as a natural sweetener alternative.',
  },
  {
    id: 2,
    name: 'Punjabi Shakkar',
    slug: 'organic-jaggery-powder',
    description: 'Finely ground jaggery powder, certified organic. Easy to dissolve and use in various recipes. Retains the natural goodness of sugarcane.',
    price: '₹120',
    weight: '900gm',
    imageUrl: '/images/Normal Shakkar 900 gm.jpg',
    nutritionalInfo: 'Source of essential minerals. Lower glycemic index compared to refined sugar. No added chemicals.',
    usageSuggestions: 'Sweeten beverages, sprinkle on breakfast cereals, use in baking cakes and cookies, or mix into yogurt.',
  },
  {
    id: 3,
    name: 'Masala Gur',
    slug: 'dark-jaggery-cubes',
    description: 'Aromatic jaggery block infused with traditional spices. Perfect for boosting energy, aiding digestion, and satisfying sweet cravings naturally.',
    price: '₹180',
    weight: '500gm',
    imageUrl: '/images/Masala Gur 500 gm.jpg',
    nutritionalInfo: 'High mineral content, particularly iron. Provides sustained energy release.',
    usageSuggestions: 'Enjoy as a post-meal digestive, add to trail mixes, or melt into sauces and glazes.',
  },
   {
    id: 4,
    name: 'Haldi Shakkar',
    slug: 'export-jaggery-powder-fine',
    description: 'A wholesome blend of jaggery and turmeric, known for boosting immunity and aiding digestion. Perfect for milk, teas, and desserts.',
    price: 'Inquire for Bulk Pricing', // Price might vary for export
    weight: '500gm',
    imageUrl: '/images/Haldi Shakkar 500gm.jpg',
    nutritionalInfo: 'Meets export specifications. Tested for purity and quality. Detailed specs available on request.',
    usageSuggestions: 'Ideal for food manufacturers, international distributors, and repackaging.',
  },
];

// Function to get all products
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return products;
}

// Function to get a single product by slug
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return products.find(product => product.slug === slug);
}
