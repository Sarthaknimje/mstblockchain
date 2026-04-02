import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Search, Users, ArrowRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import mstLogo from "@/assets/mst-logo.png";

const products = [
  { name: "BridgeKey Wallet", icon: Wallet, color: "from-violet-500 to-purple-600", desc: "Secure Web3 wallet for digital assets & dApp interaction" },
  { name: "MSTScan Explorer", icon: Search, color: "from-cyan-500 to-blue-600", desc: "Blockchain explorer for transactions, blocks & contracts" },
  { name: "MST Bridge", icon: ArrowRight, color: "from-emerald-500 to-teal-600", desc: "Cross-chain asset transfers between EVM networks" },
  { name: "MST Buddy", icon: Users, color: "from-amber-500 to-orange-600", desc: "AI-powered community assistant for ecosystem guidance" },
  { name: "SARAL Protocol", icon: Shield, color: "from-rose-500 to-pink-600", desc: "Simple, Accessible, Reliable, Affordable, Limitless" },
];

const stats = [
  { label: "Validators", target: 69000, suffix: "+", icon: Shield },
  { label: "Wallets Created", target: 161000, suffix: "+", icon: Wallet },
  { label: "Registered Users", target: 300000, suffix: "+", icon: Users },
  { label: "Block Time", target: 3, suffix: "s", icon: Zap },
];

const partners = [
  "Ethereum", "Polygon", "BNB Chain", "Blockscout", "Hardhat", "Solidity", "OpenZeppelin", "Chainlink",
  "IPFS", "MetaMask", "WalletConnect", "The Graph", "Alchemy", "Infura", "Remix IDE", "Tenderly",
];

const typewriterWords = ["THE NEW INTERNET.", "WEB3 FOR EVERYONE.", "SARAL INFRASTRUCTURE.", "DECENTRALIZED FUTURE."];

// Animated counting hook
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

// Floating particle component
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 6 + 2,
          height: Math.random() * 6 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: `hsl(var(--primary) / ${Math.random() * 0.3 + 0.05})`,
        }}
        animate={{
          y: [0, -30, 10, -20, 0],
          x: [0, 15, -10, 20, 0],
          opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
          scale: [1, 1.5, 0.8, 1.3, 1],
        }}
        transition={{
          duration: Math.random() * 8 + 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
    {/* Connection lines */}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px"
        style={{
          width: Math.random() * 120 + 40,
          left: `${Math.random() * 80}%`,
          top: `${Math.random() * 100}%`,
          background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), transparent)`,
          transform: `rotate(${Math.random() * 60 - 30}deg)`,
        }}
        animate={{ opacity: [0, 0.5, 0], x: [0, 20, 0] }}
        transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[wordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIdx]);

  // Stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Product rotation
  useEffect(() => {
    const interval = setInterval(() => setCurrentProduct((p) => (p + 1) % products.length), 3500);
    return () => clearInterval(interval);
  }, []);

  const stat0 = useCountUp(stats[0].target, 2500, statsVisible);
  const stat1 = useCountUp(stats[1].target, 2500, statsVisible);
  const stat2 = useCountUp(stats[2].target, 2500, statsVisible);
  const stat3 = useCountUp(stats[3].target, 800, statsVisible);
  const countValues = [stat0, stat1, stat2, stat3];

  return (
    <section className="relative grid grid-cols-12 gap-x-[1.4rem] pt-10 md:pt-16 pb-16 md:pb-28 items-center overflow-hidden">
      <FloatingParticles />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl float-orb" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl float-orb-delay" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-primary/6 blur-3xl float-orb-slow" />
      </div>

      {/* Left Column */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-start relative z-10">
        <motion.span
          className="inline-block py-1.5 px-4 primary-gradient text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Next-Gen EVM Layer-1 Blockchain
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          ENGINEERING<br />
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
          MST Blockchain is a next-generation EVM Compatible Layer-1 blockchain, designed to make Web3{" "}
          <span className="text-primary font-black">secure, accessible, and affordable</span> for everyone.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {["Simple", "Accessible", "Reliable", "Affordable", "Limitless"].map((word, i) => (
            <motion.span
              key={word}
              className="px-3 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.15em] shimmer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          SARAL Infrastructure — The foundation for real-world Web3 adoption
        </motion.p>

        <motion.div
          className="flex gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="px-6 md:px-8 py-3 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-all primary-glow-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Ecosystem
          </motion.button>
          <motion.button
            className="px-6 md:px-8 py-3 border-2 border-foreground text-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Read Docs
          </motion.button>
        </motion.div>

        {/* Stats Grid with counting */}
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
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon size={12} className="text-primary" />
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-primary">{stat.label}</p>
              </div>
              <p className="text-xl md:text-2xl font-black italic group-hover:text-primary transition-colors">
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
        {/* Floating logo behind */}
        <motion.img
          src={mstLogo}
          alt=""
          className="absolute -top-10 -right-10 w-40 h-40 opacity-5 z-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10" style={{ perspective: "1000px" }}>
          {/* 3D rotating cube container */}
          <div className="relative aspect-square max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct}
                className="absolute inset-0 border-2 border-foreground/30 overflow-hidden"
                initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient background based on product */}
                <div className={`absolute inset-0 bg-gradient-to-br ${products[currentProduct].color} opacity-10`} />
                <div className="absolute inset-0 gradient-mesh-intense" />

                {/* Grid pattern */}
                <div className="absolute inset-0 blueprint-grid opacity-20" />

                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${products[currentProduct].color}`} />

                {/* Content */}
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
                        <div className="w-20 h-20 border-2 border-primary/30 flex items-center justify-center relative">
                          <Icon size={36} className="text-primary" strokeWidth={1.5} />
                          <motion.div
                            className="absolute inset-0 border border-primary/20"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
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

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
              </motion.div>
            </AnimatePresence>

            {/* Orbiting elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border border-primary/30 flex items-center justify-center bg-background/80 backdrop-blur-sm"
              animate={{ y: [0, -8, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe size={12} className="text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 border border-primary/30 flex items-center justify-center bg-background/80 backdrop-blur-sm"
              animate={{ y: [0, 8, 0], rotate: [0, -90, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Cpu size={12} className="text-primary" />
            </motion.div>
          </div>

          {/* Product navigation dots */}
          <div className="flex items-center gap-2 mt-6 justify-center">
            {products.map((product, i) => (
              <button key={product.name} onClick={() => setCurrentProduct(i)} className="group">
                <motion.div
                  className="h-1.5 transition-all duration-500"
                  style={{
                    width: currentProduct === i ? 32 : 12,
                    backgroundColor: currentProduct === i ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.15)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Partnership Scrollbar */}
      <div className="col-span-12 mt-16 pt-8 border-t border-foreground/10">
        <p className="label-style text-on-surface-variant mb-4 text-center">Powered by Web3 Standards</p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <span
                key={`${partner}-${i}`}
                className="text-xs font-black uppercase tracking-[0.15em] text-foreground/20 hover:text-primary transition-colors flex-shrink-0 px-4 py-2 border border-foreground/5 hover:border-primary/30"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
