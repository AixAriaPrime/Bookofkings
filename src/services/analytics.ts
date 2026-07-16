export type AnalyticsEvent =
  | "session_start"
  | "prompt_complete"
  | "result_view"
  | "share_tap"
  | "sage_open"
  | "premium_view"
  | "return_visit";

export interface AnalyticsRecord {
  event: AnalyticsEvent;
  at: number;
  properties?: Record<string, string | number | boolean>;
}

const records: AnalyticsRecord[] = [];

export function track(event: AnalyticsEvent, properties?: AnalyticsRecord["properties"]) {
  records.push({ event, at: Date.now(), properties });
}

export function analyticsSnapshot() {
  return [...records];
}

export function clearAnalytics() {
  records.length = 0;
}

