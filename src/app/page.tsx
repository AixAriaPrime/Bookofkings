// Screen: Home
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { BottomNavigation } from "@/ui/components/BottomNavigation";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <MobileLayout bottomNav={<BottomNavigation />} fullBleed>
      <div className="flex flex-col items-center justify-center gap-6 px-6 pt-20 pb-8 text-center">
        <div className="space-y-2">
          <p className="font-mono text-xs tracking-[0.3em] text-onSurface/40 uppercase">
            Book of Kings
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight">
            Know Thyself
          </h1>
          <p className="font-body text-base text-onSurface/60 leading-relaxed max-w-xs mx-auto">
            A daily ritual drawn from the ancient Shahnameh.
          </p>
        </div>

        <Button variant="primary" size="lg" fullWidth>
          <Link href="/ritual" className="contents">
            Begin Today&apos;s Ritual
          </Link>
        </Button>

        <Button variant="ghost" size="sm">
          <Link href="/sage-mode">Ask the Sage</Link>
        </Button>
      </div>

      <div className="px-4 space-y-4 pb-8">
        <PlaceholderCard label="Last result summary" height="h-28" />
        <PlaceholderCard label="Daily verse"          height="h-20" />
        <PlaceholderCard label="Streak / consistency" height="h-16" />
      </div>
    </MobileLayout>
  );
}
