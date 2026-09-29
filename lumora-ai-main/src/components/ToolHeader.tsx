import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ToolHeaderProps {
  toolNumber?: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  badge?: string;
  category?: string;
  statusText?: string;
}

export const ToolHeader: React.FC<ToolHeaderProps> = ({
  toolNumber,
  title,
  subtitle,
  icon,
  badge,
  category,
  statusText = 'AI Ready'
}) => {
  return (
    <div className="mb-8 border-b border-[#c9c7b9] pb-6 text-left">
      <div className="flex items-center justify-between gap-3 border-b border-[#d8d6ca] pb-3">
        <Link
          to="/"
          className="group inline-flex min-h-9 items-center gap-2 bg-[#e3c94d] px-3 text-xs font-bold text-[#17251e] transition-colors hover:bg-[#d6ba38]"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>All tools</span>
        </Link>

        <div className="flex min-w-0 items-center gap-2 text-[10px] font-bold uppercase">
          {category && (
            <span className="hidden truncate text-[#69766c] sm:inline">
              {category}
            </span>
          )}
          <div className="inline-flex shrink-0 items-center gap-1.5 border border-[#c9c7b9] bg-[#fffdf7] px-2.5 py-1 text-[#315c43]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d94f36]" />
            <span>{statusText}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {toolNumber && (
              <span className="font-mono text-xs font-black text-[#d94f36]">
                {toolNumber} / 10
              </span>
            )}
            {badge && (
              <span className="border-l border-[#c9c7b9] pl-2 text-[10px] font-bold uppercase text-[#69766c]">
                {badge}
              </span>
            )}
          </div>

          <h1 className="flex items-center gap-3 text-3xl font-black leading-tight text-[#17251e] sm:text-4xl md:text-5xl">
            {icon && (
              <span className="inline-flex shrink-0 items-center justify-center bg-[#e3c94d] p-2.5 text-[#17251e]">
                {icon}
              </span>
            )}
            <span>{title}</span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#59655d] sm:text-base">
            {subtitle}
          </p>
        </div>
        <Sparkles className="hidden h-8 w-8 text-[#d94f36] sm:block" aria-hidden="true" />
      </div>
    </div>
  );
};
