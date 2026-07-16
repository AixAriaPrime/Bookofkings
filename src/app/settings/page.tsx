// Screen: Settings
import { MobileLayout } from "@/ui/layouts/MobileLayout";
import { PageHeader } from "@/ui/components/PageHeader";
import { ScreenShell } from "@/ui/components/ScreenShell";
import { PlaceholderCard } from "@/ui/components/PlaceholderCard";
import { Button } from "@/ui/components/Button";
import { BottomNavigation } from "@/ui/components/BottomNavigation";

export const metadata = { title: "Settings" };

const SETTINGS_SECTIONS = [
  "Account & identity",
  "Subscription & premium",
  "Notification preferences",
  "Ritual history",
  "Privacy & data",
  "About",
] as const;

export default function SettingsPage() {
  return (
    <MobileLayout
      header={<PageHeader title="Settings" />}
      bottomNav={<BottomNavigation />}
    >
      <ScreenShell>
        <div className="space-y-3">
          <PlaceholderCard label="Profile / account" height="h-20" />
          {SETTINGS_SECTIONS.map((label) => (
            <PlaceholderCard key={label} label={label} height="h-14" />
          ))}
          <div className="pt-4">
            <Button variant="ghost" size="sm" fullWidth className="text-red-400">
              Sign out
            </Button>
          </div>
        </div>
      </ScreenShell>
    </MobileLayout>
  );
}
