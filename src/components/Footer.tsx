import { Bed, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Bed className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Mattress Media</span>
            </div>
            <p className="text-white/70 text-lg mb-6 max-w-md">
              Because your marketing should be as comfortable as your mattresses.
            </p>
            <p className="text-white/60">
              We specialize in creative marketing solutions for mattress retailers. 
              From branding to lead generation, we help you stand out in a crowded market.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@mattressmedia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(555) 123-SLEEP</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Marketing That Never Sleeps</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>Creative Branding</li>
              <li>Lead Generation</li>
              <li>Social Media Marketing</li>
              <li>Local Advertising</li>
              <li>Sales Funnel Design</li>
              <li>Content Creation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Mattress Media. All rights reserved. Sweet dreams guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;