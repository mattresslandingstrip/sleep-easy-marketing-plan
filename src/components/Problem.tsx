import { X, Megaphone, Eye, Users } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Megaphone,
      text: "Same old promotions. Same old ads.",
      description: "Every mattress store sounds identical"
    },
    {
      icon: Users,
      text: "Everyone's shouting '50% OFF'—but sounding the same.",
      description: "Price wars without differentiation"
    },
    {
      icon: Eye,
      text: "Customers scroll right past boring mattress ads.",
      description: "Zero engagement, zero impact"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Problem with Most Mattress Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            While you're fighting for attention, your competition is stuck in the same tired playbook
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-destructive/10 rounded-xl mr-4">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.text}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;