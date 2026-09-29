import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronDown,
  FileText,
  GraduationCap,
  HelpCircle,
  Layers,
  Network,
  Presentation,
  Sparkles,
  Table as TableIcon,
  Zap,
} from "lucide-react";
import heroVisualImg from "../assets/images/hero_woman_coding.jpg";

const tools = [
  {
    number: "01",
    name: "AI Resume Builder",
    route: "/resume-builder",
    description: "Create professional ATS-friendly resumes with AI.",
    accent: "#0D9488",
    tags: ["ATS-Compliant", "Vector PDF", "Instant Export"],
    Icon: FileText,
  },
  {
    number: "02",
    name: "AI Notes Generator",
    route: "/notes-generator",
    description: "Turn raw study material into structured notes.",
    accent: "#D97706",
    tags: ["Markdown", "Study Guide", "Exam Points"],
    Icon: BookOpen,
  },
  {
    number: "03",
    name: "AI Presentation Generator",
    route: "/presentation-generator",
    description: "Generate complete slide-by-slide presentation content.",
    accent: "#2563EB",
    tags: ["Slide Decks", "Interactive Player", "Speaker Script"],
    Icon: Presentation,
  },
  {
    number: "04",
    name: "AI Mind Map Generator",
    route: "/mind-map-generator",
    description: "Convert syllabi and topics into visual mind maps.",
    accent: "#059669",
    tags: ["Interactive SVG", "Node Explorer", "Visual Outlines"],
    Icon: Network,
  },
  {
    number: "05",
    name: "Google Sheets Data Tool",
    route: "/google-sheets",
    description: "Connect Google Sheets and visualize live data.",
    accent: "#15803D",
    tags: ["Live Sync", "Zero-Server DB", "Data Insights"],
    Icon: TableIcon,
  },
  {
    number: "06",
    name: "AI Quiz Generator",
    route: "/quiz-generator",
    description: "Generate interactive quizzes from topics and notes.",
    accent: "#DB2777",
    tags: ["Instant Grading", "Explanations", "Active Recall"],
    Icon: CheckCircle2,
  },
  {
    number: "07",
    name: "AI Doubt Solver",
    route: "/doubt-solver",
    description: "Ask questions and learn through AI-powered explanations.",
    accent: "#0D9488",
    tags: ["Step-by-Step", "Real Analogies", "Tutor Chat"],
    Icon: HelpCircle,
  },
  {
    number: "08",
    name: "AI Flashcard Generator",
    route: "/flashcard-generator",
    description: "Turn study material into interactive revision cards.",
    accent: "#2563EB",
    tags: ["3D Flip", "Spaced Recall", "Deck Shuffle"],
    Icon: Layers,
  },
  {
    number: "09",
    name: "AI Study Planner",
    route: "/study-planner",
    description: "Generate personalized study timetables with AI.",
    accent: "#D97706",
    tags: ["Day Matrix", "Exam Timetable", "Priority Focus"],
    Icon: CalendarDays,
  },
  {
    number: "10",
    name: "OCR Notes Summarizer",
    route: "/ocr-summarizer",
    description: "Scan notes, extract text and summarize them with AI.",
    accent: "#DB2777",
    tags: ["Multimodal OCR", "Handwriting Scan", "Structured Summary"],
    Icon: Camera,
  },
];

const faqs = [
  {
    q: "Are all 10 tools functional and free to use?",
    a: "Yes, absolutely. All 10 tools are production-ready student workspaces with live AI processing, zero paywalls, zero token subscriptions, and immediate exports.",
  },
  {
    q: "How does the AI Resume Builder generate ATS-compliant PDFs?",
    a: "The Resume Builder employs standard typography grids, ATS parseable headings, and direct vector PDF generation so no text gets rasterized into an image. It passes automated applicant tracking scanners effortlessly.",
  },
  {
    q: "Can I upload photos of handwritten notes for the OCR Summarizer?",
    a: "Yes! You can take a photo of whiteboard equations or lecture notes, upload it in JPG/PNG/WebP format, inspect the extracted text, and generate a concise revision breakdown.",
  },
  {
    q: "How does the Google Sheets integration work?",
    a: "You can hook up any Google Apps Script Web App URL to use Google Sheets as a live zero-maintenance database. Read rows, edit student records, and generate AI insights on your live spreadsheet data.",
  },
];

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-[#f3f0e7] text-[#17251e]">
      <section className="relative overflow-hidden bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase text-[#315c43]">
              <BookOpen className="h-4 w-4" />
              <span>Tools for curious minds</span>
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.98] text-[#17251e] sm:text-6xl lg:text-7xl">
              Make room for <span className="text-[#d94f36]">better</span> thinking.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#435149] sm:text-lg">
              Turn class notes into momentum. Lumora brings your study, creative, and career tools together in one practical AI workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#tools" className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#d94f36] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b83b27]">
                Find your tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/how-it-works" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#b9b8a9] px-6 py-3 text-sm font-bold text-[#17251e] transition-colors hover:bg-white/60">
                See how it works <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#c9c7b9] pt-5 text-sm text-[#435149]">
              <span className="inline-flex items-center gap-2"><span className="font-display text-2xl font-black text-[#17251e]">10</span> focused tools</span>
              <span className="inline-flex items-center gap-2"><span className="font-display text-2xl font-black text-[#315c43]">0</span> subscriptions</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-[#d94f36]" /> Ready when you are</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -right-3 -top-3 z-10 flex h-20 w-20 rotate-6 flex-col items-center justify-center bg-[#e3c94d] text-center text-[10px] font-black uppercase leading-tight text-[#17251e] sm:-right-5 sm:-top-5 sm:h-24 sm:w-24">
              Learn<br />by doing
            </div>
            <div className="relative aspect-[1.15/1] overflow-hidden bg-[#315c43]">
              <img src={heroVisualImg} alt="A team collaborating around a laptop" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#17251e]/80 to-transparent p-5 pt-16 text-white sm:p-7 sm:pt-20">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#e3c94d]">One workspace, many ways forward</span>
                  <p className="mt-1 text-lg font-bold sm:text-xl">Study, make, and move ahead.</p>
                </div>
                <GraduationCap className="mb-1 h-7 w-7 shrink-0 text-[#e3c94d]" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-[#c9c7b9] pt-3 text-[10px] font-bold uppercase text-[#69766c]">
              <span>Lumora AI / Learning studio</span><span>01 - 10</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="scroll-mt-24 bg-[#fffdf7] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#d8d6ca] pb-7 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-[#d94f36]"><Sparkles className="h-4 w-4" /> The toolbox</div>
              <h2 className="max-w-2xl text-4xl font-black leading-tight text-[#17251e] sm:text-5xl">A good place to start.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#59655d]">Pick the task in front of you. Each workspace is built to take you from a blank page to a useful next step.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ Icon, ...tool }) => (
              <Link key={tool.number} to={tool.route} className="group flex min-w-0 flex-col border border-[#deddd3] bg-white p-4 transition-colors hover:border-[#315c43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d94f36] sm:p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#d94f36]">{tool.number} / 10</span>
                  <span className="text-[10px] font-bold uppercase text-[#7b837b]">Workspace</span>
                </div>
                <div className="mb-5 flex aspect-[2.35/1] items-center justify-center bg-[#f3f0e7] transition-colors group-hover:bg-[#ebe7d9]">
                  <Icon className="h-10 w-10" style={{ color: tool.accent }} strokeWidth={1.6} />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-black leading-snug text-[#17251e] sm:text-xl">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-5 text-[#647067]">{tool.description}</p>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-[#f3f0e7] text-[#17251e] transition-colors group-hover:bg-[#d94f36] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-[#eeede6] pt-3">
                  {tool.tags.map((tag) => <span key={tag} className="text-[10px] font-semibold text-[#747e75]">{tag}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#315c43] py-16 text-[#fffdf7] sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-5 border-b border-white/25 pb-8 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <div className="mb-3 text-xs font-bold uppercase text-[#e3c94d]">Simple by design</div>
              <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">From scattered material to clear next steps.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/75">Bring what you have. Choose the kind of help you need. Keep the result and build on it.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-t-2 border-[#e3c94d] pt-4"><span className="font-mono text-xs font-bold text-[#e3c94d]">01 / BRING IT IN</span><h3 className="mt-4 text-xl font-black">Start with your material</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/75">Paste lecture notes, upload a page, enter a topic, or connect a Google Sheet.</p></div>
            <div className="border-t-2 border-[#e3c94d] pt-4"><span className="font-mono text-xs font-bold text-[#e3c94d]">02 / SHAPE IT</span><h3 className="mt-4 text-xl font-black">Choose a useful format</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/75">Turn the same ideas into notes, flashcards, quizzes, maps, slides, and more.</p></div>
            <div className="border-t-2 border-[#e3c94d] pt-4"><span className="font-mono text-xs font-bold text-[#e3c94d]">03 / TAKE IT WITH YOU</span><h3 className="mt-4 text-xl font-black">Keep moving</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/75">Review, revise, share, or export your work when you are ready.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e7] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <div><div className="mb-3 text-xs font-bold uppercase text-[#d94f36]">Good to know</div><h2 className="max-w-sm text-4xl font-black leading-tight text-[#17251e] sm:text-5xl">A few quick answers.</h2></div>
          <div className="border-t border-[#c9c7b9]">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border-b border-[#c9c7b9]">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} aria-expanded={openFaq === idx} aria-controls={`faq-answer-${idx}`} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold text-[#17251e] transition-colors hover:text-[#d94f36] sm:text-base">
                  <span>{faq.q}</span><ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-[#d94f36]" : ""}`} />
                </button>
                {openFaq === idx && <div id={`faq-answer-${idx}`} className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#59655d]">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e3c94d] py-12 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div><div className="mb-2 text-xs font-bold uppercase text-[#4a4b33]">Your next idea starts here</div><h2 className="text-3xl font-black leading-tight text-[#17251e] sm:text-4xl">What are you working on?</h2></div>
          <a href="#tools" className="group inline-flex min-h-12 items-center justify-center gap-3 self-start bg-[#17251e] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d94f36] md:self-auto">Browse all tools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
        </div>
      </section>
    </div>
  );
};
