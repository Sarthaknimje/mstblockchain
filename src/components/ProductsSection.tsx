import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Search, ArrowLeftRight, Bot, Code, Gift, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import productWallet from "@/assets/product-wallet.jpg";
import productExplorer from "@/assets/product-explorer.jpg";
import productBridge from "@/assets/product-bridge.jpg";
import productBuddy from "@/assets/product-buddy.jpg";
import productTestnet from "@/assets/product-testnet.jpg";

const products = [
  {
    icon: Wallet, name: "BridgeKey Wallet", tagline: "Your gateway to Web3",
    desc: "A secure, non-custodial Web3 wallet for storing digital assets, managing tokens, and interacting with decentralized applications across the MST ecosystem.",
    features: ["Non-custodial security", "Multi-chain support", "DApp browser", "Biometric auth"],
    img: productWallet, link: "#",
    gradient: "from-violet-500 to-purple-600", bgGradient: "from-violet-500/10 to-purple-600/5", border: "border-violet-500/30", text: "text-violet-400",
  },
  {
    icon: Search, name: "MSTScan", tagline: "Blockchain transparency",
    desc: "The official MST blockchain explorer providing transparent, real-time access to transactions, blocks, smart contracts, and validator activity.",
    features: ["Real-time tracking", "Contract verification", "Token analytics", "API access"],
    img: productExplorer, link: "https://mstscan.com",
    gradient: "from-cyan-500 to-blue-600", bgGradient: "from-cyan-500/10 to-blue-600/5", border: "border-cyan-500/30", text: "text-cyan-400",
  },
  {
    icon: ArrowLeftRight, name: "MST Bridge", tagline: "Cross-chain connectivity",
    desc: "Seamlessly transfer assets between MST and other EVM-compatible networks with multi-signature security and instant confirmations.",
    features: ["Multi-chain bridge", "Instant transfers", "Low fees", "Multi-sig security"],
    img: productBridge, link: "#",
    gradient: "from-emerald-500 to-teal-600", bgGradient: "from-emerald-500/10 to-teal-600/5", border: "border-emerald-500/30", text: "text-emerald-400",
  },
  {
    icon: Bot, name: "MST Buddy", tagline: "AI-powered assistant",
    desc: "An intelligent community assistant platform that helps users explore and understand the MST ecosystem with AI-powered guidance.",
    features: ["AI chat assistant", "Ecosystem guide", "Learning resources", "Community hub"],
    img: productBuddy, link: "#",
    gradient: "from-amber-500 to-orange-600", bgGradient: "from-amber-500/10 to-orange-600/5", border: "border-amber-500/30", text: "text-amber-400",
  },
  {
    icon: Code, name: "Testnet & Mainnet", tagline: "Build with confidence",
    desc: "Complete development infrastructure. Test smart contracts on testnet with free faucet tokens, then deploy to mainnet.",
    features: ["Free test tokens", "Full EVM support", "One-click deploy", "Dev tools"],
    img: productTestnet, link: "#",
    gradient: "from-rose-500 to-pink-600", bgGradient: "from-rose-500/10 to-pink-600/5", border: "border-rose-500/30", text: "text-rose-400",
  },
  {
    icon: Gift, name: "MST Grants Program", tagline: "Funding innovation",
    desc: "Supporting innovative blockchain projects and research initiatives within the MST ecosystem.",
    features: ["Project funding", "Mentorship", "Technical support", "Marketing help"],
    img: productWallet, link: "/grants",
    gradient: "from-indigo-500 to-blue-600", bgGradient: "from-indigo-500/10 to-blue-600/5", border: "border-indigo-500/30", text: "text-indigo-400",
  },
];

const ProductsSection = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % products.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const product = products[active];

  return (
    <section id="products" className="py-16 md:py-28 section-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-3xl float-orb" />
      </div>

      <div className="relative z-10">
        <div className="mb-10 md:mb-16">
          <ScrollReveal>
            <span className="label-style text-primary mb-3 block">{t("products.label")}</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              {t("products.title")} <span className="primary-gradient-text">{t("products.title2")}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Product navigation tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
            {products.map((p, i) => (
              <motion.button
                key={p.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 border text-[10px] font-black uppercase tracking-[0.15em] transition-all relative overflow-hidden ${
                  active === i
                    ? `${p.border} bg-gradient-to-r ${p.bgGradient}`
                    : "border-foreground/10 hover:border-primary/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {active === i && <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.gradient}`} />}
                <p.icon size={14} className={active === i ? p.text : ""} />
                <span className={`hidden sm:inline ${active === i ? p.text : ""}`}>{p.name}</span>
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
              <div className={`aspect-video border-2 ${product.border} overflow-hidden relative group`}>
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${product.gradient} z-10`} />
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`} />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} opacity-50`} />
              </div>
            </div>

            {/* Content */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center pl-0 md:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 border ${product.border} bg-gradient-to-br ${product.bgGradient} flex items-center justify-center`}>
                  <product.icon size={20} className={product.text} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">{product.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${product.text}`}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-sm font-medium text-on-surface-variant mb-6 leading-relaxed">{product.desc}</p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${product.gradient} rounded-full`} />
                    {f}
                  </div>
                ))}
              </div>

              <motion.a
                href={product.link}
                target={product.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 label-style ${product.text} hover:underline`}
                whileHover={{ x: 4 }}
              >
                {t("products.explore")} {product.name} <ExternalLink size={12} />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="mt-8 flex gap-1">
          {products.map((p, i) => (
            <div key={i} className="flex-1 h-1 bg-foreground/5 overflow-hidden">
              {active === i && (
                <motion.div
                  className={`h-full bg-gradient-to-r ${p.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
