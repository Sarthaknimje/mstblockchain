import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const slides = [hero1, hero2];
const partnerships = ["CORE_SYS", "N_NODES", "QUANT_LAYER", "HEX_DATA", "STRUC_X"];

const stats = [
  { label: "Finality", value: "400ms" },
  { label: "Nodes", value: "12,400+" },
  { label: "Ecosystem", value: "450+" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-12 gap-x-[1.4rem] pt-12 md:pt-20 pb-20 md:pb-32 items-center">
      {/* Left Column */}
      <div className="col-span-12 md:col-span-6 flex flex-col items-start">
        <motion.span
          className="inline-block py-1 px-3 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.15em] mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Use Case: Institutional Grade
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          ENGINEERING THE<br />
          <span className="primary-gradient-text">NEW INTERNET.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-foreground leading-relaxed max-w-md mb-10 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          A high-performance blockchain infrastructure designed for structural purity, extreme throughput, and institutional security.
        </motion.p>

        <motion.div
          className="flex gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-secondary text-secondary-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Products
          </motion.button>
          <motion.button
            className="px-8 py-3 border-2 border-foreground text-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Docs
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="w-full pt-10 border-t-2 border-foreground grid grid-cols-3 gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <p className="label-style text-primary mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-black italic">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnerships */}
        <motion.div
          className="w-full pt-10 mt-10 border-t border-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="label-style text-foreground mb-6">Partnerships</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {partnerships.map((p, i) => (
              <motion.div
                key={p}
                className="h-6 px-4 bg-background border border-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[8px] font-black tracking-tighter">{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Carousel */}
      <motion.div
        className="col-span-12 md:col-span-6 relative mt-12 md:mt-0"
        style={{ perspective: "2000px" }}
        initial={{ opacity: 0, rotateY: -30 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <div
          className="aspect-[4/5] relative hover:translate-x-2 hover:-translate-y-2 transition-transform duration-700"
          style={{ transform: "rotateY(-12deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
        >
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
          {/* Overlay accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 primary-gradient" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
