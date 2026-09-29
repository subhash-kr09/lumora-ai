import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { TOOLS_LIST } from '../data/toolsMeta';

const NAV_LINKS = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isDoubtSolver = location.pathname === '/doubt-solver';
  const onToolPage = TOOLS_LIST.some((t) => t.route === location.pathname);

  // Close menus on navigation
  useEffect(() => {
    setToolsOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setToolsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setToolsOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const linkClass = (path: string) =>
    `px-3.5 py-1.5 rounded-full transition-colors ${
      location.pathname === path
        ? 'bg-[#0D9488]/12 text-[#0F766E] font-bold'
        : 'text-[#0A1F1B]/75 hover:text-[#0A1F1B] hover:bg-[#D3E4DE]/60'
    }`;

  return (
    <div
      className={`${
        isDoubtSolver
          ? 'z-30 px-3 sm:px-6 pt-2 pb-1 w-full shrink-0'
          : 'sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none'
      }`}
    >
      <header
        className={`pointer-events-auto bg-[#F8FBFA]/90 backdrop-blur-md border border-[#D3E4DE] flex items-center justify-between transition-all ${
          isDoubtSolver
            ? 'rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 max-w-7xl mx-auto'
            : 'rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgba(13,148,136,0.10)]'
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#2DD4BF] flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          <span className="text-base sm:text-lg font-black tracking-tight text-[#0A1F1B] font-display">
            Lumora <span className="text-[#0D9488]">AI</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium font-body">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setToolsOpen((o) => !o)}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 ${linkClass('__tools__')} ${
                onToolPage ? '!bg-[#0D9488]/12 !text-[#0F766E] !font-bold' : ''
              }`}
            >
              Tools
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
            </button>

            {toolsOpen && (
              <div className="absolute left-0 top-full mt-3 w-[560px] bg-[#F8FBFA] border border-[#D3E4DE] rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1">
                {TOOLS_LIST.map((tool) => (
                  <Link
                    key={tool.id}
                    to={tool.route}
                    className={`group flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-white ${
                      location.pathname === tool.route ? 'bg-white ring-1 ring-[#0D9488]/30' : ''
                    }`}
                  >
                    <span className="text-[11px] font-black text-[#0D9488] font-mono mt-0.5">{tool.number}</span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#0A1F1B] leading-tight">
                        {tool.name}
                        {tool.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#0D9488]/12 text-[#0F766E]">
                            {tool.badge}
                          </span>
                        )}
                      </span>
                      <span className="block text-[11px] text-[#0A1F1B]/60 mt-0.5">{tool.timeEstimate}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#tools"
            className="group px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[#0A1F1B] hover:bg-[#0D9488] rounded-xl transition-all duration-300 flex items-center gap-1.5 shadow-sm"
          >
            <span>Explore Tools</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#0A1F1B] hover:bg-[#D3E4DE]/50 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu  */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 bg-[#F8FBFA] border border-[#D3E4DE] rounded-2xl p-5 shadow-xl space-y-4">
          <nav className="flex flex-col gap-1 text-sm font-semibold text-[#0A1F1B]">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-2 rounded-xl hover:bg-[#D3E4DE]/60 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#D3E4DE] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1F1B]/60 px-1 font-body">
              All {TOOLS_LIST.length} AI Tools
            </span>
            <div className="grid grid-cols-1 gap-1 max-h-64 overflow-y-auto pr-1">
              {TOOLS_LIST.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.route}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-[#0A1F1B]/80 hover:text-[#0A1F1B] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>
                    <span className="font-mono text-[#0D9488] font-bold mr-2">{tool.number}</span>
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-[#0D9488] font-bold">Open →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
