import type { RitualResponse, RitualSession } from "@/domain/ritual";

export function currentTime() {
  return Date.now();
}

export function createSession(now = Date.now()): RitualSession {
  return {
    id: `ritual-${now}`,
    startedAt: now,
    currentPrompt: 0,
    responses: [],
    status: "active",
  };
}

export function createGuestSession(now = Date.now()): RitualSession {
  return createSession(now);
}

export function recordResponse(
  session: RitualSession,
  response: Omit<RitualResponse, "order">,
  promptCount: number,
): RitualSession {
  if (session.status === "complete") return session;
  const responses = [...session.responses, { ...response, order: session.responses.length }];
  const complete = responses.length >= promptCount;
  return {
    ...session,
    responses,
    currentPrompt: complete ? session.currentPrompt : session.currentPrompt + 1,
    status: complete ? "complete" : "active",
  };
}
