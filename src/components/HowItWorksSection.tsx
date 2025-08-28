import { Link, Brain, Shield } from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "We Connect to Your Business",
    description: "We make sure every call is connected.",
    number: "01",
  },
  {
    icon: Brain,
    title: "We Learn Your Business",
    description: "We answer calls the way you would, following your style and needs.",
    number: "02",
  },
  {
    icon: Shield,
    title: "We Have Your Back",
    description: "Every call, every time, even when you're closed.",
    number: "03",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            This is How We{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Polish
            </span>{" "}
            Your Business
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="feature-card p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
