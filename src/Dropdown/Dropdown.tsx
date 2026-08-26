import type { ReactNode } from "react";

/** A choice: a bare string is both value and label; the object form separates them. */
export type Option = string | { value: string; label: ReactNode };

function valueOf(option: Option): string {
  return typeof option === "string" ? option : option.value;
}

function labelOf(option: Option): ReactNode {
  return typeof option === "string" ? option : option.label;
}

export type DropdownProps = {
  /** The choices, in the order they should appear. */
  options: Option[];
  /** Visible label above the control. */
  label?: ReactNode;
  /** Selected value. Leave unset to let the control manage its own. */
  value?: string;
  /** Fires with the newly selected value. */
  onChange?: (value: string) => void;
  /** Shown as a first, unselectable entry while nothing is chosen. */
  placeholder?: string;
};

/**
 * A single-select control that collapses its choices behind a trigger. Prefer it
 * over a row of radios once there are more than about five options, or when the
 * labels are too long to sit side by side.
 */
export function Dropdown({ options, label, value, onChange, placeholder }: DropdownProps) {
  return (
    <label className="field">
      {label ? <span className="field__label">{label}</span> : null}
      <select
        className="field__control"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={valueOf(option)} value={valueOf(option)}>
            {labelOf(option)}
          </option>
        ))}
      </select>
    </label>
  );
}
