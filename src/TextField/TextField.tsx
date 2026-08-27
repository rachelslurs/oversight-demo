import type { ReactNode } from "react";

const TYPE = {
  text: "text",
  email: "email",
  search: "search",
  url: "url",
} as const;

export type TextFieldProps = {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
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
