import styles from './loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.loadingCircle}></div>
        <div className={styles.loadingShadow}></div>
      </div>
    </div>
  );
};
