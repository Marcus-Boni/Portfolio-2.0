import styles from './page.module.css';

export default function BlogLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        <div className={styles.loadingCircle}></div>
        <div className={styles.loadingShadow}></div>
      </div>
    </div>
  );
}
