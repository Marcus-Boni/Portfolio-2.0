import Image from 'next/image';
import styles from './page.module.css';
import { getPostsData } from '@/utils';

export async function generateMetadata({ params }) {
  const { id } = params;
  const { title, description } = await getPostsData(id);
  return {
    title,
    description
  };
}

export default async function BlogPost({ params: { id } }) {
  const { title, description, img, content, username } = await getPostsData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.author}>
            <Image
              src={img}
              alt="Blog Post Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={img}
            alt="Blog Post Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
}
