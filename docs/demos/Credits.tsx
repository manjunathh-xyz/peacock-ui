import React from 'react';
import { Cpu, Layout } from 'lucide-react';

export const Credits = () => {
  const technologies = [
    { name: 'React 19', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
    { name: 'Framer Motion 12', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
    { name: 'Three.js', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
    { name: 'Tailwind CSS', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
    { name: 'Vite', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
    { name: 'Lucide Icons', color: 'hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30' },
  ];

  const inspirations = [
    { name: 'Discord', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
    { name: 'Linear', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
    { name: 'macOS', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
    { name: 'Vercel', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
    { name: 'Stripe', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
    { name: 'Dynamic Island', color: 'hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30' },
  ];

  return (
    <section id="credits" className="space-y-16">
      <h2 className="text-5xl font-black text-white tracking-tight text-center">Engineered with Precision</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Technologies Card */}
        <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative group overflow-hidden noise-texture transition-all duration-500 hover:border-peacock-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-peacock-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-4xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">💻</div>
          <div className="space-y-4 relative z-10">
            <h4 className="text-2xl font-black text-white">Core Technologies</h4>
            <p className="text-white/40 leading-relaxed">Built on a foundation of industry-leading open source tools designed for performance and scale.</p>
            <div className="flex flex-wrap gap-2 pt-4">
               {technologies.map(tech => (
                 <span key={tech.name} className={`px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-white/60 transition-all cursor-default uppercase tracking-wider font-bold ${tech.color}`}>
                   {tech.name}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* Design Inspiration Card */}
        <div className="space-y-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative group overflow-hidden noise-texture transition-all duration-500 hover:border-peacock-success/20">
          <div className="absolute inset-0 bg-gradient-to-br from-peacock-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-4xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">🎨</div>
          <div className="space-y-4 relative z-10">
            <h4 className="text-2xl font-black text-white">Design Inspiration</h4>
            <p className="text-white/40 leading-relaxed">Inspired by the most refined digital experiences in the productivity and gaming space.</p>
            <div className="flex flex-wrap gap-2 pt-4">
               {inspirations.map(insp => (
                 <span key={insp.name} className={`px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-white/60 transition-all cursor-default uppercase tracking-wider font-bold ${insp.color}`}>
                   {insp.name}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
