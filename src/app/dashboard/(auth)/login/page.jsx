'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.css';
import { useRegisterForm } from '../hooks';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { handleSubmitLogin } = useRegisterForm();

  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') return <div>Loading...</div>;

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmitLogin}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <button type="button" onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
}
