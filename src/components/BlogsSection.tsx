import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const blogs = [
  {
    cat: "Ecosystem / 2025",
    title: "MST Creator Campaign Launch",
    desc: "Inviting creators, researchers, and Web3 storytellers to share high-quality educational content about the MST ecosystem.",
    gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/5",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    cat: "Infrastructure / 2025",
    title: "69,000+ Validators Milestone",
    desc: "MST's validator network continues to grow, with 69,000+ active validators securing the network through PoSA consensus.",
    gradient: "from-emerald-500/15 via-teal-500/10 to-cyan-500/5",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    cat: "Products / 2025",
    title: "BridgeKey Wallet Update",
    desc: "The latest BridgeKey Wallet update brings multi-chain support, enhanced DApp browser, and biometric authentication.",
    gradient: "from-amber-500/15 via-orange-500/10 to-red-500/5",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
];

const BlogsSection = () => (
  <section className="py-16 md:py-28 section-border">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
      <ScrollReveal>
        <span className="label-style text-primary mb-3 block">Stay Updated</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Latest <span className="primary-gradient-text">Updates</span>
        </h2>
      </ScrollReveal>
      <div className="flex gap-3">
        {[ArrowLeft, ArrowRight].map((Icon, i) => (
          <motion.button
            key={i}
            className="w-10 h-10 border-2 border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={18} />
          </motion.button>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-8">
      {blogs.map((blog, i) => (
        <ScrollReveal key={blog.title} delay={i * 0.1}>
          <motion.div className="group cursor-pointer" whileHover={{ y: -4 }}>
            <div className={`aspect-[16/9] border-2 ${blog.border} mb-5 relative overflow-hidden bg-gradient-to-br ${blog.gradient}`}>
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1.5 primary-gradient transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${blog.accent}`}>{blog.cat.split("/")[0].trim()}</span>
              </div>
            </div>
            <p className={`label-style ${blog.accent} mb-2`}>{blog.cat}</p>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors leading-tight">
              {blog.title}
            </h3>
            <p className="text-sm font-medium text-on-surface-variant mb-4 leading-relaxed">{blog.desc}</p>
            <span className="story-link label-style cursor-pointer">Read More</span>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default BlogsSection;
