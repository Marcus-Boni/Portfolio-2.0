'use client';

import useSWR from 'swr';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const session = useSession();

  const router = useRouter();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (session.status === 'loading') return <div>Loading...</div>;

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  console.log(session);

  if (session.status === 'authenticated') {
    return <div className={styles.container}>Dashboard!</div>;
  }
}
