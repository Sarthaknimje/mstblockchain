import { Box } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem]">
      <div className="col-span-12 mb-12 md:mb-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Products</h2>
        </ScrollReveal>
      </div>
      <ScrollReveal className="col-span-12 md:col-span-7">
        <div className="aspect-video bg-background border-2 border-foreground blueprint-grid flex items-center justify-center relative group hover:primary-glow-shadow transition-shadow duration-500">
          <Box className="w-16 h-16 text-foreground/20 group-hover:text-primary/40 transition-colors duration-500" strokeWidth={1} />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-1 primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </ScrollReveal>
      <ScrollReveal className="col-span-12 md:col-span-5 flex flex-col justify-center pl-0 md:pl-12 pt-12 md:pt-0" delay={0.2}>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 uppercase">MST CORE ENGINE</h3>
        <p className="text-lg font-medium text-on-surface-variant mb-8 leading-relaxed">
          The primary execution environment for structural purity. Designed to handle extreme throughput without state bloat. Processes 50,000+ TPS with deterministic ordering.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 primary-gradient"></div>
          <span className="label-style">Scroll to explore variations</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProductsSection;
