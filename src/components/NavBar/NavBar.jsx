'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/config';
import styles from './navbar.module.css';
import { DarkModeToggle } from '../DarkModeToggle';
import { useMenu } from './hooks';

export const NavBar = () => {
  const session = useSession();
  const { handleToggleMenu, isMenuOpen } = useMenu();

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
        <div className={styles.menu} onClick={handleToggleMenu}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <div>
          {isMenuOpen && (
            <ul className={styles.menuList}>
              {links.map(({ id, title, url }) => (
                <li key={id} className={styles.menuItem}>
                  <Link href={url} className={styles.menuLink}>
                    {title}
                  </Link>
                </li>
              ))}
              {session.status === 'authenticated' && (
                <li className={styles.menuItem}>
                  <button
                    type="button"
                    className={styles.menuLink}
                    onClick={signOut}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
