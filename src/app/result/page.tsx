// Screen: Result
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { PageHeader } from "@/ui/components/PageHeader";
import { ScreenShell } from "@/ui/components/ScreenShell";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";
import Link from "next/link";

export const metadata = { title: "Your Result" };

export default function ResultPage() {
  return (
    <MobileLayout header={<PageHeader title="Your Result" showBack />}>
      <ScreenShell>
        <div className="space-y-4">
          <PlaceholderCard label="Archetype card"            height="h-56" />
          <PlaceholderCard label="Score breakdown"           height="h-40" />
          <PlaceholderCard label="Narrative/interpretation"  height="h-36" />
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="primary" size="md" fullWidth>
              <Link href="/mirror" className="contents">View Mirror Card</Link>
            </Button>
            <Button variant="secondary" size="md" fullWidth>
              <Link href="/sage-mode" className="contents">Ask the Sage</Link>
            </Button>
          </div>
        </div>
      </ScreenShell>
    </MobileLayout>
  );
}
