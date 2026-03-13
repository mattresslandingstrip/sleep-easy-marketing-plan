const services = [
  { emoji: "🎨", title: "Bold Branding", desc: "Identities that stick in people's minds long after they leave your store." },
  { emoji: "📍", title: "Local Domination", desc: "Own your city with hyper-targeted ads that bring foot traffic in the door." },
  { emoji: "📱", title: "Social That Sells", desc: "Content that entertains, builds trust, and converts followers into buyers." },
  { emoji: "🔥", title: "Lead Generation", desc: "Funnels and campaigns designed to fill your calendar with qualified shoppers." },
];

const SocialProof = () => {
  return (
    <section className="bg-background">
      {/* Stats Bar */}
      <div className="bg-primary py-14">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            What We Do Best
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
            Every service is built specifically for mattress retailers — no cookie-cutter agency fluff.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
