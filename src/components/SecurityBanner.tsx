import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const SecurityBanner = () => (
  <section className="pb-16 md:pb-28">
    <ScrollReveal>
      <motion.div
        className="border-2 border-foreground p-8 md:p-14 flex flex-col justify-center min-h-[280px] relative overflow-hidden text-center group"
        whileHover={{ borderColor: "hsl(var(--primary))" }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 transform translate-x-20 -translate-y-20 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary opacity-5 transform -translate-x-16 translate-y-16 rotate-45"></div>
        <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-500" />

        <span className="label-style text-primary mb-4 block">Secured by PoSA Consensus</span>
        <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
          Built on <span className="primary-gradient-text">Structural Purity.</span>
        </h3>
        <p className="text-foreground font-medium max-w-2xl mx-auto mb-8 text-sm md:text-base">
          MST's Proof of Staked Authority consensus is designed to withstand adversarial conditions while maintaining
          3-second block finality. 69,000+ validators, 161,000+ wallets, 300,000+ users — and growing every day.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["EVM Compatible", "PoSA Consensus", "3s Finality", "SARAL Framework"].map((tag) => (
            <span key={tag} className="px-3 py-1 border border-primary/30 text-[9px] font-black uppercase tracking-[0.15em] text-primary">
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
      </motion.div>
    </ScrollReveal>
  </section>
);

export default SecurityBanner;
