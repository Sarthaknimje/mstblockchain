import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, MapPin, GraduationCap, Briefcase,
  Gift, FileText, Handshake, Globe, Rocket, Users, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

const ambassadorTracks = [
  {
    icon: MapPin, title: "City Ambassador",
    desc: "Lead blockchain adoption in your city by organizing meetups, workshops, and local Web3 communities. Build grassroots Web3 presence.",
    gradient: "from-cyan-500 to-blue-500", borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400", bgGradient: "from-cyan-500/10 to-blue-500/5",
    perks: ["Host local meetups", "Organize workshops", "Community building", "Event sponsorship"],
  },
  {
    icon: GraduationCap, title: "Campus Ambassador",
    desc: "Bring MST to your university through student clubs, hackathons, and Web3 learning sessions. Inspire the next generation.",
    gradient: "from-violet-500 to-purple-500", borderColor: "border-violet-500/30",
    textColor: "text-violet-400", bgGradient: "from-violet-500/10 to-purple-500/5",
    perks: ["University hackathons", "Student workshops", "Club partnerships", "Academic resources"],
  },
  {
    icon: Briefcase, title: "Industry Ambassador",
    desc: "Promote MST adoption within your industry and professional network for real-world blockchain use cases.",
    gradient: "from-amber-500 to-orange-500", borderColor: "border-amber-500/30",
    textColor: "text-amber-400", bgGradient: "from-amber-500/10 to-orange-500/5",
    perks: ["Industry partnerships", "Professional networking", "Enterprise outreach", "Technical consulting"],
  },
];

const rewards = [
  { icon: Gift, text: "Earn up to ₹10,000 + $MSTC tokens", gradient: "from-emerald-500/10 to-teal-500/5", border: "border-emerald-500/30", textColor: "text-emerald-400" },
  { icon: FileText, text: "Official MST Ambassador Certificate", gradient: "from-violet-500/10 to-purple-500/5", border: "border-violet-500/30", textColor: "text-violet-400" },
  { icon: Handshake, text: "Mentorship with Web3 experts", gradient: "from-cyan-500/10 to-blue-500/5", border: "border-cyan-500/30", textColor: "text-cyan-400" },
  { icon: Globe, text: "Global developer networking", gradient: "from-amber-500/10 to-orange-500/5", border: "border-amber-500/30", textColor: "text-amber-400" },
  { icon: Rocket, text: "Early access to MST ecosystem", gradient: "from-rose-500/10 to-pink-500/5", border: "border-rose-500/30", textColor: "text-rose-400" },
  { icon: Users, text: "Exclusive community events", gradient: "from-indigo-500/10 to-blue-500/5", border: "border-indigo-500/30", textColor: "text-indigo-400" },
];

const AmbassadorPage = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-transparent rounded-full blur-3xl float-orb" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl float-orb-delay" />
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
            <span className="label-style text-primary mb-4 block">🌍 Community Program</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              MST Blockchain<br />
              <span className="primary-gradient-text">Ambassador Program</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
              Become the voice of MST Blockchain in your community. Represent MST globally, earn rewards, and shape the future of Web3.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { tag: "City Leaders", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" },
                { tag: "Campus Reps", color: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
                { tag: "Industry Pros", color: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
              ].map(({ tag, color }) => (
                <span key={tag} className={`px-3 py-1.5 border ${color} text-[10px] font-black uppercase tracking-[0.15em]`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="h-1.5 primary-gradient mb-16" />

        {/* Ambassador Tracks */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-style text-primary mb-3 block">Choose Your Role</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Ambassador <span className="primary-gradient-text">Tracks</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {ambassadorTracks.map((track, i) => (
              <ScrollReveal key={track.title} delay={i * 0.1}>
                <motion.div
                  className={`border-2 ${track.borderColor} p-8 relative overflow-hidden group h-full flex flex-col`}
                  whileHover={{ y: -6 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${track.gradient}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 flex-1">
                    <div className={`w-14 h-14 border ${track.borderColor} bg-gradient-to-br ${track.bgGradient} flex items-center justify-center mb-5`}>
                      <track.icon size={26} className={track.textColor} />
                    </div>
                    <h3 className="text-xl font-black uppercase mb-2">{track.title}</h3>
                    <p className="text-sm text-on-surface-variant font-medium mb-6">{track.desc}</p>

                    <div className="space-y-2">
                      {track.perks.map((perk) => (
                        <div key={perk} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                          <Star size={8} className={track.textColor} /> {perk}
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className={`mt-6 w-full py-3 border-2 ${track.borderColor} font-black text-xs uppercase tracking-[0.15em] hover:bg-gradient-to-r ${track.gradient} hover:text-white hover:border-transparent transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply as {track.title}
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rewards */}
          <ScrollReveal>
            <div className="border-2 border-foreground/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 primary-gradient" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary-glow/2 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-8 text-center">
                  🎁 Rewards & <span className="primary-gradient-text">Benefits</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rewards.map((r) => (
                    <motion.div
                      key={r.text}
                      className={`flex items-center gap-3 p-4 border ${r.border} bg-gradient-to-r ${r.gradient} hover:border-primary/40 transition-all`}
                      whileHover={{ x: 4 }}
                    >
                      <r.icon size={20} className={r.textColor} />
                      <span className="text-sm font-medium">{r.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant mt-6 text-center font-medium">
                  ⚠️ Rewards are performance-based and depend on ambassador contributions
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Apply CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 text-center">
              <motion.button
                className="px-12 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:opacity-90 primary-glow-shadow relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
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

export default AmbassadorPage;
