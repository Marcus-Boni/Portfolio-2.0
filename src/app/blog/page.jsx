import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function page() {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/testId`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3218718/pexels-photo-3218718.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
      <Link href={`/blog/testId`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3218718/pexels-photo-3218718.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
      <Link href={`/blog/testId`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3218718/pexels-photo-3218718.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
    </div>
  );
}
