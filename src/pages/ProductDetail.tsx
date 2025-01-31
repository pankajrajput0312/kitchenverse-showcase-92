import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const products = [
  {
    id: 1,
    title: "Commercial Cooking Range",
    description: "Professional grade cooking equipment for high-volume kitchens",
    category: "Cooking Section",
    price: "Contact for Price",
    image: "/placeholder.svg",
    features: [
      "Heavy duty construction",
      "Energy efficient design",
      "Multiple cooking zones",
      "Temperature control system",
    ],
    specifications: {
      dimensions: "120 x 80 x 90 cm",
      weight: "150 kg",
      power: "3 Phase",
      material: "Stainless Steel",
    },
  },
  // Add more products with their details
];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const handleInquiry = () => {
    toast({
      title: "Inquiry Sent",
      description: "We'll get back to you soon regarding this product.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">{product.title}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-primary mb-6">{product.price}</p>
                
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 mb-2">{feature}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold capitalize">{key}: </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" onClick={handleInquiry} className="w-full md:w-auto">
                  Request Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;