import { Radar, Waves } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const ValidatorSection = () => (
  <section className="py-20 md:py-32 section-border bg-background overflow-hidden">
    <div className="max-w-[1440px] mx-auto relative">
      {/* Circular side elements */}
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
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-16 md:py-20 border-2 border-foreground bg-background z-10 relative px-6 md:px-8">
          <div className="absolute top-0 left-0 right-0 h-1 primary-gradient" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
            Join our Validator Program
          </h2>
          <p className="text-base md:text-lg font-medium mb-10 px-4 md:px-12">
            Help secure the most performant network in existence. Stake MST and run professional-grade infrastructure. Earn up to 12% APY.
          </p>
          <motion.button
            className="px-12 py-4 bg-secondary text-secondary-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-primary transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Join the System
          </motion.button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValidatorSection;
