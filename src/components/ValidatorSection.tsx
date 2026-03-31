import { Radar, Waves } from "lucide-react";

const ValidatorSection = () => (
  <section className="py-32 section-border bg-background overflow-hidden">
    <div className="max-w-[1440px] mx-auto relative">
      {/* Circular side elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden xl:block">
        <div className="w-64 h-64 rounded-full border-2 border-foreground blueprint-grid flex items-center justify-center">
          <Radar className="w-10 h-10 text-foreground/10" strokeWidth={1} />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden xl:block">
        <div className="w-64 h-64 rounded-full border-2 border-foreground blueprint-grid flex items-center justify-center">
          <Waves className="w-10 h-10 text-foreground/10" strokeWidth={1} />
        </div>
      </div>
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-20 border-2 border-foreground bg-background z-10 relative px-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Join our Validator Program</h2>
        <p className="text-lg font-medium mb-10 px-4 md:px-12">
          Help secure the most performant network in existence. Stake MST and run professional-grade infrastructure.
        </p>
        <button className="px-12 py-4 bg-secondary text-secondary-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-primary transition-all">
          Join the System
        </button>
      </div>
    </div>
  </section>
);

export default ValidatorSection;
