import { Button } from '@/components/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { convertFirstLetterToUppercase, getCategoryData } from '@/utils';

export async function generateMetadata({ params }) {
  const { categoryName } = params;
  const data = getCategoryData(categoryName);
  const convertedCategoryName = convertFirstLetterToUppercase(categoryName);

  return {
    title: `${convertedCategoryName} - Marcus Dev`,
    description: data[0].desc
  };
}

export default function Category({ params: { categoryName } }) {
  const data = getCategoryData(categoryName);
  const convertedCategoryName = convertFirstLetterToUppercase(categoryName);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{convertedCategoryName}</h1>
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
