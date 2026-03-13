import { Calendar, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-primary py-20 md:py-24">
      <div className="container max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-primary-foreground tracking-tight mb-5">
          Ready to Sell More Mattresses?
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Let's brainstorm how to make your store unforgettable.
          Our marketing audit reveals exactly what's holding back your sales.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-background text-primary font-semibold text-base rounded-[6px] px-8 py-3.5 hover:bg-muted transition-colors duration-200 shadow-medium w-full sm:w-auto"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Strategy Call
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-primary-foreground/70 text-sm flex-wrap">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            15-min quick call
          </span>
          <span className="w-1 h-1 bg-primary-foreground/30 rounded-full hidden sm:block" />
          <span>No pushy sales pitch</span>
          <span className="w-1 h-1 bg-primary-foreground/30 rounded-full hidden sm:block" />
          <span>Just honest advice</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
