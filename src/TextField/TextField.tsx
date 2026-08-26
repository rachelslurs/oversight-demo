import type { ReactNode } from "react";

const TYPE = {
  text: "text",
  email: "email",
  search: "search",
  url: "url",
} as const;

export type TextFieldProps = {
  /** Visible label above the field. Omit it and pass an `aria-label` instead. */
  label?: ReactNode;
  /** Current text. Leave unset to let the field manage its own. */
  value?: string;
  /** Fires with the full text after each edit. */
  onChange?: (value: string) => void;
  /** Hint shown inside the field while it is empty. */
  placeholder?: string;
  /** Which keyboard and validation the browser applies. Defaults to `text`. */
  type?: keyof typeof TYPE;
};

/**
 * A single-line text control. Use it for freeform input; for small numeric
 * counts, reach for a stepper instead.
 */
export function TextField({ label, value, onChange, placeholder, type = "text" }: TextFieldProps) {
  return (
    <label className="field">
      {label ? <span className="field__label">{label}</span> : null}
      <input
        className="field__control"
        type={TYPE[type]}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}
