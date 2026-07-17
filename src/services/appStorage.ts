import type { MirrorResult, RitualSession } from "@/domain/ritual";

const APP_STATE_KEY = "book-of-kings-app-state";

export interface SavedMirror {
  result: MirrorResult;
  savedAt: string;
}

export interface AppState {
  session: RitualSession | null;
  result: MirrorResult;
  isPremium: boolean;
  history: SavedMirror[];
}

export function loadAppState(storage: Pick<Storage, "getItem">): AppState | null {
  try {
    const value = storage.getItem(APP_STATE_KEY);
    if (!value) return null;
    const state: unknown = JSON.parse(value);
    return isAppState(state) ? state : null;
  } catch {
    return null;
  }
}

export function saveAppState(
  storage: Pick<Storage, "setItem">,
  state: AppState,
) {
  try {
    storage.setItem(APP_STATE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable in private browsing or when its quota is full.
  }
}

function isAppState(value: unknown): value is AppState {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<AppState>;
  return (
    (state.session === null || isSession(state.session)) &&
    isResult(state.result) &&
    typeof state.isPremium === "boolean" &&
    Array.isArray(state.history) &&
    state.history.every(
      (entry) =>
        entry &&
        typeof entry === "object" &&
        typeof (entry as SavedMirror).savedAt === "string" &&
        isResult((entry as SavedMirror).result),
    )
  );
}

function isSession(value: unknown): value is RitualSession {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<RitualSession>;
  return (
    typeof session.id === "string" &&
    typeof session.startedAt === "number" &&
    typeof session.currentPrompt === "number" &&
    Array.isArray(session.responses) &&
    (session.status === "active" || session.status === "complete")
  );
}

function isResult(value: unknown): value is MirrorResult {
  if (!value || typeof value !== "object") return false;
  const result = value as Partial<MirrorResult>;
  return (
    typeof result.archetype === "string" &&
    typeof result.title === "string" &&
    typeof result.summary === "string" &&
    typeof result.body === "string" &&
    typeof result.shareText === "string" &&
    typeof result.nextStep === "string" &&
    typeof result.asset === "object" &&
    result.asset !== null &&
    typeof result.asset.palette === "string" &&
    typeof result.asset.template === "string"
  );
}
