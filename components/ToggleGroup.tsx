"use client";
import styles from '@/app/page.module.css';

export type ToggleOption<T extends string> = {
  label: string;
  value: T;
};

export function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: ToggleOption<T>[];
  value: T[];
  onChange: (next: T[]) => void;
}) {
  function toggle(val: T) {
    const set = new Set(value);
    if (set.has(val)) {
      set.delete(val);
    } else {
      set.add(val);
    }
    onChange(Array.from(set));
  }

  return (
    <div className={styles.toggleGroup}>
      {options.map((opt) => {
        const active = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            className={`${styles.toggle} ${active ? styles.toggleActive : ''}`}
            onClick={() => toggle(opt.value)}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
