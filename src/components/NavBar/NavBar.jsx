import { links } from "@/config";
import Link from "next/link";
import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        Marcus{" "}
      </Link>
      <nav className={styles.links}>
        {links.map(({ id, title, url }) => (
          <Link href={url} key={id} className={styles.link}>
            {title}
          </Link>
        ))}
        <button type="button" className={styles.logout}>Logout</button>
      </nav>
    </header>
  );
};