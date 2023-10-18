import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { getBlogData } from '@/utils';

export const metadata = {
  title: 'Marcus Dev Blog',
  description:
    'Marcus Dev Blog Page - Handcrafting award winning digital experiences'
};

export default async function page() {
  const data = await getBlogData();
  return (
    <div className={styles.mainContainer}>
      {data.map(({ _id, title, description, img, content, username }) => (
        <Link href={`/blog/${_id}`} className={styles.container} key={_id}>
          <div className={styles.imageContainer}>
            <Image
              src={img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
