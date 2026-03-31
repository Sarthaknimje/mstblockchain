import { LayoutGrid, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const blocks = [
  { id: "#12,845,291", time: "0.4s ago" },
  { id: "#12,845,290", time: "0.8s ago" },
  { id: "#12,845,289", time: "1.2s ago" },
];

const txns = [
  { addr: "0x4f...91ae", amount: "24.5 MST" },
  { addr: "0x8a...22c1", amount: "1,200 MST" },
  { addr: "0x12...f9e0", amount: "0.1 MST" },
];

const ExplorerSection = () => (
  <section id="explorer" className="py-20 md:py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem]">
      <div className="col-span-12 mb-12 md:mb-20 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">MST Network Explorer</h2>
        </ScrollReveal>
      </div>
      {/* Left: Blocks */}
      <ScrollReveal className="col-span-12 md:col-span-6">
        <div className="border-2 border-foreground p-6 md:p-8">
          <div className="flex justify-between items-center mb-8 border-b-2 border-foreground pb-4">
            <h3 className="text-lg md:text-xl font-black uppercase">Latest Blocks</h3>
            <LayoutGrid size={20} className="text-primary" />
          </div>
          <div className="space-y-4">
            {blocks.map((b, i) => (
              <motion.div
                key={b.id}
                className="flex justify-between items-center p-4 border border-foreground hover:bg-primary/5 hover:border-primary transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                <span className="text-sm font-black tracking-tighter">{b.id}</span>
                <span className="label-style opacity-40">{b.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      {/* Right: Transactions */}
      <ScrollReveal className="col-span-12 md:col-span-6 mt-6 md:mt-0" delay={0.2}>
        <div className="border-2 border-foreground p-6 md:p-8">
          <div className="flex justify-between items-center mb-8 border-b-2 border-foreground pb-4">
            <h3 className="text-lg md:text-xl font-black uppercase">Latest Transactions</h3>
            <ArrowLeftRight size={20} className="text-primary" />
          </div>
          <div className="space-y-4">
            {txns.map((t, i) => (
              <motion.div
                key={t.addr}
                className="flex justify-between items-center p-4 border border-foreground hover:bg-primary/5 hover:border-primary transition-all cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: -4 }}
              >
                <span className="text-sm font-black tracking-tighter">{t.addr}</span>
                <span className="label-style opacity-40">{t.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <div className="col-span-12 mt-12 md:mt-16 flex justify-center">
        <ScrollReveal delay={0.3}>
          <motion.button
            className="px-10 py-3 border-2 border-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Visit our explorer
          </motion.button>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ExplorerSection;
