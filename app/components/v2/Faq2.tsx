'use client'
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Faq2.module.css';

const faqs = [
  {
    q: 'Hur ser ert process ut?',
    a: 'Vi börjar med en kort discovery-fas — vanligtvis en vecka — för att stämma av mål, användare och omfattning. Därefter går vi vidare till design och sedan utveckling, med veckovisa avstämningar så att det aldrig blir några överraskningar på slutet.',
  },
  {
    q: 'Hur lång tid tar ett typiskt projekt?',
    a: 'De flesta projekt tar mellan 6 och 16 veckor beroende på omfattning. En varumärkesidentitet tar ungefär 4–6 veckor. En fullständig webbplats med skräddarsytt CMS tar vanligtvis 8–10 veckor. Ett produkt- eller dashboard-projekt tar 12–16 veckor.',
  },
  {
    q: 'Jobbar ni med tidiga startups?',
    a: 'Ja — många av våra favoritprojekt har varit med grundare som är pre-launch eller precis finansierade. Vi vet hur man rör sig snabbt och får begränsade budgetar att räcka långt.',
  },
  {
    q: 'Kan ni hantera design och utveckling tillsammans?',
    a: 'Det är exakt vad vi gör. Design och utveckling finns under samma tak, så överlämningar sker direkt och det vi levererar matchar det vi designat — pixel för pixel.',
  },
  {
    q: 'Vad kostar det?',
    a: 'Projekt scopas och prissätts per uppdrag. De flesta hamnar mellan 80 000 kr och 400 000 kr beroende på omfattning och tidsram. Vi delar gärna en ungefärlig uppskattning efter ett 20-minuters introsamtal.',
  },
  {
    q: 'Erbjuder ni löpande support efter lansering?',
    a: 'Ja. Vi erbjuder månadsvisa avtal för team som vill ha oss tillgängliga för iterationer, nya funktioner eller underhåll. Vi kan även lämna över till ert interna team med fullständig dokumentation.',
  },
];

export default function Faq2() {
  const [open, setOpen] = useState<number | null>(null);
  const [headVisible, setHeadVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() =>
    faqs.map(() => false)
  );
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(
      list.querySelectorAll<HTMLLIElement>('[data-faq-item]')
    );
    const observers = items.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 60}ms`;
            setVisibleItems((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const toggle = useCallback(
    (i: number) => setOpen((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section id="faq2" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headRef}
          className={`${styles.head} ${styles.fadeDown} ${
            headVisible ? styles.visible : ''
          }`}
        >
          <h2 className={styles.title}>Vanliga frågor</h2>
        </div>

        <ul ref={listRef} className={styles.list}>
          {faqs.map((item, i) => (
            <li
              key={item.q}
              data-faq-item
              className={`${styles.item} ${styles.fadeDown} ${
                open === i ? styles.itemOpen : ''
              } ${visibleItems[i] ? styles.visible : ''}`}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                className={styles.question}
              >
                {item.q}
                <span className={styles.icon} />
              </button>
              <div className={styles.answer}>
                <p className={styles.answerText}>{item.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
