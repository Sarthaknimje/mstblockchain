import { ArrowRight, GitBranch, Network, Code } from "lucide-react";

const cards = [
  { icon: GitBranch, title: "Protocol", desc: "The core execution layer optimized for parallel transaction processing and state consistency.", cta: "View Specs" },
  { icon: Network, title: "P1", desc: "Modular data availability layer designed to ensure network security without sacrificing speed.", cta: "Explore P1" },
  { icon: Code, title: "P2", desc: "The abstraction-free development toolkit for building native high-performance dApps.", cta: "Get the SDK" },
];

const WhatIsMST = () => (
  <section className="py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem] mb-20">
      <div className="col-span-12 md:col-span-8">
        <span className="label-style text-primary mb-4 block">01 / Foundation</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">What is MST?</h2>
        <p className="text-xl text-foreground leading-relaxed max-w-2xl font-medium">
          MST Protocol is a decentralized ledger built on the principles of{" "}
          <span className="text-primary font-black">mechanical precision</span>. It eliminates unnecessary abstractions to provide a raw, high-throughput environment for developers.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-background border-2 border-foreground p-10 flex flex-col justify-between aspect-square group hover:border-primary hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <card.icon className="w-10 h-10 mb-8 text-primary" strokeWidth={1.5} />
            <h3 className="text-2xl font-black tracking-tight mb-4 uppercase">{card.title}</h3>
            <p className="text-foreground text-sm leading-relaxed font-medium">{card.desc}</p>
          </div>
          <div className="flex items-center gap-2 label-style pt-4 border-t border-foreground/10 group-hover:text-primary transition-colors">
            {card.cta} <ArrowRight size={14} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhatIsMST;
