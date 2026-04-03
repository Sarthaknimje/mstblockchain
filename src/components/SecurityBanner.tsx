import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import mstLogo from "@/assets/mst-logo.png";

const SecurityBanner = () => (
  <section className="pb-16 md:pb-28">
    <ScrollReveal>
      <motion.div
        className="border-2 border-foreground/20 p-8 md:p-14 flex flex-col justify-center min-h-[280px] relative overflow-hidden text-center group"
        whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/3 pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-violet-500/5 via-primary/8 to-cyan-500/5" />
        <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1.5 primary-gradient transition-all duration-500" />

        <motion.img
          src={mstLogo}
          alt=""
          className="absolute top-4 right-6 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10">
          <span className="label-style text-primary mb-4 block">Secured by PoSA Consensus</span>
          <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
            Built on <span className="primary-gradient-text">Structural Purity.</span>
          </h3>
          <p className="text-foreground font-medium max-w-2xl mx-auto mb-8 text-sm md:text-base">
            69,000+ validators, 161,000+ wallets, 300,000+ users — and growing every day.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { tag: "EVM Compatible", color: "border-cyan-500/30 text-cyan-500 bg-cyan-500/5" },
              { tag: "PoSA Consensus", color: "border-violet-500/30 text-violet-500 bg-violet-500/5" },
              { tag: "3s Finality", color: "border-emerald-500/30 text-emerald-500 bg-emerald-500/5" },
              { tag: "SARAL Framework", color: "border-amber-500/30 text-amber-500 bg-amber-500/5" },
            ].map(({ tag, color }) => (
              <span key={tag} className={`px-3 py-1 border ${color} text-[9px] font-black uppercase tracking-[0.15em]`}>
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            className="mx-auto w-fit label-style border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Read the Documentation
          </motion.button>
        </div>
      </motion.div>
    </ScrollReveal>
  </section>
);

export default SecurityBanner;
