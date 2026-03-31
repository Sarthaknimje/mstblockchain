import { ArrowRight, GitBranch, Network, Code } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: GitBranch,
    title: "Protocol",
    desc: "The core execution layer optimized for parallel transaction processing and state consistency. Built for deterministic finality and MEV resistance.",
    cta: "View Specs",
  },
  {
    icon: Network,
    title: "P1",
    desc: "Modular data availability layer designed to ensure network security without sacrificing speed. Erasure-coded redundancy across 12,400+ nodes.",
    cta: "Explore P1",
  },
  {
    icon: Code,
    title: "P2",
    desc: "The abstraction-free development toolkit for building native high-performance dApps. Zero-overhead SDK with full WebAssembly support.",
    cta: "Get the SDK",
  },
];

const WhatIsMST = () => (
  <section id="foundation" className="py-20 md:py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem] mb-20">
      <div className="col-span-12 md:col-span-8">
        <ScrollReveal>
          <span className="label-style text-primary mb-4 block">01 / Foundation</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">What is MST?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl font-medium">
            MST Protocol is a decentralized ledger built on the principles of{" "}
            <span className="text-primary font-black">mechanical precision</span>. It eliminates
            unnecessary abstractions to provide a raw, high-throughput environment for developers
            and institutions alike.
          </p>
        </ScrollReveal>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6">
      {cards.map((card, i) => (
        <ScrollReveal key={card.title} delay={0.1 * i}>
          <motion.div
            className="bg-background border-2 border-foreground p-8 md:p-10 flex flex-col justify-between aspect-auto md:aspect-square group hover:border-primary transition-all duration-300 cursor-pointer"
            whileHover={{ x: 4, y: -4 }}
          >
            <div>
              <card.icon className="w-10 h-10 mb-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-2xl font-black tracking-tight mb-4 uppercase">{card.title}</h3>
              <p className="text-foreground text-sm leading-relaxed font-medium">{card.desc}</p>
            </div>
            <div className="flex items-center gap-2 label-style pt-4 border-t border-foreground/10 group-hover:text-primary transition-colors mt-6">
              {card.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default WhatIsMST;
