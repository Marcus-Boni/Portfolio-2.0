import Link from 'next/link';
import styles from './button.module.css';

export const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button type="button" className={styles.container}>
        {text}
      </button>
    </Link>
  );
};
