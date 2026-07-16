"use client";

import { type FormEvent, useState } from "react";
import type { MirrorResult } from "@/domain/ritual";
import {
  type ChatMessage,
  type ChatMode,
  streamChatResponse,
} from "@/services/chat";

const ROLE_LABELS: Record<ChatMessage["role"], string> = {
  user: "You",
  mirror: "Mirror",
  sage: "Sage",
};

export function SagePanel({
  result,
  isPremium,
  onPremium,
}: {
  result: MirrorResult;
  isPremium: boolean;
  onPremium: () => void;
}) {
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState<ChatMode>("sage");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isReplying, setIsReplying] = useState(false);

  async function ask(event: FormEvent) {
    event.preventDefault();
    const prompt = question.trim();
    if (!prompt || isReplying) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: prompt },
      { role: mode, content: "" },
    ]);
    setQuestion("");
    setIsReplying(true);

    for await (const token of streamChatResponse(mode, prompt, 20)) {
      setMessages((current) => {
        const next = [...current];
        const reply = next.pop();
        return reply
          ? [...next, { ...reply, content: reply.content + token }]
          : current;
      });
    }
    setIsReplying(false);
  }

  return (
    <section className="sage-view reveal">
      <header className="section-heading sage-layer sage-layer-header">
        <p className="eyebrow">A deeper reading</p>
        <h2>The Sage’s chamber</h2>
        <p>Let the first answer settle. Then look beneath it.</p>
      </header>
      <article className="sage-answer illuminated-panel sage-layer sage-layer-answer">
        <span className="panel-number">I</span>
        <div>
          <p className="eyebrow">Your pattern today</p>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
        </div>
      </article>
      <article className="context-panel sage-layer sage-layer-context">
        <p className="eyebrow">From the storytelling tradition</p>
        <h3>The wisdom of the pause</h3>
        <p>
          In the Shahnameh, a hero’s truest test is often the moment before action:
          the pause in which courage, loyalty, and consequence are weighed together.
        </p>
      </article>
      <article className="practice-panel sage-layer sage-layer-practice">
        <span aria-hidden="true">◇</span>
        <div>
          <p className="eyebrow">A practice for today</p>
          <p>{result.nextStep}</p>
        </div>
      </article>
      {isPremium ? (
        <form className="sage-chat sage-layer sage-layer-follow-up" onSubmit={ask}>
          <label htmlFor="sage-question">Ask the Sage a follow-up</label>
          <div className="chat-mode" aria-label="Response depth">
            <button
              type="button"
              aria-pressed={mode === "mirror"}
              onClick={() => setMode("mirror")}
            >
              Mirror · brief
            </button>
            <button
              type="button"
              aria-pressed={mode === "sage"}
              onClick={() => setMode("sage")}
            >
              Sage · deeper
            </button>
          </div>
          {messages.length > 0 && (
            <div className="chat-thread" aria-live="polite" aria-busy={isReplying}>
              {messages.map((message, index) => (
                <p
                  className={`chat-message chat-message-${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  <b>{ROLE_LABELS[message.role]}</b>
                  {message.content || "…"}
                </p>
              ))}
            </div>
          )}
          <div>
            <input
              id="sage-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What does this reveal about…"
            />
            <button aria-label="Send question" type="submit" disabled={isReplying}>↑</button>
          </div>
        </form>
      ) : (
        <button className="depth-lock sage-layer sage-layer-follow-up" onClick={onPremium}>
          <span>✦</span>
          <span><b>Continue deeper</b>Unlimited Sage follow-ups with Premium</span>
          <span>›</span>
        </button>
      )}
    </section>
  );
}
