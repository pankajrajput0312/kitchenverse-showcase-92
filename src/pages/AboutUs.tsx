import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Settings, Users, Phone, Mail, MapPin, CheckCircle2, BookOpen, Briefcase, Building, Coffee, Globe, Landmark } from 'lucide-react';
import Footer from '@/components/Footer';

interface Partner {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  description: string;
  acronym: string;
}

export const partners: Partner[] = [
  {
    name: "IIT Kanpur",
    icon: BookOpen,
    color: "#2563eb", // blue-600
    description: "Educational Institution",
    acronym: "IIT"
  },
  {
    name: "Indian Oil Corporation",
    icon: Briefcase,
    color: "#0891b2", // cyan-600
    description: "Oil & Gas Corporation",
    acronym: "IOC"
  },
  {
    name: "Ebix Software Asia SEZ",
    icon: Globe,
    color: "#7c3aed", // violet-600
    description: "Technology Company",
    acronym: "EBIX"
  },
  {
    name: "Parle Biscuits Pvt. Ltd.",
    icon: Coffee,
    color: "#ea580c", // orange-600
    description: "Food Manufacturing",
    acronym: "PARLE"
  },
  {
    name: "Fortune Inn Exotica",
    icon: Building,
    color: "#16a34a", // green-600
    description: "Hospitality",
    acronym: "FIE"
  },
  {
    name: "British High Commission",
    icon: Landmark,
    color: "#dc2626", // red-600
    description: "Diplomatic Mission",
    acronym: "BHC"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/90 via-red-500/90 to-rose-500/90" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              Leading manufacturer of premium commercial kitchen and canteen equipment since establishment.
              Committed to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ever since establishment, we've been at the forefront of manufacturing, supplying, and 
              exporting a comprehensive range of kitchen and canteen equipment. Our product line includes 
              everything from Double Gas Burners to Commercial Mixers, serving diverse needs in the 
              food service industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "1000+", label: "Projects Completed" },
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Products" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-rose-100/20">
                  <div className="text-3xl font-bold text-rose-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Quality First", desc: "Stringent quality control at every step" },
              { icon: Settings, title: "Custom Solutions", desc: "Tailored to your specific needs" },
              { icon: Users, title: "Expert Team", desc: "Skilled engineers and technicians" },
              { icon: Building2, title: "Modern Facility", desc: "State-of-the-art manufacturing" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <feature.icon className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="bg-white/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is unwavering. Every product undergoes rigorous testing 
              to ensure the highest standards of performance and durability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Rusting",
              "Tensile Strength",
              "Polishing and Finishing",
              "Painting",
              "Design Accuracy",
              "Material Strength"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-600 font-medium">Our Partners</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with prestigious institutions and organizations 
              across various sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-xl shadow-md 
                           hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50 opacity-0 
                               group-hover:opacity-100 transition-opacity" />
                <div className="p-8 flex flex-col items-center relative">
                  <div 
                    className="w-24 h-24 mb-6 flex items-center justify-center rounded-xl 
                               transform group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: `${partner.color}10` }}
                  >
                    <partner.icon 
                      className="w-12 h-12"
                      style={{ color: partner.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {partner.name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="transition-all duration-300"
                    style={{ 
                      backgroundColor: `${partner.color}10`,
                      color: partner.color 
                    }}
                  >
                    {partner.description}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-600 font-medium">Our Strengths</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Why Choose Muskan Equipments?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, quality, and innovation to deliver the best commercial 
              kitchen solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "High-grade materials and stringent quality control",
                icon: Award
              },
              {
                title: "Custom Solutions",
                description: "Tailored to meet your specific requirements",
                icon: Settings
              },
              {
                title: "Expert Support",
                description: "Professional installation and maintenance services",
                icon: Users
              },
              {
                title: "Industry Experience",
                description: "25+ years of excellence in commercial kitchens",
                icon: Building2
              },
              {
                title: "Nationwide Service",
                description: "Comprehensive support across India",
                icon: MapPin
              },
              {
                title: "Innovation Focus",
                description: "Constantly evolving with market needs",
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white hover:shadow-lg transition-all duration-300 
                           hover:-translate-y-1 border-none"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs; 