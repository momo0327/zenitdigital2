import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero2.module.css';

const Hero2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Copy */}
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Snabba
            <br />
            Digitala
            <br />
            Lösningar
          </h1>

          <p className={styles.subtitle}>
            Vi bygger snabba, skalbara digitala produkter som hjälper ditt
            företag att växa och nå nya höjder.
          </p>

          <Link href="/ContactPage" className={styles.cta}>
            Utforska
          </Link>
        </div>

        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/v2/heroImage2.png"
            alt="Zenia Digital app showcase"
            width={1200}
            height={1600}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
