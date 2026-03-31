import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useCasesData } from "@/data/useCases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";

const UseCasePage = () => {
  const { id } = useParams<{ id: string }>();
  const caseIdx = useCasesData.findIndex((uc) => uc.id === id);
  const useCase = useCasesData[caseIdx];

  if (!useCase) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-8 py-32 text-center">
          <h1 className="text-4xl font-black">Use case not found</h1>
          <Link to="/" className="text-primary font-bold mt-4 inline-block">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const prev = caseIdx > 0 ? useCasesData[caseIdx - 1] : null;
  const next = caseIdx < useCasesData.length - 1 ? useCasesData[caseIdx + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ColorPicker />

      <main className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <section className="pt-16 md:pt-24 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 label-style text-primary mb-8 hover:underline"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-12 gap-x-[1.4rem]">
            <motion.div
              className="col-span-12 md:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="label-style text-primary mb-4 block">{useCase.num} / Use Case</span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
                {useCase.title}
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
                {useCase.short}
              </p>
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-4 flex items-end justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-right">
                <p className="label-style text-primary mb-2">Key Metric</p>
                <p className="text-3xl font-black italic">{useCase.metric}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accent bar */}
        <div className="h-1 primary-gradient mb-16 md:mb-24" />

        {/* Description */}
        <section className="grid grid-cols-12 gap-x-[1.4rem] pb-16 md:pb-24">
          <motion.div
            className="col-span-12 md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 uppercase">Overview</h2>
            <p className="text-lg leading-relaxed font-medium text-foreground">
              {useCase.description}
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-5 pl-0 md:pl-12 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-black uppercase mb-6">Key Features</h3>
            <div className="space-y-4">
              {useCase.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3 p-4 border border-foreground hover:border-primary hover:bg-primary/5 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-wider">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Blueprint visual */}
        <motion.section
          className="mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[21/9] border-2 border-foreground blueprint-grid relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-black italic tracking-tighter text-foreground/5 uppercase">
                {useCase.title}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 primary-gradient" />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-16 md:py-20 border-t-2 border-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase">
            Ready to build with <span className="text-primary">{useCase.title}</span>?
          </h3>
          <p className="text-on-surface-variant font-medium mb-10 max-w-lg mx-auto">
            Get started with MST Protocol and bring your {useCase.title.toLowerCase()} solution to production.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-10 py-4 bg-secondary text-secondary-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Building
            </motion.button>
            <motion.button
              className="px-10 py-4 border-2 border-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Read Documentation
            </motion.button>
          </div>
        </motion.section>

        {/* Navigation between use cases */}
        <section className="border-t-2 border-foreground py-12 md:py-16 mb-8">
          <div className="grid grid-cols-2 gap-8">
            {prev ? (
              <Link
                to={`/use-case/${prev.id}`}
                className="group flex items-center gap-4 hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="label-style text-primary mb-1">{prev.num}</p>
                  <p className="font-black uppercase text-sm">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/use-case/${next.id}`}
                className="group flex items-center gap-4 justify-end text-right hover:text-primary transition-colors"
              >
                <div>
                  <p className="label-style text-primary mb-1">{next.num}</p>
                  <p className="font-black uppercase text-sm">{next.title}</p>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCasePage;
