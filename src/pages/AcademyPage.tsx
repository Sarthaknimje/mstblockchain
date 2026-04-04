import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Code, Shield, Rocket, Layers, Cpu, Award,
  ChevronDown, CheckCircle, Play, Clock, Video, ClipboardCheck,
  Trophy, Zap, FileText, Hexagon, Lock, ChevronRight, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Category icons (top filter bar like Avalanche) ─── */
const categories = [
  { id: "all", label: "All Modules", icon: Globe, gradient: "from-primary to-primary-glow" },
  { id: "fundamentals", label: "Fundamentals", icon: BookOpen, gradient: "from-emerald-500 to-teal-500" },
  { id: "architecture", label: "Architecture", icon: Layers, gradient: "from-amber-500 to-yellow-500" },
  { id: "development", label: "Development", icon: Code, gradient: "from-orange-500 to-red-500" },
  { id: "deployment", label: "Deployment", icon: Rocket, gradient: "from-violet-500 to-purple-500" },
  { id: "security", label: "Security", icon: Shield, gradient: "from-rose-500 to-red-600" },
];

const modules = [
  {
    num: 1, title: "Blockchain Fundamentals & MST Ecosystem",
    category: "fundamentals",
    gradient: "from-emerald-500 to-teal-600", borderColor: "border-emerald-500/40",
    textColor: "text-emerald-400", bgColor: "bg-emerald-500",
    shadowColor: "shadow-emerald-500/20", iconBg: "bg-emerald-500",
    icon: BookOpen, duration: "4 hours", lessons: 6,
    desc: "Learn about blockchain architecture, cryptographic hashing, and MST's Layer 1 ecosystem",
    topics: ["Centralized vs Decentralized Systems", "Distributed Systems & Fault Tolerance", "Core Blockchain Concepts", "Gaps in Existing Blockchains", "Introduction to MST Blockchain", "MST Product Ecosystem"],
    assessment: { questions: 15, passingScore: "80%", type: "Multiple Choice + Short Answer" },
    row: 0, col: 1,
  },
  {
    num: 2, title: "MST Network & Transaction Architecture",
    category: "architecture",
    gradient: "from-amber-500 to-yellow-600", borderColor: "border-amber-500/40",
    textColor: "text-amber-400", bgColor: "bg-amber-500",
    shadowColor: "shadow-amber-500/20", iconBg: "bg-amber-500",
    icon: Layers, duration: "3 hours", lessons: 4,
    desc: "Understand nodes, validators, transaction lifecycle, gas mechanisms, and explorer debugging",
    topics: ["MST Network Architecture", "Transaction Lifecycle", "Gas Mechanism", "Explorer & Debugging"],
    assessment: { questions: 12, passingScore: "80%", type: "Practical + Theory" },
    row: 1, col: 0,
  },
  {
    num: 3, title: "Development Environment & MST SDK",
    category: "development",
    gradient: "from-orange-500 to-red-500", borderColor: "border-orange-500/40",
    textColor: "text-orange-400", bgColor: "bg-orange-500",
    shadowColor: "shadow-orange-500/20", iconBg: "bg-orange-500",
    icon: Code, duration: "5 hours", lessons: 5,
    desc: "Set up Hardhat, configure MST SDK, and build Web3 application architecture",
    topics: ["Web3 Application Architecture", "Development Setup", "MST Network Configuration", "MST SDK Integration", "SDK-Based Operations"],
    assessment: { questions: 10, passingScore: "75%", type: "Hands-on Coding Challenge" },
    row: 1, col: 1,
  },
  {
    num: 4, title: "Smart Contract Development",
    category: "development",
    gradient: "from-blue-500 to-indigo-600", borderColor: "border-blue-500/40",
    textColor: "text-blue-400", bgColor: "bg-blue-500",
    shadowColor: "shadow-blue-500/20", iconBg: "bg-blue-500",
    icon: FileText, duration: "6 hours", lessons: 5,
    desc: "Master Solidity fundamentals, data structures, events, and access control patterns",
    topics: ["Smart Contract Fundamentals", "Functions & Logic", "Data Structures", "Events & Logging", "Access Control"],
    assessment: { questions: 15, passingScore: "80%", type: "Contract Writing + Deploy" },
    row: 1, col: 2,
  },
  {
    num: 5, title: "Contract Deployment & Testnet",
    category: "deployment",
    gradient: "from-violet-500 to-purple-600", borderColor: "border-violet-500/40",
    textColor: "text-violet-400", bgColor: "bg-violet-500",
    shadowColor: "shadow-violet-500/20", iconBg: "bg-violet-500",
    icon: Rocket, duration: "4 hours", lessons: 4,
    desc: "Deploy contracts on MST Testnet, verify on explorer, and test interactions",
    topics: ["Contract Interaction", "Testing & Debugging", "Deployment on MST Testnet", "Explorer Verification"],
    assessment: { questions: 8, passingScore: "85%", type: "Live Deployment Test" },
    row: 1, col: 3,
  },
  {
    num: 6, title: "NFT Minting DApp Project",
    category: "deployment",
    gradient: "from-cyan-500 to-teal-600", borderColor: "border-cyan-500/40",
    textColor: "text-cyan-400", bgColor: "bg-cyan-500",
    shadowColor: "shadow-cyan-500/20", iconBg: "bg-cyan-500",
    icon: Cpu, duration: "8 hours", lessons: 6,
    desc: "Build a complete NFT minting DApp with smart contract, frontend, and MST SDK",
    topics: ["NFT Fundamentals", "NFT Smart Contract", "MST SDK Integration", "Frontend Development", "End-to-End DApp Flow", "Deployment"],
    assessment: { questions: 5, passingScore: "90%", type: "Full DApp Review" },
    row: 2, col: 1,
  },
  {
    num: 7, title: "Security, Optimization & Final Delivery",
    category: "security",
    gradient: "from-rose-500 to-red-600", borderColor: "border-rose-500/40",
    textColor: "text-rose-400", bgColor: "bg-rose-500",
    shadowColor: "shadow-rose-500/20", iconBg: "bg-rose-500",
    icon: Shield, duration: "5 hours", lessons: 5,
    desc: "Secure your contracts, optimize gas, and deliver your final certified project",
    topics: ["Smart Contract Security", "Secure Development Practices", "Gas Optimization", "Performance Optimization", "Final Project Delivery"],
    assessment: { questions: 10, passingScore: "90%", type: "Final Project + Viva" },
    row: 2, col: 2,
  },
];

type Module = typeof modules[0];

/* ─── Tree Node Card ─── */
const TreeNode = ({ mod, isSelected, onClick, index }: { mod: Module; isSelected: boolean; onClick: () => void; index: number }) => (
  <motion.div
    onClick={onClick}
    className={`relative cursor-pointer group`}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    {/* Glow effect on selected */}
    {isSelected && (
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${mod.gradient} rounded-xl opacity-30 blur-lg`}
        layoutId="node-glow"
        transition={{ duration: 0.3 }}
      />
    )}
    <div className={`relative rounded-xl border-2 overflow-hidden transition-all duration-300 ${
      isSelected
        ? `${mod.borderColor} shadow-2xl ${mod.shadowColor}`
        : "border-white/10 hover:border-white/20"
    }`}
      style={{
        background: isSelected
          ? "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
          : "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2))",
        backdropFilter: "blur(20px)",
        minWidth: 220,
        maxWidth: 280,
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${mod.gradient}`} />
      
      <div className="p-4">
        {/* Icon badge */}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${mod.gradient} flex items-center justify-center shadow-lg`}>
            <mod.icon size={18} className="text-white" />
          </div>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center"
            >
              <CheckCircle size={12} className="text-white" />
            </motion.div>
          )}
        </div>

        <h4 className="text-sm font-bold text-white leading-tight mb-1.5">{mod.title}</h4>
        <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2">{mod.desc}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
          <span className="text-[10px] text-white/40 flex items-center gap-1">
            <Clock size={10} /> {mod.duration}
          </span>
          <span className="text-[10px] text-white/40 flex items-center gap-1">
            <Video size={10} /> {mod.lessons} lessons
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── SVG Connection Paths (tree lines) ─── */
const TreeConnections = ({ selectedModule }: { selectedModule: number }) => {
  const mod = modules[selectedModule];
  // Use the selected module's gradient colors for the flowing line
  const gradientId = `flow-grad-${selectedModule}`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Row 0 → Row 1 connections (Module 1 to Modules 2,3,4,5) */}
      {/* Center top to each middle card */}
      <motion.path
        d="M 50% 180 C 50% 240, 12% 260, 12% 310"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ vectorEffect: "non-scaling-stroke" }}
      />
    </svg>
  );
};

/* ─── Module Detail Panel ─── */
const ModuleDetail = ({ mod }: { mod: Module }) => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  return (
    <motion.div
      key={mod.num}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto"
    >
      {/* Module header card */}
      <div className="relative rounded-2xl overflow-hidden mb-8"
        style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.3))", backdropFilter: "blur(20px)" }}
      >
        <div className={`h-1.5 bg-gradient-to-r ${mod.gradient}`} />
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <mod.icon size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${mod.textColor} mb-1`}>
                Module {mod.num} of {modules.length}
              </p>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{mod.title}</h3>
              <p className="text-sm text-white/50 mt-1.5">{mod.desc}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Clock, text: mod.duration },
              { icon: Video, text: `${mod.lessons} Video Lectures` },
              { icon: ClipboardCheck, text: "Assessment Included" },
            ].map((m, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[11px] text-white/40 font-medium">
                <m.icon size={12} className={mod.textColor} /> {m.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column: Video + Lessons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Video Player */}
        <div className="relative rounded-xl overflow-hidden aspect-video"
          style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.4))" }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-5" />
          <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-5`} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${mod.gradient} flex items-center justify-center cursor-pointer shadow-2xl`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(255,255,255,0.2)",
                  "0 0 0 15px rgba(255,255,255,0)",
                  "0 0 0 0px rgba(255,255,255,0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Play size={24} className="text-white ml-1" fill="white" />
            </motion.div>
            <p className="text-xs font-bold text-white/60 mt-4 uppercase tracking-wider">
              Module {mod.num} — Introduction
            </p>
          </div>
          {/* Progress */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <motion.div
              className={`h-full bg-gradient-to-r ${mod.gradient}`}
              initial={{ width: "0%" }}
              animate={{ width: "0%" }}
            />
          </div>
        </div>

        {/* Lessons list */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">
            {mod.lessons} Lessons
          </p>
          {mod.topics.map((topic, ti) => (
            <motion.button
              key={ti}
              onClick={() => setExpandedTopic(expandedTopic === ti ? null : ti)}
              className={`w-full text-left rounded-lg p-3 flex items-center gap-3 transition-all border ${
                expandedTopic === ti
                  ? `${mod.borderColor} bg-white/5`
                  : "border-transparent hover:bg-white/5"
              }`}
              whileHover={{ x: 2 }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                expandedTopic === ti
                  ? `bg-gradient-to-br ${mod.gradient}`
                  : "bg-white/5"
              }`}>
                <span className={`text-xs font-black ${expandedTopic === ti ? "text-white" : mod.textColor}`}>
                  {ti + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${expandedTopic === ti ? "text-white" : "text-white/70"} truncate`}>
                  {topic}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Video size={12} className={mod.textColor} />
                <motion.div animate={{ rotate: expandedTopic === ti ? 90 : 0 }}>
                  <ChevronRight size={14} className="text-white/30" />
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Assessment Card */}
      <div className="relative rounded-xl overflow-hidden"
        style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.3))" }}
      >
        <div className={`h-1 bg-gradient-to-r ${mod.gradient}`} />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mod.gradient} flex items-center justify-center`}>
              <ClipboardCheck size={20} className="text-white" />
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.textColor}`}>Module {mod.num} Assessment</p>
              <p className="text-base font-bold text-white">Knowledge Check</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { val: mod.assessment.questions, label: "Questions" },
              { val: mod.assessment.passingScore, label: "Pass Score" },
              { val: "∞", label: "Attempts" },
            ].map((a) => (
              <div key={a.label} className="rounded-lg bg-white/5 border border-white/10 p-3 text-center">
                <p className="text-lg font-black text-white">{a.val}</p>
                <p className="text-[9px] text-white/40 uppercase tracking-wider font-bold">{a.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/40 mb-4">Type: {mod.assessment.type}</p>
          <motion.button
            className={`w-full py-3 rounded-lg bg-gradient-to-r ${mod.gradient} text-white font-bold text-xs uppercase tracking-[0.15em] shadow-lg`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Assessment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Academy Page ─── */
const AcademyPage = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredModules = activeCategory === "all"
    ? modules
    : modules.filter((m) => m.category === activeCategory);

  // Tree layout: organize modules into rows
  const row0 = filteredModules.filter((m) => m.row === 0);
  const row1 = filteredModules.filter((m) => m.row === 1);
  const row2 = filteredModules.filter((m) => m.row === 2);

  return (
    <div className="min-h-screen text-white relative"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 30%, #0a0a0f 100%)" }}
    >
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              background: `radial-gradient(circle, hsl(var(--primary) / ${0.03 + i * 0.01}), transparent 70%)`,
              filter: "blur(60px)",
            }}
            animate={{
              y: [0, -40, 20, -30, 0],
              x: [0, 20, -15, 25, 0],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{ duration: 14 + i * 4, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          />
        ))}
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <ColorPicker />

        <main className="max-w-[1440px] mx-auto px-6 md:px-8">
          {/* Hero */}
          <section className="pt-16 md:pt-24 pb-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 hover:underline">
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                🚀 MST Blockchain Academy
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
                Certified MST<br />
                <span className="primary-gradient-text">Blockchain Developer</span>
              </h1>
              <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed">
                Master blockchain development through interactive courses. Deploy L1s, build dApps,
                and customize your own infrastructure on MST Chain.
              </p>
            </motion.div>

            {/* Category filter icons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSelectedModule(0); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                      isActive
                        ? `bg-gradient-to-r ${cat.gradient} text-white border-transparent shadow-lg`
                        : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <cat.icon size={14} />
                    {cat.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Stats pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: "7 Modules", icon: BookOpen },
                { label: "35+ Video Lectures", icon: Video },
                { label: "MST Certification", icon: Award },
                { label: "NFT DApp Capstone", icon: Cpu },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                  <Icon size={10} className="text-primary" /> {label}
                </span>
              ))}
            </motion.div>
          </section>

          {/* ─── Visual Tree / Flowchart ─── */}
          <section className="pb-16 relative">
            <div className="relative">
              {/* SVG connections between nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Row 0: Root module */}
              {row0.length > 0 && (
                <div className="flex justify-center mb-4">
                  {row0.map((mod, i) => {
                    const globalIdx = modules.findIndex((m) => m.num === mod.num);
                    return (
                      <TreeNode
                        key={mod.num}
                        mod={mod}
                        index={i}
                        isSelected={selectedModule === globalIdx}
                        onClick={() => setSelectedModule(globalIdx)}
                      />
                    );
                  })}
                </div>
              )}

              {/* Connecting line from row 0 to row 1 */}
              {row0.length > 0 && row1.length > 0 && (
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-0.5 h-12 rounded-full"
                    style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--primary-glow) / 0.2))" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </div>
              )}

              {/* Horizontal connecting bar for row 1 */}
              {row1.length > 1 && (
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="h-0.5 rounded-full"
                    style={{
                      width: `${Math.min(row1.length * 22, 85)}%`,
                      background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--primary-glow) / 0.5), hsl(var(--primary) / 0.4), transparent)",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                </div>
              )}

              {/* Vertical drops from horizontal bar to each row1 card */}
              {row1.length > 1 && (
                <div className="flex justify-center gap-6 md:gap-8 mb-4">
                  {row1.map((_, i) => (
                    <div key={i} className="flex justify-center" style={{ width: 260 }}>
                      <motion.div
                        className="w-0.5 h-6 rounded-full"
                        style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary-glow) / 0.15))" }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Row 1: Middle row modules */}
              {row1.length > 0 && (
                <div className="flex justify-center gap-6 md:gap-8 flex-wrap mb-4">
                  {row1.map((mod, i) => {
                    const globalIdx = modules.findIndex((m) => m.num === mod.num);
                    return (
                      <TreeNode
                        key={mod.num}
                        mod={mod}
                        index={i + 1}
                        isSelected={selectedModule === globalIdx}
                        onClick={() => setSelectedModule(globalIdx)}
                      />
                    );
                  })}
                </div>
              )}

              {/* Connecting lines to row 2 */}
              {row1.length > 0 && row2.length > 0 && (
                <>
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="w-0.5 h-12 rounded-full"
                      style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary-glow) / 0.15))" }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    />
                  </div>

                  {row2.length > 1 && (
                    <>
                      <div className="flex justify-center mb-4">
                        <motion.div
                          className="h-0.5 rounded-full"
                          style={{
                            width: `${Math.min(row2.length * 25, 60)}%`,
                            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--primary-glow) / 0.5), hsl(var(--primary) / 0.4), transparent)",
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1.4, duration: 0.6 }}
                        />
                      </div>
                      <div className="flex justify-center gap-6 md:gap-8 mb-4">
                        {row2.map((_, i) => (
                          <div key={i} className="flex justify-center" style={{ width: 260 }}>
                            <motion.div
                              className="w-0.5 h-6 rounded-full"
                              style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary-glow) / 0.15))" }}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Row 2: Bottom row modules */}
              {row2.length > 0 && (
                <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
                  {row2.map((mod, i) => {
                    const globalIdx = modules.findIndex((m) => m.num === mod.num);
                    return (
                      <TreeNode
                        key={mod.num}
                        mod={mod}
                        index={i + 5}
                        isSelected={selectedModule === globalIdx}
                        onClick={() => setSelectedModule(globalIdx)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Module Details</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* ─── Selected Module Detail ─── */}
          <section className="pb-20">
            <AnimatePresence mode="wait">
              <ModuleDetail mod={modules[selectedModule]} />
            </AnimatePresence>
          </section>

          {/* Final CTA */}
          <section className="pb-20">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden text-center"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.3))" }}
              >
                <div className="h-1.5 primary-gradient" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/3 pointer-events-none" />
                <div className="relative z-10 p-8 md:p-14">
                  <Award size={48} className="text-primary mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    Ready to become a{" "}
                    <span className="primary-gradient-text">Certified MST Developer?</span>
                  </h3>
                  <p className="text-white/50 font-medium max-w-lg mx-auto mb-8">
                    Complete all 7 modules, pass assessments, and deliver your NFT DApp to earn certification.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.button
                      className="px-10 py-4 primary-gradient text-white font-black text-sm uppercase tracking-[0.15em] primary-glow-shadow rounded-lg relative overflow-hidden"
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
                    <motion.button
                      className="px-10 py-4 rounded-lg border border-white/20 font-black text-sm uppercase tracking-[0.15em] text-white/60 hover:text-white hover:border-primary/40 transition-all"
                      whileHover={{ scale: 1.03 }}
                    >
                      Download Syllabus
                    </motion.button>
                  </div>
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
