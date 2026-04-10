import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck, Building2, TrendingUp, HeartPulse, Gamepad2, Fingerprint,
  Copyright, Zap, Vote, Layers, Leaf, Globe, Briefcase, Radio,
  Users, BarChart3, Cpu, Shield, Lock, Handshake
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCasesData } from "@/data/useCases";

const icons = [
  Truck, Building2, TrendingUp, HeartPulse, Gamepad2, Fingerprint,
  Copyright, Zap, Vote, Layers, Leaf, Globe, Briefcase, Radio,
  Users, BarChart3, Cpu, Shield, Lock, Handshake,
];

const cardColors = [
  { border: "border-rose-500/30", bg: "bg-rose-500/5", text: "text-rose-500", hover: "hover:border-rose-500/60" },
  { border: "border-violet-500/30", bg: "bg-violet-500/5", text: "text-violet-500", hover: "hover:border-violet-500/60" },
  { border: "border-cyan-500/30", bg: "bg-cyan-500/5", text: "text-cyan-500", hover: "hover:border-cyan-500/60" },
  { border: "border-emerald-500/30", bg: "bg-emerald-500/5", text: "text-emerald-500", hover: "hover:border-emerald-500/60" },
  { border: "border-amber-500/30", bg: "bg-amber-500/5", text: "text-amber-500", hover: "hover:border-amber-500/60" },
  { border: "border-pink-500/30", bg: "bg-pink-500/5", text: "text-pink-500", hover: "hover:border-pink-500/60" },
  { border: "border-indigo-500/30", bg: "bg-indigo-500/5", text: "text-indigo-500", hover: "hover:border-indigo-500/60" },
];

const row1 = useCasesData.slice(0, 7);
const row2 = useCasesData.slice(7, 14);
const row3 = useCasesData.slice(14, 20);

const sizes = ["w-52 h-40", "w-64 h-48", "w-48 h-40", "w-72 h-52", "w-56 h-44", "w-60 h-48", "w-52 h-40"];

type MarqueeRowProps = {
  items: typeof useCasesData;
  startIdx: number;
  speed: number;
  reverse?: boolean;
};

const MarqueeRow = ({ items, startIdx, speed, reverse = false }: MarqueeRowProps) => {
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
          const colorScheme = cardColors[(startIdx + (i % items.length)) % cardColors.length];

          return (
            <Link
              key={`${uc.id}-${i}`}
              to={`/use-case/${uc.id}`}
              className={`flex-shrink-0 ${size} border-2 ${colorScheme.border} ${colorScheme.hover} ${colorScheme.bg} 
                p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 primary-gradient opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 blueprint-grid opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="flex items-start justify-between relative z-10">
                <div className={`w-9 h-9 border ${colorScheme.border} flex items-center justify-center ${colorScheme.bg}`}>
                  <Icon size={16} className={`${colorScheme.text} group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
                </div>
                <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${colorScheme.text}`}>{uc.num}</span>
              </div>

              <div className="relative z-10">
                <h4 className="text-[11px] font-black uppercase leading-tight mb-1.5 group-hover:text-primary transition-colors">{uc.title}</h4>
                <p className="text-[9px] text-on-surface-variant leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{uc.short}</p>
              </div>

              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`text-[7px] font-black uppercase ${colorScheme.text}`}>{uc.metric}</span>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

const UseCasesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="usecases" className="py-16 md:py-28 section-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 mb-10 md:mb-14">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="label-style text-primary mb-3 block">{t("usecases.label")}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{t("usecases.title")}</h2>
            </div>
            <p className="text-on-surface-variant font-medium max-w-md text-sm">{t("usecases.desc")}</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} startIdx={0} speed={40} />
        <MarqueeRow items={row2} startIdx={7} speed={35} reverse />
        <MarqueeRow items={row3} startIdx={14} speed={45} />
      </div>
    </section>
  );
};

export default UseCasesSection;
