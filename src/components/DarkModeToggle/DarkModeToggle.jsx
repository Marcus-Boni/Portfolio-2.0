'use client';

import { useTheme } from '@/context/ThemeContext';
import styles from './darkmodetoggle.module.css';

export const DarkModeToggle = () => {
  const { toggleMode, mode } = useTheme();
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { right: '2px' } : { left: '2px' }}
      />
    </div>
  );
};
