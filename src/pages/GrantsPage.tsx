import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Rocket, FlaskConical, Wrench, TrendingUp,
  Award, BookOpen, Handshake, Globe, Zap, Users, Building2,
  GraduationCap, MapPin, Briefcase, Gift, FileText, Star, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

const grantTracks = [
  {
    icon: FlaskConical,
    name: "initGrant",
    amount: "Up to $1,000",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-500",
    bgColor: "bg-emerald-500/5",
    desc: "For developers starting new ideas, experiments, or early-stage prototypes on MST.",
    requirements: ["Project concept document", "GitHub repo with initial code", "Solo or team of 2", "30-day milestone plan"],
    deliverables: ["Working prototype", "Documentation", "Demo video", "Open-source code"],
  },
  {
    icon: Wrench,
    name: "buildGrant",
    amount: "Up to $10,000",
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-500",
    bgColor: "bg-violet-500/5",
    desc: "For testnet-ready projects with working prototypes and a clear execution roadmap.",
    requirements: ["Working prototype on testnet", "Technical architecture doc", "Team of 2-5 members", "90-day milestone plan"],
    deliverables: ["Testnet deployment", "Integration docs", "User testing report", "Security audit plan"],
  },
  {
    icon: TrendingUp,
    name: "scaleGrant",
    amount: "Up to $50,000",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-500",
    bgColor: "bg-amber-500/5",
    desc: "For production-ready applications with strong teams and scalable infrastructure.",
    requirements: ["Mainnet-ready application", "Proven user traction", "Full team with track record", "6-month scaling plan"],
    deliverables: ["Mainnet launch", "Growth metrics", "Community building", "Partnership integrations"],
  },
];

const ambassadorTracks = [
  {
    icon: MapPin,
    title: "City Ambassador",
    desc: "Lead blockchain adoption in your city by organizing meetups, workshops, and local Web3 communities.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: GraduationCap,
    title: "Campus Ambassador",
    desc: "Bring MST to your university through student clubs, hackathons, and Web3 learning sessions.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/5",
    borderColor: "border-violet-500/30",
  },
  {
    icon: Briefcase,
    title: "Industry Ambassador",
    desc: "Promote MST adoption within your industry and professional network for real-world use cases.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/5",
    borderColor: "border-amber-500/30",
  },
];

const rewards = [
  { icon: Gift, text: "Earn up to ₹10,000 + $MSTC tokens", color: "text-emerald-500" },
  { icon: FileText, text: "Official MST Blockchain Ambassador Certificate", color: "text-violet-500" },
  { icon: Handshake, text: "Mentorship & exclusive sessions with Web3 experts", color: "text-cyan-500" },
  { icon: Globe, text: "Global networking with developers worldwide", color: "text-amber-500" },
  { icon: Rocket, text: "Early access to MST ecosystem updates & grants", color: "text-rose-500" },
];

const GrantsPage = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    <div className="fixed inset-0 pointer-events-none z-0 gradient-mesh opacity-70" />
    <div className="relative z-10">
      <Navbar />
      <ColorPicker />

      <main className="max-w-[1440px] mx-auto px-8">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="inline-flex items-center gap-2 label-style text-primary mb-8 hover:underline">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="label-style text-primary mb-4 block">🚀 Build on MST Chain</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              MST Blockchain<br />
              <span className="primary-gradient-text">Grant Program</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
              Ship faster and smarter with MST Chain's developer-first infrastructure. The ChainBuilders program
              supports developers, teams, and startups building innovative Web3 applications on MST.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Milestone-Based", "Engineering Review", "Governance Panel"].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-primary/30 text-[10px] font-black uppercase tracking-[0.15em] text-primary shimmer">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="h-1 primary-gradient mb-16" />

        {/* Grant Tracks */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-style text-primary mb-3 block">💰 Grant Tracks</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Choose Your Track</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grantTracks.map((track, i) => (
              <ScrollReveal key={track.name} delay={i * 0.1}>
                <motion.div
                  className={`border-2 ${track.borderColor} p-8 relative overflow-hidden group h-full flex flex-col`}
                  whileHover={{ y: -6 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color}`} />
                  <div className={`absolute inset-0 ${track.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 border ${track.borderColor} ${track.bgColor} flex items-center justify-center`}>
                        <track.icon size={22} className={track.textColor} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black uppercase">{track.name}</h3>
                        <p className={`text-sm font-black ${track.textColor}`}>{track.amount}</p>
                      </div>
                    </div>

                    <p className="text-sm text-on-surface-variant font-medium mb-6">{track.desc}</p>

                    <div className="mb-4">
                      <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Requirements</p>
                      <div className="space-y-1.5">
                        {track.requirements.map((r) => (
                          <div key={r} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <div className={`w-1 h-1 ${track.textColor.replace('text-', 'bg-')}`} />
                            {r}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Deliverables</p>
                      <div className="space-y-1.5">
                        {track.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <Star size={8} className={track.textColor} />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className={`mt-6 w-full py-3 border-2 ${track.borderColor} font-black text-xs uppercase tracking-[0.15em] hover:bg-gradient-to-r ${track.color} hover:text-white hover:border-transparent transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply for {track.name}
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-4 border border-amber-500/30 bg-amber-500/5 text-center">
              <p className="text-xs font-bold text-amber-600">
                ⚠️ All grants are milestone-based and reviewed by MST's engineering and governance panel
              </p>
            </div>
          </ScrollReveal>
        </section>

        <div className="h-px bg-foreground/10 mb-20" />

        {/* Ambassador Program */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-style text-primary mb-3 block">🌍 Community Program</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Ambassador Program</h2>
              <p className="text-on-surface-variant font-medium mt-4 max-w-lg mx-auto text-sm">
                Become the voice of MST Blockchain in your community. Represent MST globally and earn rewards.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ambassadorTracks.map((track, i) => (
              <ScrollReveal key={track.title} delay={i * 0.1}>
                <motion.div
                  className={`border-2 ${track.borderColor} ${track.bgColor} p-8 relative overflow-hidden group h-full`}
                  whileHover={{ y: -4 }}
                >
                  <track.icon size={28} className={`${track.color} mb-4`} />
                  <h3 className="text-lg font-black uppercase mb-2">{track.title}</h3>
                  <p className="text-sm text-on-surface-variant font-medium">{track.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rewards */}
          <ScrollReveal>
            <div className="border-2 border-foreground p-8 md:p-12 gradient-border-glow">
              <h3 className="text-2xl font-black uppercase mb-8 text-center">
                🎁 Rewards & Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rewards.map((r) => (
                  <div key={r.text} className="flex items-center gap-3 p-4 border border-foreground/10 hover:border-primary/30 transition-colors">
                    <r.icon size={20} className={r.color} />
                    <span className="text-sm font-medium">{r.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant mt-6 text-center font-medium">
                ⚠️ Rewards are performance-based and depend on ambassador contributions and activities
              </p>
            </div>
          </ScrollReveal>

          {/* Apply CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 text-center">
              <motion.button
                className="px-12 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:opacity-90 primary-glow-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply as Ambassador
              </motion.button>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  </div>
);

export default GrantsPage;
