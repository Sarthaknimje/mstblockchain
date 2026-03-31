import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const blogs = [
  {
    cat: "Tech Updates / Oct 24",
    title: "Scaling Structural Purity",
    desc: "How we achieved 400ms finality without compromising decentralization. A deep dive into our consensus mechanism and validator incentive design.",
  },
  {
    cat: "Ecosystem / Oct 20",
    title: "New Node Partner: CORE_SYS",
    desc: "Welcoming CORE_SYS to our validator network. Their 200+ bare-metal servers enhance global resilience across 40 countries.",
  },
  {
    cat: "Developers / Oct 15",
    title: "The P2 SDK Launch",
    desc: "Our most intuitive development kit yet. Zero-overhead WebAssembly support, built-in testing, and one-command deployment to mainnet.",
  },
];

const BlogsSection = () => (
  <section className="py-20 md:py-32 section-border">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Latest Blogs</h2>
      </ScrollReveal>
      <div className="flex gap-3">
        <motion.button
          className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
        </motion.button>
        <motion.button
          className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-12">
      {blogs.map((blog, i) => (
        <ScrollReveal key={blog.title} delay={i * 0.1}>
          <motion.div className="group cursor-pointer" whileHover={{ y: -4 }}>
            <div className="aspect-[16/9] border-2 border-foreground mb-6 bg-surface-container relative overflow-hidden group-hover:border-primary transition-colors">
              <div className="absolute inset-0 blueprint-grid opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />
            </div>
            <p className="label-style text-primary mb-3">{blog.cat}</p>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
              {blog.title}
            </h3>
            <p className="text-sm font-medium text-on-surface-variant mb-6 leading-relaxed">{blog.desc}</p>
            <span className="story-link label-style cursor-pointer">Read More</span>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default BlogsSection;
