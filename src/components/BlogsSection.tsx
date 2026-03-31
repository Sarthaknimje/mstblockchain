import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const blogs = [
  {
    cat: "Ecosystem / 2025",
    title: "MST Creator Campaign Launch",
    desc: "Inviting creators, researchers, and Web3 storytellers to share high-quality educational content about the MST ecosystem and its growing community.",
  },
  {
    cat: "Infrastructure / 2025",
    title: "69,000+ Validators Milestone",
    desc: "MST's validator network continues to grow, with 69,000+ active validators securing the network through Proof of Staked Authority consensus.",
  },
  {
    cat: "Products / 2025",
    title: "BridgeKey Wallet Update",
    desc: "The latest BridgeKey Wallet update brings multi-chain support, enhanced DApp browser, and biometric authentication for maximum security.",
  },
];

const BlogsSection = () => (
  <section className="py-16 md:py-28 section-border">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
      <ScrollReveal>
        <span className="label-style text-primary mb-3 block">Stay Updated</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Latest Updates</h2>
      </ScrollReveal>
      <div className="flex gap-3">
        <motion.button
          className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
        </motion.button>
        <motion.button
          className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-8">
      {blogs.map((blog, i) => (
        <ScrollReveal key={blog.title} delay={i * 0.1}>
          <motion.div className="group cursor-pointer" whileHover={{ y: -4 }}>
            <div className="aspect-[16/9] border-2 border-foreground mb-5 bg-surface-container relative overflow-hidden group-hover:border-primary transition-colors">
              <div className="absolute inset-0 blueprint-grid opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />
            </div>
            <p className="label-style text-primary mb-2">{blog.cat}</p>
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
