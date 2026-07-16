// Screen: Daily Ritual
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { PageHeader } from "@/ui/components/PageHeader";
import { ScreenShell } from "@/ui/components/ScreenShell";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";

export const metadata = { title: "Daily Ritual" };

export default function RitualPage() {
  return (
    <MobileLayout header={<PageHeader title="Daily Ritual" showBack />}>
      <ScreenShell
        title="The Ritual Begins"
        subtitle="Answer with honesty. The kings of old were judged not by power, but by truth."
      >
        <div className="space-y-4">
          <PlaceholderCard label="Progress stepper (1/5)" height="h-8" />
          <PlaceholderCard label="Active prompt"              height="h-48" />
          <PlaceholderCard label="Response input"             height="h-32" />
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" size="md" className="flex-1">Skip</Button>
            <Button variant="primary"   size="md" className="flex-[2]">Continue →</Button>
          </div>
        </div>
      </ScreenShell>
    </MobileLayout>
  );
}
