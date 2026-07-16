"use client";

import { useEffect, useRef, useState } from "react";
import { DAILY_PROMPTS } from "@/data/prompts";
import { LEARNING_STORIES } from "@/data/learning";
import type { MirrorResult, RitualSession } from "@/domain/ritual";
import type { Route } from "@/navigation/routes";
import { track } from "@/services/analytics";
import { exportMirrorCard, mirrorCardExportMetadata } from "@/services/cardRenderer";
import { nextPrompt } from "@/services/promptEngine";
import { generateResult } from "@/services/resultEngine";
import { isReturnVisit, markRitualComplete, markVisit } from "@/services/retention";
import { startGuestRitual, submitRitualResponse } from "@/services/ritualEngine";
import { currentTime } from "@/services/session";
import { MirrorCard } from "./MirrorCard";
import { PremiumSheet } from "./PremiumSheet";
import { SagePanel } from "./SagePanel";

const defaultResult = generateResult("Gardener");
const navItems: { id: Route; label: string; glyph: string }[] = [
  { id: "ritual", label: "Today", glyph: "✦" },
  { id: "learn", label: "Discover", glyph: "⌘" },
  { id: "archive", label: "Archive", glyph: "◫" },
];

export function MobileApp() {
  const [route, setRoute] = useState<Route>("ritual");
  const [session, setSession] = useState<RitualSession | null>(null);
  const [result, setResult] = useState<MirrorResult>(defaultResult);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [reflection, setReflection] = useState("");
  const startedAt = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prompt = session ? nextPrompt(DAILY_PROMPTS, session) : null;

  useEffect(() => {
    track(isReturnVisit(localStorage) ? "return_visit" : "session_start");
    markVisit(localStorage);
  }, []);

  function begin() {
    const next = startGuestRitual(DAILY_PROMPTS);
    startedAt.current = currentTime();
    setSession(next.session);
    track("session_start");
  }

  function answer(selectedAnswer: string) {
    if (!session || !prompt) return;
    const transition = submitRitualResponse(
      DAILY_PROMPTS,
      session,
      {
        promptId: prompt.id,
        answer: selectedAnswer,
        responseTimeMs: currentTime() - startedAt.current,
      },
    );
    track("prompt_complete", { prompt: prompt.id });
    setSession(transition.session);
    startedAt.current = currentTime();
    if (transition.result) {
      setResult(transition.result);
      setRoute("mirror");
      markRitualComplete(localStorage);
      track("result_view");
    }
  }

  function navigate(next: Route) {
    if (next === "archive" && !isPremium) {
      track("premium_view", { source: "archive" });
      setPremiumOpen(true);
      return;
    }
    setRoute(next);
  }

  function openSage() {
    setRoute("sage");
    track("sage_open");
  }

  function share() {
    if (!canvasRef.current) return;
    const url = exportMirrorCard(canvasRef.current, result);
    const metadata = mirrorCardExportMetadata(result);
    const link = document.createElement("a");
    link.href = url;
    link.download = metadata.fileName;
    link.click();
    track("share_tap");
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate("ritual")}>
          <span className="brand-mark">✦</span>
          <span><b>BOOK OF KINGS</b><small>کتاب شاهان</small></span>
        </button>
        <button className="profile" aria-label="Open premium" onClick={() => setPremiumOpen(true)}>
          {isPremium ? "✦" : "Guest"}
        </button>
      </header>

      <div className="screen">
        {route === "ritual" && !session && (
          <section className="welcome reveal">
            <div className="miniature" aria-hidden="true">
              <span className="miniature-sun">✦</span>
              <span className="miniature-hill hill-a" />
              <span className="miniature-hill hill-b" />
              <span className="miniature-tree">♧</span>
            </div>
            <p className="eyebrow">Today’s mirror · 2 minutes</p>
            <h1>Meet yourself<br />at the threshold.</h1>
            <p className="welcome-copy">
              Three quiet choices and one optional thought. A reflection to carry into your day.
            </p>
            <button className="primary-button" onClick={begin}>Begin today’s ritual <span>→</span></button>
            <p className="privacy-note">No account needed · Your answers stay on this device</p>
          </section>
        )}

        {route === "ritual" && prompt && session && (
          <section className="ritual reveal">
            <div className="progress-row">
              <span>THE DAILY MIRROR</span>
              <span>{session.currentPrompt + 1} of {DAILY_PROMPTS.length}</span>
            </div>
            <div className="progress"><i style={{ width: `${((session.currentPrompt + 1) / DAILY_PROMPTS.length) * 100}%` }} /></div>
            <div className="prompt-ornament">✦</div>
            <p className="eyebrow">{prompt.eyebrow}</p>
            <h1>{prompt.question}</h1>
            {prompt.type === "text" ? (
              <div className="reflection-input">
                <textarea
                  value={reflection}
                  onChange={(event) => setReflection(event.target.value)}
                  placeholder="A word or a sentence…"
                  maxLength={280}
                />
                <button className="primary-button" onClick={() => answer(reflection)}>
                  See my mirror <span>→</span>
                </button>
                <button className="text-button" onClick={() => answer("")}>Skip for today</button>
              </div>
            ) : (
              <div className="answer-list">
                {prompt.options.map((option, index) => (
                  <button key={option.id} onClick={() => answer(option.id)}>
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option.label}
                    <i>›</i>
                  </button>
                ))}
              </div>
            )}
            <p className="instinct-note">There is no correct answer. Choose what feels true now.</p>
          </section>
        )}

        {route === "mirror" && (
          <section className="mirror-view reveal">
            <header className="section-heading">
              <p className="eyebrow">Your mirror for today</p>
              <h1>A truth worth carrying</h1>
            </header>
            <MirrorCard result={result} />
            <div className="mirror-actions">
              <button className="primary-button" onClick={openSage}>Enter Sage mode <span>✦</span></button>
              <button className="secondary-button" onClick={share}>Save share card <span>⇩</span></button>
            </div>
            <p className="tomorrow-note">Return tomorrow for a new mirror.</p>
            <canvas ref={canvasRef} hidden />
          </section>
        )}

        {route === "sage" && (
          <SagePanel
            result={result}
            isPremium={isPremium}
            onPremium={() => {
              track("premium_view", { source: "sage" });
              setPremiumOpen(true);
            }}
          />
        )}

        {route === "learn" && (
          <section className="learn-view reveal">
            <header className="section-heading">
              <p className="eyebrow">The living library</p>
              <h1>Persian stories,<br />open to the world.</h1>
              <p>Short readings for curiosity, context, and reflection.</p>
            </header>
            <div className="story-grid">
              {LEARNING_STORIES.map((story, index) => (
                <article key={story.title} className={`story-card story-${index}`}>
                  <p className="eyebrow">{story.kicker}</p>
                  <h2>{story.title}</h2>
                  <p>{story.body}</p>
                  <button aria-label={`Read ${story.title}`}>Read slowly <span>→</span></button>
                </article>
              ))}
            </div>
          </section>
        )}

        {route === "archive" && isPremium && (
          <section className="archive-view reveal">
            <header className="section-heading">
              <p className="eyebrow">Your private archive</p>
              <h1>A history of noticing</h1>
            </header>
            <MirrorCard result={result} />
          </section>
        )}
      </div>

      <nav className="bottom-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={route === item.id || (item.id === "ritual" && ["mirror", "sage"].includes(route)) ? "active" : ""}
            onClick={() => navigate(item.id)}
          >
            <span>{item.glyph}</span>{item.label}
          </button>
        ))}
      </nav>

      {premiumOpen && (
        <PremiumSheet
          onClose={() => setPremiumOpen(false)}
          onSubscribe={() => {
            setIsPremium(true);
            setPremiumOpen(false);
          }}
        />
      )}
    </main>
  );
}
