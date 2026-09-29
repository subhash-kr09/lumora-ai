import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Sparkles, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { Github, Twitter, Linkedin } from './SocialIcons';
import footerCharacterImg from '../assets/images/hero_woman_coding_alt.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tools = [
    { name: '01. AI Resume Builder', route: '/resume-builder' },
    { name: '02. AI Notes Generator', route: '/notes-generator' },
    { name: '03. AI Presentation Generator', route: '/presentation-generator' },
    { name: '04. AI Mind Map Generator', route: '/mind-map-generator' },
    { name: '05. Google Sheets Data Tool', route: '/google-sheets' },
    { name: '06. AI Quiz Generator', route: '/quiz-generator' },
    { name: '07. AI Doubt Solver', route: '/doubt-solver' },
    { name: '08. AI Flashcard Generator', route: '/flashcard-generator' },
    { name: '09. AI Study Planner', route: '/study-planner' },
    { name: '10. OCR Notes Summarizer', route: '/ocr-summarizer' }
  ];

  return (
    <footer className="mt-20 border-t border-[#D3E4DE] bg-[#F8FBFA] text-[#0A1F1B] overflow-hidden">
      {/* Editorial Heroic Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Oversized Typography & Strong CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0D9488] bg-[#D3E4DE]/60 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative AI Learning Workspace</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1F1B] leading-[1.02] tracking-tight font-display text-balance">
              Have an idea?<br />
              <span className="text-[#0D9488]">Let AI help you</span><br />
              build it.
            </h2>

            <p className="text-base sm:text-lg text-[#0A1F1B]/70 max-w-xl font-body leading-relaxed">
              10 practical AI-powered instruments built for curious students, ambitious researchers, and modern creators. Free, fast, and crafted with playful precision.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/#tools"
                className="group px-7 py-3.5 rounded-full bg-[#0A1F1B] hover:bg-[#0D9488] text-white text-sm sm:text-base font-bold transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <span>Explore All 10 Tools</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                to="/resume-builder"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#D3E4DE] text-[#0A1F1B] border border-[#D3E4DE] text-sm sm:text-base font-bold transition-colors"
              >
                Launch Resume Builder
              </Link>
            </div>
          </div>

          {/* Right Column: Playful Visual 3D Character Asset in Organic Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#D3E4DE] bg-[#EEF6F3] shadow-xl aspect-4/3 group">
              <img
                src={footerCharacterImg}
                alt="A team collaborating around a laptop"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1B]/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Organic badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-[#D3E4DE] p-3 rounded-2xl flex items-center justify-between text-left">
                <div>
                  <div className="text-xs font-bold text-[#0A1F1B]">Always Ready to Assist</div>
                  <div className="text-[11px] text-[#0A1F1B]/60">Zero paywalls · Unlimited student access</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Navigation & Tool Directory */}
        <div className="mt-20 pt-12 border-t border-[#D3E4DE] grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-xs sm:text-sm">
          {/* Tool Directory Part 1 */}
          <div className="space-y-3">
            <div className="font-bold text-[#0A1F1B] tracking-wide uppercase text-[11px] font-display">
              Creation & Career
            </div>
            <ul className="space-y-2 text-[#0A1F1B]/75">
              {tools.slice(0, 5).map((tool) => (
                <li key={tool.route}>
                  <Link to={tool.route} className="hover:text-[#0D9488] transition-colors block">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tool Directory Part 2 */}
          <div className="space-y-3">
            <div className="font-bold text-[#0A1F1B] tracking-wide uppercase text-[11px] font-display">
              Study & Mastery
            </div>
            <ul className="space-y-2 text-[#0A1F1B]/75">
              {tools.slice(5, 10).map((tool) => (
                <li key={tool.route}>
                  <Link to={tool.route} className="hover:text-[#0D9488] transition-colors block">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Pages */}
          <div className="space-y-3">
            <div className="font-bold text-[#0A1F1B] tracking-wide uppercase text-[11px] font-display">
              Platform
            </div>
            <ul className="space-y-2 text-[#0A1F1B]/75">
              <li>
                <Link to="/how-it-works" className="hover:text-[#0D9488] transition-colors block">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0D9488] transition-colors block">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0D9488] transition-colors block">
                  Contact & Feedback
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#0D9488] transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#0D9488] transition-colors block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <div className="font-bold text-[#0A1F1B] tracking-wide uppercase text-[11px] font-display">
              Studio Connect
            </div>
            <p className="text-xs text-[#0A1F1B]/70 leading-relaxed">
              Open-source inspired, built for students worldwide. Join the learning revolution.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://github.com/subhash-kr09"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#D3E4DE] flex items-center justify-center text-[#0A1F1B] hover:bg-[#0A1F1B] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/subhash-kumar-sahani/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#D3E4DE] flex items-center justify-center text-[#0A1F1B] hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:98697286a@gmail.com"
                className="w-8 h-8 rounded-full bg-white border border-[#D3E4DE] flex items-center justify-center text-[#0A1F1B] hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-[#D3E4DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0A1F1B]/60 font-body">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0A1F1B] font-display">Lumora AI</span>
            <span>·</span>
            <span>© 2026 Crafted for creative learners.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#0A1F1B] transition-colors py-1 px-3 rounded-full hover:bg-[#D3E4DE]/50 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
