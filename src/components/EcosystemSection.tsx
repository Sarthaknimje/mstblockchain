import { Shield, Megaphone, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const roles = [
  {
    icon: Shield,
    title: "Validator",
    desc: "Secure the network and earn rewards by running a high-performance node. Minimum stake: 10,000 MST.",
  },
  {
    icon: Megaphone,
    title: "Ambassador",
    desc: "Grow the community and represent the MST brand across the globe. Join 200+ ambassadors worldwide.",
  },
  {
    icon: Landmark,
    title: "Grants",
    desc: "Funding for developers building the future of structural web3 purity. Up to $250K per project.",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-20 md:py-32 section-border">
    <div className="text-center mb-12 md:mb-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Join our ecosystem</h2>
      </ScrollReveal>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6 mb-16">
      {roles.map((role, i) => (
        <ScrollReveal key={role.title} delay={i * 0.1}>
          <motion.div
            className="border-2 border-foreground p-10 md:p-12 text-center hover:bg-secondary hover:text-secondary-foreground transition-colors group cursor-pointer relative overflow-hidden"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />
            <role.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
            <h3 className="text-2xl font-black mb-4 uppercase">{role.title}</h3>
            <p className="text-sm font-medium opacity-70">{role.desc}</p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
    <ScrollReveal>
      <div className="flex flex-col items-center gap-4">
        <motion.button
          className="px-12 py-4 bg-primary text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Become a Partner
        </motion.button>
      </div>
    </ScrollReveal>
  </section>
);

export default EcosystemSection;
