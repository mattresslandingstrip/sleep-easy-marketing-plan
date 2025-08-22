import { Bed, Users, Clock, Award, Target, Zap } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Bed,
      title: "We're Mattress-Obsessed",
      description: "We live and breathe mattress retail. We know your industry inside and out."
    },
    {
      icon: Users,
      title: "Customer Psychology Experts",
      description: "We understand what makes people choose one mattress store over another."
    },
    {
      icon: Clock,
      title: "Fast Implementation",
      description: "No lengthy onboarding. We start making impact from week one."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Our campaigns consistently outperform traditional mattress marketing."
    },
    {
      icon: Target,
      title: "Local Market Focus",
      description: "We know how to dominate your specific geographic area."
    },
    {
      icon: Zap,
      title: "Creative Edge",
      description: "While others copy, we create original campaigns that get noticed."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We're Not a General Ad Agency—
            <span className="bg-text-gradient bg-clip-text text-transparent block">
              We're Mattress-Obsessed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We live and breathe mattress retail. That means we know your struggles—and how to 
            wake up your marketing with strategies tailored to your industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-primary/20 transition-all duration-300 h-full">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;