import { ArrowLeft, ArrowRight } from "lucide-react";

const blogs = [
  { cat: "Tech Updates / Oct 24", title: "Scaling Structural Purity", desc: "How we achieved 400ms finality without compromising decentralization." },
  { cat: "Ecosystem / Oct 20", title: "New Node Partner: CORE_SYS", desc: "Welcoming CORE_SYS to our validator network to enhance global resilience." },
  { cat: "Developers / Oct 15", title: "The P2 SDK Launch", desc: "Our most intuitive development kit yet, now available for beta testing." },
];

const BlogsSection = () => (
  <section className="py-32 section-border">
    <div className="flex justify-between items-end mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Latest Blogs</h2>
      <div className="flex gap-4">
        <button className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
          <ArrowLeft size={20} />
        </button>
        <button className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-12">
      {blogs.map((blog) => (
        <div key={blog.title} className="group">
          <div className="aspect-[16/9] border-2 border-foreground mb-6 bg-surface-container relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-30"></div>
          </div>
          <p className="label-style text-primary mb-3">{blog.cat}</p>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
            {blog.title}
          </h3>
          <p className="text-sm font-medium opacity-80 mb-6">{blog.desc}</p>
          <a className="label-style border-b border-foreground pb-1" href="#">
            Read More
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default BlogsSection;
