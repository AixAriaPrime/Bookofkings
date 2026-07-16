// Screen: Sage Mode
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { PageHeader } from "@/ui/components/PageHeader";
import { ScreenShell } from "@/ui/components/ScreenShell";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";
import { BottomNavigation } from "@/ui/components/BottomNavigation";

export const metadata = { title: "Sage Mode" };

export default function SageModePage() {
  return (
    <MobileLayout
      header={<PageHeader title="The Sage" showBack />}
      bottomNav={<BottomNavigation />}
      fullBleed
    >
      <ScreenShell className="px-4 pt-4 flex flex-col h-full">
        <div className="flex flex-col gap-4 flex-1">
          <PlaceholderCard label="Context: current ritual result" height="h-20" />
          <div className="flex-1 space-y-3 min-h-[300px]">
            <PlaceholderCard label="Sage message"            height="h-24" />
            <PlaceholderCard label="User message"            height="h-16" />
            <PlaceholderCard label="Sage reply (streaming)"  height="h-28" />
          </div>
        </div>
        <div className="sticky bottom-0 pt-4 pb-2 bg-surface">
          <div className="flex gap-2 items-end">
            <PlaceholderCard label="Message input" height="h-12" className="flex-1" />
            <Button variant="primary" size="md" className="shrink-0">Send</Button>
          </div>
        </div>
      </ScreenShell>
    </MobileLayout>
  );
}
