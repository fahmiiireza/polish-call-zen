import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Never Miss Another Call.</span>
            <br />
            <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Never Lose Another Customer.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            You focus on running your business. We'll take care of the ringing phone—day or night.
          </p>
          
          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="glow-button text-lg px-8 py-6 rounded-xl font-semibold group"
              asChild
            >
              <a 
                href="https://calendly.com/polished-group1/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Book a Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Supporting Text */}
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            See how Polished can answer, handle, and even make calls—so you don't have to.
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
    </section>
  );
}