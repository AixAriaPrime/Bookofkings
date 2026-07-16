import { PREMIUM_PRODUCT } from "@/services/premium";

export function PremiumSheet({
  onClose,
  onSubscribe,
}: {
  onClose: () => void;
  onSubscribe: () => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="premium-sheet reveal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="premium-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <p className="premium-seal">✦</p>
        <p className="eyebrow">The complete manuscript</p>
        <h2 id="premium-title">{PREMIUM_PRODUCT.name}</h2>
        <p>Return to every reflection and travel further with the Sage.</p>
        <ul>
          <li>Full Mirror archive and comparison history</li>
          <li>Deeper Sage responses and follow-ups</li>
          <li>Premium cards and richer share templates</li>
          <li>Advanced Persian cultural learning</li>
        </ul>
        <button className="primary-button" onClick={onSubscribe}>
          Begin Premium · monthly
        </button>
        <small>One plan. Cancel any time. No streak pressure.</small>
      </section>
    </div>
  );
}

