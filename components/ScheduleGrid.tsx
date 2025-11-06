import styles from '@/app/page.module.css';
import { ClassItem } from '@/data/schedule';

export function ScheduleGrid({ classes }: { classes: ClassItem[] }) {
  return (
    <section className={styles.grid}>
      {classes.map((c) => (
        <article key={`${c.day}-${c.time}-${c.name}`} className={styles.card}>
          <div>
            <span className={`${styles.badge} ${badgeClass(c.style)}`}>{c.style}</span>
          </div>
          <h3>{c.name}</h3>
          <div className={styles.time}>{c.time}</div>
          <div className={styles.room}>{capitalize(c.day)} ? {c.room}</div>
          {c.level && <div className={styles.room}>Niveau: {c.level}</div>}
          {c.teacher && <div className={styles.room}>Docent: {c.teacher}</div>}
        </article>
      ))}
    </section>
  );
}

function badgeClass(style: ClassItem['style']) {
  if (style === 'Salsa') return styles.badgeSalsa;
  if (style === 'Bachata') return styles.badgeBachata;
  return styles.badgeKizomba;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
