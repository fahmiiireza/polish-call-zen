import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Play } from "lucide-react";
import heroIllustration from "@/assets/hero-phone-illustration.jpg";

export default function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Never Miss Another Call.
            </span>
          </h1>
          
          {/* Secondary Headline */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-8">
            Never Lose Another Customer.
          </h2>
          
          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We'll answer every call, 24/7 — so you can focus on running your business.
          </p>
          
          {/* Visual Storytelling */}
          <div className="mb-12 relative">
            <img 
              src={heroIllustration} 
              alt="Phone being answered automatically" 
              className="mx-auto rounded-2xl shadow-2xl max-w-md w-full animate-pulse-glow"
            />
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-8 space-y-4">
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
                Book a Free Demo — See How It Works in Minutes
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <div className="text-center">
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 font-medium group"
                asChild
              >
                <a href="#demo-video" className="inline-flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch a 1-Min Demo Video
                </a>
              </Button>
            </div>
          </div>
          
          {/* Trust Element */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by 500+ small businesses
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
    </section>
  );
}