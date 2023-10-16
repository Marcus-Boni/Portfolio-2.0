import Image from "next/image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <address>©2023 Marcus. All rights reserved.</address>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Social Icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Social Icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Social Icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Social Icon"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </footer>
  );
};
