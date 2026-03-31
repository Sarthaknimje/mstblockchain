import { Box } from "lucide-react";

const ProductsSection = () => (
  <section className="py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem]">
      <div className="col-span-12 mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Products</h2>
      </div>
      {/* Left: Image Container */}
      <div className="col-span-12 md:col-span-7">
        <div className="aspect-video bg-background border-2 border-foreground blueprint-grid flex items-center justify-center relative group">
          <Box className="w-16 h-16 text-foreground/20" strokeWidth={1} />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center pl-0 md:pl-12 pt-12 md:pt-0">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 uppercase">MST CORE ENGINE</h3>
        <p className="text-lg font-medium text-on-surface-variant mb-8 leading-relaxed">
          The primary execution environment for structural purity. Designed to handle extreme throughput without state bloat.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 border-b-4 border-foreground"></div>
          <span className="label-style">Scroll to explore variations</span>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
