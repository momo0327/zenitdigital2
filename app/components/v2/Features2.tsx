import Image from 'next/image';
import Link from 'next/link';
import styles from './Features2.module.css';

const FEATURE_CARDS = [
  {
    title: 'Snabb leverans',
    subtitle: 'Vi levererar digitala lösningar snabbt utan att kompromissa med kvaliteten.',
    icon: '/images/v2/icon-snap.png',
  },
  {
    title: 'Skräddarsydda lösningar',
    subtitle: 'Varje projekt byggs efter era specifika behov och mål.',
    icon: '/images/v2/icon-lamp.png',
  },
  {
    title: 'Support och expertis',
    subtitle: 'Ni får ett dedikerat team som finns med genom hela processen.',
    icon: '/images/v2/icon-pencil.png',
  },
] as const;

const Features2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Tryggt med oss</h2>
            <p className={styles.subtitle}>
              Vårt samarbete inkluderar tjänster som gör det både smidigt och
              tryggt för dig som kund.
            </p>
          </div>

          <Link href="/ContactPage" className={styles.cta}>
            Läs mer
          </Link>
        </div>

        <div className={styles.grid}>
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image
                  src={card.icon}
                  alt=""
                  width={160}
                  height={160}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;
