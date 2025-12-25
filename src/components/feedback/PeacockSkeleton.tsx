"use client";

import { cn } from "../../hooks/utils";

function PeacockSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-white/10", className)}
      {...props}
    />
  );
}

export { PeacockSkeleton };
