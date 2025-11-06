"use client";
import { useMemo, useState } from 'react';
import styles from './page.module.css';
import { weeklySchedule, DanceStyle, DayKey } from '@/data/schedule';
import { ToggleGroup } from '@/components/ToggleGroup';
import { ScheduleGrid } from '@/components/ScheduleGrid';

export default function Page() {
  const [activeStyles, setActiveStyles] = useState<DanceStyle[]>(['Salsa', 'Bachata', 'Kizomba']);
  const [activeDays, setActiveDays] = useState<DayKey[]>(['maandag', 'dinsdag', 'woensdag', 'donderdag']);

  const filtered = useMemo(() => {
    const allowedStyles = new Set(activeStyles);
    const allowedDays = new Set(activeDays);
    return weeklySchedule.filter((c) => allowedStyles.has(c.style) && allowedDays.has(c.day));
  }, [activeStyles, activeDays]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Danslessen Rooster</h1>
        <p className={styles.subtitle}>Filter op stijl en dag (maandag t/m donderdag)</p>
      </header>

      <section className={styles.filters}>
        <div className={styles.filterBlock}>
          <h2>Stijlen</h2>
          <ToggleGroup<DanceStyle>
            options={[
              { label: 'Salsa', value: 'Salsa' },
              { label: 'Bachata', value: 'Bachata' },
              { label: 'Kizomba', value: 'Kizomba' },
            ]}
            value={activeStyles}
            onChange={setActiveStyles}
          />
        </div>
        <div className={styles.filterBlock}>
          <h2>Dagen</h2>
          <ToggleGroup<DayKey>
            options={[
              { label: 'Maandag', value: 'maandag' },
              { label: 'Dinsdag', value: 'dinsdag' },
              { label: 'Woensdag', value: 'woensdag' },
              { label: 'Donderdag', value: 'donderdag' },
            ]}
            value={activeDays}
            onChange={setActiveDays}
          />
        </div>
      </section>

      <ScheduleGrid classes={filtered} />

      <footer className={styles.footer}>
        <small>? {new Date().getFullYear()} Dansstudio ? Rooster onder voorbehoud</small>
      </footer>
    </main>
  );
}
