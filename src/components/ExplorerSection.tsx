import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ArrowLeftRight, Zap, ArrowUpRight, ArrowDownLeft, FileCode, Flame, Clock, Hash } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type TxType = "send" | "receive" | "contract" | "swap";

const txTypeConfig: Record<TxType, { icon: typeof Zap; label: string; colorClass: string; bgClass: string }> = {
  send: { icon: ArrowUpRight, label: "Send", colorClass: "text-rose-500", bgClass: "bg-rose-500/10 border-rose-500/20" },
  receive: { icon: ArrowDownLeft, label: "Receive", colorClass: "text-emerald-500", bgClass: "bg-emerald-500/10 border-emerald-500/20" },
  contract: { icon: FileCode, label: "Contract Call", colorClass: "text-violet-500", bgClass: "bg-violet-500/10 border-violet-500/20" },
  swap: { icon: ArrowLeftRight, label: "Swap", colorClass: "text-cyan-500", bgClass: "bg-cyan-500/10 border-cyan-500/20" },
};

const txTypes: TxType[] = ["send", "receive", "contract", "swap"];

const generateBlock = (baseNum: number) => ({
  id: `#${(12845291 + baseNum).toLocaleString()}`,
  time: `${(Math.random() * 2 + 0.2).toFixed(1)}s ago`,
  txCount: Math.floor(Math.random() * 150 + 20),
  validator: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
  gasUsed: `${(Math.random() * 40 + 10).toFixed(1)}%`,
  reward: `${(Math.random() * 0.5 + 0.01).toFixed(3)} MST`,
  size: `${(Math.random() * 200 + 50).toFixed(0)} KB`,
  key: Math.random(),
});

const generateTx = (): {
  hash: string; amount: string; from: string; to: string;
  type: TxType; fee: string; method: string; key: number;
} => {
  const type = txTypes[Math.floor(Math.random() * txTypes.length)];
  const methods: Record<TxType, string[]> = {
    send: ["transfer", "send", "transferFrom"],
    receive: ["deposit", "receive", "claim"],
    contract: ["execute", "approve", "deploy", "mint"],
    swap: ["swap", "addLiquidity", "removeLiquidity"],
  };
  return {
    hash: `0x${Math.random().toString(16).substr(2, 6)}...${Math.random().toString(16).substr(2, 4)}`,
    amount: `${(Math.random() * 5000 + 0.01).toFixed(Math.random() > 0.5 ? 1 : 2)} MST`,
    from: `0x${Math.random().toString(16).substr(2, 6)}`,
    to: `0x${Math.random().toString(16).substr(2, 6)}`,
    type,
    fee: `${(Math.random() * 0.01).toFixed(4)} MST`,
    method: methods[type][Math.floor(Math.random() * methods[type].length)],
    key: Math.random(),
  };
};

const ExplorerSection = () => {
  const [blocks, setBlocks] = useState(() => Array.from({ length: 5 }, (_, i) => generateBlock(i)));
  const [txns, setTxns] = useState(() => Array.from({ length: 6 }, () => generateTx()));
  const [blockCount, setBlockCount] = useState(0);
  const [totalTxns, setTotalTxns] = useState(2847291);

  const addNewBlock = useCallback(() => {
    setBlockCount((c) => c + 1);
    setBlocks((prev) => [generateBlock(prev.length + blockCount), ...prev.slice(0, 4)]);
    setTotalTxns((t) => t + Math.floor(Math.random() * 150 + 20));
  }, [blockCount]);

  const addNewTx = useCallback(() => {
    setTxns((prev) => [generateTx(), ...prev.slice(0, 5)]);
  }, []);

  useEffect(() => {
    const blockInterval = setInterval(addNewBlock, 3000);
    const txInterval = setInterval(addNewTx, 1800);
    return () => { clearInterval(blockInterval); clearInterval(txInterval); };
  }, [addNewBlock, addNewTx]);

  return (
    <section id="explorer" className="py-16 md:py-28 section-border relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/4 blur-3xl float-orb-slow pointer-events-none" />
      <div className="absolute top-20 right-0 w-60 h-60 rounded-full bg-violet-500/5 blur-3xl float-orb pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="label-style text-primary mb-3 block">Live Network</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">MST Network Explorer</h2>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 border border-primary/30"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap size={12} className="text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">Live — 3s Block Time</span>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Network stats bar */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: "Total Transactions", value: totalTxns.toLocaleString(), icon: Hash, color: "text-cyan-500" },
              { label: "Gas Price", value: "0.001 Gwei", icon: Flame, color: "text-amber-500" },
              { label: "Avg Block Time", value: "3.0s", icon: Clock, color: "text-emerald-500" },
              { label: "Active Validators", value: "69,241", icon: LayoutGrid, color: "text-violet-500" },
            ].map((s) => (
              <div key={s.label} className="border border-foreground/10 p-3 flex items-center gap-3 hover:border-primary/30 transition-colors">
                <s.icon size={16} className={s.color} />
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-on-surface-variant">{s.label}</p>
                  <p className="text-sm font-black">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Blocks */}
          <div className="col-span-12 md:col-span-5">
            <ScrollReveal>
              <div className="border-2 border-foreground p-4 md:p-6 gradient-border-glow">
                <div className="flex justify-between items-center mb-5 border-b-2 border-foreground pb-3">
                  <h3 className="text-base md:text-lg font-black uppercase flex items-center gap-2">
                    <LayoutGrid size={16} className="text-primary" />
                    Latest Blocks
                  </h3>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                <div className="space-y-2">
                  <AnimatePresence mode="popLayout">
                    {blocks.map((b) => (
                      <motion.div
                        key={b.key}
                        className="p-3 border border-foreground/10 hover:border-primary/40 transition-all cursor-pointer group"
                        initial={{ opacity: 0, x: -30, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0, x: 30, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        layout
                      >
                        <div className="flex justify-between items-start mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <LayoutGrid size={12} className="text-primary" />
                            </div>
                            <div>
                              <span className="text-xs font-black tracking-tighter block group-hover:text-primary transition-colors">{b.id}</span>
                              <span className="text-[9px] text-on-surface-variant">{b.txCount} txns</span>
                            </div>
                          </div>
                          <span className="text-[9px] font-black text-on-surface-variant">{b.time}</span>
                        </div>
                        <div className="flex justify-between items-center ml-10">
                          <span className="text-[8px] text-on-surface-variant">Validator: {b.validator}</span>
                          <span className="text-[8px] font-bold text-emerald-500">{b.reward}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Transactions */}
          <div className="col-span-12 md:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="border-2 border-foreground p-4 md:p-6 gradient-border-glow">
                <div className="flex justify-between items-center mb-5 border-b-2 border-foreground pb-3">
                  <h3 className="text-base md:text-lg font-black uppercase flex items-center gap-2">
                    <ArrowLeftRight size={16} className="text-primary" />
                    Latest Transactions
                  </h3>
                  <div className="flex gap-1.5">
                    {txTypes.map((t) => {
                      const cfg = txTypeConfig[t];
                      return (
                        <span key={t} className={`text-[7px] font-black uppercase tracking-wider px-2 py-0.5 border ${cfg.bgClass} ${cfg.colorClass}`}>
                          {cfg.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <AnimatePresence mode="popLayout">
                    {txns.map((t) => {
                      const cfg = txTypeConfig[t.type];
                      const TxIcon = cfg.icon;
                      return (
                        <motion.div
                          key={t.key}
                          className="flex justify-between items-center p-2.5 border border-foreground/10 hover:border-foreground/30 transition-all cursor-pointer group"
                          initial={{ opacity: 0, x: 30, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          exit={{ opacity: 0, x: -30, height: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          layout
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 border flex items-center justify-center ${cfg.bgClass}`}>
                              <TxIcon size={13} className={cfg.colorClass} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black tracking-tighter group-hover:text-primary transition-colors">{t.hash}</span>
                                <span className={`text-[7px] font-black uppercase px-1.5 py-0.5 border ${cfg.bgClass} ${cfg.colorClass}`}>
                                  {t.method}
                                </span>
                              </div>
                              <span className="text-[9px] text-on-surface-variant">{t.from} → {t.to}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs font-black block ${cfg.colorClass}`}>{t.amount}</span>
                            <span className="text-[8px] text-on-surface-variant">Fee: {t.fee}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
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
