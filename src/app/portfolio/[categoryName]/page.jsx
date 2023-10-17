import { Button } from '@/components/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { getCategoryData } from '@/utils';

export default function Category({ params: { categoryName } }) {
  const data = getCategoryData(categoryName);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{categoryName}</h1>
      {data.map(({ id, title, desc, image }) => (
        <div className={styles.item} key={id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{desc}</p>
            <Button text="See More" url="/" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={image}
              alt="Category Image"
              fill
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
