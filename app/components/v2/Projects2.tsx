'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Projects2.module.css';

const PROJECTS = [
  { name: 'The Mathrix Challenge', image: '/images/v2/project-mathrix.png' },
  { name: 'Sqiliz', image: '/images/v2/project-sqiliz.png' },
  { name: 'STC Functional', image: '/images/v2/project-stc.png' },
  { name: 'Soratem', image: '/images/v2/project-soratem.png' },
];

const Projects2 = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    PROJECTS.map(() => false)
  );

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 120}ms`;
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Utvalda projekt</h2>
          <p className={styles.subtitle}>
            Ett litet urval av varumärken och digitala produkter vi byggt för
            grundare och växande företag.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`${styles.item} ${visible[i] ? styles.visible : ''}`}
            >
              <div className={styles.card}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={styles.cardImage}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                )}
              </div>
              <p className={styles.caption}>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
