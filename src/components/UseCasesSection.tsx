import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useCasesData } from "@/data/useCases";

const UseCasesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="usecases" className="py-20 md:py-32 section-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Use Cases</h2>
          <p className="text-on-surface-variant font-medium mt-4 max-w-lg">
            MST Protocol powers mission-critical applications across 20+ industries. Hover to explore, click to dive deep.
          </p>
        </ScrollReveal>
        <div className="flex gap-3">
          <motion.button
            className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
          </motion.button>
          <motion.button
            className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Horizontal scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-8 px-8"
      >
        {useCasesData.map((uc, i) => (
          <motion.div
            key={uc.id}
            className="relative flex-shrink-0 border-2 border-foreground cursor-pointer group transition-all duration-500"
            style={{ width: hoveredIdx === i ? 420 : 200 }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.03, 0.3) }}
          >
            {/* Primary color top bar */}
            <div className="h-1 primary-gradient" />

            <div className="p-6 h-64 flex flex-col justify-between overflow-hidden">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                  {uc.num}
                </p>
                <h4 className="text-xs font-black uppercase leading-tight mb-3">
                  {uc.title}
                </h4>

                <AnimatePresence>
                  {hoveredIdx === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[11px] text-on-surface-variant leading-relaxed mb-3">
                        {uc.short}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {uc.features.slice(0, 3).map((f) => (
                          <span
                            key={f}
                            className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 border border-primary/30 text-primary"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <p className="text-[9px] font-black text-primary">{uc.metric}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {hoveredIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={`/use-case/${uc.id}`}
                      className="inline-flex items-center gap-2 label-style text-primary hover:underline"
                    >
                      Explore <ExternalLink size={10} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hover border effect */}
            {hoveredIdx === i && (
              <motion.div
                className="absolute inset-0 border-2 border-primary pointer-events-none"
                layoutId="use-case-border"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
