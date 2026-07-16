"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  rightSlot?: ReactNode;
}

export function PageHeader({ title, showBack = false, rightSlot }: PageHeaderProps) {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-8">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="flex h-8 w-8 items-center justify-center rounded-full text-onSurface/60 hover:text-onSurface transition-colors"
            aria-label="Go back"
          >
            ←
          </button>
        )}
      </div>
      <h2 className="font-display text-base font-semibold tracking-wide">{title}</h2>
      <div className="w-8 flex justify-end">{rightSlot}</div>
    </div>
  );
}
