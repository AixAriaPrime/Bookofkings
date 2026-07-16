export interface ChatMessage {
  role: "user" | "sage";
  content: string;
}

export function formatSageResponse(input: string): ChatMessage {
  const subject = input.trim() || "this moment";
  return {
    role: "sage",
    content: `Consider ${subject} as a question rather than a verdict. What changes when you meet it with patience?`,
  };
}

export async function* streamSageResponse(input: string) {
  const words = formatSageResponse(input).content.split(" ");
  for (const word of words) yield `${word} `;
}

