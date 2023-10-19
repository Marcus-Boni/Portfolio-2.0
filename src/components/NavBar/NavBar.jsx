'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/config';
import styles from './navbar.module.css';
import { DarkModeToggle } from '../DarkModeToggle';
import { useMenu } from './hooks';

import { Icon } from '@iconify/react';

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
          {!isMenuOpen && (
            <Icon icon="material-symbols:menu" color="#53c28b" width="32" />
          )}
          {isMenuOpen && (
            <Icon icon="material-symbols:close" color="#53c28b" width="32" />
          )}
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
                    className={styles.button}
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
