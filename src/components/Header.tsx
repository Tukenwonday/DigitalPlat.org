import { useState, useEffect } from "react";
import { Shield, Clock } from "lucide-react";

const statusLabels = ["SYNC: READY", "STATUS: ONLINE", "SYSTEM: ACTIVE"];

export function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    
    if (!isReducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % statusLabels.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isReducedMotion]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-cyan-400" />
          </div>
          <h1 className="font-mono text-lg md:text-xl tracking-wider text-white">
            WALEED MODULE
          </h1>
        </div>

        {/* Status chips */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "hidden" : ""}`} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-emerald-300">
              {statusLabels[currentIndex]}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-300">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}