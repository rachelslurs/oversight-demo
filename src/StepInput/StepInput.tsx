import { useState } from "react";

export type StepInputProps = {
  label: string;
  /** Starting value. Leave unset to begin at the lower bound. */
  value?: number;
  /** Fires with the new value after it has been clamped to the bounds. */
  onChange?: (value: number) => void;
  /** Lower bound, inclusive. Defaults to 0. */
  min?: number;
  /** Upper bound, inclusive. Defaults to 10. */
  max?: number;
};

/**
 * A numeric control that moves in single steps between two bounds. Use it for
 * small counts a person nudges rather than types.
 */
export function StepInput({ label, value, onChange, min = 0, max = 10 }: StepInputProps) {
  const [current, setCurrent] = useState(value ?? min);

  const commit = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setCurrent(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="field">
      <span className="field__label">{label}</span>
      <div className="stepper" role="group" aria-label={label}>
        <button
          type="button"
          className="stepper__button"
          onClick={() => commit(current - 1)}
          disabled={current <= min}
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="stepper__value">{current}</span>
        <button
          type="button"
          className="stepper__button"
          onClick={() => commit(current + 1)}
          disabled={current >= max}
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
