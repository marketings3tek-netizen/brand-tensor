export default function SignInPage() {
  return (
    /* Outermost Container: Clean, spacious canvas with intentional padding layout */
    <div className="min-h-screen w-full bg-black text-white antialiased flex flex-col justify-between p-8 sm:p-12 md:grid md:grid-cols-12 md:gap-8 md:p-16 box-border overflow-y-auto">
      
      {/* ================= LEFT/TOP: MINIMALIST EDITORIAL CANVAS (7 Cols on Desktop) ================= */}
      <div className="flex flex-col justify-start md:justify-center md:col-span-7 space-y-12 max-w-xl pt-6 md:pt-0">
        
        {/* Core Identity Statement */}
        <div className="space-y-4">
          <h1 className="font-serif text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-neutral-100">
            Why just exist when you can shape perception?
          </h1>
          <h2 className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium">
            Experience Architecture & Reputation Engineering
          </h2>
        </div>

        {/* Corporate Governance Matrix Section: Subtle, light text formatting with high breathing room */}
        <div className="space-y-4 border-l border-neutral-900 pl-6 hidden sm:block">
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-amber-500/90 font-semibold block">
            Corporate Governance Matrix
          </span>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-neutral-400 font-normal">
            Managing strategic positioning and market authority through data-driven clarity.
          </p>
          <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-500 font-light max-w-[90%]">
            The XARE methodology treats identity not as a static brand asset, but as an active infrastructure layer. By structuring local discovery frameworks and corporate signals systematically, we provide leadership teams with absolute oversight over market reputation.
          </p>
          
          {/* Metadata Flags */}
          <div className="flex gap-8 pt-4 text-[9px] uppercase tracking-[0.15em] text-neutral-500 font-medium font-mono">
            <div>
              <span className="text-neutral-600 block text-[8px] mb-0.5">Framework</span>
              <span className="text-neutral-300">Experience Architecture</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-[8px] mb-0.5">Intellectual Property</span>
              <span className="text-amber-500/80">Provisional Patent Pending</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= RIGHT/BOTTOM: FLOATING INTERACTION GATEWAY (5 Cols on Desktop) ================= */}
      <div className="w-full max-w-[360px] mx-auto md:mx-0 md:max-w-none md:col-span-5 flex flex-col justify-end md:justify-center mt-12 md:mt-0 pb-6 md:pb-0">
        
        {/* The Clean Claude-Style Input Wrapper */}
        <div className="w-full space-y-6 bg-neutral-950/40 border border-neutral-900/60 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          
          <div className="space-y-1">
            <h3 className="font-sans text-lg font-medium text-neutral-200">Sign In</h3>
            <p className="font-sans text-xs text-neutral-500">Access your enterprise reputation console.</p>
          </div>

          {/* Third-Party Secure Authentication Handshake */}
          <button className="w-full flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-200 rounded-lg py-3 px-4 text-sm font-medium transition-all duration-200 shadow-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22l.81-.63z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Clean Neutral Divider Line */}
          <div className="relative flex py-1 items-center w-full">
            <div className="flex-grow border-t border-neutral-900"></div>
            <span className="flex-shrink mx-4 text-[9px] tracking-[0.2em] text-neutral-600 uppercase font-mono">or</span>
            <div className="flex-grow border-t border-neutral-900"></div>
          </div>

          {/* Input Control Interface */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium font-sans">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-neutral-900/50 border border-neutral-800/80 rounded-lg py-2.5 px-4 text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all duration-200"
              />
            </div>
            
            <button className="w-full bg-neutral-100 text-black hover:bg-white font-medium tracking-wide text-xs uppercase py-2.5 rounded-lg transition-all duration-200 shadow-sm">
              Continue with Email
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}