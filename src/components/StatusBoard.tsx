import { Shield, Clock, Users } from "lucide-react";

const statusItems = [
  { icon: Shield, title: "Secure", desc: "Encrypted connection" },
  { icon: Clock, title: "Active", desc: "Real-time sync" },
  { icon: Users, title: "Connected", desc: "3 users online" },
];

export function StatusBoard() {
  return (
    <div className="space-y-6">
      <h3 className="font-mono text-sm text-cyan-400 tracking-widest uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Status Board
      </h3>

      {/* Info Cards */}
      <div className="grid grid-cols-1 gap-3">
        {statusItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated Line Graph */}
      <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs text-slate-400">LINK STATUS</span>
          <span className="font-mono text-xs text-emerald-400">98%</span>
        </div>
        <svg
          viewBox="0 0 200 60"
          className="w-full h-16"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 Q25,35 50,30 T100,25 T150,20 T200,15"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <path
            d="M0,40 Q25,35 50,30 T100,25 T150,20 T200,15 L200,60 L0,60 Z"
            fill="url(#lineGradient)"
            opacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
}