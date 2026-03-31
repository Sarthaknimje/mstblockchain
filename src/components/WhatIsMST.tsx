import { ArrowRight, Layers, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: Layers,
    title: "EVM Compatible",
    desc: "Fully compatible with Ethereum Virtual Machine. Deploy your existing Solidity smart contracts directly on MST with zero modifications.",
    cta: "View Architecture",
    accent: "Layer-1 Infrastructure",
  },
  {
    icon: Shield,
    title: "PoSA Consensus",
    desc: "Proof of Staked Authority consensus mechanism with 69,000+ validators securing the network. 3-second block time with deterministic finality.",
    cta: "Explore Validators",
    accent: "69K+ Validators",
  },
  {
    icon: Zap,
    title: "SARAL Framework",
    desc: "Simple, Accessible, Reliable, Affordable, and Limitless. Our infrastructure philosophy ensures Web3 is accessible to everyone.",
    cta: "Learn SARAL",
    accent: "Built for Everyone",
  },
];

const WhatIsMST = () => (
  <section id="foundation" className="py-16 md:py-28 section-border relative overflow-hidden">
    {/* Background gradient accent */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl float-orb-delay pointer-events-none" />

    <div className="grid grid-cols-12 gap-x-[1.4rem] mb-14 md:mb-20 relative z-10">
      <div className="col-span-12 md:col-span-8">
        <ScrollReveal>
          <span className="label-style text-primary mb-4 block">01 / Foundation</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">What is MST?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-xl text-foreground leading-relaxed max-w-2xl font-medium">
            MST Blockchain is a{" "}
            <span className="text-primary font-black">next-generation EVM Compatible Layer-1</span> blockchain
            designed to make Web3 secure, accessible, and affordable for everyone. With products like BridgeKey Wallet,
            MST Bridge, and MSTScan, we're creating SARAL infrastructure for real-world Web3 adoption.
          </p>
        </ScrollReveal>
      </div>
      <div className="col-span-12 md:col-span-4 flex items-end justify-end mt-6 md:mt-0">
        <ScrollReveal delay={0.3}>
          <div className="text-right">
            <p className="label-style text-primary mb-2">Consensus</p>
            <p className="text-sm font-black uppercase">Proof of Staked Authority (PoSA)</p>
            <p className="text-[10px] text-on-surface-variant mt-1">3s block time · EVM compatible</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6 relative z-10">
      {cards.map((card, i) => (
        <ScrollReveal key={card.title} delay={0.1 * i}>
          <motion.div
            className="bg-background border-2 border-foreground p-7 md:p-10 flex flex-col justify-between min-h-[320px] md:aspect-square group hover:border-primary transition-all duration-300 cursor-pointer relative overflow-hidden gradient-border-glow"
            whileHover={{ x: 4, y: -4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />
            {/* Hover gradient fill */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-mesh-intense pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <card.icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <span className="text-[8px] font-black uppercase tracking-[0.15em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.accent}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 uppercase">{card.title}</h3>
              <p className="text-foreground text-sm leading-relaxed font-medium">{card.desc}</p>
            </div>
            <div className="flex items-center gap-2 label-style pt-4 border-t border-foreground/10 group-hover:text-primary transition-colors mt-4 relative z-10">
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
