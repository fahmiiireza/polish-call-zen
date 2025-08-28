import { Sparkles } from "lucide-react";

export default function EmotionalSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="hero-bg absolute inset-0 opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center animate-glow">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Your Front Desk, <br />
            <span className="text-glow bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              on Autopilot
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Stop leaking revenue to voicemail. Turn rings into appointments—day, night, and peak rush. Two calls at
            once? Handled. Booking, rescheduling, canceling—done. Works nights & weekends.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-2000"></div>
    </section>
  );
}
