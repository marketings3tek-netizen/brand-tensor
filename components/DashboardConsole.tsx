"use client";

import React, { useState } from "react";

interface DashboardConsoleProps {
  sessionUser: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  logoutAction: () => void;
}

export default function DashboardConsole({ sessionUser, logoutAction }: DashboardConsoleProps) {
  // Active Sidebar Navigation State
  const [activeTab, setActiveTab] = useState<"overview" | "experience" | "reputation" | "sync">("overview");

  // Mock Real-Time Data Streams that can easily hook to an API later
  const systemMetrics = {
    overview: {
      syncIndex: "94.2%",
      animStates: "12",
      vectors: "Secure",
      logMessage: "Overview Engine active. Rendering analytical node canvas..."
    },
    experience: {
      syncIndex: "98.7%",
      animStates: "34 Active Frames",
      vectors: "Optimized",
      logMessage: "Experience Architecture Layer initialized. Framer pipeline running smoothly."
    },
    reputation: {
      syncIndex: "100.0%",
      animStates: "08 Protocols",
      vectors: "Ironclad",
      logMessage: "Reputation Engineering active. Verification loops locking brand assets."
    },
    sync: {
      syncIndex: "88.4%",
      animStates: "04 Pending",
      vectors: "Syncing...",
      logMessage: "Synchronization Engine querying structural webhooks..."
    }
  };

  const currentData = systemMetrics[activeTab];

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-[#E8E6E0] flex font-sans antialiased selection:bg-[#C9922A] selection:text-[#0A0A0A]">
      
      {/* SIDEBAR: System Navigation Architecture */}
      <aside className="w-64 bg-[#0D0D0D] border-r border-[#161616] hidden md:flex flex-col justify-between p-6 shrink-0">
        <div className="space-y-8">
          <div className="space-y-1">
            <div className="text-sm font-serif font-light tracking-wide text-[#E8E6E0]">Brand Tensor</div>
            <div className="text-[9px] text-[#5A5855] uppercase tracking-[0.2em]">Core Console // v1.0</div>
          </div>

          {/* Nav Links mapping directly to React State */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left flex items-center px-3 py-2.5 text-xs font-light tracking-wider border-l-2 transition-all ${
                activeTab === "overview"
                  ? "text-[#C9922A] bg-[#111111] border-[#C9922A]"
                  : "text-[#8A8680] hover:text-[#E8E6E0] hover:bg-[#111111] border-transparent"
              }`}
            >
              OVERVIEW ENGINE
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`w-full text-left flex items-center px-3 py-2.5 text-xs font-light tracking-wider border-l-2 transition-all ${
                activeTab === "experience"
                  ? "text-[#C9922A] bg-[#111111] border-[#C9922A]"
                  : "text-[#8A8680] hover:text-[#E8E6E0] hover:bg-[#111111] border-transparent"
              }`}
            >
              EXPERIENCE ARCH
            </button>
            <button
              onClick={() => setActiveTab("reputation")}
              className={`w-full text-left flex items-center px-3 py-2.5 text-xs font-light tracking-wider border-l-2 transition-all ${
                activeTab === "reputation"
                  ? "text-[#C9922A] bg-[#111111] border-[#C9922A]"
                  : "text-[#8A8680] hover:text-[#E8E6E0] hover:bg-[#111111] border-transparent"
              }`}
            >
              REPUTATION ENG
            </button>
            <button
              onClick={() => setActiveTab("sync")}
              className={`w-full text-left flex items-center px-3 py-2.5 text-xs font-light tracking-wider border-l-2 transition-all ${
                activeTab === "sync"
                  ? "text-[#C9922A] bg-[#111111] border-[#C9922A]"
                  : "text-[#8A8680] hover:text-[#E8E6E0] hover:bg-[#111111] border-transparent"
              }`}
            >
              SYNCHRONIZATION
            </button>
          </nav>
        </div>

        {/* Corporate Logout Controller */}
        <div className="pt-4 pb-16 border-t border-[#161616]">
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full text-left text-[10px] uppercase tracking-widest text-[#5A5855] hover:text-[#C9922A] transition-colors"
            >
              Disconnect Core
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN WORKSPACE CANVAS */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A]">
        
        {/* TOP STATUS BAR: Operational Metrics */}
        <header className="h-16 border-b border-[#161616] bg-[#0D0D0D]/50 backdrop-blur-md flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#666666] font-mono">
              Instance Status // Operational
            </span>
          </div>
          
          <div className="flex items-center space-x-3 text-right">
            <div className="hidden sm:block">
              <p className="text-xs font-medium text-[#E8E6E0]">{sessionUser.name}</p>
              <p className="text-[9px] text-[#5A5855] font-mono">{sessionUser.email}</p>
            </div>
            {sessionUser.image && (
              <img 
                src={sessionUser.image} 
                alt="Profile" 
                className="w-7 h-7 rounded-none border border-[#262626] grayscale contrast-125"
              />
            )}
          </div>
        </header>

        {/* INNER CONTAINER: Dynamic Data Content Grid */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Section Hero Headline switches context based on tab state */}
          <div className="space-y-1 uppercase">
            <h1 className="text-2xl font-serif font-light tracking-wide text-[#E8E6E0]">
              {activeTab} Engine
            </h1>
            <p className="text-xs text-[#8A8680] font-light normal-case">
              Centralized interface for computing real-time workspace properties.
            </p>
          </div>

          <hr className="border-[#161616]" />

          {/* DATA METRIC CARDS WIRE SYSTEM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-[#0D0D0D] border border-[#161616] p-6 space-y-4">
              <div className="text-[9px] uppercase tracking-widest text-[#666666] font-mono">Synchronization Index</div>
              <div className="text-3xl font-light text-[#C9922A] font-serif transition-all duration-300">
                {currentData.syncIndex}
              </div>
              <div className="text-[10px] text-[#444444] uppercase tracking-wider">Active telemetry index</div>
            </div>

            <div className="bg-[#0D0D0D] border border-[#161616] p-6 space-y-4">
              <div className="text-[9px] uppercase tracking-widest text-[#666666] font-mono">Active Anim States</div>
              <div className="text-3xl font-light text-[#E8E6E0] font-serif transition-all duration-300">
                {currentData.animStates}
              </div>
              <div className="text-[10px] text-[#444444] uppercase tracking-wider">Framer / Wix state engines</div>
            </div>

            <div className="bg-[#0D0D0D] border border-[#161616] p-6 space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="text-[9px] uppercase tracking-widest text-[#666666] font-mono">Reputation Vectors</div>
              <div className="text-3xl font-light text-[#E8E6E0] font-serif transition-all duration-300">
                {currentData.vectors}
              </div>
              <div className="text-[10px] text-[#444444] uppercase tracking-wider">Gateway status verification</div>
            </div>

          </div>

          {/* DYNAMIC SYSTEM CORE LOG OUTPUT */}
          <div className="bg-[#0D0D0D] border border-[#161616] rounded-none">
            <div className="border-b border-[#161616] px-5 py-4 flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest font-mono text-[#8A8680]">Live Terminal Core Log</div>
              <div className="text-[9px] bg-[#161616] px-2 py-0.5 text-[#5A5855] font-mono uppercase tracking-wider">System Stream</div>
            </div>
            <div className="p-6 font-mono text-xs space-y-2.5 text-[#666666] leading-relaxed bg-[#090909]">
              <p><span className="text-[#5A5855]">[11:04:12]</span> <span className="text-[#C9922A]">INIT</span> Authentication subsystem finalized smoothly.</p>
              <p><span className="text-[#5A5855]">[11:04:13]</span> <span className="text-emerald-600">AUTH</span> Session generated successfully for profile identity string.</p>
              <p className="transition-all duration-300">
                <span className="text-[#5A5855]">[11:05:01]</span> <span className="text-blue-500">DATA</span> {currentData.logMessage}
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}