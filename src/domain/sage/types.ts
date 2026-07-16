// Domain: Sage Chat
// Types only — no logic.

export type MessageRole = "user" | "sage";

export interface SageMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
}

export interface SageSession {
  id: string;
  userId: string | null;
  ritualResultId: string | null;
  messages: SageMessage[];
  createdAt: string;
}
