import { Star, Lightbulb, Target, TrendingUp, Share2, Zap } from "lucide-react";

const Solution = () => {
  const services = [
    {
      icon: Star,
      title: "Unique Branding & Store Identity",
      description: "Stand out with memorable brand experiences that customers can't ignore"
    },
    {
      icon: Lightbulb,
      title: "Creative Campaigns (beyond boring discounts)",
      description: "Innovative marketing strategies that go way beyond '50% off'"
    },
    {
      icon: Target,
      title: "Lead Capture & Sales Funnels",
      description: "Convert browsers into buyers with strategic customer journeys"
    },
    {
      icon: TrendingUp,
      title: "Digital + Local Ad Strategies",
      description: "Dominate both online searches and local foot traffic"
    },
    {
      icon: Share2,
      title: "Viral Social Media Content",
      description: "Content so good, people actually want to share it"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Results",
      description: "See real impact within weeks, not months"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              We Turn Mattress Stores Into Local Legends
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mattress Media creates marketing that stands out. From eye-catching branding to creative 
            lead-gen campaigns, we make sure your store is the one customers remember when it's time to buy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-primary/20 transition-all duration-300 h-full">
                <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;