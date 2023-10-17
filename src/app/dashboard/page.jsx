'use client';

import useSWR from 'swr';
import styles from './page.module.css';

export default function Dashboard() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
}
