import { ExternalLink, LayoutGrid } from 'lucide-react';

function PacificFarms() {
  const boardUrl = "https://app.startinfinity.com/b/5FUQ8PbybMB";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <LayoutGrid className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">Pacific Farms Board</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          Access the Pacific Farms project board to view tasks, updates, and progress.
        </p>

        <a
          href={boardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
        >
          <span>Open Board</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default PacificFarms;
