import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck, Building2, TrendingUp, HeartPulse, Gamepad2, Fingerprint,
  Copyright, Zap, Vote, Layers, Leaf, Globe, Briefcase, Radio,
  Users, BarChart3, Cpu, Shield, Lock, Handshake
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useCasesData } from "@/data/useCases";

const icons = [
  Truck, Building2, TrendingUp, HeartPulse, Gamepad2, Fingerprint,
  Copyright, Zap, Vote, Layers, Leaf, Globe, Briefcase, Radio,
  Users, BarChart3, Cpu, Shield, Lock, Handshake,
];

// Split into 3 rows
const row1 = useCasesData.slice(0, 7);
const row2 = useCasesData.slice(7, 14);
const row3 = useCasesData.slice(14, 20);

// Card sizes — alternate between sizes
const sizes = ["w-52 h-36", "w-64 h-44", "w-48 h-36", "w-72 h-48", "w-56 h-40", "w-60 h-44", "w-52 h-36"];

type MarqueeRowProps = {
  items: typeof useCasesData;
  startIdx: number;
  speed: number;
  reverse?: boolean;
};

const MarqueeRow = ({ items, startIdx, speed, reverse = false }: MarqueeRowProps) => {
  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((uc, i) => {
          const Icon = icons[(startIdx + (i % items.length)) % icons.length];
          const size = sizes[(i % items.length) % sizes.length];
          const globalIdx = startIdx + (i % items.length);

          return (
            <Link
              key={`${uc.id}-${i}`}
              to={`/use-case/${uc.id}`}
              className={`flex-shrink-0 ${size} border-2 border-foreground/30 p-5 flex flex-col justify-between 
                hover:border-primary hover:primary-glow-shadow transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              {/* Accent top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />

              <div className="flex items-start justify-between">
                <Icon
                  size={20}
                  className="text-primary opacity-60 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary">
                  {uc.num}
                </span>
              </div>

              <div>
                <h4 className="text-[11px] font-black uppercase leading-tight mb-1 group-hover:text-primary transition-colors">
                  {uc.title}
                </h4>
                <p className="text-[9px] text-on-surface-variant leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {uc.short}
                </p>
              </div>

              {/* Metric badge */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[7px] font-black text-primary uppercase">{uc.metric}</span>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

const UseCasesSection = () => (
  <section id="usecases" className="py-16 md:py-28 section-border overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-8 mb-10 md:mb-14">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="label-style text-primary mb-3 block">20+ Industries</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Use Cases</h2>
          </div>
          <p className="text-on-surface-variant font-medium max-w-md text-sm">
            MST Protocol powers mission-critical applications across industries. Hover to preview, click to dive deep.
          </p>
        </div>
      </ScrollReveal>
    </div>

    {/* 3-Row Infinite Marquee */}
    <div className="space-y-4">
      <MarqueeRow items={row1} startIdx={0} speed={40} />
      <MarqueeRow items={row2} startIdx={7} speed={35} reverse />
      <MarqueeRow items={row3} startIdx={14} speed={45} />
    </div>
  </section>
);

export default UseCasesSection;
