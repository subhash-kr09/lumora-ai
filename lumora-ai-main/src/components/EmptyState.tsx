import React from 'react';
import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionHint?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  actionHint = 'Configure your parameters and click "Generate with AI" to see results.'
}) => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center justify-center text-center space-y-4 bg-white/70 border border-dashed border-[#D3E4DE] rounded-3xl min-h-[420px] transition-all">
      <div className="w-14 h-14 rounded-2xl bg-[#D3E4DE]/60 border border-[#D3E4DE] flex items-center justify-center text-[#0D9488] shadow-xs">
        {icon || <Sparkles className="w-6 h-6 text-[#0D9488]" />}
      </div>
      <div className="space-y-1.5 max-w-sm">
        <h3 className="text-base sm:text-lg font-bold text-[#0A1F1B] font-display">{title}</h3>
        <p className="text-xs sm:text-sm text-[#0A1F1B]/60 leading-relaxed font-body">{description}</p>
      </div>
      {actionHint && (
        <span className="text-xs font-semibold text-[#0D9488] bg-[#D3E4DE]/50 px-4 py-1.5 rounded-full border border-[#D3E4DE] font-body">
          {actionHint}
        </span>
      )}
    </div>
  );
};
