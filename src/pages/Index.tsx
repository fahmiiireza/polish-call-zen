import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalSection from "@/components/EmotionalSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <EmotionalSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
