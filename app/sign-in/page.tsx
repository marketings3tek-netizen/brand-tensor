import React from 'react';
import Image from 'next/image';
import { signIn } from "@/auth";

export default function CorporateSignInPage() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-[#E8E6E0] font-sans antialiased selection:bg-[#C9922A] selection:text-[#0A0A0A] flex flex-col">
      
      {/* 1. CORPORATE HEADER */}
      <header className="w-full max-w-7xl mx-auto h-20 px-6 md:px-12 flex items-center justify-between bg-transparent flex-shrink-0 border-b border-[#161615]">
        <div className="flex items-center">
          <Image 
            src="/s3tek-logo.png" 
            alt="S3tek Elevate" 
            width={110} 
            height={35} 
            className="object-contain h-8 w-auto"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] text-[#8A8680] font-medium">
          <span className="cursor-pointer hover:text-[#E8E6E0] transition-colors">Home</span>
          <span className="cursor-pointer hover:text-[#E8E6E0] transition-colors">Contact</span>
          <span className="cursor-pointer hover:text-[#E8E6E0] transition-colors">XARE</span>
        </div>
        
        <div className="text-[9px] uppercase tracking-[0.15em] text-[#5A5855] font-medium border-l border-[#222220] pl-6 hidden sm:block">
          Enterprise Security Gateway
        </div>
      </header>

      {/* 2. CORE MASTER SPLIT */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
        
        {/* LEFT COLUMN: BRAND NARRATIVE & BESPOKE INPUT AREA */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#E8E6E0] font-light leading-[1.25]">
                Why just exist when you can shape perception?
              </h1>
              <p className="text-[10px] tracking-[0.15em] text-[#8A8680] uppercase font-medium">
                Experience Architecture & Reputation Engineering
              </p>
            </div>

            {/* Completely White-Labeled, Zero-Cost Custom Native Inputs Form */}
            <div className="w-full bg-[#0A0A0A] space-y-4">
              
              {/* Native Auth OAuth - Continue with Google */}
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/" });
                }}
              >
                <button 
                  type="submit"
                  className="bg-[#111110] border border-[#222220] rounded-xl text-[#E8E6E0] hover:bg-[#161615] hover:border-[#C9922A] transition-all duration-200 font-sans text-xs py-3.5 w-full flex items-center justify-center gap-2 font-medium shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  Continue with Google
                </button>
              </form>

              <div className="flex items-center gap-4 my-4">
                <div className="h-[1px] bg-[#222220] flex-grow"></div>
                <span className="text-[#5A5855] font-sans text-[9px] uppercase tracking-wider font-medium">or</span>
                <div className="h-[1px] bg-[#222220] flex-grow"></div>
              </div>

              {/* Native Email / Credentials Gateway */}
              <form className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[#8A8680] font-sans text-[10px] font-medium tracking-wide block">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="bg-[#111110] border border-[#222220] rounded-xl text-[#E8E6E0] focus:border-[#C9922A] focus:outline-none focus:ring-0 font-sans text-xs py-3 px-3.5 transition-all duration-200 w-full"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#E8E6E0] hover:bg-[#C9922A] text-[#0A0A0A] rounded-xl font-sans text-xs uppercase tracking-wider transition-all duration-300 py-3.5 font-semibold border-none w-full shadow-none mt-2"
                >
                  Continue with Email
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: INSTITUTIONAL EXECUTIVE BRIEF */}
        <div className="hidden lg:col-span-6 lg:flex flex-col justify-center items-end h-full pl-6 border-l border-[#161615]">
          <div className="w-full max-w-lg space-y-8">
            <div className="space-y-4">
              <div className="text-[9px] font-medium tracking-[0.2em] text-[#C9922A] uppercase">
                Corporate Governance Matrix
              </div>
              <h2 className="text-xl md:text-2xl font-serif text-[#E8E6E0] tracking-wide font-light leading-snug">
                Managing strategic positioning and market authority through data-driven clarity.
              </h2>
              <p className="text-xs text-[#8A8680] font-sans leading-relaxed font-light">
                The XARE methodology treats identity not as a static brand asset, but as an active infrastructure layer. By structuring local discovery frameworks and corporate signals systematically, we provide leadership teams with absolute oversight over market reputation.
              </p>
            </div>

            <div className="border-t border-[#222220] pt-6 grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="block text-[9px] font-medium tracking-wider text-[#5A5855] uppercase">Framework</span>
                <span className="block text-sm font-serif font-light text-[#E8E6E0]">Experience Architecture</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-medium tracking-wider text-[#5A5855] uppercase">Intellectual Property</span>
                <span className="block text-sm font-serif font-light text-[#C9922A]">Provisional Patent Pending</span>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}