import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Code, Shield, Rocket, Layers, Cpu, Award,
  ChevronDown, ChevronRight, CheckCircle, Lock, Play, FileText, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
  {
    num: 1,
    emoji: "🟢",
    title: "Blockchain Fundamentals & MST Ecosystem",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-500",
    bgColor: "bg-emerald-500/5",
    icon: BookOpen,
    topics: [
      { title: "Foundations of Digital Systems", subtopics: ["Centralized Systems: Architecture", "Limitations of Centralized Systems", "Decentralized Systems: Concept & Benefits"] },
      { title: "Distributed Systems", subtopics: ["Nodes and Network Architecture", "Data Synchronization", "Fault Tolerance"] },
      { title: "Core Blockchain Concepts", subtopics: ["Blockchain Structure (Blocks, Transactions)", "Cryptographic Hashing", "Immutability and Transparency"] },
      { title: "Gaps in Existing Blockchains", subtopics: ["Scalability Issues", "High Transaction Costs", "Poor UX & Developer Complexity"] },
      { title: "Introduction to MST Blockchain", subtopics: ["MST as a Layer 1 Network", "EVM Compatibility", "High Throughput and Low Fees"] },
      { title: "MST Product Ecosystem", subtopics: ["SARAL Protocol", "Non-Custodial Key Infrastructure", "WASMify & ZK Communication", "MST Explorer & BridgeKey Wallet"] },
    ],
  },
  {
    num: 2,
    emoji: "🟡",
    title: "MST Network & Transaction Architecture",
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-500",
    bgColor: "bg-amber-500/5",
    icon: Layers,
    topics: [
      { title: "MST Network Architecture", subtopics: ["Nodes and Validators", "Block Creation and Validation Flow"] },
      { title: "Transaction Lifecycle", subtopics: ["Creation → Signing → Broadcasting", "Validation → Block Inclusion → Finality"] },
      { title: "Gas Mechanism", subtopics: ["Gas Concept and Fee Model", "Cost Calculation and Optimization"] },
      { title: "Explorer & Debugging", subtopics: ["Transaction Tracking", "Contract Viewing", "Debugging Failures"] },
    ],
  },
  {
    num: 3,
    emoji: "🟠",
    title: "Development Environment & MST SDK",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-500",
    bgColor: "bg-orange-500/5",
    icon: Code,
    topics: [
      { title: "Web3 Application Architecture", subtopics: ["UI → SDK → Smart Contract → Blockchain"] },
      { title: "Development Setup", subtopics: ["Node.js Setup", "Hardhat Configuration", "Project Initialization"] },
      { title: "MST Network Configuration", subtopics: ["Adding MST to Wallet", "Testnet Faucet Setup"] },
      { title: "MST SDK Integration", subtopics: ["SDK Installation & Config", "Connecting to MST Network"] },
      { title: "SDK-Based Operations", subtopics: ["Wallet Connection", "Read & Write Operations", "Error Handling"] },
    ],
  },
  {
    num: 4,
    emoji: "🔵",
    title: "Smart Contract Development",
    color: "from-blue-500 to-indigo-500",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/5",
    icon: FileText,
    topics: [
      { title: "Smart Contract Fundamentals", subtopics: ["Contract Structure", "Variables and Data Types"] },
      { title: "Functions & Logic", subtopics: ["Function Types", "Conditional Logic", "Modifiers"] },
      { title: "Data Structures", subtopics: ["Arrays", "Mappings", "Structs"] },
      { title: "Events & Logging", subtopics: ["Event Definition", "Emitting Logs", "Off-chain Interaction"] },
      { title: "Access Control", subtopics: ["Ownership", "Role-Based Permissions"] },
    ],
  },
  {
    num: 5,
    emoji: "🟣",
    title: "Contract Deployment & Testnet Execution",
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-500",
    bgColor: "bg-violet-500/5",
    icon: Rocket,
    topics: [
      { title: "Contract Interaction", subtopics: ["Calling Functions", "Sending Transactions", "Handling Responses"] },
      { title: "Testing & Debugging", subtopics: ["Unit Testing", "Debugging Smart Contracts"] },
      { title: "Deployment on MST Testnet", subtopics: ["Contract Compilation", "Deployment via Hardhat", "MST Configuration"] },
      { title: "Explorer Verification", subtopics: ["Contract Verification", "Transaction Logs Analysis"] },
    ],
  },
  {
    num: 6,
    emoji: "🧩",
    title: "Project — NFT Minting DApp on MST",
    color: "from-cyan-500 to-teal-500",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-500",
    bgColor: "bg-cyan-500/5",
    icon: Cpu,
    topics: [
      { title: "NFT Fundamentals", subtopics: ["NFTs and Digital Ownership", "ERC-721 Standard"] },
      { title: "NFT Smart Contract", subtopics: ["Minting Logic", "Ownership Tracking", "Metadata Structure"] },
      { title: "MST SDK Integration", subtopics: ["Wallet Connection", "Mint Function", "Transaction Handling"] },
      { title: "Frontend Development", subtopics: ["Mint UI", "Display NFTs", "Transaction Feedback"] },
      { title: "End-to-End DApp Flow", subtopics: ["User → Wallet → Contract → Blockchain → UI"] },
      { title: "Deployment", subtopics: ["Deploy on MST Testnet", "Connect Frontend", "Verify NFT Transactions"] },
    ],
  },
  {
    num: 7,
    emoji: "🔴",
    title: "Security, Optimization & Final Delivery",
    color: "from-rose-500 to-red-600",
    borderColor: "border-rose-500/30",
    textColor: "text-rose-500",
    bgColor: "bg-rose-500/5",
    icon: Shield,
    topics: [
      { title: "Smart Contract Security", subtopics: ["Reentrancy Attacks", "Integer Overflow/Underflow", "Access Control Vulnerabilities", "Denial of Service"] },
      { title: "Secure Development Practices", subtopics: ["Input Validation", "Safe Contract Design", "Error Handling"] },
      { title: "Gas Optimization", subtopics: ["Efficient Storage", "Reducing Execution Cost"] },
      { title: "Performance Optimization", subtopics: ["Scalable Contract Design", "Efficient Transaction Flow"] },
      { title: "Final Project Delivery", subtopics: ["Fully functional NFT DApp", "Smart Contract + Frontend + SDK", "Documentation & Demo"] },
    ],
  },
];

const ModuleCard = ({ mod, index }: { mod: typeof modules[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <motion.div
        className={`border-2 ${mod.borderColor} ${mod.bgColor} overflow-hidden relative group`}
        whileHover={{ y: -2 }}
        layout
      >
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.color}`} />

        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full p-6 md:p-8 text-left flex items-start gap-4"
        >
          <div className={`w-14 h-14 border ${mod.borderColor} ${mod.bgColor} flex items-center justify-center flex-shrink-0`}>
            <mod.icon size={24} className={mod.textColor} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{mod.emoji}</span>
              <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.textColor}`}>
                Module {mod.num}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{mod.title}</h3>
            <p className="text-xs text-on-surface-variant mt-1">{mod.topics.length} topics · Assessment included</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <ChevronDown size={20} className={mod.textColor} />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-3">
                {mod.topics.map((topic, ti) => (
                  <div key={ti} className="border border-foreground/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Play size={12} className={mod.textColor} />
                      <span className="text-sm font-black uppercase">{topic.title}</span>
                    </div>
                    <div className="ml-5 space-y-1">
                      {topic.subtopics.map((st) => (
                        <div key={st} className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                          <ChevronRight size={10} className={mod.textColor} />
                          {st}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
};

const AcademyPage = () => (
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
            <span className="label-style text-primary mb-4 block">🚀 MST Blockchain Academy</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
              Certified MST<br />
              <span className="primary-gradient-text">Blockchain Developer</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
              Learn → Build → Deploy on MST Testnet. A comprehensive program covering blockchain fundamentals
              to building production-ready NFT DApps on MST infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["7 Modules", "Hands-On Projects", "MST Certification", "NFT DApp Capstone"].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-primary/30 text-[10px] font-black uppercase tracking-[0.15em] text-primary shimmer">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <motion.button
                className="px-8 py-3 primary-gradient text-primary-foreground font-black text-xs uppercase tracking-[0.15em] primary-glow-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Enroll Now
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Syllabus
              </motion.button>
            </div>
          </motion.div>
        </section>

        <div className="h-1 primary-gradient mb-16" />

        {/* Program overview stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Modules", value: "7", icon: BookOpen, color: "text-emerald-500" },
              { label: "Topics", value: "35+", icon: FileText, color: "text-violet-500" },
              { label: "Assessments", value: "20+", icon: CheckCircle, color: "text-cyan-500" },
              { label: "Final Project", value: "NFT DApp", icon: Award, color: "text-amber-500" },
            ].map((s) => (
              <div key={s.label} className="border border-foreground/10 p-5 text-center hover:border-primary/30 transition-colors">
                <s.icon size={24} className={`${s.color} mx-auto mb-2`} />
                <p className="text-2xl font-black mb-1">{s.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Modules */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-style text-primary mb-3 block">🧠 Curriculum</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Course Modules</h2>
              <p className="text-on-surface-variant font-medium mt-3 text-sm">Click any module to explore topics</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.num} mod={mod} index={i} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20">
          <ScrollReveal>
            <div className="border-2 border-foreground p-8 md:p-14 text-center gradient-border-glow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 primary-gradient" />
              <div className="absolute inset-0 gradient-mesh-intense opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <Award size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase">
                  Ready to become a <span className="primary-gradient-text">Certified MST Developer?</span>
                </h3>
                <p className="text-on-surface-variant font-medium max-w-lg mx-auto mb-8">
                  Complete all 7 modules, pass assessments, and deliver your NFT DApp to earn your MST Blockchain Developer Certification.
                </p>
                <motion.button
                  className="px-12 py-4 primary-gradient text-primary-foreground font-black text-sm uppercase tracking-[0.15em] primary-glow-shadow"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
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

export default AcademyPage;
