import React, { useState } from 'react';
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
  Sparkles, 
  Layers, 
  MousePointer2, 
  Box, 
  Search, 
  Command, 
  Zap, 
  ShieldCheck,
  Palette,
  Github,
  ChevronRight,
  Menu,
  X,
  Type,
  ToggleLeft,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../src/hooks/utils';
import '../../src/themes/globals.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [switchState, setSwitchState] = useState(true);

  const menuItems = [
    { id: '1', label: 'Dashboard', icon: <Layers className="w-4 h-4" /> },
    { id: '2', label: 'Components', icon: <Box className="w-4 h-4" /> },
    { id: '3', label: 'Settings', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const sidebarLinks = [
    { group: 'Overview', links: [
      { id: 'getting-started', label: 'Getting Started', icon: <Zap className="w-4 h-4" /> },
      { id: 'theming', label: 'Theming', icon: <Palette className="w-4 h-4" /> },
      { id: 'motion', label: 'Motion Engine', icon: <Sparkles className="w-4 h-4" /> },
    ]},
    { group: 'Components', links: [
      { id: 'button', label: 'Button', icon: <MousePointer2 className="w-4 h-4" /> },
      { id: 'input', label: 'Input', icon: <Type className="w-4 h-4" /> },
      { id: 'switch', label: 'Switch', icon: <ToggleLeft className="w-4 h-4" /> },
      { id: 'card', label: 'Fluid Card', icon: <Layers className="w-4 h-4" /> },
      { id: 'menu', label: 'Glass Menu', icon: <Command className="w-4 h-4" /> },
      { id: 'badge', label: 'Badge', icon: <ShieldCheck className="w-4 h-4" /> },
      { id: 'tooltip', label: 'Tooltip', icon: <Info className="w-4 h-4" /> },
    ]}
  ];

  return (
    <MotionProvider>
      <div className="min-h-screen bg-peacock-black text-white font-sans selection:bg-peacock-primary/30 flex overflow-hidden">
        
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="w-72 border-r border-white/10 bg-peacock-dark p-6 flex flex-col gap-8 relative z-40 h-screen overflow-y-auto shrink-0"
            >
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peacock-primary to-peacock-danger flex items-center justify-center font-bold text-xl shadow-lg shadow-peacock-primary/20">
                  P
                </div>
                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Peacock UI</span>
              </div>

              <div className="space-y-8">
                {sidebarLinks.map((group) => (
                  <div key={group.group} className="space-y-2">
                    <h3 className="px-4 text-xs font-bold text-white/20 uppercase tracking-widest">{group.group}</h3>
                    <nav className="flex flex-col gap-1">
                      {group.links.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => setActiveTab(link.id)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300",
                            activeTab === link.id 
                              ? "bg-peacock-primary/20 text-peacock-primary border border-peacock-primary/20" 
                              : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                          )}
                        >
                          {link.icon}
                          <span className="font-medium text-sm">{link.label}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <a 
                  href="https://github.com/sploov/peacock-ui" 
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors group"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-medium">GitHub Repo</span>
                </a>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto relative bg-noise">
          {/* Header */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-peacock-black/80 backdrop-blur-md px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/5 text-white/60 transition-colors"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="text-sm text-white/40 font-medium">
                {activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <PeacockTooltip content="Search commands (⌘K)">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/60 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </PeacockTooltip>
              <a href="https://github.com/sploov/peacock-ui" target="_blank">
                <PeacockButton variant="primary" className="py-2 text-sm px-4 rounded-xl">
                  v1.0.0
                </PeacockButton>
              </a>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-8 py-12 pb-32">
            <AnimatePresence mode="wait">
              {activeTab === 'getting-started' && (
                <motion.div
                  key="gs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <PeacockBadge variant="primary" className="mb-4">Official Release</PeacockBadge>
                    <h1 className="text-5xl font-extrabold mb-4">Getting Started</h1>
                    <p className="text-xl text-white/40 leading-relaxed">
                      Peacock UI is a high-fidelity design system focused on fluidity and motion. Built for React 19, it utilizes the latest features for optimal performance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Installation</h2>
                    <p className="text-white/40">Install the core package and its peer dependencies.</p>
                    <div className="bg-peacock-dark border border-white/10 rounded-2xl p-6 font-mono text-sm group relative overflow-hidden">
                      <span className="text-peacock-success">$</span> npm install @peacock-ui/core framer-motion tailwindcss
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Astro & Next.js</h2>
                    <p className="text-white/40">Peacock UI is fully compatible with SSR environments. Ensure you use the <code className="text-peacock-primary">"use client"</code> directive when using components in Next.js App Router.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'motion' && (
                <motion.div
                  key="motion"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <h1 className="text-5xl font-extrabold">Motion Engine</h1>
                  <p className="text-xl text-white/40">Peacock UI replaces static durations with physics-based spring constants.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <h3 className="font-bold text-peacock-primary">Stiffness</h3>
                      <p className="text-sm text-white/40">Controls the "tension" of the spring. Higher means faster movement.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <h3 className="font-bold text-peacock-success">Damping</h3>
                      <p className="text-sm text-white/40">Controls the "friction". Higher means less oscillation.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <h3 className="font-bold text-peacock-danger">Mass</h3>
                      <p className="text-sm text-white/40">Controls the weight of the object. Higher means more inertia.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'button' && (
                <motion.div
                  key="btn"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Button</h1>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Variants</h2>
                    <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 flex flex-wrap items-center gap-6 noise-texture">
                      <PeacockButton variant="primary">Primary</PeacockButton>
                      <PeacockButton variant="outline">Outline</PeacockButton>
                      <PeacockButton variant="glass">Glassmorphism</PeacockButton>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'input' && (
                <motion.div
                  key="inp"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Input</h1>
                  <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 space-y-6">
                    <PeacockInput label="Name" placeholder="John Doe" icon={<MousePointer2 className="w-4 h-4"/>} />
                    <PeacockInput label="Email" placeholder="john@example.com" error="Invalid email address" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'switch' && (
                <motion.div
                  key="swi"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Switch</h1>
                  <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12">
                    <PeacockSwitch label="Dark Mode" checked={switchState} onChange={setSwitchState} />
                  </div>
                </motion.div>
              )}

              {activeTab === 'card' && (
                <motion.div
                  key="crd"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Fluid Card</h1>
                  <FluidCard 
                    title="Expandable Interface" 
                    description="Click to see layout animations in action."
                    expandedContent="This card uses Framer Motion's layout prop to animate between height states without any layout shift. It's perfect for detail views or accordions."
                  />
                </motion.div>
              )}

              {activeTab === 'menu' && (
                <motion.div
                  key="mnu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Glass Menu</h1>
                  <p className="text-white/40">A command-palette style menu with backdrop blur and recursive animations.</p>
                  <PeacockButton onClick={() => setIsMenuOpen(true)}>Open Menu</PeacockButton>
                </motion.div>
              )}

              {activeTab === 'badge' && (
                <motion.div
                  key="bdg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Badge</h1>
                  <div className="flex gap-4 p-12 bg-peacock-dark rounded-3xl border border-white/10">
                    <PeacockBadge variant="primary">New</PeacockBadge>
                    <PeacockBadge variant="success">Active</PeacockBadge>
                    <PeacockBadge variant="danger">Critical</PeacockBadge>
                    <PeacockBadge variant="glass">Beta</PeacockBadge>
                  </div>
                </motion.div>
              )}

              {activeTab === 'tooltip' && (
                <motion.div
                  key="tlp"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Tooltip</h1>
                  <div className="p-12 bg-peacock-dark rounded-3xl border border-white/10 flex items-center justify-center">
                    <PeacockTooltip content="This is a physics-based tooltip">
                      <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 cursor-help hover:bg-white/10 transition-colors">
                        Hover for Tooltip
                      </div>
                    </PeacockTooltip>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <GlassMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          items={menuItems}
        />
      </div>
    </MotionProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
