const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
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

        </div>
      </div>
    </section>
  );
};

export default Hero;
