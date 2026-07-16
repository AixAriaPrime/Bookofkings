export type ChatMode = "mirror" | "sage";
const SUBJECT_LINE_LENGTH = 80;
const MAX_SUBJECT_LINES = 2;
const MAX_SUBJECT_LENGTH = SUBJECT_LINE_LENGTH * MAX_SUBJECT_LINES;

export interface ChatMessage {
  role: "user" | ChatMode;
  content: string;
}

export interface ChatResponse extends ChatMessage {
  mode: ChatMode;
  interpretation: string;
  culturalReference?: string;
  practicalInsight?: string;
}

function subjectFrom(input: string) {
  return input.trim().replace(/\s+/g, " ").slice(0, MAX_SUBJECT_LENGTH) || "this moment";
}

export function formatMirrorResponse(input: string): ChatResponse {
  const subject = subjectFrom(input);
  const interpretation = `${subject} may be asking for one honest, manageable next step.`;

  return {
    role: "mirror",
    mode: "mirror",
    interpretation,
    content: interpretation,
  };
}

export function formatSageResponse(input: string): ChatResponse {
  const subject = subjectFrom(input);
  const interpretation = `Consider ${subject} as a question rather than a verdict. A deeper reading asks what patience, courage, and consequence reveal together.`;
  const culturalReference = "In the Shahnameh, heroes often pause to weigh loyalty and consequence before they act.";
  const practicalInsight = "Name one value you want your next small action to protect.";

  return {
    role: "sage",
    mode: "sage",
    interpretation,
    culturalReference,
    practicalInsight,
    content: `${interpretation} Cultural reference: ${culturalReference} Practical insight: ${practicalInsight}`,
  };
}

export function formatChatResponse(mode: ChatMode, input: string) {
  return mode === "mirror"
    ? formatMirrorResponse(input)
    : formatSageResponse(input);
}

export async function* streamChatResponse(
  mode: ChatMode,
  input: string,
  delayMs = 0,
) {
  const words = formatChatResponse(mode, input).content.split(" ");
  for (const word of words) {
    if (delayMs > 0) await new Promise((resolve) => setTimeout(resolve, delayMs));
    yield `${word} `;
  }
}

export async function* streamSageResponse(input: string, delayMs = 0) {
  yield* streamChatResponse("sage", input, delayMs);
}
