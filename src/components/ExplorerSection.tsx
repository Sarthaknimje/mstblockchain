import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ArrowLeftRight, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// Generate mock block data
const generateBlock = (baseNum: number) => ({
  id: `#${(12845291 + baseNum).toLocaleString()}`,
  time: `${(Math.random() * 2 + 0.2).toFixed(1)}s ago`,
  txCount: Math.floor(Math.random() * 150 + 20),
  validator: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
  gasUsed: `${(Math.random() * 40 + 10).toFixed(1)}%`,
  key: Math.random(),
});

const generateTx = () => ({
  hash: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
  amount: `${(Math.random() * 5000 + 0.01).toFixed(Math.random() > 0.5 ? 1 : 2)} MST`,
  from: `0x${Math.random().toString(16).substr(2, 6)}`,
  to: `0x${Math.random().toString(16).substr(2, 6)}`,
  status: Math.random() > 0.05 ? "success" : "pending",
  key: Math.random(),
});

const ExplorerSection = () => {
  const [blocks, setBlocks] = useState(() => Array.from({ length: 5 }, (_, i) => generateBlock(i)));
  const [txns, setTxns] = useState(() => Array.from({ length: 5 }, () => generateTx()));
  const [blockCount, setBlockCount] = useState(0);

  const addNewBlock = useCallback(() => {
    setBlockCount((c) => c + 1);
    setBlocks((prev) => [generateBlock(prev.length + blockCount), ...prev.slice(0, 4)]);
  }, [blockCount]);

  const addNewTx = useCallback(() => {
    setTxns((prev) => [generateTx(), ...prev.slice(0, 4)]);
  }, []);

  useEffect(() => {
    const blockInterval = setInterval(addNewBlock, 3000);
    const txInterval = setInterval(addNewTx, 2000);
    return () => {
      clearInterval(blockInterval);
      clearInterval(txInterval);
    };
  }, [addNewBlock, addNewTx]);

  return (
    <section id="explorer" className="py-16 md:py-28 section-border">
      <div className="grid grid-cols-12 gap-x-[1.4rem]">
        <div className="col-span-12 mb-10 md:mb-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="label-style text-primary mb-3 block">Live Network</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">MST Network Explorer</h2>
              </div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 border border-primary/30"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap size={12} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">Live — 3s Block Time</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Blocks */}
        <div className="col-span-12 md:col-span-6">
          <ScrollReveal>
            <div className="border-2 border-foreground p-5 md:p-6">
              <div className="flex justify-between items-center mb-6 border-b-2 border-foreground pb-3">
                <h3 className="text-base md:text-lg font-black uppercase">Latest Blocks</h3>
                <LayoutGrid size={18} className="text-primary" />
              </div>
              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {blocks.map((b) => (
                    <motion.div
                      key={b.key}
                      className="flex justify-between items-center p-3 border border-foreground/50 hover:bg-primary/5 hover:border-primary transition-all cursor-pointer group"
                      initial={{ opacity: 0, x: -30, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, x: 30, height: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      layout
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                          <LayoutGrid size={12} className="text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-black tracking-tighter block">{b.id}</span>
                          <span className="text-[9px] text-on-surface-variant">{b.txCount} txns · {b.gasUsed} gas</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-black opacity-40 uppercase block">{b.time}</span>
                        <span className="text-[8px] text-on-surface-variant">{b.validator}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Transactions */}
        <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
          <ScrollReveal delay={0.15}>
            <div className="border-2 border-foreground p-5 md:p-6">
              <div className="flex justify-between items-center mb-6 border-b-2 border-foreground pb-3">
                <h3 className="text-base md:text-lg font-black uppercase">Latest Transactions</h3>
                <ArrowLeftRight size={18} className="text-primary" />
              </div>
              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {txns.map((t) => (
                    <motion.div
                      key={t.key}
                      className="flex justify-between items-center p-3 border border-foreground/50 hover:bg-primary/5 hover:border-primary transition-all cursor-pointer"
                      initial={{ opacity: 0, x: 30, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, x: -30, height: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      layout
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                          <ArrowLeftRight size={12} className="text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-black tracking-tighter block">{t.hash}</span>
                          <span className="text-[9px] text-on-surface-variant">{t.from} → {t.to}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-primary block">{t.amount}</span>
                        <span className={`text-[8px] font-black uppercase ${t.status === "success" ? "text-emerald-500" : "text-amber-500"}`}>
                          {t.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="col-span-12 mt-10 flex justify-center">
          <ScrollReveal delay={0.2}>
            <motion.a
              href="https://mstscan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 border-2 border-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit MSTScan Explorer
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExplorerSection;
