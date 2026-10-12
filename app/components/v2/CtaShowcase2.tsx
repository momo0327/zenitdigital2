import Image from 'next/image';
import Link from 'next/link';
import styles from './CtaShowcase2.module.css';

const CtaShowcase2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Skapa din digitala lösning idag</h2>
        <p className={styles.subtitle}>
          Vi hjälper dig från idé till lansering — snabbt, snyggt och byggt
          för att växa med ditt företag.
        </p>
        <Link href="/ContactPage" className={styles.cta}>
          Kom igång
        </Link>

        <div className={styles.imageWrap}>
          <Image
            src="/images/v2/ctaShowcase.png"
            alt="Zenia Digital produktvisning"
            width={2000}
            height={1538}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaShowcase2;
