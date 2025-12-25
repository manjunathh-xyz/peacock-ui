import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MotionProvider,
  PeacockButton,
  FluidCard,
  GlassMenu,
  PeacockInput,
  PeacockSwitch,
  PeacockBadge,
  PeacockTooltip
} from '../../src';
import {
  Sparkles, Layers, MousePointer2, Box, Search, Command, Zap,
  ShieldCheck, Palette, Github, ChevronRight, Menu, X, Type,
  ToggleLeft, Info, ExternalLink, Copy, Check, ArrowRight,
  ArrowLeft, Terminal, Monitor, Cpu, Globe, Braces
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../src/hooks/utils';
import '../../src/themes/globals.css';

const CodeBlock = ({ code, language = "bash" }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/5 my-8 shadow-2xl">
      <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">{language}</span>
        </div>
        <button onClick={copyToClipboard} className="p-2 rounded-lg hover:bg-white/5 text-white/30 hover:text-white transition-all">
          {copied ? <Check className="w-4 h-4 text-peacock-success" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="p-6 text-sm font-mono text-white/70 overflow-x-auto selection:bg-peacock-primary/30">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const PageTOC = ({ items }: { items: string[] }) => (
  <div className="hidden xl:block w-64 shrink-0 py-16 sticky top-20 h-fit">
    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4 px-4">On this page</h4>
    <nav className="flex flex-col gap-1">
      {items.map(item => (
        <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-2 text-sm text-white/40 hover:text-peacock-primary transition-colors border-l border-transparent hover:border-peacock-primary/30">
          {item}
        </a>
      ))}
    </nav>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [switchState, setSwitchState] = useState(true);

  const sidebarLinks = [
    {
      group: 'Architecture',
      links: [
        { id: 'getting-started', label: 'Introduction', icon: <Zap className="w-4 h-4" /> },
        { id: 'theming', label: 'Design Tokens', icon: <Palette className="w-4 h-4" /> },
        { id: 'motion', label: 'Motion Engine', icon: <Sparkles className="w-4 h-4" /> },
      ]
    },
    {
      group: 'Primitives',
      links: [
        { id: 'button', label: 'Peacock Button', icon: <MousePointer2 className="w-4 h-4" /> },
        { id: 'input', label: 'Fluid Input', icon: <Type className="w-4 h-4" /> },
        { id: 'switch', label: 'Spring Switch', icon: <ToggleLeft className="w-4 h-4" /> },
      ]
    },
    {
      group: 'Surfaces',
      links: [
        { id: 'card', label: 'Fluid Card', icon: <Layers className="w-4 h-4" /> },
        { id: 'menu', label: 'Glass Menu', icon: <Command className="w-4 h-4" /> },
      ]
    }
  ];

  const allLinks = sidebarLinks.flatMap(g => g.links);
  const activeLink = allLinks.find(l => l.id === activeTab);
  const activeIndex = allLinks.findIndex(l => l.id === activeTab);

  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-peacock-primary/40 flex overflow-hidden">
        
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="w-72 border-r border-white/5 bg-[#08080a] flex flex-col relative z-40 h-screen shrink-0"
            >
              <div className="p-8 pb-12 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-peacock-primary plumage-gradient flex items-center justify-center shadow-2xl shadow-peacock-primary/20">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-black text-xl tracking-tighter leading-none">PEACOCK</h1>
                  <span className="text-[10px] font-bold text-peacock-primary uppercase tracking-[0.3em] mt-1 block">UI SYSTEM</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 space-y-10 pb-12 scrollbar-hide">
                {sidebarLinks.map((group) => (
                  <div key={group.group} className="space-y-3">
                    <h3 className="px-4 text-[10px] font-black text-white/10 uppercase tracking-[0.25em]">{group.group}</h3>
                    <nav className="space-y-1">
                      {group.links.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => setActiveTab(link.id)}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-500 relative group",
                            activeTab === link.id 
                              ? "bg-white/5 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" 
                              : "text-white/30 hover:text-white/60 hover:bg-white/[0.02]"
                          )}
                        >
                          {activeTab === link.id && (
                            <motion.div layoutId="active-pill" className="absolute inset-0 bg-peacock-primary/5 border border-peacock-primary/10 rounded-2xl" />
                          )}
                          <span className={cn(
                            "relative z-10 transition-colors duration-500",
                            activeTab === link.id ? "text-peacock-primary" : "group-hover:text-white"
                          )}>
                            {link.icon}
                          </span>
                          <span className="relative z-10 font-bold text-[13px]">{link.label}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5">
                <PeacockButton variant="glass" className="w-full justify-start gap-4 h-14 rounded-2xl px-6 border-white/5">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-bold">Star on GitHub</span>
                </PeacockButton>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Top Bar */}
          <header className="h-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur-3xl px-8 flex items-center justify-between z-30">
            <div className="flex items-center gap-6">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 text-white/40 transition-colors">
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="flex items-center gap-3 text-sm font-bold">
                <span className="text-white/20">Documentation</span>
                <ChevronRight className="w-4 h-4 text-white/10" />
                <span className="text-peacock-primary">{activeLink?.label}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 px-4 h-11 bg-white/[0.03] border border-white/5 rounded-xl text-white/20 hover:text-white/40 cursor-pointer transition-all" onClick={() => setIsMenuOpen(true)}>
                <Search className="w-4 h-4" />
                <span className="text-[13px] font-bold mr-8">Search...</span>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/5 text-[10px] font-black">
                  <Command className="w-3 h-3" /> K
                </div>
              </div>
              <PeacockButton variant="primary" className="h-11 rounded-xl px-6 font-black text-xs tracking-widest bg-peacock-primary shadow-lg shadow-peacock-primary/20">
                V1.0.0
              </PeacockButton>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto scroll-smooth">
            <div className="flex max-w-[1400px] mx-auto">
              <main className="flex-1 px-8 md:px-16 py-16 lg:py-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Page Content */}
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-4 mb-8">
                        <PeacockBadge variant="primary" className="h-7 px-4 text-[10px] tracking-[0.2em] font-black">STABLE</PeacockBadge>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Updated 2 days ago</span>
                      </div>

                      {activeTab === 'getting-started' && (
                        <div className="space-y-16">
                          <header className="space-y-6">
                            <h1 className="text-7xl font-black tracking-tightest leading-none">The Future is <span className="plumage-gradient text-transparent bg-clip-text">Fluid</span>.</h1>
                            <p className="text-2xl text-white/40 font-medium leading-relaxed">Peacock UI is a high-fidelity interaction framework for React 19, designed to bring life to static interfaces.</p>
                          </header>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[ 
                              { title: 'Physics Engines', icon: <Cpu />, desc: 'Spring physics over durations.' },
                              { title: 'Radix Built', icon: <ShieldCheck />, desc: 'Accessible by default.' },
                              { title: 'Tailwind 4', icon: <Braces />, desc: 'Deep variable integration.' },
                              { title: 'Edge Optimized', icon: <Globe />, desc: 'SSR & Astro compatible.' },
                            ].map(feat => (
                              <div key={feat.title} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-peacock-primary/20 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-peacock-primary/10 group-hover:text-peacock-primary transition-all">
                                  {feat.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                                <p className="text-white/30 text-sm leading-relaxed">{feat.desc}</p>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-8">
                            <h2 className="text-4xl font-black">Install</h2>
                            <CodeBlock code="npm install @peacock-ui/core" />
                          </div>
                        </div>
                      )}

                      {/* Other tabs follow the same professional structure... */}
                      {activeTab === 'button' && (
                        <div className="space-y-16">
                          <header className="space-y-6">
                            <h1 className="text-7xl font-black tracking-tighter">Button</h1>
                            <p className="text-2xl text-white/40 font-medium">Interactive light-source buttons with physics-based haptics.</p>
                          </header>

                          <div className="p-20 rounded-[3rem] bg-[#0a0a0c] border border-white/5 flex flex-wrap items-center justify-center gap-12 noise-texture shadow-3xl">
                            <PeacockButton variant="primary" className="h-16 px-10 text-lg rounded-[1.25rem]">Primary</PeacockButton>
                            <PeacockButton variant="glass" className="h-16 px-10 text-lg rounded-[1.25rem]">Glass</PeacockButton>
                          </div>

                          <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Usage</h2>
                            <CodeBlock language="tsx" code={`import { PeacockButton } from '@peacock-ui/core';\n\n<PeacockButton variant=\"primary\" glowSize={200}>\n  Explore Space\n</PeacockButton>`} />
                          </div>
                        </div>
                      )}

                      {/* Standard navigation footer for all pages */}
                      <div className="mt-32 pt-16 border-t border-white/5 flex items-center justify-between">
                        {allLinks[activeIndex - 1] ? (
                          <button onClick={() => setActiveTab(allLinks[activeIndex - 1].id)} className="group text-left p-6 rounded-[2rem] hover:bg-white/5 transition-all border border-transparent hover:border-white/10 w-[240px]">
                            <span className="block text-[10px] font-black text-white/10 uppercase tracking-widest mb-4">Previous</span>
                            <div className="flex items-center gap-4">
                              <ArrowLeft className="w-5 h-5 text-peacock-primary group-hover:-translate-x-2 transition-transform" />
                              <span className="text-lg font-bold">{allLinks[activeIndex - 1].label}</span>
                            </div>
                          </button>
                        ) : <div />}
                        
                        {allLinks[activeIndex + 1] ? (
                          <button onClick={() => setActiveTab(allLinks[activeIndex + 1].id)} className="group text-right p-6 rounded-[2rem] hover:bg-white/5 transition-all border border-transparent hover:border-white/10 w-[240px]">
                            <span className="block text-[10px] font-black text-white/10 uppercase tracking-widest mb-4">Up Next</span>
                            <div className="flex items-center justify-end gap-4">
                              <span className="text-lg font-bold">{allLinks[activeIndex + 1].label}</span>
                              <ArrowRight className="w-5 h-5 text-peacock-primary group-hover:translate-x-2 transition-transform" />
                            </div>
                          </button>
                        ) : <div />}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </main>

              <PageTOC items={['Overview', 'Installation', 'Architecture', 'Theming']} />
            </div>
          </div>
        </div>

        <GlassMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          items={[
            { id: '1', label: 'Documentation', icon: <Zap className="w-4 h-4" /> },
            { id: '2', label: 'Components', icon: <Box className="w-4 h-4" /> },
            { id: '3', label: 'Motion', icon: <Sparkles className="w-4 h-4" /> },
          ]}
        />
      </div>
    </MotionProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);