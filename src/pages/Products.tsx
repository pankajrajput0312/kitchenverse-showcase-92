import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Search, Phone, Mail, ArrowRight, CheckCircle2, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products } from '@/data/products';
import ProductEnquiryForm from '@/components/ProductEnquiryForm';

// Product categories
const categories = [
  "Dish Wash Area",
  "Bakery & Confectionery",
  "Pot Wash Area",
  "Preparation Machines",
  "Pantry",
  "Cooking Section",
  "Storage Equipment",
  "Service Section",
];

// Product features
const features = [
  "Energy Saving",
  "Corrosion Resistant",
  "Easy to Install",
  "Low Maintenance",
];

// Sort options
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Best Selling", value: "bestselling" },
  { label: "Most Popular", value: "popular" },
];

const CustomCheckbox = ({ checked, onChange, label }: { 
  checked: boolean; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => {
  return (
    <label className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-5 h-5 border-2 border-rose-200 rounded-md 
                       peer-checked:bg-rose-500 peer-checked:border-rose-500 
                       transition-all duration-200 ease-in-out
                       group-hover:border-rose-400">
          <Check className={`w-4 h-4 text-white absolute top-0.5 left-0.5 
                           transition-opacity duration-200 ease-in-out
                           ${checked ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
      <span className="text-gray-600 group-hover:text-rose-600 transition-colors">
        {label}
      </span>
    </label>
  );
};

const Products = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);
    
    const matchesFeatures = selectedFeatures.length === 0 ||
      selectedFeatures.every(feature => product.features.includes(feature));
    
    const matchesStock = !showInStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesFeatures && matchesStock;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <Navigation />
      
      {/* Header Section - Reduced height */}
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-12 lg:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/90 via-red-500/90 to-rose-500/90" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          
          {/* Animated Blobs */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide" />
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide delay-500" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                          border border-white/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-200 animate-pulse"></span>
              <span className="text-sm font-medium">Browse Our Collection</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Our Products
              <span className="block text-2xl font-normal text-rose-100/90 mt-4">
                Discover Our Range of Premium Commercial Kitchen Equipment
              </span>
            </h1>
            <div className="flex items-center gap-3 text-rose-100">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-rose-200/50">•</span>
              <span className="text-white font-medium">Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section - Moved up */}
      <div className="relative z-20 container mx-auto px-4 -mt-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100/20
                       p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-transparent" />
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 w-full rounded-xl border-rose-100/20 
                           focus:border-rose-500 focus:ring-rose-500 bg-white/50
                           text-lg placeholder:text-gray-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-rose-500/50" />
              </div>
              <div className="flex items-center gap-3 text-rose-600 font-medium">
                <span className="px-4 py-2 bg-rose-50 rounded-lg">
                  {filteredProducts.length} Products
                </span>
              </div>
            </div>
            
            {/* Quick Filter Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    if (selectedCategories.includes(category)) {
                      setSelectedCategories(selectedCategories.filter(c => c !== category));
                    } else {
                      setSelectedCategories([...selectedCategories, category]);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedCategories.includes(category)
                      ? 'bg-rose-500 text-white'
                      : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                >
                  {category}
                </button>
              ))}
              <button
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-50 
                         text-gray-600 hover:bg-gray-100 transition-all"
              >
                More Filters...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Reduced top padding */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 
                                           bg-white/80 backdrop-blur-sm rounded-lg shadow-md mb-4 
                                           border border-rose-100/20 hover:bg-rose-50 transition-colors">
                <span className="font-semibold text-rose-900">Filters</span>
                {isFilterOpen ? <ChevronUp className="h-4 w-4 text-rose-500" /> : <ChevronDown className="h-4 w-4 text-rose-500" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-rose-100/20">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <CustomCheckbox
                          key={category}
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                          label={category}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-4">Features</h3>
                    <div className="space-y-3">
                      {features.map((feature) => (
                        <CustomCheckbox
                          key={feature}
                          checked={selectedFeatures.includes(feature)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedFeatures([...selectedFeatures, feature]);
                            } else {
                              setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                            }
                          }}
                          label={feature}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-rose-900 mb-4">Price Range</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      step={1}
                      className="my-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}k</span>
                      <span>${priceRange[1]}k</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <CustomCheckbox
                      checked={showInStockOnly}
                      onChange={(e) => setShowInStockOnly(e.target.checked)}
                      label="Show In Stock Only"
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Product Grid Section */}
          <div className="lg:col-span-3">
            {/* Enhanced Sort Options */}
            <div className="mb-6 flex justify-between items-center bg-white/80 backdrop-blur-sm 
                          p-4 rounded-lg shadow-md border border-rose-100/20">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-rose-100 rounded-lg p-2 bg-transparent 
                         focus:border-rose-500 focus:ring-rose-500 text-gray-600"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="text-rose-600 font-medium">
                {filteredProducts.length} products found
              </span>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} 
                        className="group hover:shadow-xl transition-all duration-300 
                                 bg-white/80 backdrop-blur-sm border border-rose-100/20 
                                 hover:-translate-y-1 overflow-hidden">
                    <CardHeader className="relative overflow-hidden p-0">
                      <div className="p-3">
                        <div className="relative h-52 overflow-hidden rounded-xl">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 
                                      transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>
                      <div className="absolute top-6 right-6">
                        <span className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-sm 
                                      shadow-lg backdrop-blur-sm bg-opacity-90 font-medium">
                          {product.category}
                        </span>
                      </div>
                      {!product.inStock && (
                        <div className="absolute inset-3 bg-black/50 backdrop-blur-sm 
                                      flex items-center justify-center rounded-xl">
                          <span className="text-white font-semibold text-lg px-6 py-2 
                                        bg-black/40 rounded-full border border-white/20">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 
                                     group-hover:text-rose-600 transition-colors line-clamp-1">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 text-sm">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span key={feature}
                                className="text-xs bg-rose-50 text-rose-600 px-3 py-1.5 
                                         rounded-full font-medium border border-rose-100/50
                                         hover:bg-rose-100 transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <p className="text-rose-600 font-semibold flex items-center gap-2">
                          <span className="text-sm text-rose-500">Starting from</span>
                          {product.price}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <Link to={`/products/${product.id}`} className="block">
                          <Button variant="outline" 
                                  className="w-full border-rose-200 text-rose-600 
                                           hover:bg-rose-50 h-11">
                            View Details
                          </Button>
                        </Link>
                        <ProductEnquiryForm 
                          productName={product.title}
                          buttonLabel="Add to Inquiry"
                          buttonClassName="w-full bg-rose-600 hover:bg-rose-700 text-white h-11 flex items-center justify-center gap-2 group"
                          buttonIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-white/80 backdrop-blur-sm 
                               rounded-lg border border-rose-100/20">
                  <p className="text-rose-600 font-semibold mb-2">No products found</p>
                  <p className="text-gray-600">Try adjusting your filters or search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;