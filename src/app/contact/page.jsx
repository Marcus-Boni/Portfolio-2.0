import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/Button';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.webp" alt="" fill className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button text="Send" url="/" />
        </form>
      </div>
    </section>
  );
}
