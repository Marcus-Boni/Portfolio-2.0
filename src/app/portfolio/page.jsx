import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Marcus Dev Portfolio',
  description:
    'Marcus Dev Portfolio Page - Handcrafting award winning digital experiences'
};

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
}
