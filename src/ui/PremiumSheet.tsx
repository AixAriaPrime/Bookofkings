import { useEffect, useRef } from "react";
import { PREMIUM_PRODUCT } from "@/services/premium";

export function PremiumSheet({
  onClose,
  onSubscribe,
}: {
  onClose: () => void;
  onSubscribe: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="premium-sheet reveal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="premium-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close premium offer"
        >
          ×
        </button>
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
