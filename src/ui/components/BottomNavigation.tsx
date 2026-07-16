"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/",          label: "Home",     icon: "⟁" },
  { href: "/ritual",    label: "Ritual",   icon: "◎" },
  { href: "/sage-mode", label: "Sage",     icon: "⚇" },
  { href: "/mirror",    label: "Mirror",   icon: "◈" },
  { href: "/settings",  label: "Settings", icon: "⊞" },
] as const;

export function BottomNavigation() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-around px-2 py-2">
      {NAV_ITEMS.map(({ href, label, icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={[
              "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors",
              active ? "text-primary" : "text-onSurface/40 hover:text-onSurface/70",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
            <span className="text-[10px] font-medium tracking-wide">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
