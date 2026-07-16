// UI: MobileLayout
import type { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  bottomNav?: ReactNode;
  fullBleed?: boolean;
}

export function MobileLayout({
  children,
  header,
  bottomNav,
  fullBleed = false,
}: MobileLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface text-onSurface">
      <div className="safe-top" />
      {header && (
        <header className="sticky top-0 z-40 flex items-center px-4 py-3 backdrop-blur-sm">
          {header}
        </header>
      )}
      <main className={["flex-1 flex-col flex", fullBleed ? "" : "px-4 py-6"].join(" ")}>
        {children}
      </main>
      {bottomNav && (
        <nav className="safe-bottom sticky bottom-0 z-40 border-t border-border bg-surface">
          {bottomNav}
        </nav>
      )}
    </div>
  );
}
