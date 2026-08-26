import type { ReactNode } from "react";
import type { Tone } from "../types";

const TONE: Record<Tone, string> = {
  neutral: "var(--tone-neutral)",
  accent: "var(--tone-accent)",
  success: "var(--tone-success)",
  danger: "var(--tone-danger)",
};

export type MediaRowProps = {
  /** Primary label, rendered bold at the start of the row. */
  title: ReactNode;
  /** Secondary line beneath the title, for supporting detail. */
  subtitle?: ReactNode;
  /** How many things the subject holds. Rendered as a trailing count. */
  items?: number;
  /** Tone of the leading accent bar. Defaults to `neutral`. */
  tone?: Tone;
  /** Makes the whole row activatable. Omit for a static surface. */
  onSelect?: () => void;
};

/**
 * A horizontal surface that lays one subject's title, detail, and metadata on a
 * single line. Use it in dense lists, where many items share a narrow column.
 */
export function MediaRow({ title, subtitle, items, tone = "neutral", onSelect }: MediaRowProps) {
  const content = (
    <>
      <span>
        <span className="media__title">{title}</span>
        {subtitle ? (
          <>
            <br />
            <span className="media__subtitle">{subtitle}</span>
          </>
        ) : null}
      </span>
      {items === undefined ? null : (
        <span className="media__meta">
          {items} {items === 1 ? "item" : "items"}
        </span>
      )}
    </>
  );
  const style = { borderLeftColor: TONE[tone] };
  return onSelect ? (
    <button type="button" className="media media--row" style={style} onClick={onSelect}>
      {content}
    </button>
  ) : (
    <div className="media media--row" style={style}>
      {content}
    </div>
  );
}
