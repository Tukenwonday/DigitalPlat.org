import { StatusBoard } from "./StatusBoard";

interface HeroCardProps {
  onShowDownloads: () => void;
}

export function HeroCard({ onShowDownloads }: HeroCardProps) {
  const handlePrimaryClick = () => {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=mbZC35iQQ5yG3GJi";
  };

  const handleSecondaryClick = () => {
    onShowDownloads();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/10 rounded-2xl p-6 md:p-10 shadow-lg shadow-cyan-500/5">
        {/* Internal grid overlay */}
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                Now Way
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              WALEED
            </h2>
            
            <p className="text-slate-400 text-lg max-w-md">
              Your box for PowerPoint access. Secure, fast, and always connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handlePrimaryClick}
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-medium text-white overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">See Powerpoints</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              
              <button
                onClick={handleSecondaryClick}
                className="px-6 py-3 border border-cyan-400/30 rounded-lg font-medium text-cyan-300 hover:bg-cyan-500/10 transition-colors"
              >
                Goodluck on CLEP
              </button>
            </div>
          </div>

          {/* Right Column - Status Board */}
          <div>
            <StatusBoard />
          </div>
        </div>
      </div>
    </div>
  );
}