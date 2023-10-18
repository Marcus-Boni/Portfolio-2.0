'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useRegisterForm } from '../hooks';

export default function Register() {
  const { handleSubmit } = useRegisterForm();
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="register"
          placeholder="username"
          className={styles.input}
          required
        />
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
          Register
        </button>
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}
