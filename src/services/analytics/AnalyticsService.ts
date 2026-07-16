// Service: Analytics
// Interface only — implementation wired in analytics milestone.

export type AnalyticsEvent =
  | "ritual_started"
  | "ritual_completed"
  | "ritual_abandoned"
  | "result_viewed"
  | "mirror_card_viewed"
  | "mirror_card_shared"
  | "sage_chat_opened"
  | "sage_message_sent"
  | "subscription_page_viewed"
  | "subscription_started"
  | "subscription_completed"
  | "settings_opened";

export interface AnalyticsProperties {
  [key: string]: string | number | boolean | null | undefined;
}

export interface IAnalyticsService {
  track(event: AnalyticsEvent, properties?: AnalyticsProperties): void;
  identify(userId: string, traits?: AnalyticsProperties): void;
  page(name: string, properties?: AnalyticsProperties): void;
}

// Placeholder — safe no-op until wired
export class AnalyticsService implements IAnalyticsService {
  track(_event: AnalyticsEvent, _properties?: AnalyticsProperties): void {}
  identify(_userId: string, _traits?: AnalyticsProperties): void {}
  page(_name: string, _properties?: AnalyticsProperties): void {}
}
