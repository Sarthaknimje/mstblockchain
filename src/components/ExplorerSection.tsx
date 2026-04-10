import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ArrowLeftRight, Zap, ArrowUpRight, ArrowDownLeft, FileCode, Flame, Clock, Hash, Blocks, Activity } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type TxType = "send" | "receive" | "contract" | "swap";

const txTypeConfig: Record<TxType, { icon: typeof Zap; label: string; colorClass: string; bgClass: string; gradient: string }> = {
  send: { icon: ArrowUpRight, label: "Send", colorClass: "text-rose-400", bgClass: "bg-rose-500/10 border-rose-500/30", gradient: "from-rose-500/20 via-pink-500/10 to-transparent" },
  receive: { icon: ArrowDownLeft, label: "Receive", colorClass: "text-emerald-400", bgClass: "bg-emerald-500/10 border-emerald-500/30", gradient: "from-emerald-500/20 via-teal-500/10 to-transparent" },
  contract: { icon: FileCode, label: "Contract Call", colorClass: "text-violet-400", bgClass: "bg-violet-500/10 border-violet-500/30", gradient: "from-violet-500/20 via-purple-500/10 to-transparent" },
  swap: { icon: ArrowLeftRight, label: "Swap", colorClass: "text-cyan-400", bgClass: "bg-cyan-500/10 border-cyan-500/30", gradient: "from-cyan-500/20 via-blue-500/10 to-transparent" },
};

const txTypes: TxType[] = ["send", "receive", "contract", "swap"];
const blockGradients = [
  "from-indigo-500/15 to-blue-500/5",
  "from-violet-500/15 to-purple-500/5",
  "from-cyan-500/15 to-teal-500/5",
  "from-amber-500/15 to-orange-500/5",
  "from-rose-500/15 to-pink-500/5",
];
const blockBorders = [
  "border-indigo-500/30",
  "border-violet-500/30",
  "border-cyan-500/30",
  "border-amber-500/30",
  "border-rose-500/30",
];
const blockTextColors = [
  "text-indigo-400",
  "text-violet-400",
  "text-cyan-400",
  "text-amber-400",
  "text-rose-400",
];

const validatorNames = [
  "MST-Node-Alpha", "Quantum-Stake", "CryptoGuard-7", "NexusValidator",
  "BlockForge-V2", "StellarNode", "ChainKeeper", "MST-Sentinel",
  "OrbitStake", "TrustNode-X", "HyperValidator", "MST-Guardian",
];

const generateBlock = (baseNum: number) => {
  const ci = Math.floor(Math.random() * blockGradients.length);
  return {
    id: `#${(12845291 + baseNum).toLocaleString()}`,
    time: `${(Math.random() * 2 + 0.2).toFixed(1)}s ago`,
    txCount: Math.floor(Math.random() * 150 + 20),
    validator: validatorNames[Math.floor(Math.random() * validatorNames.length)],
    gasUsed: `${(Math.random() * 40 + 10).toFixed(1)}%`,
    reward: `${(Math.random() * 0.5 + 0.01).toFixed(3)} MST`,
    colorIdx: ci,
    key: Math.random(),
  };
};

const generateTx = () => {
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
  const { t } = useLanguage();
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
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-violet-500/8 to-indigo-500/4 blur-3xl float-orb-slow" />
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/8 to-blue-500/4 blur-3xl float-orb" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-primary-glow/3 blur-3xl float-orb-delay" />
      </div>

      <div className="relative z-10">
        <div className="mb-10 md:mb-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="label-style text-primary mb-3 block">{t("explorer.label")}</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                  {t("explorer.title")} <span className="primary-gradient-text">{t("explorer.title2")}</span>
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div className="w-2 h-2 rounded-full bg-emerald-500" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-400">{t("explorer.live")}</span>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Network stats bar */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: t("explorer.totalTx"), value: totalTxns.toLocaleString(), icon: Hash, gradient: "from-cyan-500/15 to-blue-500/5", border: "border-cyan-500/20", text: "text-cyan-400" },
              { label: t("explorer.gasPrice"), value: "0.001 Gwei", icon: Flame, gradient: "from-amber-500/15 to-orange-500/5", border: "border-amber-500/20", text: "text-amber-400" },
              { label: t("explorer.avgBlock"), value: "3.0s", icon: Clock, gradient: "from-emerald-500/15 to-teal-500/5", border: "border-emerald-500/20", text: "text-emerald-400" },
              { label: t("explorer.activeVal"), value: "69,241", icon: Activity, gradient: "from-violet-500/15 to-purple-500/5", border: "border-violet-500/20", text: "text-violet-400" },
            ].map((s) => (
              <motion.div
                key={s.label}
                className={`border ${s.border} p-4 flex items-center gap-3 hover:border-primary/40 transition-all relative overflow-hidden group`}
                whileHover={{ y: -2 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <s.icon size={18} className={`${s.text} relative z-10`} />
                <div className="relative z-10">
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-on-surface-variant">{s.label}</p>
                  <p className="text-sm font-black">{s.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Blocks */}
          <div className="col-span-12 md:col-span-5">
            <ScrollReveal>
              <div className="border-2 border-foreground/20 p-4 md:p-6 relative overflow-hidden bg-gradient-to-b from-background to-background">
                <div className="absolute top-0 left-0 right-0 h-1 primary-gradient" />
                <div className="flex justify-between items-center mb-5 border-b border-foreground/10 pb-3">
                  <h3 className="text-base md:text-lg font-black uppercase flex items-center gap-2">
                    <Blocks size={18} className="text-primary" />
                    {t("explorer.latestBlocks")}
                  </h3>
                  <motion.div
                    className="flex items-center gap-1.5"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[8px] font-black text-emerald-400">LIVE</span>
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <AnimatePresence mode="popLayout">
                    {blocks.map((b) => (
                      <motion.div
                        key={b.key}
                        className={`p-3 border ${blockBorders[b.colorIdx]} hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden`}
                        initial={{ opacity: 0, x: -30, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0, x: 30, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        layout
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${blockGradients[b.colorIdx]} opacity-60`} />
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className={`w-9 h-9 border ${blockBorders[b.colorIdx]} bg-gradient-to-br ${blockGradients[b.colorIdx]} flex items-center justify-center`}>
                                <Blocks size={14} className={blockTextColors[b.colorIdx]} />
                              </div>
                              <div>
                                <span className={`text-xs font-black tracking-tighter block ${blockTextColors[b.colorIdx]}`}>{b.id}</span>
                                <span className="text-[9px] text-on-surface-variant">{b.txCount} txns</span>
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-on-surface-variant">{b.time}</span>
                          </div>
                          <div className="flex justify-between items-center ml-11">
                            <span className="text-[9px] text-on-surface-variant font-medium">⚡ {b.validator}</span>
                            <span className="text-[9px] font-bold text-emerald-400">{b.reward}</span>
                          </div>
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
              <div className="border-2 border-foreground/20 p-4 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-violet-500 via-cyan-500 to-emerald-500" />
                <div className="flex justify-between items-center mb-5 border-b border-foreground/10 pb-3">
                  <h3 className="text-base md:text-lg font-black uppercase flex items-center gap-2">
                    <ArrowLeftRight size={18} className="text-primary" />
                    {t("explorer.latestTx")}
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
                          className="flex justify-between items-center p-3 border border-foreground/10 hover:border-foreground/30 transition-all cursor-pointer group relative overflow-hidden"
                          initial={{ opacity: 0, x: 30, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          exit={{ opacity: 0, x: -30, height: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          layout
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${cfg.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                          <div className="flex items-center gap-2.5 relative z-10">
                            <div className={`w-9 h-9 border flex items-center justify-center ${cfg.bgClass}`}>
                              <TxIcon size={14} className={cfg.colorClass} />
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
                          <div className="text-right relative z-10">
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
              className="inline-flex items-center gap-2 px-10 py-3 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-all primary-glow-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("explorer.visit")}
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExplorerSection;
