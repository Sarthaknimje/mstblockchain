import { Shield, Megaphone, Landmark, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const roles = [
  {
    icon: Shield,
    title: "Validator",
    desc: "Secure the MST network using PoSA consensus and earn staking rewards. Join 69,000+ validators worldwide.",
    metric: "69K+ active",
  },
  {
    icon: Megaphone,
    title: "Ambassador",
    desc: "Represent MST globally. Create content, host events, and grow the Web3 community across regions.",
    metric: "Global reach",
  },
  {
    icon: Landmark,
    title: "Grants",
    desc: "Apply for funding to build innovative dApps, tools, and infrastructure on the MST network.",
    metric: "Open applications",
  },
  {
    icon: Wallet,
    title: "Developer",
    desc: "Build with full EVM compatibility. Deploy Solidity contracts, use familiar tools, and access our SDK.",
    metric: "EVM compatible",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-16 md:py-28 section-border relative overflow-hidden">
    {/* Gradient accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/4 blur-3xl float-orb pointer-events-none" />

    <div className="text-center mb-10 md:mb-16 relative z-10">
      <ScrollReveal>
        <span className="label-style text-primary mb-3 block">Growing Community</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Join Our Ecosystem</h2>
        <p className="text-on-surface-variant font-medium mt-4 max-w-lg mx-auto text-sm">
          300,000+ registered users and growing. Be part of the SARAL revolution.
        </p>
      </ScrollReveal>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative z-10">
      {roles.map((role, i) => (
        <ScrollReveal key={role.title} delay={i * 0.08}>
          <motion.div
            className="border-2 border-foreground p-8 text-center hover:bg-secondary hover:text-secondary-foreground transition-colors group cursor-pointer relative overflow-hidden h-full gradient-border-glow"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1 primary-gradient transition-all duration-300" />
            <role.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
            <h3 className="text-xl font-black mb-3 uppercase">{role.title}</h3>
            <p className="text-sm font-medium opacity-70 mb-4">{role.desc}</p>
            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-primary group-hover:text-primary-foreground/80 transition-colors">
              {role.metric}
            </span>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
    <ScrollReveal>
      <div className="flex flex-col items-center gap-4 relative z-10">
        <motion.button
          className="px-10 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-colors primary-glow-shadow"
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
