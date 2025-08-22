import { Play, Eye, TrendingUp, Heart } from "lucide-react";

const Proof = () => {
  const examples = [
    {
      title: "The 'Sleep Like a Baby' Campaign",
      description: "Parody ads that went viral and drove 300% more foot traffic",
      metric: "300% increase in store visits",
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "Retro Mattress Van Wraps",
      description: "Eye-catching mobile billboards that became local celebrities",
      metric: "15K social media impressions",
      icon: Eye,
      color: "secondary"
    },
    {
      title: "Midnight Mattress Comedy Series",
      description: "Funny social content that actually made mattresses entertaining",
      metric: "50% engagement rate",
      icon: Heart,
      color: "accent"
    },
    {
      title: "Interactive Sleep Challenge",
      description: "Gamified customer experience that boosted sales by 200%",
      metric: "200% sales increase",
      icon: Play,
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See How We Flip the Script on Mattress Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real campaigns that got real results (and made people actually excited about mattresses)
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <div key={index} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-${example.color}/10 rounded-xl`}>
                    <example.icon className={`w-6 h-6 text-${example.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {example.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </div>
                
                <div className={`inline-flex items-center px-4 py-2 bg-${example.color}/10 rounded-full border border-${example.color}/20`}>
                  <TrendingUp className={`w-4 h-4 text-${example.color} mr-2`} />
                  <span className={`text-${example.color} font-semibold text-sm`}>
                    {example.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Results may vary, but creativity is guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proof;