import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalSection from "@/components/EmotionalSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed nav */}
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <EmotionalSection />
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;
