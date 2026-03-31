import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Search, ArrowLeftRight, Bot, Code, Gift, ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import productWallet from "@/assets/product-wallet.jpg";
import productExplorer from "@/assets/product-explorer.jpg";
import productBridge from "@/assets/product-bridge.jpg";
import productBuddy from "@/assets/product-buddy.jpg";
import productTestnet from "@/assets/product-testnet.jpg";

const products = [
  {
    icon: Wallet,
    name: "BridgeKey Wallet",
    tagline: "Your gateway to Web3",
    desc: "A secure, non-custodial Web3 wallet for storing digital assets, managing tokens, and interacting with decentralized applications across the MST ecosystem. Multi-chain support with biometric security.",
    features: ["Non-custodial security", "Multi-chain support", "DApp browser", "Biometric auth"],
    img: productWallet,
    link: "#",
  },
  {
    icon: Search,
    name: "MSTScan",
    tagline: "Blockchain transparency",
    desc: "The official MST blockchain explorer providing transparent, real-time access to transactions, blocks, smart contracts, and validator activity. Powered by Blockscout for institutional-grade data.",
    features: ["Real-time tracking", "Contract verification", "Token analytics", "API access"],
    img: productExplorer,
    link: "https://mstscan.com",
  },
  {
    icon: ArrowLeftRight,
    name: "MST Bridge",
    tagline: "Cross-chain connectivity",
    desc: "Seamlessly transfer assets between MST and other EVM-compatible networks. Enterprise-grade bridge with multi-signature security, instant confirmations, and minimal fees for cross-chain interoperability.",
    features: ["Multi-chain bridge", "Instant transfers", "Low fees", "Multi-sig security"],
    img: productBridge,
    link: "#",
  },
  {
    icon: Bot,
    name: "MST Buddy",
    tagline: "AI-powered community assistant",
    desc: "An intelligent community assistant platform that helps users explore and understand the MST ecosystem. Get answers, learn about features, and navigate the network with AI-powered guidance and support.",
    features: ["AI chat assistant", "Ecosystem guide", "Learning resources", "Community hub"],
    img: productBuddy,
    link: "#",
  },
  {
    icon: Code,
    name: "Testnet & Mainnet",
    tagline: "Build with confidence",
    desc: "Complete development infrastructure for building on MST. Test smart contracts on our testnet with free faucet tokens, then deploy to mainnet with one-click migration. Full EVM compatibility.",
    features: ["Free test tokens", "Full EVM support", "One-click deploy", "Dev tools"],
    img: productTestnet,
    link: "#",
  },
  {
    icon: Gift,
    name: "MST Grants Program",
    tagline: "Funding innovation",
    desc: "Supporting innovative blockchain projects and research initiatives within the MST ecosystem. Apply for grants to build the next generation of decentralized applications on MST infrastructure.",
    features: ["Project funding", "Mentorship", "Technical support", "Marketing help"],
    img: productWallet,
    link: "#",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % products.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const product = products[active];

  return (
    <section id="products" className="py-16 md:py-28 section-border">
      <div className="mb-10 md:mb-16">
        <ScrollReveal>
          <span className="label-style text-primary mb-3 block">SARAL Infrastructure</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Ecosystem Products</h2>
        </ScrollReveal>
      </div>

      {/* Product navigation tabs */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
          {products.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 border text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/20 hover:border-primary"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <p.icon size={14} />
              <span className="hidden sm:inline">{p.name}</span>
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Product showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-12 gap-x-[1.4rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image */}
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="aspect-video border-2 border-foreground overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 primary-gradient z-10" />
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center pl-0 md:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-primary flex items-center justify-center">
                <product.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">{product.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{product.tagline}</p>
              </div>
            </div>

            <p className="text-sm font-medium text-on-surface-variant mb-6 leading-relaxed">
              {product.desc}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1 h-1 bg-primary" />
                  {f}
                </div>
              ))}
            </div>

            <motion.a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 label-style text-primary hover:underline"
              whileHover={{ x: 4 }}
            >
              Explore {product.name} <ExternalLink size={12} />
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="mt-8 flex gap-1">
        {products.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 bg-foreground/10 overflow-hidden">
            {active === i && (
              <motion.div
                className="h-full primary-gradient"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
