import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Commercial Cooking Range",
    description: "Professional grade cooking equipment for high-volume kitchens",
    category: "Cooking Section",
    price: "Contact for Price",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Industrial Refrigerator",
    description: "Temperature controlled storage solutions for all kitchen needs",
    category: "Storage Equipment",
    price: "Contact for Price",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Food Preparation Unit",
    description: "Efficient preparation equipment for commercial kitchens",
    category: "Preparation Machines",
    price: "Contact for Price",
    image: "/placeholder.svg"
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4">{product.title}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-primary font-semibold mb-4">{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;