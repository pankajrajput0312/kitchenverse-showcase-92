import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Package, 
  Shield,
  Settings,
  Wrench,
  Check, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Truck,
  CheckCircle2
} from 'lucide-react';
import { products } from '@/data/products';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ProductEnquiryForm from '@/components/ProductEnquiryForm';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const { toast } = useToast();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productName: ''
  });
  
  // Find the product based on the ID
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Use single product image since multiple images aren't available in data
  const productImages = [
    product.image,
  ];

  // Map specifications from product data
  const specifications = Object.entries(product.specifications).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to spaces
    value: value
  }));

  // Use features from product data
  const features = product.features || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="relative z-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-rose-600 transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products" className="hover:text-rose-600 transition-colors">Products</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-rose-600 font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white p-4 border border-rose-100/20">
              <img
                src={productImages[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all
                    ${activeImage === index 
                      ? 'border-rose-500 ring-2 ring-rose-500/20' 
                      : 'border-transparent hover:border-rose-200'}`}
                >
                  <img
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Package, text: "Premium Quality" },
                  { icon: Shield, text: "1 Year Warranty" },
                  { icon: Settings, text: "Easy Installation" },
                  { icon: Wrench, text: "24/7 Support" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600">
                    <feature.icon className="w-5 h-5 text-rose-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <Card className="p-6 bg-rose-50/50 border-rose-100/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-rose-600 font-medium">Starting from</p>
                    <p className="text-3xl font-bold text-gray-900">{product.price}</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium">In Stock</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <ProductEnquiryForm productName={product.title} />
                  <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 h-12">
                    Download Brochure
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Phone, text: "+1 234 567 890" },
                { icon: Mail, text: "sales@company.com" },
                { icon: Clock, text: "24/7 Support" },
              ].map((item, index) => (
                <div key={index} 
                     className="flex flex-col items-center gap-2 p-4 rounded-xl 
                              bg-white border border-rose-100/20 text-center">
                  <item.icon className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              {["Specifications", "Features", "Shipping"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="data-[state=active]:border-rose-500 data-[state=active]:bg-transparent 
                           data-[state=active]:shadow-none border-b-2 border-transparent
                           rounded-none px-8 py-3 text-base"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="specifications" className="mt-0">
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-0">
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="mt-0">
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Truck className="w-6 h-6 text-rose-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Free Shipping</h3>
                        <p className="text-gray-600">
                          We offer free shipping for all orders above $1000. Standard delivery takes 3-5 business days.
                        </p>
                      </div>
                    </div>
                    {/* Add more shipping information as needed */}
                  </div>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;