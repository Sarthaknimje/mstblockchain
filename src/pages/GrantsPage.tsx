import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Rocket, FlaskConical, Wrench, TrendingUp,
  Star, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

const grantTracks = [
  {
    icon: FlaskConical, name: "initGrant", amount: "Up to $1,000",
    gradient: "from-emerald-500 to-teal-500", borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400", bgGradient: "from-emerald-500/10 to-teal-500/5",
    desc: "For developers starting new ideas, experiments, or early-stage prototypes on MST.",
    requirements: ["Project concept document", "GitHub repo with initial code", "Solo or team of 2", "30-day milestone plan"],
    deliverables: ["Working prototype", "Documentation", "Demo video", "Open-source code"],
  },
  {
    icon: Wrench, name: "buildGrant", amount: "Up to $10,000",
    gradient: "from-violet-500 to-purple-500", borderColor: "border-violet-500/30",
    textColor: "text-violet-400", bgGradient: "from-violet-500/10 to-purple-500/5",
    desc: "For testnet-ready projects with working prototypes and a clear execution roadmap.",
    requirements: ["Working prototype on testnet", "Technical architecture doc", "Team of 2-5 members", "90-day milestone plan"],
    deliverables: ["Testnet deployment", "Integration docs", "User testing report", "Security audit plan"],
  },
  {
    icon: TrendingUp, name: "scaleGrant", amount: "Up to $50,000",
    gradient: "from-amber-500 to-orange-500", borderColor: "border-amber-500/30",
    textColor: "text-amber-400", bgGradient: "from-amber-500/10 to-orange-500/5",
    desc: "For production-ready applications with strong teams and scalable infrastructure.",
    requirements: ["Mainnet-ready application", "Proven user traction", "Full team with track record", "6-month scaling plan"],
    deliverables: ["Mainnet launch", "Growth metrics", "Community building", "Partnership integrations"],
  },
];

const GrantsPage = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl float-orb" />
    </div>
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
              The ChainBuilders program supports developers, teams, and startups building innovative Web3 applications on MST.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { tag: "Milestone-Based", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
                { tag: "Engineering Review", color: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
                { tag: "Governance Panel", color: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
              ].map(({ tag, color }) => (
                <span key={tag} className={`px-3 py-1.5 border ${color} text-[10px] font-black uppercase tracking-[0.15em]`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="h-1.5 primary-gradient mb-16" />

        {/* Grant Tracks */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-style text-primary mb-3 block">💰 Grant Tracks</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Choose Your <span className="primary-gradient-text">Track</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grantTracks.map((track, i) => (
              <ScrollReveal key={track.name} delay={i * 0.1}>
                <motion.div
                  className={`border-2 ${track.borderColor} p-8 relative overflow-hidden group h-full flex flex-col`}
                  whileHover={{ y: -6 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${track.gradient}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 border ${track.borderColor} bg-gradient-to-br ${track.bgGradient} flex items-center justify-center`}>
                        <track.icon size={22} className={track.textColor} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black uppercase">{track.name}</h3>
                        <p className={`text-sm font-black ${track.textColor}`}>{track.amount}</p>
                      </div>
                    </div>

                    <p className="text-sm text-on-surface-variant font-medium mb-6">{track.desc}</p>

                    <div className="mb-4">
                      <p className={`text-[10px] font-black uppercase tracking-wider ${track.textColor} mb-2`}>Requirements</p>
                      <div className="space-y-1.5">
                        {track.requirements.map((r) => (
                          <div key={r} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <Zap size={8} className={track.textColor} /> {r}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-wider ${track.textColor} mb-2`}>Deliverables</p>
                      <div className="space-y-1.5">
                        {track.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <Star size={8} className={track.textColor} /> {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className={`mt-6 w-full py-3 border-2 ${track.borderColor} font-black text-xs uppercase tracking-[0.15em] hover:bg-gradient-to-r ${track.gradient} hover:text-white hover:border-transparent transition-all relative overflow-hidden`}
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
            <div className="mt-8 p-4 border border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-orange-500/3 text-center">
              <p className="text-xs font-bold text-amber-500">
                ⚠️ All grants are milestone-based and reviewed by MST's engineering and governance panel
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  </div>
);

export default GrantsPage;
