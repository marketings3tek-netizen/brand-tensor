export default function SignInPage() {
  return (
    /* Main Grid Wrapper: Single column on mobile to stack perfectly, side-by-side grid on desktop */
    <div className="min-h-screen w-full flex flex-col justify-between p-6 md:grid md:grid-cols-2 md:gap-12 md:p-16 bg-black text-white box-border overflow-y-auto md:overflow-hidden">
      
      {/* ================= LEFT SIDE: EDITORIAL & REPUTATION PLATFORM ================= */}
      <div className="flex flex-col justify-center space-y-8 max-w-xl mx-auto md:mx-0">
        
        {/* Core Headline Group */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h1 className="font-serif text-[26px] sm:text-[32px] leading-[1.25] tracking-tight md:text-5xl lg:text-6xl text-white">
            Why just exist when you can shape perception?
          </h1>
          <h2 className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] uppercase mt-3 opacity-60">
            Experience Architecture & Reputation Engineering
          </h2>
        </div>

        {/* Corporate Governance Matrix Layer */}
        <div className="border-t border-[#1a1a1a] pt-6 md:border-none md:pt-0 text-center md:text-left">
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-amber-500 block mb-2">
            Corporate Governance Matrix
          </span>
          <h3 className="font-sans text-[16px] sm:text-[18px] font-medium leading-snug tracking-tight md:text-2xl text-neutral-200">
            Managing strategic positioning and market authority through data-driven clarity.
          </h3>
          <p className="font-sans text-[11px] sm:text-[12px] leading-relaxed text-neutral-400 mt-2 max-w-[95%] mx-auto md:mx-0">
            The XARE methodology treats identity not as a static brand asset, but as an active infrastructure layer. 
            By structuring local discovery frameworks and corporate signals systematically, we provide leadership 
            teams with absolute oversight over market reputation.
          </p>
          
          {/* Architecture & IP Metadata Badges */}
          <div className="flex justify-center md:justify-start gap-8 mt-5 text-[10px] uppercase tracking-wider border-b border-[#1a1a1a] pb-6 md:border-none md:pb-0">
            <div>
              <span className="text-neutral-500 block text-[8px] font-mono mb-0.5">Framework</span>
              <span className="text-white font-medium">Experience Architecture</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[8px] font-mono mb-0.5">Intellectual Property</span>
              <span className="text-amber-500 font-medium">Provisional Patent Pending</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDE: ENTERPRISE GATEWAY PORTAL CARD ================= */}
      <div className="w-full max-w-sm mx-auto flex flex-col justify-end pt-8 md:pt-0 md:justify-center mt-auto md:mt-auto pb-4 md:pb-0">
        
        {/* Third-Party Secure Authentication Handshake */}
        <button className="w-full flex items-center justify-center gap-3 bg-[#111111] border border-[#222222] hover:bg-[#1a1a1a] text-white rounded-md py-3 px-4 text-sm font-medium transition-all">
          <span className="font-bold font-mono text-xs">G</span> Continue with Google
        </button>

        {/* Minimalist Structural Divider */}
        <div className="relative flex py-4 items-center w-full">
          <div className="flex-grow border-t border-[#222222]"></div>
          <span className="flex-shrink mx-4 text-[9px] tracking-[0.2em] text-neutral-500 uppercase font-mono">or</span>
          <div className="flex-grow border-t border-[#222222]"></div>
        </div>

        {/* Input Control Interface */}
        <div className="space-y-4">
          <div>
            <label className="block text-[9px] uppercase tracking-wider text-neutral-400 mb-1 font-mono">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full bg-[#111111] border border-[#222222] rounded-md py-3 px-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-all"
            />
          </div>
          
          <button className="w-full bg-white text-black hover:bg-neutral-200 font-bold tracking-wider text-xs uppercase py-3 rounded-md transition-all">
            Continue with Email
          </button>
        </div>

      </div>

    </div>
  );
}