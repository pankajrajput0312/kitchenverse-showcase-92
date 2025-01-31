import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
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

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Decorative top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-800/20 to-transparent mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{contactDetails.company}</h3>
            <p className="text-gray-300/90">
              Leading manufacturer of premium commercial kitchen equipment since 1998.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-rose-900/20 text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300/90">
                <MapPin className="w-5 h-5 text-rose-400/70 flex-shrink-0 mt-1" />
                <span>
                  {contactDetails.address.line1}<br />
                  {contactDetails.address.line2}<br />
                  {contactDetails.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300/90">
                <Phone className="w-5 h-5 text-rose-400/70" />
                <div className="flex flex-col">
                  {contactDetails.phones.map((phone, index) => (
                    <span key={index}>{phone}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300/90">
                <Mail className="w-5 h-5 text-rose-400/70" />
                <div className="flex flex-col">
                  {contactDetails.emails.map((email, index) => (
                    <span key={index}>{email}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Business Hours</h3>
            <ul className="space-y-3">
              <li className="text-gray-300/90">
                <span className="block font-medium text-white">Mon - Fri</span>
                9:00 AM - 6:00 PM
              </li>
              <li className="text-gray-300/90">
                <span className="block font-medium text-white">Saturday</span>
                10:00 AM - 4:00 PM
              </li>
              <li className="text-gray-300/90">
                <span className="block font-medium text-white">Sunday</span>
                Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300/90">© 2024 {contactDetails.company}. All rights reserved.</p>
          <p className="mt-2 text-gray-400">GST No. {contactDetails.gst}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 