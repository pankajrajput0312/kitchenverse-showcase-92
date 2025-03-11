import React from 'react';
import { Card } from "@/components/ui/card";
import { Building2, ArrowRight } from 'lucide-react';
import { partners } from './AboutUs'; // Import partners if needed
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ContactSection from "@/components/ContactSection";
import { 
  Award, 
  ChefHat, 
  Users, 
  Settings, 
  Shield, 
  HeartHandshake, 
  Star,
  Wrench,
  BadgeCheck,
  ThumbsUp
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <Navigation />
      
      {/* Hero Section with Enhanced Design */}
      <div className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-rose-500 via-red-500 to-red-600">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-900/50" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-400/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide" />
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide delay-500" />
          </div>
        </div>

        <div className="relative min-h-[100dvh] flex items-center w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-0">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="animate-fade-in-up max-w-3xl mx-auto w-full text-center md:text-left">
                <div className="flex items-center gap-2 mb-6">
                  <div className="group relative inline-block">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 
                                 backdrop-blur-sm border border-white/20 text-white mb-4">
                      <span className="w-2 h-2 rounded-full bg-rose-200 animate-pulse"></span>
                      <span className="text-xs sm:text-sm font-medium">Premium Kitchen Equipment</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300">
                      <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-xl 
                                    border border-rose-200/20 shadow-xl">
                        <div className="text-sm text-rose-100 font-normal">
                          Discover our range of high-quality commercial kitchen equipment, 
                          designed for professional kitchens and food service establishments.
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                                      border-8 border-transparent border-t-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Crafting Excellence in
                  <span className="block mt-2 bg-gradient-to-r from-rose-100 to-rose-200 text-transparent bg-clip-text">
                    Commercial Kitchens
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-rose-100 max-w-2xl mb-8 leading-relaxed">
                  Leading manufacturer of premium commercial kitchen and canteen equipment, 
                  delivering innovation and quality since 1998.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <Link to="/products" className="group bg-white text-rose-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                                   flex items-center justify-center gap-2 hover:bg-rose-50 transition-all shadow-lg shadow-rose-500/20">
                    Explore Our Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="group bg-transparent hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
                                   font-semibold flex items-center justify-center gap-2 border-2 border-white/30
                                   transition-all duration-200">
                    Contact Sales
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Feature Cards */}
              <div className="hidden md:grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
                {[
                  { title: "Quality First", desc: "Premium grade materials", icon: "🌟" },
                  { title: "Custom Design", desc: "Tailored solutions", icon: "✨" },
                  { title: "Expert Support", desc: "24/7 assistance", icon: "💫" },
                  { title: "Fast Delivery", desc: "Nationwide shipping", icon: "⚡" }
                ].map((feature, index) => (
                  <div key={index} 
                       className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 
                                hover:bg-white/20 transition-all duration-300 cursor-pointer
                                hover:scale-105 hover:shadow-lg hover:shadow-rose-500/10">
                    <span className="text-2xl mb-3 block">{feature.icon}</span>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-rose-100/80 text-sm">{feature.desc}</p>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-rose-100/40 to-transparent 
                                  transition-all duration-300 mt-4 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-24 bg-gradient-to-t from-rose-900/20 to-transparent" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                         bg-rose-500/30 rounded-full blur-3xl" />
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                <span className="text-sm font-medium text-rose-600">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">25+ Years of Excellence in Commercial Kitchen Equipment</h2>
              <p className="text-lg text-gray-600">
                Since 1998, Muskan Equipments has been at the forefront of commercial kitchen innovation, 
                serving diverse industries with premium quality equipment and unmatched expertise.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { number: "25+", label: "Years Experience" },
                  { number: "1000+", label: "Projects Completed" },
                  { number: "500+", label: "Regular Clients" },
                  { number: "50+", label: "Product Categories" },
                ].map((stat, index) => (
                  <div key={index} className="bg-rose-50/50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-rose-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://placehold.co/800x800/e2e8f0/1e293b?text=Modern+Factory+Setup" 
                  alt="Our Factory" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
              <span className="text-sm font-medium text-rose-600">Our Products</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Kitchen Equipment Solutions</h2>
            <p className="text-lg text-gray-600">
              Explore our wide range of commercial kitchen equipment, designed for efficiency and durability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Cooking Equipment",
                description: "Professional cooking ranges, ovens, and grills",
                image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Professional+Cooking+Equipment"
              },
              {
                icon: Building2,
                title: "Bakery Equipment",
                description: "Specialized equipment for bakeries",
                image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Bakery+Equipment"
              },
              {
                icon: Settings,
                title: "Dish Washing Equipment",
                description: "Industrial dishwashers and cleaning systems",
                image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Dishwashing+Systems"
              },
              {
                icon: ThumbsUp,
                title: "Refrigeration",
                description: "Commercial refrigeration solutions",
                image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Commercial+Refrigeration"
              },
              {
                icon: Shield,
                title: "Storage Equipment",
                description: "Storage and handling solutions",
                image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Storage+Solutions"
              }
            ].map((category, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <category.icon className="w-6 h-6" />
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <p className="text-white/90">{category.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-rose-600 hover:bg-rose-700">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
              <span className="text-sm font-medium text-rose-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Muskan Advantage</h2>
            <p className="text-lg text-gray-600">
              Experience excellence in commercial kitchen equipment with our comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality & Durability",
                description: "Corrosion-resistant, energy-efficient equipment built to last"
              },
              {
                icon: Settings,
                title: "Customization",
                description: "Tailored solutions based on your specific kitchen needs"
              },
              {
                icon: Users,
                title: "Trusted by Leaders",
                description: "Preferred choice of top hotels and restaurants"
              },
              {
                icon: HeartHandshake,
                title: "After-Sales Support",
                description: "Comprehensive installation and maintenance services"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-1 bg-gradient-to-br from-rose-50/50 to-white"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
              <span className="text-sm font-medium text-rose-600">Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Trusted by leading institutions and businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "Exceptional quality equipment that has transformed our kitchen operations.",
                author: "Executive Chef",
                company: "Fortune Hotels"
              },
              {
                quote: "Professional service and outstanding product quality. Highly recommended.",
                author: "Director",
                company: "IIT Kanpur"
              },
              {
                quote: "Reliable equipment and excellent after-sales support.",
                author: "F&B Manager",
                company: "Indian Oil"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Star className="w-8 h-8 text-rose-600 mb-6" />
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-rose-600">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { src: "/logos/clients/btw.png", alt: "BTW Logo" },
              { src: "/logos/clients/DRDO.png", alt: "DRDO Logo" },
              { src: "/logos/clients/indian_air_force.png", alt: "Indian Air Force Logo" },
              { src: "/logos/clients/indian_oil.png", alt: "Indian Oil Logo" },
              { src: "/logos/clients/ntpc.png", alt: "NTPC Logo" },
              { src: "/logos/clients/parle.png", alt: "Parle Logo" }
            ].map((logo, index) => (
              <img 
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-20 object-contain opacity-100 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-rose-600 to-red-700 text-white p-12 border-none">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Make Your Kitchen with Us</h2>
                <p className="text-lg text-rose-100">
                  We understand your requirements and customize kitchen equipment to fit your space and needs.
                  Let's create the perfect kitchen solution together.
                </p>
                <Button className="bg-white text-rose-600 hover:bg-rose-50">
                  Request a Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="relative">
                <Wrench className="w-48 h-48 text-white/10 absolute -top-12 -right-12" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Custom Dimensions",
                    "Space Optimization",
                    "Workflow Planning",
                    "Energy Efficiency"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-rose-100">
                      <BadgeCheck className="w-5 h-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Existing Contact Section */}
      <ContactSection />

      
    </div>
  );
};

export default HomePage;