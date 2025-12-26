import React from 'react';
import { 
  HolographicCard, 
  PeacockButton, 
  PeacockBadge, 
  PeacockTabs, 
  PeacockDock,
  PeacockAvatar,
  PeacockAvatarImage,
  PeacockAvatarFallback,
  PeacockSkeleton,
  FluidCard
} from '../../src';
import { 
  Sparkles, 
  Zap, 
  Flame, 
  Shield, 
  Cpu, 
  Layout, 
  Settings, 
  Search, 
  Home, 
  User,
  Activity,
  Globe
} from 'lucide-react';

export const HeroDemos = () => {
  return (
    <div className="flex flex-col gap-12 mt-32 max-w-7xl mx-auto px-6 mb-32">
      {/* Header Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-primary/10 border border-peacock-primary/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peacock-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-peacock-primary"></span>
          </span>
          <span className="text-[10px] font-bold text-peacock-primary uppercase tracking-[0.2em]">Quantum Engine v3.0 Early Access</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Holographic Spotlight - 7 Cols */}
        <div className="lg:col-span-7 h-full">
          <HolographicCard className="h-full">
            <div className="h-full flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-peacock-primary/20 text-peacock-primary">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tight">Quantum Physics</h3>
                    <p className="text-white/40 text-sm font-medium uppercase tracking-wider">Neural Motion Synthesis</p>
                  </div>
                </div>
                
                <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                  Peacock UI bridges the gap between static code and physical reality. 
                  Every component is a high-fidelity primitive designed for the next era of spatial interfaces.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Latency', value: '< 1ms', icon: <Zap className="w-4 h-4" /> },
                    { label: 'Weight', value: '12kb', icon: <Activity className="w-4 h-4" /> },
                    { label: 'Platform', value: 'React 19', icon: <Globe className="w-4 h-4" /> },
                    { label: 'Security', value: 'Verified', icon: <Shield className="w-4 h-4" /> },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-peacock-primary mb-1">{stat.icon}</div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <PeacockButton variant="primary" className="px-10 h-14 text-lg">
                    Initialize Core
                  </PeacockButton>
                  <PeacockButton variant="glass" className="px-10 h-14 text-lg border-white/5">
                    Documentation
                  </PeacockButton>
                </div>
              </div>
            </div>
          </HolographicCard>
        </div>

        {/* Control Center - 5 Cols */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Tabs Control */}
          <div className="plumage-glass rounded-[2rem] p-8 border border-white/10 noise-texture relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout className="w-24 h-24 text-white rotate-12" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Layout className="w-5 h-5 text-peacock-primary" />
              Interface System
            </h4>

            <PeacockTabs 
              variant="glass"
              items={[
                { 
                  id: '1', 
                  label: 'Analytics', 
                  icon: <Activity className="w-4 h-4" />, 
                  content: (
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/40">Real-time Flux</span>
                        <PeacockBadge variant="success">Active</PeacockBadge>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-peacock-primary animate-pulse" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                          <div className="text-xl font-bold text-white">99.9%</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest">Uptime</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                          <div className="text-xl font-bold text-white">4.2ms</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest">TTFB</div>
                        </div>
                      </div>
                    </div>
                  ) 
                },
                { 
                  id: '2', 
                  label: 'Security', 
                  icon: <Shield className="w-4 h-4" />, 
                  content: (
                    <div className="mt-6 space-y-4">
                      <div className="p-4 rounded-xl bg-peacock-danger/10 border border-peacock-danger/20">
                        <p className="text-xs text-peacock-danger font-medium leading-relaxed">
                          3 attempt(s) blocked from unauthorized IP range. Quantum encryption active.
                        </p>
                      </div>
                      <PeacockSkeleton className="h-12 w-full rounded-xl" />
                    </div>
                  ) 
                }
              ]} 
            />
          </div>

          {/* User & Social Showcase */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="plumage-glass rounded-[2rem] p-6 border border-white/10 flex flex-col items-center justify-center gap-4 text-center group">
               <PeacockAvatar status="online" className="w-16 h-16 ring-4 ring-peacock-primary/20">
                  <PeacockAvatarImage src="https://github.com/sploov.png" />
                  <PeacockAvatarFallback>SP</PeacockAvatarFallback>
               </PeacockAvatar>
               <div>
                 <div className="text-white font-bold">Alex Sploov</div>
                 <div className="text-[10px] text-white/40 uppercase tracking-widest">Core Architect</div>
               </div>
            </div>
            
            <div className="plumage-glass rounded-[2rem] p-6 border border-white/10 flex flex-col items-center justify-center gap-4 text-center group bg-peacock-primary/5">
               <div className="w-16 h-16 rounded-full bg-peacock-primary flex items-center justify-center shadow-[0_0_30px_rgba(88,101,242,0.5)]">
                 <Sparkles className="w-8 h-8 text-white" />
               </div>
               <div>
                 <div className="text-white font-bold">Join Community</div>
                 <div className="text-[10px] text-peacock-primary uppercase tracking-widest">4.2k Members</div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dock Showcase - Floating at bottom of Hero Section */}
      <div className="flex justify-center mt-8">
        <PeacockDock 
          items={[
            { id: '1', icon: <Home className="w-full h-full p-0.5" />, label: 'Home' },
            { id: '2', icon: <Search className="w-full h-full p-0.5" />, label: 'Search' },
            { id: '3', icon: <Sparkles className="w-full h-full p-0.5" />, label: 'Quantum' },
            { id: '4', icon: <User className="w-full h-full p-0.5" />, label: 'Profile' },
            { id: '5', icon: <Settings className="w-full h-full p-0.5" />, label: 'Settings' },
          ]} 
        />
      </div>
    </div>
  );
};