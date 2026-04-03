import { Shield, Megaphone, Landmark, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const roles = [
  {
    icon: Shield, title: "Validator",
    desc: "Secure the MST network using PoSA consensus and earn staking rewards. Join 69,000+ validators worldwide.",
    metric: "69K+ active",
    gradient: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hoverGradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Megaphone, title: "Ambassador",
    desc: "Represent MST globally. Create content, host events, and grow the Web3 community across regions.",
    metric: "Global reach",
    gradient: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-500/30",
    text: "text-violet-400",
    hoverGradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Landmark, title: "Grants",
    desc: "Apply for funding to build innovative dApps, tools, and infrastructure on the MST network.",
    metric: "Open applications",
    gradient: "from-amber-500/15 to-orange-500/5",
    border: "border-amber-500/30",
    text: "text-amber-400",
    hoverGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Wallet, title: "Developer",
    desc: "Build with full EVM compatibility. Deploy Solidity contracts, use familiar tools, and access our SDK.",
    metric: "EVM compatible",
    gradient: "from-cyan-500/15 to-blue-500/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    hoverGradient: "from-cyan-500 to-blue-500",
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-16 md:py-28 section-border relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-primary/6 to-transparent blur-3xl float-orb pointer-events-none" />

    <div className="text-center mb-10 md:mb-16 relative z-10">
      <ScrollReveal>
        <span className="label-style text-primary mb-3 block">Growing Community</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Join Our <span className="primary-gradient-text">Ecosystem</span>
        </h2>
        <p className="text-on-surface-variant font-medium mt-4 max-w-lg mx-auto text-sm">
          300,000+ registered users and growing. Be part of the SARAL revolution.
        </p>
      </ScrollReveal>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative z-10">
      {roles.map((role, i) => (
        <ScrollReveal key={role.title} delay={i * 0.08}>
          <motion.div
            className={`border-2 ${role.border} p-8 text-center group cursor-pointer relative overflow-hidden h-full transition-all duration-300`}
            whileHover={{ y: -6 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} transition-opacity`} />
            <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-1.5 bg-gradient-to-r primary-gradient transition-all duration-300" />
            <div className="relative z-10">
              <div className={`w-14 h-14 mx-auto mb-4 border ${role.border} bg-gradient-to-br ${role.gradient} flex items-center justify-center`}>
                <role.icon className={`w-7 h-7 ${role.text}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase">{role.title}</h3>
              <p className="text-sm font-medium text-on-surface-variant mb-4">{role.desc}</p>
              <span className={`text-[9px] font-black uppercase tracking-[0.15em] ${role.text}`}>
                {role.metric}
              </span>
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
    <ScrollReveal>
      <div className="flex flex-col items-center gap-4 relative z-10">
        <motion.button
          className="px-10 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-colors primary-glow-shadow relative overflow-hidden"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          Become a Partner
        </motion.button>
      </div>
    </ScrollReveal>
  </section>
);

export default EcosystemSection;
