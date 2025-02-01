import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="aspect-square relative overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              {/* Title and Price */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 
                             transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-gray-600">/ Piece</span>
                </div>
              </div>

              {/* Key Specifications */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {product.specifications.usage && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Usage:</span>
                      <span className="text-gray-900">{product.specifications.usage}</span>
                    </div>
                  )}
                  {product.specifications.brand && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand:</span>
                      <span className="text-gray-900">{product.specifications.brand}</span>
                    </div>
                  )}
                  {product.specifications.material && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material:</span>
                      <span className="text-gray-900">{product.specifications.material}</span>
                    </div>
                  )}
                  {product.specifications.capacity && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="text-gray-900">{product.specifications.capacity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex gap-2">
                <button className="flex-1 text-sm px-3 py-2 rounded-md bg-rose-600 text-white 
                                 hover:bg-rose-700 transition-colors">
                  Get Latest Price
                </button>
                <button className="flex-1 text-sm px-3 py-2 rounded-md border border-rose-200 
                                 text-rose-600 hover:bg-rose-50 transition-colors">
                  Get Best Quote
                </button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}; 