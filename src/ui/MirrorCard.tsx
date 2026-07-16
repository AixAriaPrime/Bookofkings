import type { MirrorResult } from "@/domain/ritual";

export function MirrorCard({ result }: { result: MirrorResult }) {
  return (
    <article
      className="mirror-card"
      aria-label={`Mirror result: ${result.title}`}
      data-palette={result.asset.palette}
      data-template={result.asset.template}
    >
      <div className="corner corner-nw" />
      <div className="corner corner-ne" />
      <p className="card-mark">آینه · MIRROR</p>
      <div className="sun-mark" aria-hidden="true">✦</div>
      <p className="card-archetype">{result.archetype}</p>
      <h2>{result.title}</h2>
      <p className="card-summary">{result.summary}</p>
      <blockquote>“{result.shareText}”</blockquote>
      <div className="card-foot">
        <span>BOOK OF KINGS</span>
        <span>✦</span>
      </div>
    </article>
  );
}
