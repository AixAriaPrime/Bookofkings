// UI: ScreenShell
import type { ReactNode } from "react";

interface ScreenShellProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function ScreenShell({
  title,
  subtitle,
  children,
  className = "",
}: ScreenShellProps) {
  return (
    <section className={"mx-auto w-full max-w-md " + className}>
      {(title || subtitle) && (
        <div className="mb-6 space-y-1">
          {title && (
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm text-onSurface/60 leading-relaxed">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
