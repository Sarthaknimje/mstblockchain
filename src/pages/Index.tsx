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
