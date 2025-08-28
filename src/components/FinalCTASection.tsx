import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-t from-background via-muted/10 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Let's Take the Calls <br />
            <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Off Your Plate
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Book a free demo today and see how easy it is to stop worrying about missed calls forever.
          </p>
          
          <div className="mb-8">
            <Button 
              size="lg" 
              className="glow-button text-lg px-12 py-8 rounded-xl font-semibold group"
              asChild
            >
              <a 
                href="https://calendly.com/polished-group1/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4"
              >
                <Calendar className="w-7 h-7" />
                Book Your Free Demo
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}