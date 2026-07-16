export const colors = {
  lapis:      "#173f78",
  lapisLight: "#24569a",
  gold:       "#c89b3c",
  paleGold:   "#e5cc8d",
  ivory:      "#f7f0df",
  paper:      "#fffaf0",
  vermilion:  "#c84d34",
  jade:       "#4f7768",
  maroon:     "#6f2737",
  ink:        "#182238",
  muted:      "#706b65",
} as const;

/** Base-4 spacing scale (px). */
export const spacing = {
  "1":  "4px",
  "2":  "8px",
  "3":  "12px",
  "4":  "16px",
  "5":  "20px",
  "6":  "24px",
  "8":  "32px",
  "12": "48px",
  "16": "64px",
  "24": "96px",
} as const;

/** Display & body type scale. */
export const typography = {
  fontDisplay: '"Iowan Old Style", "Baskerville", Georgia, serif',
  fontSans:    "Inter, ui-sans-serif, system-ui, sans-serif",
  scale: {
    "2xs": "8px",
    xs:    "9px",
    sm:    "10px",
    base:  "13px",
    md:    "15px",
    lg:    "18px",
    xl:    "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "38px",
    "5xl": "46px",
    "6xl": "60px",
  },
  leading: {
    /** Matches the display heading rule in globals.css */
    tight:  "0.98",
    snug:   "1.25",
    normal: "1.4",
    relaxed: "1.65",
  },
  tracking: {
    eyebrow: ".20em",
    caps:    ".12em",
    brand:   ".13em",
    loose:   ".25em",
  },
} as const;

/** Elevation / shadow tokens. */
export const shadows = {
  none:   "none",
  sm:     "0 2px 6px rgba(24, 34, 56, .06)",
  md:     "0 7px 18px rgba(24, 34, 56, .08)",
  lg:     "0 18px 50px rgba(24, 34, 56, .22)",
  shell:  "0 0 70px rgba(24, 34, 56, .14)",
} as const;

/** Share-card safe-zone constants (9:16 ratio). */
export const shareCard = {
  ratio:        "9 / 16" as const,
  maxWidth:     "330px",
  paddingX:     "30px",
  paddingTop:   "48px",
  paddingBottom:"28px",
  borderWidth:  "6px",
  innerInset:   "12px",
  cornerSize:   "34px",
  cornerInset:  "18px",
} as const;
