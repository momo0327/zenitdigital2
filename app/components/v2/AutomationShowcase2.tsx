import Image from 'next/image';
import styles from './AutomationShowcase2.module.css';

const AutomationShowcase2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Automatisera det tunga jobbet</h2>
          <p className={styles.subtitle}>
            Vi bygger verktyg och dashboards som kopplar ihop dina system och
            sköter det repetitiva arbetet åt dig.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/images/v2/automationShowcase.png"
            alt="Zenia Digital automation dashboard"
            width={2000}
            height={1972}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase2;
