"use client";

import { FormEvent, useState } from "react";
import type { MirrorResult } from "@/domain/ritual";
import { formatSageResponse } from "@/services/chat";

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
  const [reply, setReply] = useState("");

  function ask(event: FormEvent) {
    event.preventDefault();
    if (!question.trim()) return;
    setReply(formatSageResponse(question).content);
    setQuestion("");
  }

  return (
    <section className="sage-view reveal">
      <header className="section-heading">
        <p className="eyebrow">A deeper reading</p>
        <h1>The Sage’s chamber</h1>
        <p>Let the first answer settle. Then look beneath it.</p>
      </header>
      <article className="sage-answer illuminated-panel">
        <span className="panel-number">I</span>
        <div>
          <p className="eyebrow">Your pattern today</p>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
        </div>
      </article>
      <article className="context-panel">
        <p className="eyebrow">From the storytelling tradition</p>
        <h3>The wisdom of the pause</h3>
        <p>
          In the Shahnameh, a hero’s truest test is often the moment before action:
          the pause in which courage, loyalty, and consequence are weighed together.
        </p>
      </article>
      <article className="practice-panel">
        <span aria-hidden="true">◇</span>
        <div>
          <p className="eyebrow">A practice for today</p>
          <p>{result.nextStep}</p>
        </div>
      </article>
      {isPremium ? (
        <form className="sage-chat" onSubmit={ask}>
          <label htmlFor="sage-question">Ask the Sage a follow-up</label>
          {reply && <p className="sage-reply">{reply}</p>}
          <div>
            <input
              id="sage-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What does this reveal about…"
            />
            <button aria-label="Send question" type="submit">↑</button>
          </div>
        </form>
      ) : (
        <button className="depth-lock" onClick={onPremium}>
          <span>✦</span>
          <span><b>Continue deeper</b>Unlimited Sage follow-ups with Premium</span>
          <span>›</span>
        </button>
      )}
    </section>
  );
}

