'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/config';
import styles from './navbar.module.css';
import { DarkModeToggle } from '../DarkModeToggle';

export const NavBar = () => {
  const session = useSession();

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        Marcus{' '}
      </Link>
      <nav className={styles.links}>
        <DarkModeToggle />
        {links.map(({ id, title, url }) => (
          <Link href={url} key={id} className={styles.link}>
            {title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button type="button" className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
