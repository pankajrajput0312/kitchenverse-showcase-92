import React from 'react';
import { Card } from "@/components/ui/card";
import { Building2, ArrowRight } from 'lucide-react';
import { partners } from './AboutUs'; // Import partners if needed
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <Navigation />
      
      {/* Hero Section with Enhanced Design */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-500 via-red-500 to-red-600">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-900/50" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide" />
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide delay-500" />
          </div>
        </div>

        <div className="relative h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="group relative inline-block">
                  <span className="inline-flex items-center gap-2 text-rose-100 text-lg font-medium px-4 py-2 
                                 border border-rose-200/20 rounded-full bg-white/5 backdrop-blur-sm
                                 hover:bg-white/10 transition-all cursor-pointer">
                    <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                    Premium Kitchen Equipment
                    <svg className="w-4 h-4 text-rose-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  
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
              <h1 className="text-7xl font-bold mb-6 text-white leading-tight">
                Crafting Excellence in
                <span className="block mt-2 bg-gradient-to-r from-rose-100 to-rose-200 text-transparent bg-clip-text">
                  Commercial Kitchens
                </span>
              </h1>
              <p className="text-xl text-rose-100 max-w-2xl mb-8 leading-relaxed">
                Leading manufacturer of premium commercial kitchen and canteen equipment, 
                delivering innovation and quality since 1998.
              </p>
              <div className="flex gap-4 items-center">
                <button className="group bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold 
                                 flex items-center gap-2 hover:bg-rose-50 transition-all shadow-lg shadow-rose-500/20">
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 rounded-lg font-semibold 
                                 flex items-center gap-2 text-white border border-white/20 hover:bg-white/10 transition-all">
                  Contact Sales
                  <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:animate-ping"></span>
                </button>
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
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-24 bg-gradient-to-t from-rose-900/20 to-transparent" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                         bg-rose-500/30 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm border-t border-rose-100/20">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Years Experience", icon: "🏆" },
              { value: "1000+", label: "Projects Completed", icon: "🎯" },
              { value: "500+", label: "Happy Clients", icon: "🤝" },
              { value: "50+", label: "Products", icon: "⚡" }
            ].map((stat, index) => (
              <div key={index} 
                   className="group p-6 bg-rose-50/50 rounded-xl transition-all duration-300
                            hover:bg-gradient-to-br hover:from-rose-500 hover:to-red-600 
                            hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <span className="text-2xl mb-4 block">{stat.icon}</span>
                <span className="block text-4xl font-bold text-rose-600 mb-2 
                               group-hover:text-white transition-colors">{stat.value}</span>
                <span className="text-rose-500/80 group-hover:text-white/90 transition-colors">{stat.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <FeaturedProducts />

      {/* Enhanced Partners Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-50/50 -z-10" />
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 font-medium mb-4">Our Partners</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-rose-600 to-red-600 text-transparent bg-clip-text">
              Trusted By Industry Leaders
            </h2>
            <p className="text-rose-600/80 max-w-2xl mx-auto">
              We collaborate with the best in the industry to deliver exceptional quality and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} 
                   className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl 
                            transition-all duration-300 hover:-translate-y-1 border border-rose-100/20">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-xl mb-4 flex items-center justify-center relative
                                before:absolute before:inset-0 before:bg-gradient-to-br 
                                before:from-rose-50 before:to-white
                                before:rounded-xl before:opacity-0 before:group-hover:opacity-100 
                                before:transition-opacity"
                       style={{ backgroundColor: `${partner.color}10` }}>
                    {React.createElement(partner.icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>, {
                      className: "w-12 h-12 transition-all duration-300 group-hover:scale-110 relative z-10",
                      style: { color: partner.color }
                    })}
                  </div>
                  <h3 className="font-semibold text-rose-900">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section with Modern Design */}
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="absolute inset-0 bg-grid-black/[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ContactSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-900 to-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-rose-100/80">Leading manufacturer of premium commercial kitchen equipment since 1998.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-rose-100/80">
                <li className="hover:text-white transition-colors cursor-pointer">Products</li>
                <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-rose-100/80">
                <li>contact@company.com</li>
                <li>+1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social media icons with rose hover effect */}
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-500 
                              transition-colors duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-500 
                              transition-colors duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-500 
                              transition-colors duration-300 cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-rose-100/10 mt-8 pt-8 text-center text-rose-100/60">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;