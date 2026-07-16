import type {
  MirrorResult,
  RitualPrompt,
  RitualSession,
  TraitVector,
} from "@/domain/ritual";
import { nextPrompt } from "@/services/promptEngine";
import { generateResult } from "@/services/resultEngine";
import { mapArchetype, scoreResponses } from "@/services/scoring";
import { createGuestSession, recordResponse } from "@/services/session";

export interface RitualTransition {
  session: RitualSession;
  prompt: RitualPrompt | null;
  vector: TraitVector | null;
  result: MirrorResult | null;
}

export interface ResponseInput {
  promptId: string;
  answer: string;
  responseTimeMs: number;
}

export function startGuestRitual(
  prompts: RitualPrompt[],
  now = Date.now(),
): RitualTransition {
  validatePrompts(prompts);
  const session = createGuestSession(now);
  return { session, prompt: nextPrompt(prompts, session), vector: null, result: null };
}

export function submitRitualResponse(
  prompts: RitualPrompt[],
  session: RitualSession,
  input: ResponseInput,
): RitualTransition {
  validatePrompts(prompts);
  const prompt = nextPrompt(prompts, session);
  if (!prompt) throw new Error("The ritual is already complete");
  if (prompt.id !== input.promptId) throw new Error("Response does not match the current prompt");

  const answer = normalizeAnswer(prompt, input.answer);
  const updated = recordResponse(
    session,
    {
      promptId: prompt.id,
      selectedAnswer: answer,
      responseTimeMs: normalizeResponseTime(input.responseTimeMs),
    },
    prompts.length,
  );

  if (updated.status === "complete") {
    const vector = scoreResponses(updated.responses, prompts);
    return {
      session: updated,
      prompt: null,
      vector,
      result: generateResult(mapArchetype(vector)),
    };
  }

  return {
    session: updated,
    prompt: nextPrompt(prompts, updated),
    vector: null,
    result: null,
  };
}

function normalizeAnswer(prompt: RitualPrompt, answer: string): string {
  const normalized = answer.trim();
  if (prompt.type === "text") {
    if (!normalized && !prompt.optional) {
      throw new Error(`A response is required for prompt: ${prompt.id}`);
    }
    return normalized;
  } else if (!prompt.options.some((option) => option.id === normalized)) {
    throw new Error("Response is not a valid prompt option");
  }
  return normalized;
}

function normalizeResponseTime(responseTimeMs: number): number {
  if (!Number.isFinite(responseTimeMs)) throw new Error("Response time must be finite");
  return Math.max(0, Math.round(responseTimeMs));
}

function validatePrompts(prompts: RitualPrompt[]) {
  if (prompts.length === 0) throw new Error("A ritual requires at least one prompt");
  const ids = new Set(prompts.map((prompt) => prompt.id));
  if (ids.size !== prompts.length) throw new Error("Prompt ids must be unique");
}
