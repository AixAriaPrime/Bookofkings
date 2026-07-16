// Screen: Mirror Card
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { PageHeader } from "@/ui/components/PageHeader";
import { ScreenShell } from "@/ui/components/ScreenShell";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";

export const metadata = { title: "Mirror Card" };

export default function MirrorCardPage() {
  return (
    <MobileLayout header={<PageHeader title="Mirror Card" showBack />}>
      <ScreenShell subtitle="Your reflection, rendered. Share it or keep it — the truth is yours.">
        <div className="space-y-4">
          <PlaceholderCard label="Mirror card render" height="h-96" />
          <div className="flex gap-3">
            <Button variant="secondary" size="md" className="flex-1">Copy</Button>
            <Button variant="secondary" size="md" className="flex-1">Download</Button>
            <Button variant="primary"   size="md" className="flex-[2]">Share</Button>
          </div>
          <p className="text-xs text-onSurface/40 text-center pt-2">Past mirrors</p>
          <PlaceholderCard label="Card history" height="h-24" />
        </div>
      </ScreenShell>
    </MobileLayout>
  );
}
