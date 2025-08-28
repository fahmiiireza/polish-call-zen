import { PhoneCall, Users, Clock } from "lucide-react";

const problems = [
  {
    icon: PhoneCall,
    title: "Too Many Calls",
    description: "Phones ringing non-stop? Let us handle every call instantly."
  },
  {
    icon: Users,
    title: "Missed Opportunities", 
    description: "Every unanswered call could be a lost customer. We make sure you never miss one again."
  },
  {
    icon: Clock,
    title: "Time Drain",
    description: "Stop wasting hours on the phone. Focus on growing your business instead."
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Know Your <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Struggle</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="feature-card p-8 rounded-2xl text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}