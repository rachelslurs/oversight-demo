import type { ReactNode } from "react";
import type { Tone } from "../types";

const TONE: Record<Tone, string> = {
  neutral: "var(--tone-neutral)",
  accent: "var(--tone-accent)",
  success: "var(--tone-success)",
  danger: "var(--tone-danger)",
};

export type MediaCardProps = {
  /** Primary label, rendered bold at the top of the card. */
  title: ReactNode;
  /** Secondary line beneath the title, for supporting detail. */
  subtitle?: ReactNode;
  /** How many things the subject holds. Rendered as a trailing count. */
  items?: number;
  /** Tone of the leading accent bar. Defaults to `neutral`. */
  tone?: Tone;
  /** Makes the whole card activatable. Omit for a static surface. */
  onSelect?: () => void;
};

/**
 * A stacked surface that groups one subject's title, detail, and metadata into
 * a self-contained block. Use it in grids and galleries, where each item gets
 * its own column of space.
 */
export function MediaCard({ title, subtitle, items, tone = "neutral", onSelect }: MediaCardProps) {
  const content = (
    <>
      <span className="media__title">{title}</span>
      {subtitle ? <span className="media__subtitle">{subtitle}</span> : null}
      {items === undefined ? null : (
        <span className="media__meta">
          {items} {items === 1 ? "item" : "items"}
        </span>
      )}
    </>
  );
  const style = { borderLeftColor: TONE[tone] };
  return onSelect ? (
    <button type="button" className="media media--card" style={style} onClick={onSelect}>
      {content}
    </button>
  ) : (
    <div className="media media--card" style={style}>
      {content}
    </div>
  );
}
