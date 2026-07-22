import { MobileApp } from "@/ui/MobileApp";

const highlights = [
  {
    title: "A two-minute daily ritual",
    description:
      "Move from noise to clarity with a short guided reflection designed to fit any schedule.",
  },
  {
    title: "Story-rooted self-knowledge",
    description:
      "Discover archetypes and lessons inspired by Persian storytelling, reimagined for modern life.",
  },
  {
    title: "Private by default",
    description:
      "No account is needed. Your reflections stay local to your device unless you choose to export.",
  },
];

export default function Home() {
  return (
    <div className="project-site">
      <header className="project-hero">
        <p className="project-kicker">Book of Kings</p>
        <p className="project-title">Your daily mirror for focus, meaning, and growth.</p>
        <p>
          Book of Kings blends timeless Persian inspiration with a modern reflection ritual,
          helping you pause, answer honestly, and carry a clear intention into your day.
        </p>
        <a href="#experience" className="project-cta">
          Experience the ritual
        </a>
      </header>

      <section className="project-highlights" aria-label="Core highlights">
        {highlights.map((highlight) => (
          <article key={highlight.title}>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <section id="experience" className="project-experience" aria-label="Interactive app experience">
        <div className="project-experience-copy">
          <p className="project-kicker">Live experience</p>
          <h2>Explore the full product directly on this page.</h2>
          <p>
            Start the daily ritual, reveal your mirror archetype, open Sage mode, and browse
            learning stories—everything is fully functional below.
          </p>
        </div>
        <MobileApp />
      </section>
    </div>
  );
}
