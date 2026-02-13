import { ArrowLeft, FolderOpen, Download } from "lucide-react";
import { ChapterCard } from "./ChapterCard";

interface DownloadsSectionProps {
  onBack: () => void;
}

export function DownloadsSection({ onBack }: DownloadsSectionProps) {
  const chapters = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
        </button>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Chapter Downloads
          </h2>
          <p className="text-slate-400 mt-1">
            Access all 20 chapters of study materials
          </p>
        </div>
      </div>

      {/* Chapter Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter} chapterNumber={chapter} />
        ))}
      </div>
    </div>
  );
}