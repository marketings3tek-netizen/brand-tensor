export default function Page() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      
      {/* LEFT COLUMN: HERO IDENTITY */}
      <div className="flex flex-col justify-center items-center p-8 md:p-12 border-b border-[#111111] md:border-b-0 md:border-r">
        <div className="max-w-md w-full space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight tracking-tight text-white">
            Why just exist when you can shape perception?
          </h1>
          <h2 className="font-sans text-xs tracking-[0.15em] uppercase text-center md:text-left opacity-70">
            Experience Architecture & Reputation Engineering
          </h2>
        </div>
      </div>

      {/* RIGHT COLUMN: AUTHENTICATION INTERACTION INTERFACE */}
      <div className="flex flex-col justify-center items-center p-8 md:p-12">
        <div className="max-w-sm w-full space-y-6">
          
          {/* Third-Party Secure Authentication Handshake Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-[#111111] border border-[#222222] hover:bg-[#1a1a1a] text-white rounded-md py-3 px-4 text-sm font-medium transition-all">
            <span className="font-bold">G</span> Continue with Google
          </button>

          {/* Clean Editorial Content Divider */}
          <div className="relative flex py-2 items-center w-full">
            <div className="flex-grow border-t border-[#222222]"></div>
            <span className="flex-shrink mx-4 text-xs tracking-widest text-neutral-500 uppercase font-mono">or</span>
            <div className="flex-grow border-t border-[#222222]"></div>
          </div>

          {/* Core Traditional Form Input Containers */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Email Address</label>
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

    </div>
  );
}