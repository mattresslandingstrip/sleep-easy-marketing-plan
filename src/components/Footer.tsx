import { Bed, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 bg-primary rounded-md">
                <Bed className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Mattress Media</span>
            </div>
            <p className="text-white/60 text-base mb-4 max-w-md leading-relaxed">
              Because your marketing should be as comfortable as your mattresses.
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              We specialize in creative marketing solutions for mattress retailers.
              From branding to lead generation, we help you stand out in a crowded market.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-white/60 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.75} />
                <span>hello@mattressmedia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.75} />
                <span>(818) 725-5555</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.75} />
                <span>Marketing That Never Sleeps</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5 text-white/60 text-sm">
              {[
                "Creative Branding",
                "Lead Generation",
                "Social Media Marketing",
                "Local Advertising",
                "Sales Funnel Design",
                "Content Creation",
              ].map((service) => (
                <li key={service} className="hover:text-primary transition-colors duration-150 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2024 Mattress Media. All rights reserved. Sweet dreams guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
