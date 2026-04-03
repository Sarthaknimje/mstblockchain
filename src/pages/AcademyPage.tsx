import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Code, Shield, Rocket, Layers, Cpu, Award,
  ChevronDown, ChevronRight, CheckCircle, Play, FileText, Clock,
  Video, ClipboardCheck, Trophy, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
  {
    num: 1, emoji: "🟢", title: "Blockchain Fundamentals & MST Ecosystem",
    gradient: "from-emerald-500 to-teal-500", borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400", bgGradient: "from-emerald-500/10 to-teal-500/5",
    icon: BookOpen, duration: "4 hours",
    topics: [
      { title: "Foundations of Digital Systems", subtopics: ["Centralized Systems: Architecture", "Limitations of Centralized Systems", "Decentralized Systems: Concept & Benefits"], hasVideo: true, duration: "30 min" },
      { title: "Distributed Systems", subtopics: ["Nodes and Network Architecture", "Data Synchronization", "Fault Tolerance"], hasVideo: true, duration: "25 min" },
      { title: "Core Blockchain Concepts", subtopics: ["Blockchain Structure (Blocks, Transactions)", "Cryptographic Hashing", "Immutability and Transparency"], hasVideo: true, duration: "35 min" },
      { title: "Gaps in Existing Blockchains", subtopics: ["Scalability Issues", "High Transaction Costs", "Poor UX & Developer Complexity"], hasVideo: true, duration: "20 min" },
      { title: "Introduction to MST Blockchain", subtopics: ["MST as a Layer 1 Network", "EVM Compatibility", "High Throughput and Low Fees"], hasVideo: true, duration: "30 min" },
      { title: "MST Product Ecosystem", subtopics: ["SARAL Protocol", "Non-Custodial Key Infrastructure", "WASMify & ZK Communication", "MST Explorer & BridgeKey Wallet"], hasVideo: true, duration: "40 min" },
    ],
    assessment: { questions: 15, passingScore: "80%", type: "Multiple Choice + Short Answer" },
  },
  {
    num: 2, emoji: "🟡", title: "MST Network & Transaction Architecture",
    gradient: "from-amber-500 to-yellow-500", borderColor: "border-amber-500/30",
    textColor: "text-amber-400", bgGradient: "from-amber-500/10 to-yellow-500/5",
    icon: Layers, duration: "3 hours",
    topics: [
      { title: "MST Network Architecture", subtopics: ["Nodes and Validators", "Block Creation and Validation Flow"], hasVideo: true, duration: "35 min" },
      { title: "Transaction Lifecycle", subtopics: ["Creation → Signing → Broadcasting", "Validation → Block Inclusion → Finality"], hasVideo: true, duration: "30 min" },
      { title: "Gas Mechanism", subtopics: ["Gas Concept and Fee Model", "Cost Calculation and Optimization"], hasVideo: true, duration: "25 min" },
      { title: "Explorer & Debugging", subtopics: ["Transaction Tracking", "Contract Viewing", "Debugging Failures"], hasVideo: true, duration: "30 min" },
    ],
    assessment: { questions: 12, passingScore: "80%", type: "Practical + Theory" },
  },
  {
    num: 3, emoji: "🟠", title: "Development Environment & MST SDK",
    gradient: "from-orange-500 to-red-500", borderColor: "border-orange-500/30",
    textColor: "text-orange-400", bgGradient: "from-orange-500/10 to-red-500/5",
    icon: Code, duration: "5 hours",
    topics: [
      { title: "Web3 Application Architecture", subtopics: ["UI → SDK → Smart Contract → Blockchain"], hasVideo: true, duration: "20 min" },
      { title: "Development Setup", subtopics: ["Node.js Setup", "Hardhat Configuration", "Project Initialization"], hasVideo: true, duration: "45 min" },
      { title: "MST Network Configuration", subtopics: ["Adding MST to Wallet", "Testnet Faucet Setup"], hasVideo: true, duration: "25 min" },
      { title: "MST SDK Integration", subtopics: ["SDK Installation & Config", "Connecting to MST Network"], hasVideo: true, duration: "35 min" },
      { title: "SDK-Based Operations", subtopics: ["Wallet Connection", "Read & Write Operations", "Error Handling"], hasVideo: true, duration: "40 min" },
    ],
    assessment: { questions: 10, passingScore: "75%", type: "Hands-on Coding Challenge" },
  },
  {
    num: 4, emoji: "🔵", title: "Smart Contract Development",
    gradient: "from-blue-500 to-indigo-500", borderColor: "border-blue-500/30",
    textColor: "text-blue-400", bgGradient: "from-blue-500/10 to-indigo-500/5",
    icon: FileText, duration: "6 hours",
    topics: [
      { title: "Smart Contract Fundamentals", subtopics: ["Contract Structure", "Variables and Data Types"], hasVideo: true, duration: "30 min" },
      { title: "Functions & Logic", subtopics: ["Function Types", "Conditional Logic", "Modifiers"], hasVideo: true, duration: "40 min" },
      { title: "Data Structures", subtopics: ["Arrays", "Mappings", "Structs"], hasVideo: true, duration: "35 min" },
      { title: "Events & Logging", subtopics: ["Event Definition", "Emitting Logs", "Off-chain Interaction"], hasVideo: true, duration: "25 min" },
      { title: "Access Control", subtopics: ["Ownership", "Role-Based Permissions"], hasVideo: true, duration: "30 min" },
    ],
    assessment: { questions: 15, passingScore: "80%", type: "Contract Writing + Deploy" },
  },
  {
    num: 5, emoji: "🟣", title: "Contract Deployment & Testnet Execution",
    gradient: "from-violet-500 to-purple-500", borderColor: "border-violet-500/30",
    textColor: "text-violet-400", bgGradient: "from-violet-500/10 to-purple-500/5",
    icon: Rocket, duration: "4 hours",
    topics: [
      { title: "Contract Interaction", subtopics: ["Calling Functions", "Sending Transactions", "Handling Responses"], hasVideo: true, duration: "30 min" },
      { title: "Testing & Debugging", subtopics: ["Unit Testing", "Debugging Smart Contracts"], hasVideo: true, duration: "35 min" },
      { title: "Deployment on MST Testnet", subtopics: ["Contract Compilation", "Deployment via Hardhat", "MST Configuration"], hasVideo: true, duration: "40 min" },
      { title: "Explorer Verification", subtopics: ["Contract Verification", "Transaction Logs Analysis"], hasVideo: true, duration: "25 min" },
    ],
    assessment: { questions: 8, passingScore: "85%", type: "Live Deployment Test" },
  },
  {
    num: 6, emoji: "🧩", title: "Project — NFT Minting DApp on MST",
    gradient: "from-cyan-500 to-teal-500", borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400", bgGradient: "from-cyan-500/10 to-teal-500/5",
    icon: Cpu, duration: "8 hours",
    topics: [
      { title: "NFT Fundamentals", subtopics: ["NFTs and Digital Ownership", "ERC-721 Standard"], hasVideo: true, duration: "25 min" },
      { title: "NFT Smart Contract", subtopics: ["Minting Logic", "Ownership Tracking", "Metadata Structure"], hasVideo: true, duration: "45 min" },
      { title: "MST SDK Integration", subtopics: ["Wallet Connection", "Mint Function", "Transaction Handling"], hasVideo: true, duration: "35 min" },
      { title: "Frontend Development", subtopics: ["Mint UI", "Display NFTs", "Transaction Feedback"], hasVideo: true, duration: "50 min" },
      { title: "End-to-End DApp Flow", subtopics: ["User → Wallet → Contract → Blockchain → UI"], hasVideo: true, duration: "20 min" },
      { title: "Deployment", subtopics: ["Deploy on MST Testnet", "Connect Frontend", "Verify NFT Transactions"], hasVideo: true, duration: "40 min" },
    ],
    assessment: { questions: 5, passingScore: "90%", type: "Full DApp Review" },
  },
  {
    num: 7, emoji: "🔴", title: "Security, Optimization & Final Delivery",
    gradient: "from-rose-500 to-red-600", borderColor: "border-rose-500/30",
    textColor: "text-rose-400", bgGradient: "from-rose-500/10 to-red-600/5",
    icon: Shield, duration: "5 hours",
    topics: [
      { title: "Smart Contract Security", subtopics: ["Reentrancy Attacks", "Integer Overflow/Underflow", "Access Control Vulnerabilities", "Denial of Service"], hasVideo: true, duration: "45 min" },
      { title: "Secure Development Practices", subtopics: ["Input Validation", "Safe Contract Design", "Error Handling"], hasVideo: true, duration: "30 min" },
      { title: "Gas Optimization", subtopics: ["Efficient Storage", "Reducing Execution Cost"], hasVideo: true, duration: "25 min" },
      { title: "Performance Optimization", subtopics: ["Scalable Contract Design", "Efficient Transaction Flow"], hasVideo: true, duration: "20 min" },
      { title: "Final Project Delivery", subtopics: ["Fully functional NFT DApp", "Smart Contract + Frontend + SDK", "Documentation & Demo"], hasVideo: true, duration: "60 min" },
    ],
    assessment: { questions: 10, passingScore: "90%", type: "Final Project + Viva" },
  },
];

type Module = typeof modules[0];
type Topic = Module["topics"][0];

const TopicItem = ({ topic, mod, index }: { topic: Topic; mod: Module; index: number }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={`border ${mod.borderColor} overflow-hidden`}>
      <button
        onClick={() => setShowVideo(!showVideo)}
        className="w-full p-4 text-left flex items-center gap-3 hover:bg-foreground/3 transition-colors"
      >
        <div className={`w-8 h-8 border ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} flex items-center justify-center flex-shrink-0`}>
          <span className={`text-xs font-black ${mod.textColor}`}>{index + 1}</span>
        </div>
        <div className="flex-1">
          <span className="text-sm font-black uppercase">{topic.title}</span>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-[9px] text-on-surface-variant flex items-center gap-1">
              <Clock size={8} /> {topic.duration}
            </span>
            {topic.hasVideo && (
              <span className={`text-[9px] font-bold flex items-center gap-1 ${mod.textColor}`}>
                <Video size={8} /> Video
              </span>
            )}
          </div>
        </div>
        <motion.div animate={{ rotate: showVideo ? 90 : 0 }}>
          <ChevronRight size={16} className={mod.textColor} />
        </motion.div>
      </button>
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              {/* Mock Video Player */}
              <div className={`aspect-video border ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} relative overflow-hidden mb-3`}>
                <div className="absolute inset-0 blueprint-grid opacity-15" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full border-2 ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={24} className={mod.textColor} fill="currentColor" />
                  </motion.div>
                  <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.textColor} mt-3`}>
                    Demo Video — {topic.duration}
                  </p>
                  <p className="text-[9px] text-on-surface-variant mt-1">Click to play mock lecture</p>
                </div>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${mod.gradient}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
              {/* Subtopics */}
              <div className="space-y-1.5">
                {topic.subtopics.map((st) => (
                  <div key={st} className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                    <CheckCircle size={10} className={mod.textColor} />
                    {st}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ModuleSidebar = ({ mod, isActive, onClick }: { mod: Module; isActive: boolean; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className={`w-full text-left p-4 border-l-4 transition-all ${
      isActive
        ? `${mod.borderColor} bg-gradient-to-r ${mod.bgGradient}`
        : "border-transparent hover:border-foreground/10 hover:bg-foreground/3"
    }`}
    whileHover={{ x: isActive ? 0 : 4 }}
  >
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 border ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} flex items-center justify-center flex-shrink-0`}>
        <mod.icon size={18} className={mod.textColor} />
      </div>
      <div>
        <p className={`text-[9px] font-black uppercase tracking-[0.15em] ${isActive ? mod.textColor : "text-on-surface-variant"}`}>
          Module {mod.num}
        </p>
        <p className="text-xs font-black uppercase tracking-tight leading-tight">{mod.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[8px] text-on-surface-variant flex items-center gap-1"><Clock size={7} /> {mod.duration}</span>
          <span className="text-[8px] text-on-surface-variant">{mod.topics.length} lessons</span>
        </div>
      </div>
    </div>
  </motion.button>
);

const AcademyPage = () => {
  const [activeModule, setActiveModule] = useState(0);
  const mod = modules[activeModule];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl float-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-500/5 to-transparent rounded-full blur-3xl float-orb-delay" />
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
              <span className="label-style text-primary mb-4 block">🚀 MST Blockchain Academy</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                Certified MST<br />
                <span className="primary-gradient-text">Blockchain Developer</span>
              </h1>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
                Learn → Build → Deploy on MST Testnet. Master blockchain development with video lectures, hands-on projects, and real assessments.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { tag: "7 Modules", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
                  { tag: "35+ Video Lectures", color: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
                  { tag: "MST Certification", color: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
                  { tag: "NFT DApp Capstone", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" },
                ].map(({ tag, color }) => (
                  <span key={tag} className={`px-3 py-1.5 border ${color} text-[10px] font-black uppercase tracking-[0.15em]`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <motion.button
                  className="px-8 py-3 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] primary-glow-shadow relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  Enroll Now — Free
                </motion.button>
                <motion.button
                  className="px-8 py-3 border-2 border-foreground/20 font-black text-xs uppercase tracking-[0.15em] hover:border-primary/40 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  Download Syllabus
                </motion.button>
              </div>
            </motion.div>
          </section>

          <div className="h-1.5 primary-gradient mb-16" />

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { label: "Modules", value: "7", icon: BookOpen, gradient: "from-emerald-500/15 to-teal-500/5", border: "border-emerald-500/30", text: "text-emerald-400" },
                { label: "Video Lectures", value: "35+", icon: Video, gradient: "from-violet-500/15 to-purple-500/5", border: "border-violet-500/30", text: "text-violet-400" },
                { label: "Assessments", value: "7", icon: ClipboardCheck, gradient: "from-cyan-500/15 to-blue-500/5", border: "border-cyan-500/30", text: "text-cyan-400" },
                { label: "Final Project", value: "NFT DApp", icon: Trophy, gradient: "from-amber-500/15 to-orange-500/5", border: "border-amber-500/30", text: "text-amber-400" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className={`border ${s.border} p-5 text-center relative overflow-hidden group`}
                  whileHover={{ y: -2 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                  <div className="relative z-10">
                    <s.icon size={24} className={`${s.text} mx-auto mb-2`} />
                    <p className="text-2xl font-black mb-1">{s.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Course Layout: Left sidebar + Right content */}
          <section className="pb-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="label-style text-primary mb-3 block">🧠 Curriculum</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                  Course <span className="primary-gradient-text">Modules</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-12 gap-6">
              {/* Left Sidebar - Module Navigation */}
              <div className="col-span-12 lg:col-span-4">
                <div className="border border-foreground/10 sticky top-20 max-h-[80vh] overflow-y-auto no-scrollbar">
                  <div className="p-4 border-b border-foreground/10 bg-gradient-to-r from-primary/5 to-transparent">
                    <p className="label-style text-primary">Course Navigator</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">{modules.length} modules · 35+ hours</p>
                  </div>
                  {modules.map((m, i) => (
                    <ModuleSidebar key={m.num} mod={m} isActive={activeModule === i} onClick={() => setActiveModule(i)} />
                  ))}
                </div>
              </div>

              {/* Right Content - Video + Topics */}
              <div className="col-span-12 lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Module Header */}
                    <div className={`border-2 ${mod.borderColor} p-6 md:p-8 mb-6 relative overflow-hidden`}>
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${mod.gradient}`} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${mod.bgGradient}`} />
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 border ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} flex items-center justify-center`}>
                            <mod.icon size={28} className={mod.textColor} />
                          </div>
                          <div>
                            <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.textColor}`}>
                              {mod.emoji} Module {mod.num} of {modules.length}
                            </p>
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{mod.title}</h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-[9px] font-bold text-on-surface-variant flex items-center gap-1"><Clock size={10} /> {mod.duration}</span>
                          <span className="text-[9px] font-bold text-on-surface-variant flex items-center gap-1"><Video size={10} /> {mod.topics.length} videos</span>
                          <span className="text-[9px] font-bold text-on-surface-variant flex items-center gap-1"><ClipboardCheck size={10} /> Assessment included</span>
                        </div>
                      </div>
                    </div>

                    {/* Module Intro Video */}
                    <div className={`aspect-video border ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} relative overflow-hidden mb-6`}>
                      <div className="absolute inset-0 blueprint-grid opacity-10" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                          className={`w-20 h-20 rounded-full border-2 ${mod.borderColor} bg-gradient-to-br ${mod.bgGradient} flex items-center justify-center cursor-pointer backdrop-blur-sm`}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          animate={{ boxShadow: [`0 0 0 0px hsl(var(--primary) / 0.3)`, `0 0 0 20px hsl(var(--primary) / 0)`, `0 0 0 0px hsl(var(--primary) / 0.3)`] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Play size={32} className={mod.textColor} fill="currentColor" />
                        </motion.div>
                        <p className={`text-sm font-black uppercase tracking-[0.15em] ${mod.textColor} mt-4`}>
                          Module {mod.num} Introduction
                        </p>
                        <p className="text-xs text-on-surface-variant mt-1">{mod.title}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-foreground/10">
                        <div className={`h-full w-0 bg-gradient-to-r ${mod.gradient}`} />
                      </div>
                    </div>

                    {/* Topics / Lessons */}
                    <div className="space-y-2 mb-6">
                      <p className="label-style text-primary mb-3">Lessons</p>
                      {mod.topics.map((topic, ti) => (
                        <TopicItem key={ti} topic={topic} mod={mod} index={ti} />
                      ))}
                    </div>

                    {/* Assessment Card */}
                    <div className={`border-2 ${mod.borderColor} p-6 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${mod.bgGradient}`} />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <ClipboardCheck size={22} className={mod.textColor} />
                          <div>
                            <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.textColor}`}>Module {mod.num} Assessment</p>
                            <p className="text-lg font-black uppercase">Knowledge Check</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className={`p-3 border ${mod.borderColor} text-center`}>
                            <p className="text-lg font-black">{mod.assessment.questions}</p>
                            <p className="text-[8px] font-bold text-on-surface-variant uppercase">Questions</p>
                          </div>
                          <div className={`p-3 border ${mod.borderColor} text-center`}>
                            <p className="text-lg font-black">{mod.assessment.passingScore}</p>
                            <p className="text-[8px] font-bold text-on-surface-variant uppercase">Pass Score</p>
                          </div>
                          <div className={`p-3 border ${mod.borderColor} text-center`}>
                            <p className="text-lg font-black">∞</p>
                            <p className="text-[8px] font-bold text-on-surface-variant uppercase">Attempts</p>
                          </div>
                        </div>
                        <p className="text-[9px] text-on-surface-variant mb-4">Type: {mod.assessment.type}</p>
                        <motion.button
                          className={`w-full py-3 bg-gradient-to-r ${mod.gradient} text-white font-black text-xs uppercase tracking-[0.15em]`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Start Assessment
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="pb-20">
            <ScrollReveal>
              <div className="border-2 border-foreground/20 p-8 md:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 primary-gradient" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/3 pointer-events-none" />
                <div className="relative z-10">
                  <Award size={48} className="text-primary mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase">
                    Ready to become a <span className="primary-gradient-text">Certified MST Developer?</span>
                  </h3>
                  <p className="text-on-surface-variant font-medium max-w-lg mx-auto mb-8">
                    Complete all 7 modules, pass assessments, and deliver your NFT DApp to earn certification.
                  </p>
                  <motion.button
                    className="px-12 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] primary-glow-shadow relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    Start Your Journey
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AcademyPage;
