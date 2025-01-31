import { Button } from "@/components/ui/button";
import { ChefHat, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Kitchen & Canteen Equipment Manufacturers
            </h1>
            <p className="text-lg text-gray-200">
              Delivering quality equipment solutions for commercial kitchens across India
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Products
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6 animate-fadeIn">
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <ChefHat className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Manufacturing</h3>
                <p className="text-gray-200">Built with precision and care</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Award className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-200">ISO certified products</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Users className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted by Many</h3>
                <p className="text-gray-200">Serving major institutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;