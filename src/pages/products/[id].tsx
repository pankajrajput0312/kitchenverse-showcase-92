import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, MessageSquare, Package, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-2xl text-gray-600">Product not found</div>
    </div>
  );

  console.log('Product Details:', product); // For debugging

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Quick Actions */}
          <div className="space-y-6">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50">
                <FileText className="w-4 h-4 mr-2" />
                Product Brochure
              </Button>
              <Button variant="outline" className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get Best Quote
              </Button>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200 border-0">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>
              
              {/* Price Section */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-gray-600">/ piece</span>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 pl-2">
                  Get Latest Price
                </Button>
              </div>

              {/* Product Brochure Link */}
              <div className="flex items-center gap-2 mb-8">
                <img src="/pdf-icon.png" alt="PDF" className="w-8 h-8" />
                <Button variant="link" className="text-gray-900 hover:text-rose-600 p-0">
                  Product Brochure
                </Button>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <Card className="border-0 shadow-lg mb-8">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-rose-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Specifications Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <Card className="border-0 shadow-lg mb-8">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
                    <div className="divide-y">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-2 py-3 first:pt-0 last:pb-0">
                          <span className="text-gray-600 font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Additional Info */}
              <div className="space-y-4 text-gray-900">
                <h3 className="text-lg font-semibold">Additional Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Commercial Use</li>
                  <li>Made in India</li>
                  {product.specifications?.warranty && (
                    <li>{product.specifications.warranty} Warranty</li>
                  )}
                </ul>
              </div>

              {/* CTA Section */}
              <Card className="mt-8 p-6 bg-teal-700 text-white border-0">
                <h3 className="text-xl mb-4">Interested in this product?</h3>
                <Button className="w-full bg-white text-teal-700 hover:bg-gray-100 h-12">
                  Yes, I am interested!
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 