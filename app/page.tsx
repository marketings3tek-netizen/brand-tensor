export default function Page() {
  return (
    /* Outermost Page Wrapper: Sets a dark theme, locks height to the phone screen viewport, and uses flex-col on mobile / grid on desktop */
    <div className="min-h-screen w-full flex flex-col justify-between p-6 md:grid md:grid-cols-2 md:gap-8 md:p-12 bg-black text-white box-border">
      
      {/* 1. Left/Top Column: Core Branding & Identity Copy */}
      <div className="flex flex-col justify-center items-center pt-4 md:pt-0 my-auto">
        {/* Main Headline: Fluidly resizes so it doesn't break into awkward rows on mobile */}
        <h1 className="text-center font-serif text-[22px] sm:text-[26px] leading-[1.3] tracking-tight md:text-5xl max-w-[90%] mx-auto text-white">
          Why just exist when you can shape perception?
        </h1>
        
        {/* Subtitle / Framework Tagline */}
        <h2 className="text-center font-sans text-[9px] sm:text-[10px] tracking-[0.16em] uppercase mt-3 opacity-60 max-w-[85%] mx-auto">
          Experience Architecture & Reputation Engineering
        </h2>
      </div>

      {/* 2. Right/Bottom Column: The Interactive Authentication Portal Card */}
      <div className="w-full max-w-sm mx-auto flex flex-col justify-end pb-4 md:justify-center md:pb-0 mt-auto md:mt-auto">
        
        {/* Your Google Login Interaction Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#111111] border border-[#222222] hover:bg-[#1a1a1a] text-white rounded-md py-3 px-4 text-sm font-medium transition-all">
          <span className="font-bold">G</span> Continue with Google
        </button>

        {/* Minimalist Divider Line */}
        <div className="relative flex py-5 items-center w-full">
          <div className="flex-grow border-t border-[#222222]"></div>
          <span className="flex-shrink mx-4 text-[10px] tracking-widest text-neutral-500 uppercase">or</span>
          <div className="flex-grow border-t border-[#222222]"></div>
        </div>

        {/* Traditional Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">Email Address</label>
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