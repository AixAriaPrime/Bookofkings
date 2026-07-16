// UI: Button
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:   "bg-primary text-onPrimary shadow-md active:scale-[0.98] hover:brightness-105",
  secondary: "bg-surface-subtle text-onSurface border border-border active:scale-[0.98]",
  ghost:     "text-onSurface/70 hover:text-onSurface",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-xl",
  md: "text-base px-6 py-3 rounded-2xl",
  lg: "text-lg px-8 py-4 rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={[
        "font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        disabled || loading ? "opacity-50 cursor-not-allowed" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading...
        </span>
      ) : children}
    </button>
  );
}
