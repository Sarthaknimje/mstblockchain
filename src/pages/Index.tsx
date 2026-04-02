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

const Index = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    {/* Global animated gradient mesh background */}
    <div className="fixed inset-0 pointer-events-none z-0 gradient-mesh opacity-70" />
    
    {/* Animated background bubbles */}
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full float-orb"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, hsl(var(--primary) / ${0.03 + i * 0.01}), transparent 70%)`,
            animationDelay: `${i * -3}s`,
            animationDuration: `${15 + i * 5}s`,
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
