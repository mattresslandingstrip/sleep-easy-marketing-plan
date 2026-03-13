const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
              Mattress Marketing That{" "}
              <span className="text-primary">
                Doesn't Put Customers to Sleep
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              We help mattress stores stand out with bold branding, creative campaigns,
              and advertising that drives sales.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold text-base rounded-[6px] px-7 py-3.5 hover:bg-primary-hover transition-colors duration-200 shadow-card w-full sm:w-auto"
            >
              Book a Free Strategy Call
            </a>
          </div>

          {/* Right: Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-none">
              {/* Main card */}
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-lg font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mattress Media</p>
                    <p className="text-xs text-muted-foreground">Campaign Dashboard</p>
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-4">
                  {[
                    { label: "Monthly Store Visits", value: "+142%", bar: 85 },
                    { label: "Lead Conversion Rate", value: "+3.2×", bar: 70 },
                    { label: "Ad ROI", value: "+218%", bar: 92 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-semibold text-primary">{item.value}</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.bar}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Local SEO", "Social Ads", "Branding"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-background border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-2.5 shadow-medium">
                <p className="text-xs text-muted-foreground">Avg. revenue increase</p>
                <p className="text-lg font-bold text-foreground">3× per store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
