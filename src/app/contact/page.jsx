import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Marcus Dev Contact',
  description:
    'Marcus Dev Contact Page - Handcrafting award winning digital experiences'
};

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.webp"
            alt="Contact Image"
            fill
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="name"
            name="name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className={styles.input}
          />
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
