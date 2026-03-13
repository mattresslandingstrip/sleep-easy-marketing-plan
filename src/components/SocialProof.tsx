import { Palette, MapPin, Smartphone, Flame } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Bold Branding",
    desc: "Identities that stick in people's minds long after they leave your store.",
  },
  {
    icon: MapPin,
    title: "Local Domination",
    desc: "Own your city with hyper-targeted ads that bring foot traffic in the door.",
  },
  {
    icon: Smartphone,
    title: "Social That Sells",
    desc: "Content that entertains, builds trust, and converts followers into buyers.",
  },
  {
    icon: Flame,
    title: "Lead Generation",
    desc: "Funnels and campaigns designed to fill your calendar with qualified shoppers.",
  },
];

const SocialProof = () => {
  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight mb-4">
            What We Do Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every service is built specifically for mattress retailers — no cookie-cutter agency fluff.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-[10px] border border-[#E6E6E6] p-8 shadow-card hover:shadow-medium transition-shadow duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-200">
                <s.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
