import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wallet, Search, Users, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import productWallet from "@/assets/product-wallet.jpg";
import productExplorer from "@/assets/product-explorer.jpg";
import productBridge from "@/assets/product-bridge.jpg";
import productBuddy from "@/assets/product-buddy.jpg";
import productTestnet from "@/assets/product-testnet.jpg";

const products = [
  { name: "BridgeKey Wallet", img: productWallet, desc: "Secure Web3 wallet for storing digital assets and interacting with dApps across the MST ecosystem." },
  { name: "MSTScan Explorer", img: productExplorer, desc: "Official blockchain explorer providing transparent access to transactions, blocks, and smart contracts." },
  { name: "MST Bridge", img: productBridge, desc: "Cross-chain bridge enabling seamless asset transfers between MST and other EVM-compatible networks." },
  { name: "MST Buddy", img: productBuddy, desc: "Community assistant platform helping users explore and understand the MST ecosystem with AI-powered guidance." },
  { name: "Testnet & Mainnet", img: productTestnet, desc: "Full development environment for testing smart contracts before deployment on the live MST network." },
];

const stats = [
  { label: "Validators", value: "69,000+", icon: Users },
  { label: "Wallets Created", value: "161,000+", icon: Wallet },
  { label: "Registered Users", value: "300,000+", icon: Search },
  { label: "Block Time", value: "3s", icon: ArrowRight },
];

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentProduct((p) => (p + 1) % products.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-12 gap-x-[1.4rem] pt-10 md:pt-16 pb-16 md:pb-28 items-center">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
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
          ENGINEERING THE<br />
          <span className="primary-gradient-text">NEW INTERNET.</span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          MST Blockchain is a next-generation EVM Compatible Layer-1 blockchain, designed to make Web3{" "}
          <span className="text-primary font-black">secure, accessible, and affordable</span> for everyone.
          Build, explore, and interact with decentralized applications using familiar tools and a growing ecosystem.
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
              className="px-3 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.15em]"
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

        {/* Stats Grid */}
        <motion.div
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
              <p className="text-xl md:text-2xl font-black italic group-hover:text-primary transition-colors">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Column: Product Carousel */}
      <motion.div
        className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative">
          {/* Product image with border */}
          <div className="aspect-square border-2 border-foreground overflow-hidden relative primary-glow-shadow">
            <div className="absolute top-0 left-0 right-0 h-1 primary-gradient z-10" />
            {products.map((product, i) => (
              <motion.img
                key={product.name}
                src={product.img}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ opacity: currentProduct === i ? 1 : 0 }}
                transition={{ duration: 1 }}
                width={1024}
                height={1024}
              />
            ))}
            {/* Overlay gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
            {/* Product name overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
              key={currentProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                {String(currentProduct + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </p>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2">
                {products[currentProduct].name}
              </h3>
              <p className="text-xs text-white/70 font-medium max-w-md leading-relaxed">
                {products[currentProduct].desc}
              </p>
            </motion.div>
          </div>

          {/* Product navigation dots */}
          <div className="flex items-center gap-2 mt-4">
            {products.map((product, i) => (
              <button
                key={product.name}
                onClick={() => setCurrentProduct(i)}
                className="flex items-center gap-2 group"
              >
                <motion.div
                  className="h-1 transition-all duration-500"
                  style={{
                    width: currentProduct === i ? 40 : 16,
                    backgroundColor: currentProduct === i ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.2)",
                  }}
                />
              </button>
            ))}
            <span className="ml-auto text-[9px] font-black uppercase tracking-[0.15em] text-on-surface-variant">
              {products[currentProduct].name}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
