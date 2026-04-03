import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsMST from "@/components/WhatIsMST";
import ProductsSection from "@/components/ProductsSection";
import ValidatorSection from "@/components/ValidatorSection";
import ExplorerSection from "@/components/ExplorerSection";
import EcosystemSection from "@/components/EcosystemSection";
import UseCasesSection from "@/components/UseCasesSection";
import BlogsSection from "@/components/BlogsSection";
import SecurityBanner from "@/components/SecurityBanner";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import { motion } from "framer-motion";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    {/* Multi-layer animated gradient mesh */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-primary/2 opacity-50" />
    </div>
    
    {/* Animated Web3 background elements */}
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${5 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            background: `radial-gradient(circle, hsl(var(--primary) / ${0.04 + i * 0.01}), hsl(var(--primary-glow) / ${0.02}), transparent 70%)`,
            filter: "blur(30px)",
          }}
          animate={{
            y: [0, -30, 15, -25, 0],
            x: [0, 15, -10, 20, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 14 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>

    <div className="relative z-10">
      <Navbar />
      <ColorPicker />
      <main className="max-w-[1440px] mx-auto px-8">
        <HeroSection />
        <WhatIsMST />
        <ProductsSection />
        <ValidatorSection />
        <ExplorerSection />
        <EcosystemSection />
        <UseCasesSection />
        <BlogsSection />
        <SecurityBanner />
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
