import { Radar, Waves } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import mstLogo from "@/assets/mst-logo.png";

const ValidatorSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-28 section-border bg-background overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-primary/3" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-transparent rounded-full blur-3xl float-orb" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl float-orb-delay" />
      </div>

      <div className="max-w-[1440px] mx-auto relative">
        <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden xl:block" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <div className="w-64 h-64 rounded-full border border-primary/10 flex items-center justify-center"><Radar className="w-10 h-10 text-primary/15" strokeWidth={1} /></div>
        </motion.div>
        <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden xl:block" animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
          <div className="w-64 h-64 rounded-full border border-primary/10 flex items-center justify-center"><Waves className="w-10 h-10 text-primary/15" strokeWidth={1} /></div>
        </motion.div>

        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-14 md:py-20 border-2 border-foreground/20 bg-background z-10 relative px-6 md:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 primary-gradient" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/3 pointer-events-none" />

            <motion.img src={mstLogo} alt="" className="w-16 h-16 mb-6 relative z-10" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase relative z-10">
              {t("validator.join")} <span className="primary-gradient-text">69,000+</span> {t("validator.validators")}
            </h2>
            <p className="text-sm md:text-lg font-medium mb-6 px-4 md:px-12 text-on-surface-variant relative z-10">
              {t("validator.desc")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
              {[
                { label: t("validator.active"), value: "69,000+", gradient: "from-emerald-500/15 to-teal-500/5", border: "border-emerald-500/30" },
                { label: t("validator.uptime"), value: "99.99%", gradient: "from-cyan-500/15 to-blue-500/5", border: "border-cyan-500/30" },
                { label: t("validator.blocktime"), value: "3 sec", gradient: "from-violet-500/15 to-purple-500/5", border: "border-violet-500/30" },
              ].map((s) => (
                <div key={s.label} className={`px-5 py-3 border ${s.border} bg-gradient-to-br ${s.gradient} relative overflow-hidden`}>
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary">{s.label}</p>
                  <p className="text-lg font-black italic">{s.value}</p>
                </div>
              ))}
            </div>

            <motion.a href="https://mstvalidator.com" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-all primary-glow-shadow relative z-10 overflow-hidden"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
              {t("validator.become")}
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValidatorSection;
