import { ArrowRight, Layers, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatIsMST = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Layers,
      title: t("what.evm.title"),
      desc: t("what.evm.desc"),
      cta: t("what.evm.cta"),
      accent: t("what.evm.accent"),
      gradient: "from-cyan-500/15 via-blue-500/10 to-indigo-500/5",
      borderHover: "hover:border-cyan-500/50",
      accentColor: "text-cyan-400",
    },
    {
      icon: Shield,
      title: t("what.posa.title"),
      desc: t("what.posa.desc"),
      cta: t("what.posa.cta"),
      accent: t("what.posa.accent"),
      gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/5",
      borderHover: "hover:border-violet-500/50",
      accentColor: "text-violet-400",
    },
    {
      icon: Zap,
      title: t("what.saral.title"),
      desc: t("what.saral.desc"),
      cta: t("what.saral.cta"),
      accent: t("what.saral.accent"),
      gradient: "from-amber-500/15 via-orange-500/10 to-red-500/5",
      borderHover: "hover:border-amber-500/50",
      accentColor: "text-amber-400",
    },
  ];

  return (
    <section id="foundation" className="py-16 md:py-28 section-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-primary-glow/3 blur-3xl float-orb-delay pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-br from-violet-500/5 to-blue-500/3 blur-3xl float-orb pointer-events-none" />

      <div className="grid grid-cols-12 gap-x-[1.4rem] mb-14 md:mb-20 relative z-10">
        <div className="col-span-12 md:col-span-8">
          <ScrollReveal>
            <span className="label-style text-primary mb-4 block">{t("what.label")}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              {t("what.title")} <span className="primary-gradient-text">MST</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-xl text-foreground leading-relaxed max-w-2xl font-medium">
              {t("what.desc")}
            </p>
          </ScrollReveal>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-end justify-end mt-6 md:mt-0">
          <ScrollReveal delay={0.3}>
            <div className="text-right p-4 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <p className="label-style text-primary mb-2">{t("what.consensus")}</p>
              <p className="text-sm font-black uppercase">{t("what.posa")}</p>
              <p className="text-[10px] text-on-surface-variant mt-1">{t("what.blocktime")}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6 relative z-10">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <motion.div
              className={`bg-background border-2 border-foreground/20 ${card.borderHover} p-7 md:p-10 flex flex-col justify-between min-h-[320px] md:aspect-square group transition-all duration-300 cursor-pointer relative overflow-hidden`}
              whileHover={{ x: 4, y: -4 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1.5 primary-gradient transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-[0.15em] ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
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
};

export default WhatIsMST;
