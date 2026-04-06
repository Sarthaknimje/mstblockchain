import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Search, Users, ArrowRight, Zap, Shield, Globe, Cpu, Hexagon, Triangle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import mstLogo from "@/assets/mst-logo.png";

const products = [
  { name: "BridgeKey Wallet", icon: Wallet, gradient: "from-violet-500 via-purple-500 to-fuchsia-500", desc: "Secure Web3 wallet for digital assets & dApp interaction" },
  { name: "MSTScan Explorer", icon: Search, gradient: "from-cyan-400 via-blue-500 to-indigo-600", desc: "Blockchain explorer for transactions, blocks & contracts" },
  { name: "MST Bridge", icon: ArrowRight, gradient: "from-emerald-400 via-teal-500 to-cyan-600", desc: "Cross-chain asset transfers between EVM networks" },
  { name: "MST Buddy", icon: Users, gradient: "from-amber-400 via-orange-500 to-red-500", desc: "AI-powered community assistant for ecosystem guidance" },
  { name: "SARAL Protocol", icon: Shield, gradient: "from-rose-400 via-pink-500 to-purple-600", desc: "Simple, Accessible, Reliable, Affordable, Limitless" },
];

const stats = [
  { label: "Validators", target: 69000, suffix: "+", icon: Shield },
  { label: "Wallets Created", target: 161000, suffix: "+", icon: Wallet },
  { label: "Registered Users", target: 300000, suffix: "+", icon: Users },
  { label: "Block Time", target: 3, suffix: "s", icon: Zap },
];

const partners = [
  { name: "Ethereum", gradient: "from-blue-400 to-indigo-500" },
  { name: "Polygon", gradient: "from-purple-400 to-violet-600" },
  { name: "BNB Chain", gradient: "from-amber-400 to-yellow-500" },
  { name: "Blockscout", gradient: "from-cyan-400 to-blue-500" },
  { name: "Hardhat", gradient: "from-yellow-400 to-amber-600" },
  { name: "Solidity", gradient: "from-slate-400 to-gray-600" },
  { name: "OpenZeppelin", gradient: "from-indigo-400 to-blue-600" },
  { name: "Chainlink", gradient: "from-blue-400 to-indigo-600" },
  { name: "IPFS", gradient: "from-teal-400 to-cyan-600" },
  { name: "MetaMask", gradient: "from-orange-400 to-amber-600" },
  { name: "WalletConnect", gradient: "from-blue-400 to-sky-600" },
  { name: "The Graph", gradient: "from-violet-400 to-purple-600" },
  { name: "Alchemy", gradient: "from-blue-400 to-indigo-500" },
  { name: "Infura", gradient: "from-red-400 to-orange-500" },
  { name: "Remix IDE", gradient: "from-blue-500 to-indigo-700" },
  { name: "Tenderly", gradient: "from-purple-400 to-pink-600" },
];

const typewriterWords = ["THE NEW INTERNET.", "WEB3 FOR EVERYONE.", "SARAL INFRASTRUCTURE.", "DECENTRALIZED FUTURE."];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const Web3Background = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Animated gradient orbs */}
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full"
        style={{
          width: `${120 + i * 60}px`,
          height: `${120 + i * 60}px`,
          left: `${10 + i * 18}%`,
          top: `${15 + (i % 3) * 25}%`,
          background: `radial-gradient(circle, hsl(var(--primary) / ${0.08 + i * 0.02}), hsl(var(--primary-glow) / ${0.03}), transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, -40, 20, -30, 0],
          x: [0, 20, -15, 25, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
      />
    ))}
    {/* Floating hexagons */}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`hex-${i}`}
        className="absolute"
        style={{ left: `${Math.random() * 90}%`, top: `${Math.random() * 90}%` }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.5 }}
      >
        <Hexagon size={20 + i * 8} className="text-primary" strokeWidth={0.5} />
      </motion.div>
    ))}
    {/* Grid lines */}
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px"
        style={{
          width: `${60 + Math.random() * 200}px`,
          left: `${Math.random() * 80}%`,
          top: `${Math.random() * 100}%`,
          background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), hsl(var(--primary-glow) / 0.1), transparent)`,
          transform: `rotate(${Math.random() * 40 - 20}deg)`,
        }}
        animate={{ opacity: [0, 0.6, 0], x: [0, 30, 0] }}
        transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const { t } = useLanguage();
  const [wordIdx, setWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const word = typewriterWords[wordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) { setIsDeleting(false); setWordIdx((p) => (p + 1) % typewriterWords.length); }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIdx]);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentProduct((p) => (p + 1) % products.length), 3500);
    return () => clearInterval(interval);
  }, []);

  const stat0 = useCountUp(stats[0].target, 2500, statsVisible);
  const stat1 = useCountUp(stats[1].target, 2500, statsVisible);
  const stat2 = useCountUp(stats[2].target, 2500, statsVisible);
  const stat3 = useCountUp(stats[3].target, 800, statsVisible);
  const countValues = [stat0, stat1, stat2, stat3];

  const statGradients = [
    "from-rose-500 to-pink-600",
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-blue-600",
    "from-emerald-500 to-teal-600",
  ];

  return (
    <section className="relative grid grid-cols-12 gap-x-[1.4rem] pt-10 md:pt-16 pb-16 md:pb-28 items-center overflow-hidden">
      <Web3Background />

      {/* Left Column */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-start relative z-10">
        <motion.span
          className="inline-block py-2 px-5 bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] mb-6 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          {t("hero.badge")}
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {t("hero.title1")}<br />
          <span className="primary-gradient-text">
            {displayText}
            <motion.span
              className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t("hero.desc")}{" "}
          <span className="text-primary font-black">{t("hero.desc2")}</span> {t("hero.desc3")}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {[
            { key: "saral.simple", word: "Simple" },
            { key: "saral.accessible", word: "Accessible" },
            { key: "saral.reliable", word: "Reliable" },
            { key: "saral.affordable", word: "Affordable" },
            { key: "saral.limitless", word: "Limitless" },
          ].map((item, i) => {
            const saralColors = [
              "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-600",
              "from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-600",
              "from-violet-500/20 to-purple-500/20 border-violet-500/40 text-violet-600",
              "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-600",
              "from-rose-500/20 to-pink-500/20 border-rose-500/40 text-rose-600",
            ];
            return (
              <motion.span
                key={item.word}
                className={`px-3 py-1.5 bg-gradient-to-r ${saralColors[i]} border text-[10px] font-black uppercase tracking-[0.15em]`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {t(item.key)}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          className="flex gap-4 mt-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="px-6 md:px-8 py-3 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] transition-all primary-glow-shadow btn-gradient-hover relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            />
            <span className="relative z-10">{t("hero.explore")}</span>
          </motion.button>
          <motion.button
            className="px-6 md:px-8 py-3 border-2 border-foreground text-foreground font-black text-xs uppercase tracking-[0.15em] btn-gradient-hover hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">{t("hero.docs")}</span>
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          className="w-full pt-8 border-t-2 border-foreground grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden p-3 border border-foreground/10 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${statGradients[i]} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="flex items-center gap-1.5 mb-1 relative z-10">
                <stat.icon size={12} className="text-primary" />
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-primary">{stat.label}</p>
              </div>
              <p className="text-xl md:text-2xl font-black italic group-hover:text-primary transition-colors relative z-10">
                {countValues[i].toLocaleString()}{stat.suffix}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Column: 3D Cube Product Showcase */}
      <motion.div
        className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.img
          src={mstLogo}
          alt=""
          className="absolute -top-10 -right-10 w-40 h-40 opacity-5 z-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10" style={{ perspective: "1000px" }}>
          <div className="relative aspect-square max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct}
                className="absolute inset-0 border-2 border-foreground/20 overflow-hidden"
                initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Dynamic gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${products[currentProduct].gradient} opacity-10`} />
                <div className="absolute inset-0 gradient-mesh-intense" />
                <div className="absolute inset-0 blueprint-grid opacity-15" />
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${products[currentProduct].gradient}`} />
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${products[currentProduct].gradient} opacity-50`} />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-6"
                  >
                    {(() => {
                      const Icon = products[currentProduct].icon;
                      return (
                        <div className={`w-20 h-20 border-2 border-primary/30 flex items-center justify-center relative bg-gradient-to-br ${products[currentProduct].gradient} bg-opacity-5`}>
                          <Icon size={36} className="text-primary" strokeWidth={1.5} />
                          <motion.div
                            className="absolute inset-0 border border-primary/20"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      );
                    })()}
                  </motion.div>

                  <motion.p
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {String(currentProduct + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                  </motion.p>

                  <motion.h3
                    className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {products[currentProduct].name}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-on-surface-variant font-medium text-center max-w-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {products[currentProduct].desc}
                  </motion.p>
                </div>

                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute -top-4 -right-4 w-10 h-10 border border-primary/30 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm"
              animate={{ y: [0, -8, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe size={14} className="text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 border border-primary/30 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm"
              animate={{ y: [0, 8, 0], rotate: [0, -90, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Cpu size={14} className="text-primary" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-6 w-8 h-8 flex items-center justify-center"
              animate={{ x: [0, 5, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Triangle size={12} className="text-primary/40" />
            </motion.div>
          </div>

          <div className="flex items-center gap-2 mt-6 justify-center">
            {products.map((product, i) => (
              <button key={product.name} onClick={() => setCurrentProduct(i)} className="group">
                <motion.div
                  className="h-1.5 transition-all duration-500"
                  style={{
                    width: currentProduct === i ? 32 : 12,
                    background: currentProduct === i
                      ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-glow)))"
                      : "hsl(var(--foreground) / 0.15)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Partnership Scrollbar with colors */}
      <div className="col-span-12 mt-16 pt-8 border-t border-foreground/10">
        <p className="label-style text-on-surface-variant mb-4 text-center">Powered by Web3 Standards</p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-6 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <span
                key={`${partner.name}-${i}`}
                className={`text-xs font-black uppercase tracking-[0.15em] flex-shrink-0 px-5 py-2.5 border border-foreground/10 hover:border-primary/40 transition-all relative overflow-hidden group`}
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-15 transition-opacity`} />
                <span className="relative z-10 text-foreground/30 group-hover:text-foreground/80 transition-colors">{partner.name}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
