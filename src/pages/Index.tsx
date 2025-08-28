import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalSection from "@/components/EmotionalSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Polished AI - Never Miss Another Call</title>
        <meta name="description" content="Stop missing calls and losing customers. Polished AI handles your business calls 24/7 so you can focus on what matters most." />
      </Helmet>
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
