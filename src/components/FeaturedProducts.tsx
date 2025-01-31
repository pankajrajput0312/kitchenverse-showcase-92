import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CookingPot, Refrigerator, UtensilsCrossed } from "lucide-react";

const products = [
  {
    title: "Commercial Cooking Range",
    description: "Professional grade cooking equipment for high-volume kitchens",
    icon: CookingPot,
    category: "Cooking Section",
  },
  {
    title: "Industrial Refrigeration",
    description: "Temperature controlled storage solutions for all kitchen needs",
    icon: Refrigerator,
    category: "Storage Equipment",
  },
  {
    title: "Food Preparation Units",
    description: "Efficient preparation equipment for commercial kitchens",
    icon: UtensilsCrossed,
    category: "Preparation Machines",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional kitchen equipment designed for efficiency and durability
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;