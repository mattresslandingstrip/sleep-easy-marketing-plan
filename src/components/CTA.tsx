import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Sell More Mattresses?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's brainstorm how to make your store unforgettable. 
            Our marketing audit reveals exactly what's holding back your sales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Free Marketing Audit
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Our Team
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>15-min quick call</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>No pushy sales pitch</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>Just honest advice</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;