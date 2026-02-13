import { FolderOpen, Download } from "lucide-react";

interface ChapterCardProps {
  chapterNumber: number;
}

export function ChapterCard({ chapterNumber }: ChapterCardProps) {
  const handleDownload = () => {
    alert(`Downloading Chapter ${chapterNumber}...`);
  };

  return (
    <div className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300 hover:border-violet-500/30">
      {/* Folder Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all">
          <FolderOpen className="w-8 h-8 text-violet-400" />
        </div>
      </div>

      {/* Chapter Title */}
      <h3 className="text-center font-bold text-xl text-white mb-6 tracking-wide">
        CHAPTER {chapterNumber}
      </h3>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="w-full py-3 px-6 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-violet-500/25"
      >
        <Download className="w-4 h-4" />
        DOWNLOAD
      </button>
    </div>
  );
}