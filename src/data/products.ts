export const products = [
  {
    id: 1,
    title: "Commercial Gas Stove",
    description: "Professional 4-burner gas stove with high-efficiency burners and robust construction",
    category: "Cooking Section",
    price: "Contact for Price",
    features: ["Energy Saving", "Easy to Install"],
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=60",
    inStock: true,
  },
  {
    id: 2,
    title: "Industrial Refrigerator",
    description: "Double door commercial refrigerator with digital temperature control",
    category: "Storage Equipment",
    price: "Contact for Price",
    features: ["Energy Saving", "Corrosion Resistant"],
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=800&auto=format&fit=crop&q=60",
    inStock: true,
  },
  // ... other products
];

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  image: string;
  inStock: boolean;
}; 