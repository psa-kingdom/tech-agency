import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Activity,
  Database,
  Server,
  Cpu,
  CheckCircle,
  Terminal,
  Settings,
  Globe,
  Shield,
  Layers,
  Network,
  TrendingUp,
} from "lucide-react";

const ACCENT_MAP = {
  iris: {
    border: "border-iris/20",
    text: "text-iris",
    bg: "from-iris/5 via-transparent to-transparent",
    glow: "bg-iris/20",
  },
  periwinkle: {
    border: "border-periwinkle/20",
    text: "text-periwinkle",
    bg: "from-periwinkle/5 via-transparent to-transparent",
    glow: "bg-periwinkle/20",
  },
  orchid: {
    border: "border-orchid/20",
    text: "text-orchid",
    bg: "from-orchid/5 via-transparent to-transparent",
    glow: "bg-orchid/20",
  },
  deepIris: {
    border: "border-iris-deep/30",
    text: "text-iris-deep",
    bg: "from-iris-deep/5 via-transparent to-transparent",
    glow: "bg-iris-deep/20",
  },
  paleIris: {
    border: "border-iris-pale/20",
    text: "text-iris-pale",
    bg: "from-iris-pale/5 via-transparent to-transparent",
    glow: "bg-iris-pale/20",
  },
  signal: {
    border: "border-signal/20",
    text: "text-signal",
    bg: "from-signal/5 via-transparent to-transparent",
    glow: "bg-signal/20",
  },
};

// 1. Dashboard Mockup
const DashboardMockup = ({ accentStyle }) => {
  return (
    <div className="w-full h-full flex flex-col bg-void/80 border border-white/5 rounded-feature overflow-hidden text-cloud/80 p-3 sm:p-4 text-[10px] font-sans">
      {/* Top Header Row */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-1 text-[9px] font-mono text-ash/80 truncate">console.navigatte.io</span>
        </div>
        <div className="h-4 w-20 rounded bg-white/5 animate-pulse" />
      </div>

      {/* Grid of stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {[
          { label: "Active Connections", val: "99.9%", icon: Globe },
          { label: "Throughput", val: "4.8 GB/s", icon: TrendingUp },
          { label: "Security Shield", val: "Active", icon: Shield },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-graphite/35 border border-white/5 rounded-lg p-2 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[8px] text-ash gap-1">
                <span className="truncate">{stat.label}</span>
                <Icon className={cn("w-3 h-3 shrink-0", accentStyle.text)} />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-cloud mt-1 truncate">{stat.val}</span>
            </div>
          );
        })}
      </div>

      {/* Simulated Chart Area */}
      <div className="flex-1 bg-graphite/20 border border-white/5 rounded-lg p-3 flex flex-col justify-between min-h-[80px] relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono-label text-[8px] text-ash">Operational Real-Time Feed</span>
          <div className="flex items-center gap-1.5 text-[8px] text-ash">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Live
          </div>
        </div>
        <div className="flex-1 flex items-end gap-1 px-1">
          {[40, 65, 30, 85, 45, 55, 75, 90, 60, 80, 50, 95].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{
                duration: 0.8,
                delay: idx * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              className={cn("flex-1 rounded-t-[2px] bg-gradient-to-t", 
                idx % 2 === 0 ? "from-white/10 to-white/20" : `from-white/5 to-${accentStyle.text.split("-")[1]}`
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Node Graph Flow Mockup
const FlowMockup = ({ accentStyle }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-void/60 rounded-feature relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Left branch line */}
        <motion.path
          d="M 50 110 L 150 110"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          d="M 50 110 L 150 110"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={accentStyle.text}
          initial={{ strokeDasharray: "10 50", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -60 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Top branch line */}
        <motion.path
          d="M 150 110 L 250 60"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          d="M 150 110 L 250 60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={accentStyle.text}
          initial={{ strokeDasharray: "15 60", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -75 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom branch line */}
        <motion.path
          d="M 150 110 L 250 160"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          d="M 150 110 L 250 160"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={accentStyle.text}
          initial={{ strokeDasharray: "12 40", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -52 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Nodes Container */}
      <div className="relative w-full h-full flex items-center justify-around px-8 z-10">
        {/* Node 1: Input Database */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-10 h-10 rounded-xl bg-graphite border border-white/10 flex items-center justify-center shadow-lg">
            <Database className="w-5 h-5 text-ash" />
          </div>
          <span className="font-mono text-[8px] text-ash">Data Store</span>
        </motion.div>

        {/* Node 2: Core Processing Agent */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className={cn("w-14 h-14 rounded-2xl bg-black border flex items-center justify-center shadow-2xl relative", accentStyle.border)}>
            <div className={cn("absolute inset-0 rounded-2xl blur-md opacity-40 animate-pulse", accentStyle.glow)} />
            <Cpu className={cn("w-6 h-6", accentStyle.text)} />
          </div>
          <span className="font-mono text-[8px] text-cloud font-medium">Navigatte AI</span>
        </motion.div>

        {/* Output Branches */}
        <div className="flex flex-col gap-8">
          {/* Output 1: Server endpoint */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-graphite border border-white/10 flex items-center justify-center">
              <Server className="w-4 h-4 text-ash" />
            </div>
            <span className="font-mono text-[8px] text-ash hidden sm:inline">Production</span>
          </motion.div>

          {/* Output 2: Operations hub */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-graphite border border-white/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-ash" />
            </div>
            <span className="font-mono text-[8px] text-ash hidden sm:inline">Analytics</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// 3. Pipeline / Terminal Mockup
const PipelineMockup = ({ accentStyle }) => {
  return (
    <div className="w-full h-full flex flex-col bg-abyss border border-white/5 rounded-feature overflow-hidden p-3 font-mono text-[9px] text-ash">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2 shrink-0">
        <div className="flex items-center gap-1">
          <Terminal className="w-3.5 h-3.5 text-ash/60" />
          <span className="text-[8px] text-ash/60">pipeline-job-orchestrator</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
      </div>

      {/* Console lines output */}
      <div className="flex-1 space-y-1 overflow-hidden select-none mb-2">
        <p className="text-white/40">$ yarn build:production</p>
        <p className="text-ash/70">✓ compiling assets for client bundle...</p>
        <p className="text-ash/70">✓ verifying static route dependencies...</p>
        <div className="flex items-center gap-1.5 text-cloud">
          <CheckCircle className={cn("w-3.5 h-3.5", accentStyle.text)} />
          <span>success: deployment manifest registered</span>
        </div>
        <p className="text-ash/50">[12:44:03] transferring manifest to AWS cluster...</p>
        <p className="text-white/70">✔ container online: altios-edge-node-01 (10.169.1.66)</p>
      </div>

      {/* Progress pipeline status footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "20%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundColor: "currentColor" }}
              className={cn("h-full", accentStyle.text)}
            />
          </div>
          <span className="text-[8px]">deploying...</span>
        </div>
        <div className="flex items-center gap-1">
          <Settings className="w-3 h-3 animate-spin text-ash/40" />
          <span className="text-[8px] text-ash/40">v1.4.2</span>
        </div>
      </div>
    </div>
  );
};

// 4. Timeline / Transition Mockup
const TimelineMockup = ({ accentStyle }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-void/50 rounded-feature p-4 sm:p-6 relative overflow-hidden">
      {/* Horizontal timeline axis line */}
      <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-white/5 -translate-y-1/2 z-0" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={cn("absolute top-1/2 left-6 right-6 h-0.5 origin-left -translate-y-1/2 z-0", accentStyle.text)}
        style={{ backgroundColor: "currentColor" }}
      />

      <div className="flex items-center justify-between w-full relative z-10">
        {[
          { step: "Phase 1", label: "Legacy Audit", icon: Shield },
          { step: "Phase 2", label: "Cloud Porting", icon: Layers },
          { step: "Phase 3", label: "Production Shift", icon: Network },
        ].map((node, idx) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center animate-none"
            >
              <div className="font-mono text-[8px] text-ash/50 mb-2">{node.step}</div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center bg-black border transition-colors duration-300 shadow-xl",
                  idx < 2 ? accentStyle.border : "border-white/10"
                )}
              >
                <Icon className={cn("w-4.5 h-4.5", idx < 2 ? accentStyle.text : "text-ash/60")} />
              </motion.div>
              <div className="font-sans text-[9px] text-cloud/90 mt-2 font-light">{node.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const VisualPlaceholder = ({
  caption = "",
  accent = "iris",
  variant = "hero",
  className,
  testId,
}) => {
  const accentStyle = ACCENT_MAP[accent] || ACCENT_MAP.iris;
  const heightClass =
    variant === "hero"
      ? "aspect-[16/9] md:aspect-[16/8]"
      : "aspect-[4/3] md:aspect-[16/11]";

  // Normalize caption to lowercase for routing mockups
  const cap = caption.toLowerCase();

  let mockup = null;
  if (cap.includes("portal") || cap.includes("dashboard") || cap.includes("bi") || cap.includes("reporting") || cap.includes("crm") || cap.includes("erp") || cap.includes("site")) {
    mockup = <DashboardMockup accentStyle={accentStyle} />;
  } else if (cap.includes("journey") || cap.includes("architecture") || cap.includes("agent") || cap.includes("network") || cap.includes("flow") || cap.includes("warehouse")) {
    mockup = <FlowMockup accentStyle={accentStyle} />;
  } else if (cap.includes("pipeline") || cap.includes("infrastructure") || cap.includes("ci/cd") || cap.includes("container")) {
    mockup = <PipelineMockup accentStyle={accentStyle} />;
  } else if (cap.includes("timeline") || cap.includes("process") || cap.includes("migration") || cap.includes("transition")) {
    mockup = <TimelineMockup accentStyle={accentStyle} />;
  }

  return (
    <div
      data-testid={testId}
      className={cn(
        "relative w-full rounded-feature border border-white/10 bg-graphite/10 flex flex-col items-center justify-center overflow-hidden transition-all duration-300",
        heightClass,
        className
      )}
    >
      {/* Simulated Glow Light Source */}
      <div className={cn("absolute -inset-10 bg-gradient-to-br opacity-[0.06] blur-2xl pointer-events-none rounded-feature", accentStyle.bg)} />

      {mockup ? (
        <div className="w-full h-full p-2 sm:p-4 md:p-6 flex items-center justify-center relative">
          {mockup}
        </div>
      ) : (
        // Generic Fallback Widget
        <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
          <svg
            className={cn("w-10 h-10 md:w-12 md:h-12 opacity-80", accentStyle.text)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="font-mono-label text-[10px] md:text-xs text-ash/80 max-w-md">
            {caption || "Visual Demonstration"}
          </p>
        </div>
      )}
    </div>
  );
};

export default VisualPlaceholder;
