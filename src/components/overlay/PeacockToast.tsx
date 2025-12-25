"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const PeacockToaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-peacock-surface-1 group-[.toaster]:text-slate-100 group-[.toaster]:border-white/10 group-[.toaster]:shadow-2xl group-[.toaster]:plumage-glass",
          description: "group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-peacock-primary group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-peacock-surface-2 group-[.toast]:text-slate-300",
        },
      }}
      {...props}
    />
  );
};
