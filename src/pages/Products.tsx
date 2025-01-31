import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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

const products = [
  {
    id: 1,
    title: "Commercial Cooking Range",
    description: "Professional grade cooking equipment for high-volume kitchens",
    category: "Cooking Section",
    price: "Contact for Price",
    features: ["Energy Saving", "Easy to Install"],
    image: "/placeholder.svg",
    inStock: true,
  },
  {
    id: 2,
    title: "Industrial Refrigerator",
    description: "Temperature controlled storage solutions for all kitchen needs",
    category: "Storage Equipment",
    price: "Contact for Price",
    features: ["Energy Saving", "Corrosion Resistant"],
    image: "/placeholder.svg",
    inStock: true,
  },
  {
    id: 3,
    title: "Food Preparation Unit",
    description: "Efficient preparation equipment for commercial kitchens",
    category: "Preparation Machines",
    price: "Contact for Price",
    features: ["Low Maintenance", "Easy to Install"],
    image: "/placeholder.svg",
    inStock: false,
  },
];

const Products = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Our Products</h1>
          <div className="text-gray-600">Home &gt; Products</div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm mb-4">
                <span className="font-semibold">Filters</span>
                {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-6 bg-white p-4 rounded-lg shadow-sm">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, category]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== category));
                              }
                            }}
                            className="rounded border-gray-300"
                          />
                          <span>{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <div className="space-y-2">
                      {features.map((feature) => (
                        <label key={feature} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFeatures([...selectedFeatures, feature]);
                              } else {
                                setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                              }
                            }}
                            className="rounded border-gray-300"
                          />
                          <span>{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-2">Price Range</h3>
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
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={showInStockOnly}
                        onChange={(e) => setShowInStockOnly(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <span>Show In Stock Only</span>
                    </label>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="mb-6 flex justify-between items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md p-2"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="text-gray-600">{filteredProducts.length} products found</span>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <p className="text-primary font-semibold mb-4">{product.price}</p>
                      <div className="space-y-2">
                        <Link to={`/products/${product.id}`} className="block">
                          <Button variant="outline" className="w-full">View Details</Button>
                        </Link>
                        <Button
                          className="w-full"
                          onClick={() => handleAddToInquiry(product.id)}
                        >
                          Add to Inquiry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600">No products found matching your criteria.</p>
                  <p className="text-gray-500">Try adjusting your filters or search term.</p>
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