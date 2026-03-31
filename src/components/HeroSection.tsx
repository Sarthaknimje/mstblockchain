import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [hero1, hero2];
const partnerships = ["CORE_SYS", "N_NODES", "QUANT_LAYER", "HEX_DATA", "STRUC_X"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-12 gap-x-[1.4rem] pt-20 pb-32 items-center">
      {/* Left Column */}
      <div className="col-span-12 md:col-span-6 flex flex-col items-start">
        <span className="inline-block py-1 px-3 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.15em] mb-6">
          Use Case: Institutional Grade
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
          ENGINEERING THE<br />
          <span className="text-primary">NEW INTERNET.</span>
        </h1>
        <p className="text-lg text-foreground leading-relaxed max-w-md mb-10 font-medium">
          A high-performance blockchain infrastructure designed for structural purity, extreme throughput, and institutional security.
        </p>
        <div className="flex gap-4 mb-16">
          <button className="px-8 py-3 bg-secondary text-secondary-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors">
            Products
          </button>
          <button className="px-8 py-3 border-2 border-foreground text-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all">
            Docs
          </button>
        </div>

        {/* Stats */}
        <div className="w-full pt-10 border-t-2 border-foreground grid grid-cols-3 gap-8">
          {[
            { label: "Finality", value: "400ms" },
            { label: "Nodes", value: "12,400+" },
            { label: "Ecosystem", value: "450+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="label-style text-primary mb-1">{stat.label}</p>
              <p className="text-3xl font-black italic">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Partnerships */}
        <div className="w-full pt-10 mt-10 border-t border-accent">
          <p className="label-style text-foreground mb-6">Partnerships</p>
          <div className="flex flex-wrap items-center gap-4">
            {partnerships.map((p) => (
              <div key={p} className="h-6 px-4 bg-background border border-foreground flex items-center justify-center">
                <span className="text-[8px] font-black tracking-tighter">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Carousel */}
      <div className="col-span-12 md:col-span-6 relative mt-16 md:mt-0" style={{ perspective: "2000px" }}>
        <div className="aspect-[4/5] relative" style={{ transform: "rotateY(-15deg) rotateX(5deg)", transformStyle: "preserve-3d", transition: "transform 0.5s ease-out" }}>
          <div className="absolute inset-0 bg-background border-2 border-foreground blueprint-grid"></div>
          <div className="absolute inset-0 overflow-hidden fade-mask">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Blockchain visualization ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-opacity duration-[1500ms]"
                style={{ opacity: current === i ? 1 : 0 }}
                width={1024}
                height={1280}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
