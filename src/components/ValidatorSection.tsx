import { Radar, Waves, Users } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import mstLogo from "@/assets/mst-logo.png";

const ValidatorSection = () => (
  <section className="py-16 md:py-28 section-border bg-background overflow-hidden relative">
    {/* Gradient background */}
    <div className="absolute inset-0 gradient-mesh-intense pointer-events-none" />

    <div className="max-w-[1440px] mx-auto relative">
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden xl:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-64 h-64 rounded-full border-2 border-foreground/20 blueprint-grid flex items-center justify-center">
          <Radar className="w-10 h-10 text-primary/20" strokeWidth={1} />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden xl:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-64 h-64 rounded-full border-2 border-foreground/20 blueprint-grid flex items-center justify-center">
          <Waves className="w-10 h-10 text-primary/20" strokeWidth={1} />
        </div>
      </motion.div>

      <ScrollReveal>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-14 md:py-20 border-2 border-foreground bg-background z-10 relative px-6 md:px-8 gradient-border-glow">
          <div className="absolute top-0 left-0 right-0 h-1 primary-gradient" />

          {/* MST Logo as icon */}
          <motion.img
            src={mstLogo}
            alt=""
            className="w-16 h-16 mb-6"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
            Join 69,000+ Validators
          </h2>
          <p className="text-sm md:text-lg font-medium mb-4 px-4 md:px-12 text-on-surface-variant">
            Help secure the MST network using Proof of Staked Authority consensus. Run a professional-grade validator node and earn staking rewards.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { label: "Active Validators", value: "69,000+" },
              { label: "Network Uptime", value: "99.99%" },
              { label: "Block Time", value: "3 sec" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-2 border border-foreground/20 shimmer">
                <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary">{s.label}</p>
                <p className="text-lg font-black italic">{s.value}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="https://mstvalidator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-all primary-glow-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Become a Validator
          </motion.a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValidatorSection;
