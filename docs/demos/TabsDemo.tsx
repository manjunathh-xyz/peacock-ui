import React from 'react';
import { PeacockTabs, FluidCard } from '../../src';
import { User, Settings, Bell } from 'lucide-react';

export const TabsDemo = () => {
  const items = [
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="w-4 h-4" />,
      content: (
        <FluidCard 
          title="User Profile" 
          description="Manage your account settings and public profile information." 
          expandedContent={<p className="text-sm">Detailed profile settings, avatar upload, and social links would be here.</p>}
        />
      )
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell className="w-4 h-4" />,
      content: (
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 noise-texture">
          <h4 className="text-white font-bold mb-2">Recent Alerts</h4>
          <p className="text-white/60">You have no new notifications.</p>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      content: (
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 noise-texture">
          <h4 className="text-white font-bold mb-2">System Preferences</h4>
          <p className="text-white/60">Configure your global application behavior.</p>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-12 w-full max-w-2xl p-8 border border-white/10 rounded-3xl bg-black/50">
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-peacock-primary uppercase tracking-widest">Pill Variant</h3>
        <PeacockTabs items={items} variant="pill" />
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-bold text-peacock-primary uppercase tracking-widest">Glass Variant</h3>
        <PeacockTabs items={items} variant="glass" />
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-bold text-peacock-primary uppercase tracking-widest">Underline Variant</h3>
        <PeacockTabs items={items} variant="underline" />
      </section>
    </div>
  );
};
