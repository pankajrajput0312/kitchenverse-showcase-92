import React from 'react';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const contactDetails = {
  company: "Muskan Equipments Company",
  address: {
    line1: "140-A, Ekta Enclave, Rohtak Road",
    line2: "Opposite Peera Garhi Metro Station",
    city: "New Delhi – 110087"
  },
  gst: "07AAJPR6760K1Z3",
  emails: [
    "sales@muskanequipments.com",
    "muskanequip@yahoo.co.in"
  ],
  phones: [
    "011-25280261",
    "011-25278066",
    "09350694306",
    "09891017491"
  ],
  website: "www.muskanequipments.com"
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 overflow-x-hidden">
      <Navigation />

      {/* Header and Quick Contact Cards - Fixed at top */}
      <div className="relative z-20">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-12 lg:py-20 w-full">
          <div className="absolute inset-0 z-0">
            {/* Reduced blur sizes */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/90 via-red-500/90 to-rose-500/90" />
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-rose-400/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-red-400/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                          border border-white/20 text-white mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-200 animate-pulse"></span>
              <span className="text-sm font-medium">We're here to help</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-base md:text-lg text-rose-100 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help you find 
              the perfect solution for your commercial kitchen needs.
            </p>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                details: contactDetails.phones,
                action: "Call now",
                color: "bg-blue-50",
                iconColor: "text-blue-600",
                hoverColor: "hover:bg-blue-50/80",
                onClick: () => window.location.href = `tel:${contactDetails.phones[0]}`
              },
              {
                icon: Mail,
                title: "Email Us",
                details: contactDetails.emails,
                action: "Send email",
                color: "bg-rose-50",
                iconColor: "text-rose-600",
                hoverColor: "hover:bg-rose-50/80",
                onClick: () => window.location.href = `mailto:${contactDetails.emails[0]}`
              },
              {
                icon: MapPin,
                title: "Visit Us",
                details: [
                  contactDetails.address.line1,
                  contactDetails.address.line2,
                  contactDetails.address.city
                ],
                action: "Get directions",
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
                hoverColor: "hover:bg-emerald-50/80",
                onClick: () => window.open('https://maps.app.goo.gl/5fTXd9zKDwvHQFPH8', '_blank')
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`group p-8 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl 
                             transition-all duration-300 hover:-translate-y-1 ${item.hoverColor}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 
                                  rotate-3 group-hover:rotate-6 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor} -rotate-3 group-hover:-rotate-6 
                                        transition-transform duration-300`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-lg">{detail}</p>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className={`${item.iconColor} mt-6 text-lg group`}
                    onClick={item.onClick}
                  >
                    {item.action}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Scrollable Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-white shadow-lg border-0 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{contactDetails.company}</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      <span>
                        {contactDetails.address.line1}<br />
                        {contactDetails.address.line2}<br />
                        {contactDetails.address.city}
                      </span>
                    </p>
                    {contactDetails.phones.map((phone, index) => (
                      <p key={index} className="text-gray-600 flex items-center gap-3">
                        <Phone className="w-5 h-5 text-rose-500" />
                        {phone}
                      </p>
                    ))}
                    {contactDetails.emails.map((email, index) => (
                      <p key={index} className="text-gray-600 flex items-center gap-3">
                        <Mail className="w-5 h-5 text-rose-500" />
                        {email}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours Card */}
            <Card className="p-8 bg-gradient-to-br from-rose-50/50 to-white shadow-lg border-0 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media Card */}
            <Card className="p-8 bg-white shadow-lg border-0 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-rose-200 text-rose-600 hover:bg-rose-50 relative group"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-transform bg-rose-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      {social.label}
                    </span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Map Preview */}
            <Card className="p-8 bg-gradient-to-br from-rose-50/50 to-white shadow-lg border-0 hover:shadow-xl transition-all overflow-hidden">
              <div className="aspect-video bg-gray-100 rounded-lg relative mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8837989927766!2d77.12772147536754!3d28.67337048198067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037b1e1d7d11%3A0x905dc19d1486f088!2sMuskan%20Equipments%20Company!5e0!3m2!1sen!2sin!4v1709659436044!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-lg"
                />
              </div>
              <Button 
                variant="outline" 
                className="w-full border-rose-200 text-rose-600 hover:bg-rose-50"
                onClick={() => window.open('https://maps.app.goo.gl/5fTXd9zKDwvHQFPH8', '_blank')}
              >
                View on Google Maps
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>

          {/* Right Side - Sticky Form */}
          <div className="hidden lg:block">
            <div className="sticky top-8 w-full max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-0 
                           hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/50 rounded-2xl" />
                <div className="relative">
                  <span className="inline-block text-rose-600 font-medium mb-2">Contact Form</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <Input 
                          placeholder="Your name" 
                          className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <Input 
                        placeholder="How can we help?" 
                        className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Your message" 
                        className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-32" 
                      />
                    </div>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-lg 
                                     transition-all duration-300 hover:shadow-lg">
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Form (shown only on mobile) */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-0">
              <div className="relative">
                <span className="inline-block text-rose-600 font-medium mb-2">Contact Form</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form below and we'll get back to you shortly.
                </p>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input 
                      placeholder="How can we help?" 
                      className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-12" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Your message" 
                      className="w-full bg-white/50 border-gray-200 focus:border-rose-500 h-32" 
                    />
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-lg 
                                   transition-all duration-300 hover:shadow-lg">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 