import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const SecurityBanner = () => (
  <section className="pb-20 md:pb-32">
    <ScrollReveal>
      <motion.div
        className="bg-background border-2 border-foreground p-8 md:p-12 flex flex-col justify-center min-h-[300px] relative overflow-hidden text-center group"
        whileHover={{ borderColor: "hsl(var(--primary))" }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 transform translate-x-16 -translate-y-16 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary opacity-5 transform -translate-x-12 translate-y-12 rotate-45"></div>
        <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-500" />

        <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
          Secured by <span className="primary-gradient-text">Structural Purity.</span>
        </h3>
        <p className="text-foreground font-medium max-w-xl mx-auto mb-8">
          Our consensus mechanism is mathematically proven to withstand adversarial conditions while
          maintaining zero-lag performance. 99.99% uptime since genesis.
        </p>
        <motion.button
          className="mx-auto w-fit label-style border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Read the Whitepaper
        </motion.button>
      </motion.div>
    </ScrollReveal>
  </section>
);

export default SecurityBanner;
