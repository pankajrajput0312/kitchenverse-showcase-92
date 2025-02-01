export const products = [
  {
    id: 1,
    title: "Table Top Double Deep Fat Fryer",
    price: "₹ 14,500",
    description: "Commercial grade double deep fat fryer with 10+10 liters capacity, perfect for restaurants and commercial kitchens.",
    image: "/products/double-fryer.jpg",
    inStock: true,
    features: [
      "10+10 Liters Capacity",
      "Stainless Steel Construction",
      "50 Hz Frequency",
      "Electric Powered",
      "Polished Finish"
    ],
    specifications: {
      brand: "MEC",
      size: "1/2 Gn 2",
      color: "Silver",
      frequency: "50 Hz",
      weight: "20 Kg",
      capacity: "10+10 Liters",
      material: "SS",
      finishingType: "Polished",
      powerSource: "Electric",
      countryOfOrigin: "Made in India"
    },
    category: "Cooking Equipment"
  },
  {
    id: 2,
    title: "Hot Case",
    price: "₹ 26,500",
    description: "Stainless steel hot case for commercial food display and storage.",
    image: "/products/hot-case.jpg",
    inStock: true,
    features: [
      "Restaurant Grade",
      "Customized Design",
      "Rectangular Shape",
      "Stainless Steel Construction"
    ],
    specifications: {
      material: "Stainless Steel",
      color: "Silver",
      usage: "Restaurant",
      shape: "Rectangular",
      design: "Customised",
      type: "Hot Case",
      countryOfOrigin: "Made in India"
    },
    category: "Display Equipment"
  },
  {
    id: 3,
    title: "Two Tank Pasta Boiler",
    price: "₹ 32,500",
    description: "Professional dual tank pasta boiler with 10+10 capacity and stainless steel construction.",
    image: "/products/pasta-boiler.jpg",
    inStock: false,
    features: [
      "10+10 Capacity",
      "1 Year Warranty",
      "Stainless Steel Build",
      "With Lid Included"
    ],
    specifications: {
      shape: "Rectangular",
      brand: "MEC",
      size: "600x700x850+150",
      capacity: "10+10",
      material: "Stainless Steel",
      color: "Silver",
      withLid: "yes",
      weight: "50 Kg",
      warranty: "1 Year"
    },
    category: "Cooking Equipment"
  },
  {
    id: 4,
    title: "Electric Salamander Grills",
    price: "₹ 12,500",
    description: "Commercial electric salamander grill for professional kitchen use.",
    image: "/products/salamander-grill.jpg",
    inStock: true,
    features: [
      "Commercial Grade",
      "Electric Powered",
      "Stainless Steel Construction",
      "Compact Design"
    ],
    specifications: {
      material: "Stainless Steel",
      color: "Silver",
      productType: "Salamander Grill",
      powerSource: "Electric",
      size: "400 x 300 x 350 cm",
      usage: "Commercial"
    },
    category: "Grilling Equipment"
  },
  {
    id: 5,
    title: "Tea and Coffee Dispenser",
    price: "₹ 13,500",
    description: "Manual tea and coffee dispenser with high serving capacity for restaurants.",
    image: "/products/tea-dispenser.jpg",
    inStock: true,
    features: [
      "100-150 cups per day",
      "2-5 cups per minute",
      "Manual Operation",
      "Stainless Steel Build"
    ],
    specifications: {
      brand: "MEC",
      typeOfBeverage: "Milk /Tea",
      usage: "Restaurant",
      material: "Stainless Steel",
      dimension: "500x350x400",
      operationMode: "Manual",
      servingCapacity: "100 - 150 cups per day",
      dispensingRate: "2-5 cups per minute"
    },
    category: "Beverage Equipment"
  },
  {
    id: 6,
    title: "Electric Idli Steamer",
    price: "₹ 18,500",
    description: "Commercial electric idli steamer with 54 idlies capacity.",
    image: "/products/idli-steamer.jpg",
    inStock: true,
    features: [
      "54 Idlies Capacity",
      "220V Power",
      "Stainless Steel Construction",
      "Commercial Grade"
    ],
    specifications: {
      type: "Steamer",
      usage: "Restaurant",
      capacity: "54 Idlies",
      material: "Stainless Steel",
      power: "Electric",
      voltage: "220V",
      color: "Steel",
      countryOfOrigin: "Made in India"
    },
    category: "Cooking Equipment"
  }
];

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  inStock: boolean;
}; 