import type { ReactNode } from "react";
import type { Tone } from "../types";

const SIZE = {
  md: "pill--md",
  sm: "pill--sm",
} as const;

const TONE: Record<Tone, string> = {
  neutral: "var(--tone-neutral)",
  accent: "var(--tone-accent)",
  success: "var(--tone-success)",
  danger: "var(--tone-danger)",
};

export type PillProps = {
  /** The label. Carries the meaning on its own, so color is never the only cue. */
  children: ReactNode;
  /** Semantic color role. Defaults to `neutral`. */
  tone?: Tone;
  /** Label size. `md` (default) or `sm` for dense rows. */
  size?: keyof typeof SIZE;
};

/**
 * A compact inline label for a short status or category. Sits beside content
 * rather than replacing it.
 */
export function Pill({ children, tone = "neutral", size = "md" }: PillProps) {
  return (
    <span className={`pill ${SIZE[size]}`} style={{ color: TONE[tone] }}>
      {children}
    </span>
  );
}
