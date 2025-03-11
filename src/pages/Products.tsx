import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Search, Phone, Mail, ArrowRight, CheckCircle2, Check, X } from "lucide-react";
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
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productName: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

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

  const handleAddToInquiry = (productId: number) => {
    toast({
      title: "Added to Inquiry",
      description: "We'll get back to you soon with a quote.",
    });
  };

  const handleEnquiry = (productName: string) => {
    setSelectedProduct(productName);
    setFormData(prev => ({ ...prev, productName }));
    setIsEnquiryOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsEnquiryOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 overflow-x-hidden">
      <Navigation />
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-8 lg:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/90 via-red-500/90 to-rose-500/90" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          
          {/* Adjusted Blobs for mobile */}
          <div className="absolute -top-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] 
                         bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] 
                         bg-red-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Content - Added container class */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 
                           backdrop-blur-sm border border-white/20 text-white mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-200 animate-pulse"></span>
              <span className="text-sm font-medium">Browse Our Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Products
              <span className="block text-lg md:text-2xl font-normal text-rose-100/90 mt-2">
                Discover Our Range of Premium Commercial Kitchen Equipment
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Search Section - Added container class */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100/20 p-4 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 md:py-6 w-full rounded-xl border-rose-100/20 
                         focus:border-rose-500 focus:ring-rose-500 bg-white/50
                         text-base md:text-lg placeholder:text-gray-400"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-500/50" />
            </div>
            
            {/* Quick Filter Tags - Mobile friendly */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 2).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    if (selectedCategories.includes(category)) {
                      setSelectedCategories(selectedCategories.filter(c => c !== category));
                    } else {
                      setSelectedCategories([...selectedCategories, category]);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    ${selectedCategories.includes(category)
                      ? 'bg-rose-500 text-white'
                      : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-50 
                         text-gray-600 hover:bg-gray-100 transition-all"
              >
                More Filters...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Added container class */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Mobile Filters Dialog */}
          <Dialog open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
            <DialogContent className="sm:max-w-[100%] h-[90vh] block lg:hidden">
              <DialogHeader>
                <DialogTitle>Filters</DialogTitle>
              </DialogHeader>
              <div className="overflow-y-auto h-full pb-20">
                <div className="space-y-6">
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

                  {/* Other filter sections... */}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
                <Button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-rose-600"
                >
                  Apply Filters
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
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

          {/* Product Grid Section - Mobile optimized */}
          <div className="lg:col-span-3">
            {/* Sort Options - Mobile friendly */}
            <div className="mb-4 flex justify-between items-center bg-white/80 backdrop-blur-sm 
                          p-3 md:p-4 rounded-lg shadow-md border border-rose-100/20">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm md:text-base border border-rose-100 rounded-lg p-2 bg-transparent 
                         focus:border-rose-500 focus:ring-rose-500 text-gray-600"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="text-sm md:text-base text-rose-600 font-medium">
                {filteredProducts.length} products
              </span>
            </div>

            {/* Products Grid - Mobile friendly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} 
                        className="group hover:shadow-xl transition-all duration-300 
                                 bg-white/80 backdrop-blur-sm border border-rose-100/20 
                                 hover:-translate-y-1 overflow-hidden cursor-pointer"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          window.location.href = `/products/${product.id}`;
                        }}
                  >
                    <CardHeader className="relative overflow-hidden p-0">
                      <div className="p-3">
                        <div className="relative h-48 md:h-52 overflow-hidden rounded-xl">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 
                                      transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
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
                        <Button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            handleEnquiry(product.title);
                          }}
                          className="w-full bg-rose-600 hover:bg-rose-700 text-white h-11
                                   flex items-center justify-center gap-2 group"
                        >
                          Add to Inquiry
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8 bg-white/80 backdrop-blur-sm 
                               rounded-lg border border-rose-100/20">
                  <p className="text-rose-600 font-semibold mb-2">No products found</p>
                  <p className="text-gray-600">Try adjusting your filters or search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized Enquiry Form Dialog */}
      <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                 sm:max-w-[425px] w-[calc(100%-32px)] rounded-lg
                                 bg-white z-50 p-6 gap-6 shadow-xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold">Product Enquiry</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 py-2 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input 
                  id="product" 
                  value={selectedProduct} 
                  disabled 
                  className="bg-gray-50 border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[100px] border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20 resize-none"
                />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                Submit Enquiry
              </Button>
            </DialogFooter>
          </form>

          <button
            onClick={() => setIsEnquiryOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background 
                     transition-opacity hover:opacity-100 focus:outline-none 
                     focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none 
                     data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogContent>
      </Dialog>

      {/* Success Message Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-[425px] w-[95%] rounded-lg">
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@company.com</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;